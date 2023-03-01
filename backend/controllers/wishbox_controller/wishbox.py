import json
from flask import request
from datetime import datetime, timedelta
from crontab import CronTab
import decimal

from services.token_service import Token
from services.database_service import DBManager
from services.scalping_service import ScalpImageSource

import response_handler.res as res


def create_wishbox(connection: DBManager, token_service: Token):
    header_token = request.headers.get("Authorization").split("Bearer ")[1]
    decoded_token = token_service.decode_token(header_token)
    user_id = decoded_token.get('user_id')
    request_data_json = request.get_json()
    wishbox_end_date = request_data_json.get('wishbox_end_date')
    wishbox_name = request_data_json.get('wishbox_name')
    print(wishbox_end_date, flush=True)
    try:
        connection.cursor.execute(
            """
            INSERT INTO wishbox (wishbox_name, wishbox_end_date, user_id)
            VALUES (%(wishbox_name)s, %(wishbox_end_date)s, %(user_id)s);
            """, {
                'wishbox_name': wishbox_name,
                'wishbox_end_date': wishbox_end_date,
                'user_id': user_id
            })
        connection.connection.commit()

        set_cron_job(wishbox_end_date, connection.cursor.lastrowid)

        wishbox_token = token_service.create_token(
            {
                "wishbox_id": connection.cursor.lastrowid,
                "user_id": user_id,
                "token": header_token
            }
        )

        wishbox_link = "http://localhost:8000/wishbox/%s" % wishbox_token
        wishbox_id = connection.cursor.lastrowid

        connection.cursor.execute(
            """
            UPDATE wishbox set link = %(link)s where id = %(wishbox_id)s
            """, {
                'wishbox_id': wishbox_id,
                'link': wishbox_link,
            })
        connection.connection.commit()

        return res.response_success_message("wishbox created successfully")
    except Exception as e:
        print(e, flush=True)
        return res.response_error_message('error creating you wishbox', 400)
    finally:
        connection.close()


def delete_wishbox(connection: DBManager, token_service: Token):
    header_token = request.headers.get("Authorization").split("Bearer ")[1]
    decoded_token = token_service.decode_token(header_token)
    request_data_json = request.get_json()
    wishbox_id = request_data_json.get("id")
    user_id = decoded_token.get("user_id")
    try:
        connection.cursor.execute(
            """DELETE FROM wishbox where id=%(wishbox_id)s AND user_id=%(user_id)s""",
            {
                'wishbox_id': wishbox_id,
                'user_id': user_id,
            }
        )
        connection.connection.commit()
        return res.response_success_message("wishbox successfully deleted")
    except Exception as e:
        print(e, flush=True)
        return res.response_error_message("wishbox unsuccessfully deleted", 400)
    finally:
        connection.close()


def get_public_wishbox(connection: DBManager, token_service: Token, wishbox_token: str):
    decoded_token = token_service.decode_token(wishbox_token)
    wishbox_id = decoded_token.get('wishbox_id')
    user_id = decoded_token.get('user_id')
    token = decoded_token.get('token')
    try:
        connection.cursor.execute(
            """
            SELECT id, wishbox_name, CONVERT(wishbox_end_date, CHAR) as wishbox_end_date FROM wishbox
            WHERE id = %(wishbox_id)s AND user_id= %(user_id)s
            """,
            {'wishbox_id': wishbox_id, 'user_id': user_id}
        )

        db_result_wishbox = connection.cursor.fetchall()

        db_results_wishbox_ids = [row[0] for row in db_result_wishbox]
        wishbox_id_sql = ','.join(map(str, db_results_wishbox_ids))

        connection.cursor.execute(
            """
            SELECT * FROM wishes
            WHERE wishbox_id in ({});
            """.format(wishbox_id_sql)
        )

        db_result_wishes = connection.cursor.fetchall()

        return res.response_success_message_body({
            "wishbox_end_date": db_result_wishbox[2],
            "wishbox_name": db_result_wishbox[1],
            "wishes": db_result_wishes,
            "token": token,
        })
    except Exception as e:
        print(e, flush=True)
        return res.response_error_message("error retrieving wishbox", 400)
    finally:
        connection.close()


def get_wishbox(connection: DBManager, token_service: Token):
    header_token = request.headers.get("Authorization").split("Bearer ")[1]
    decoded_token = token_service.decode_token(header_token)
    user_id = decoded_token.get('user_id')
    try:
        body_data = {}
        row_data = []
        wishes_array = []

        connection.cursor.execute(
            """
            SELECT id, wishbox_name, CONVERT(wishbox_end_date, CHAR) as wishbox_end_date, link FROM wishbox
            WHERE user_id = %(user_id)s
            """,
            {'user_id': user_id}
        )

        db_result_wishbox = connection.cursor.fetchall()
        db_results_wishbox_ids = [row[0] for row in db_result_wishbox]
        wishbox_id_sql = ','.join(map(str, list(set(db_results_wishbox_ids))))
        if len(db_results_wishbox_ids) > 0:
            connection.cursor.execute(
                """
                SELECT * FROM wishes
                WHERE wishbox_id in ({})
                """.format(wishbox_id_sql)
            )

            db_result_wishes = connection.cursor.fetchall()
            if len(db_result_wishbox) > 0:
                for wishbox in db_result_wishbox:
                    body_data.update(
                        {
                            'wishbox_name': wishbox[1],
                            'wishbox_id': wishbox[0],
                            'wishbox_end_date': wishbox[2],
                            'link': wishbox[3],
                        }
                    )
                    if len(db_result_wishes) > 0:
                        for wishes in db_result_wishes:
                            print("CACA", wishes[8], wishbox[0])
                            if wishes[8] == wishbox[0]:
                                wish_obj = {
                                    'id': wishes[0],
                                    'wish_name': wishes[1],
                                    'wish_link': wishes[2],
                                    'wish_taken': wishes[3],
                                    'wishbox_img_url': wishes[4],
                                    'likes': wishes[5],
                                    'price': wishes[6],
                                    'contributors': wishes[7],
                                    'wishbox_id': wishes[8],
                                }
                                wishes_array.append(wish_obj)
                                body_data.update(
                                    {
                                        'wishes': wishes_array
                                    }
                                )
                        wishes_array = []
                    row_data.append(body_data)
                    body_data = {}

        return res.response_success_message_body({
            "data": row_data
        })
    except Exception as e:
        print(e, flush=True)
        return res.response_error_message("could not retrieve wishbox list", 400)
    finally:
        connection.close()


def create_wishes(connection: DBManager, token_service: Token):
    header_token = request.headers.get("Authorization").split("Bearer ")[1]
    decoded_token = token_service.decode_token(header_token)
    user_id = decoded_token.get('user_id')
    request_data_json = request.get_json()
    wish_name = request_data_json.get("wish_name")
    wishbox_id = request_data_json.get("wishbox_id")
    wish_link = request_data_json.get("wish_link")
    price = request_data_json.get("price")
    scalp_service = ScalpImageSource(wish_link)
    picture_url = scalp_service.execute_scalp()
    try:
        columns = "wish_name, wish_link, wishbox_id, price, user_id"
        values = f"%(wish_name)s, %(wish_link)s, %(wishbox_id)s, %(price)s, %(user_id)s"
        if picture_url:
            columns += ", wishbox_img_url"
            values += f", %(wishbox_img_url)s"
        connection.cursor.execute(
            f"""
                INSERT INTO wishes({columns})
                VALUES ({values});
                """,
            {
                'wish_name': wish_name,
                'wish_link': wish_link,
                'wishbox_id': wishbox_id,
                'price': price,
                'user_id': user_id,
                'wishbox_img_url': picture_url if picture_url else None
            }
        )
        connection.connection.commit()
        return res.response_success_message_body({"img_url": picture_url})
    except Exception as e:
        print(e, flush=True)
        return res.response_error_message("error retrieving wishbox", 400)
    finally:
        connection.close()


def delete_wishes(connection: DBManager, token_service: Token):
    header_token = request.headers.get("Authorization").split("Bearer ")[1]
    decoded_token = token_service.decode_token(header_token)
    user_id = decoded_token.get('user_id')
    request_data_json = request.get_json()
    wish_id = request_data_json.get("id")
    try:
        connection.cursor.execute(
            """
            DELETE FROM wishes WHERE id=%(wish_id)s and user_id=%(user_id)s
            """,
            {
                'user_id': user_id,
                'wish_id': wish_id,
            }
        )
        connection.connection.commit()
        return res.response_success_message("wish deleted successfully")
    except Exception as e:
        print(e, flush=True)
        return res.response_error_message("wish deleted unsuccessful", 400)
    finally:
        connection.close()


def update_wishes_contributions(connection: DBManager):
    request_data_json = request.get_json()
    wishes_id = request_data_json.get("id")
    contributors_price = request_data_json.get("contributors_price")
    try:
        connection.cursor.execute(
            """
                UPDATE wishes set wishes_contributions = wish_contributions + %(contributors_price)s
                WHERE id = %(wishes_id)s;
                """,
            {
                'wishes_id': wishes_id,
                'contributors_price': contributors_price,
            }
        )
        connection.connection.commit()
    except Exception as e:
        print(e, flush=True)
    finally:
        connection.close()


def set_cron_job(date: datetime = None, row_id: int = None):
    cron = CronTab(user='root')
    job = cron.new(
        command='/usr/local/bin/python /backend/crons/cron_script.py {}'.format(row_id))
    try:
        date_now = datetime.now()
        if date is not None:
            date_array = date.split('-')
            date_and_time = datetime(int(date_array[0]), int(
                date_array[1]), int(date_array[2]))
            if (date_and_time.timestamp() - date_now.timestamp() > 0):
                job.setall(
                    '0 0 {} {} *'.format(date_and_time.day, date_and_time.month))
            else:
                Exception('The time selected is not valid to settup a cron job')
        else:
            no_date_set = date_now + timedelta(30)
            job.setall(
                '0 0 {} {} *'.format(no_date_set.day, no_date_set.month))
        cron.write()
    except Exception as e:
        print(str(e), flush=True)
