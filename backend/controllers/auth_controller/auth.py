import mysql.connector
from typing import Tuple
from flask import request

import response_handler.res as res
import services.email_service.templates.template as templates

from services.database_service import DBManager
from validate_email import validate_email
from services.token_service import Token
from services.email_service import Email


def intercept_auth_headers() -> Tuple[str, int]:
    header_token = request.headers.get("Authorization").split("bearer ")[1]
    if header_token is None:
        return res.response_error_message("not authorized", 401)
    try:
        decoded_token = Token.decode_token(header_token)
        if decoded_token is None:
            return res.response_error_message("not authorized", 401)
    except Exception as e:
        return res.response_error_message("not authorized", 401)


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
                return res.response_error_message("login failed your credentials are bad", 401)
            elif db_result[4] == 0:
                return res.response_error_message("please activate your account", 403)
            else:
                user_token = token_service.create_token(
                    {"user_id": db_result[0]})
                return res.response_success_message_body({"token": user_token}, 200)
        except Exception as e:
            return res.response_error_message("login failed data is invalid", 400)
        finally:
            connection.close()
    else:
        return res.response_error_message("login failed", 400)


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
                    return res.response_success_message("registration successfully, please confirm your email address", 200)
                except:
                    return res.response_error_message("email failed to send", 400)
            except mysql.connector.Error as e:
                if e.errno == 1062:
                    return res.response_error_message("duplicate entry, user allready created", 409)
                else:
                    return res.response_error_message("register failed your credentials are bad", 401)
            finally:
                connection.close()
        else:
            return res.response_error_message("invalid email", 400)
    else:
        return res.response_error_message("register failed", 400)


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
                return res.response_success_message("authorisation was successful", 200)
            except:
                return res.response_error_message("authorization faild", 400)
            finally:
                connection.close()
        else:
            return res.response_error_message("faild to decode token", 400)
