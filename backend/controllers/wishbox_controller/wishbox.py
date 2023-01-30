from flask import request
from datetime import datetime

from services.token_service import Token
from services.database_service import DBManager
from services.scalping_service import ScalpImageSource

import response_handler.res as res


def create_wishbox(connection: DBManager, token_service: Token):
    header_token = request.headers.get("Authorization").split("bearer ")[1]
    decoded_token = token_service.decode_token(header_token)
    user_id = decoded_token.get('user_id')
    request_data_json = request.get_json()
    wishbox_end_date = request_data_json.get('wishbox_end_date')
    wishbox_name = request_data_json.get('wishbox_name')
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
        wishbox_token = token_service.create_token(
            {
                "wishbox_id": connection.cursor.lastrowid,
                "user_id": user_id,
                "token": header_token
            }
        )
        wishbox_link = "http://localhost:8000/wishbox/%s" % wishbox_token
        return res.response_success_message_body({
            "link": wishbox_link,
            "wishbox_id": connection.cursor.lastrowid
        })
    except Exception as e:
        print(e, flush=True)
        return res.response_error_message('error creating you wishbox', 400)
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
    header_token = request.headers.get("Authorization").split("bearer ")[1]
    decoded_token = token_service.decode_token(header_token)
    user_id = decoded_token.get('user_id')
    try:
        body_data = {}
        row_data = []
        wishes_array = []

        connection.cursor.execute(
            """
            SELECT id, wishbox_name, CONVERT(wishbox_end_date, CHAR) as wishbox_end_date FROM wishbox
            WHERE user_id = %(user_id)s
            """,
            {'user_id': user_id}
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

        if len(db_result_wishbox) > 0:
            for wishbox in db_result_wishbox:
                body_data.update(
                    {
                        'wishbox_name': wishbox[1],
                        'wishbox_id': wishbox[0],
                        'wishbox_end_date': wishbox[2]
                    }
                )
                if len(db_result_wishes) > 0:
                    for wishes in db_result_wishes:
                        if wishes[5] == wishbox[0]:
                            wishes_array.append(wishes)
                            body_data.update(
                                {
                                    'wishes': wishes_array
                                }
                            )
                row_data.append(body_data)
                wishes_array = []
                body_data = {}

        if len(row_data) > 0:
            return res.response_success_message_body({
                "data": row_data
            })
        else:
            return res.response_error_message("no data found", 400)
    except Exception as e:
        print(e, flush=True)
        return res.response_error_message("could not retrieve wishbox list", 400)
    finally:
        connection.close()


def create_wishes(connection: DBManager):
    request_data_json = request.get_json()
    wish_name = request_data_json.get("wish_name")
    wishbox_id = request_data_json.get("wishbox_id")
    wish_link = request_data_json.get("wish_link")
    price = request_data_json.get("price")
    scalp_service = ScalpImageSource(wish_link)
    picture_url = scalp_service.execute_scalp()
    try:
        columns = "wish_name, wish_link, wishbox_id, price"
        values = f"%(wish_name)s, %(wish_link)s, %(wishbox_id)s, %(price)s"
        if picture_url:
            columns += ", wishbox_img_url"
            values += f", %(wishbox_img_url)s"

        connection.cursor.execute(
            """
                INSERT INTO wishes({column})
                VALUES ({values});
                """,
            {
                'wish_name': wish_name,
                'wish_link': wish_link,
                'wishbox_id': wishbox_id,
                'price': price,
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

