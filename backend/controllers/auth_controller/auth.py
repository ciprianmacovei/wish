import mysql.connector
from typing import Tuple
from flask import request

import controllers.res_handler.res as res
import services.email_service.templates.template as templates

from services.database_service import DBManager
from validate_email import validate_email
from services.token_service import Token
from services.email_service import Email


def intercept_auth_headers() -> Tuple[str, int]:
    header_token = request.headers.get("Authorization").split("bearer ")[1]
    if header_token is None:
        return res.register_error_response("not authorized", 401)
    try:
        decoded_token = Token.decode_token(header_token)
        if decoded_token is None:
            return res.register_error_response("not authorized", 401)
    except Exception as e:
        return res.register_error_response("not authorized", 401)


def auth_login(connection: DBManager, token_service: Token) -> Tuple[str, int]:
    request_data_json = request.get_json()
    user_name = request_data_json.get("username")
    email = request_data_json.get("email")
    password = request_data_json.get("password")
    if ((user_name or email) and password):
        try:
            connection.cursor.execute(
                """
                SELECT * FROM users
                WHERE user_name = %(user_name)s OR email = %(email)s AND pass= %(pass)s
                """,
                {'user_name': user_name, 'email': email, 'pass': password}
            )
            db_result = connection.cursor.fetchone()
            if db_result is None:
                return res.login_error_response("login failed your credentials are bad", 401)
            elif db_result[4] == 0:
                return res.login_error_response("please activate your account", 403)
            else:
                user_token = token_service.create_token(
                    {"user_id": db_result[0]})
                return res.login_success_response(user_token)
        except Exception as e:
            return res.login_error_response("login failed data is invalid", 400)
        finally:
            connection.close()
    else:
        return res.login_error_response("login failed", 400)


def auth_register(connection: DBManager, email_service: Email):
    request_data_json = request.get_json()
    user_name = request_data_json.get("username")
    email = request_data_json.get("email")
    password = request_data_json.get("password")
    if email and password:
        if validate_email(email):
            try:
                connection.cursor.execute(
                    """
                    INSERT INTO users (user_name, email, pass, activated)
                    VALUES (%(user_name)s, %(email)s, %(pass)s, %(activated)s);
                    """, {
                        'user_name': user_name if user_name else "anonymous",
                        'email': email,
                        'pass': password,
                        'activated': 0
                    })
                connection.connection.commit()
                try:
                    register_confirmation_template = templates.Template(
                        templates.TEMPLATE_REGISTER_CONFIRM, {
                            "user_id": connection.cursor.lastrowid}
                    )
                    register_confirmation_template.create_template()
                    email_service.send(
                        email, "Hello there", register_confirmation_template.get_content())
                except:
                    return res.register_error_response("email failed to send", 400)
                return res.register_success_response()
            except mysql.connector.Error as e:
                if e.errno == 1062:
                    return res.register_error_response("duplicate entry, user allready created", 409)
                else:
                    return res.register_error_response("register failed your credentials are bad", 401)
            finally:
                connection.close()
        else:
            return res.register_error_response("invalid email", 400)
    else:
        return res.register_error_response("register failed", 400)


def auth_register_confirmation(connection: DBManager, token_param: str):
    decoded_token = Token.decode_token(token_param)
    if decoded_token is not None:
        user_id = decoded_token.get('user_id')
        if user_id:
            try:
                connection.cursor.execute(
                    """
                    UPDATE users set activated = 1
                    WHERE id = %(id)s;
                    """,
                    {'id': user_id}
                )
                connection.connection.commit()
                return res.register_confirm_success_response()
            except:
                return res.register_error_response("authorization faild", 400)
            finally:
                connection.close()
        else:
            return res.register_error_response("faild to decode token", 400)
