from typing import Tuple
from flask import request
from validate_email import validate_email

import controllers.res_handler.res as res
import services.token_service.token_provider as token_provider
import services.email_service.email_provider as email_provider
import services.email_service.templates.template as templates


def intercept_auth_headers() -> Tuple[str, int]:
    header_token = request.headers.get("Authorization").split("bearer ")[1]
    if header_token is None:
        return res.register_error_response("not authorized", 401)
    try:
        decoded_token = token_provider.Token.decode_token(header_token)
        if decoded_token is None:
            return res.register_error_response("not authorized", 401)
    except Exception as e:
        print(e)
        return res.register_error_response("not authorized", 401)


def auth_login(connection, token_service: token_provider.Token) -> Tuple[str, int]:
    request_data_json = request.get_json()
    user_name = request_data_json.get("username")
    email = request_data_json.get("email")
    password = request_data_json.get("password")
    if ((user_name or email) and password):
        try:
            connection.cursor.execute(
                """
                SELECT * FROM users
                WHERE user_name = %(user_name)s OR email = %(email_service)s AND pass= %(password)s
                """,
                {'user_name': user_name, 'email_service': email, 'pass': password}
            )
            db_result = connection.cursor.fetchone()
            if db_result is None:
                return res.login_error_response("login failed your credentials are bad", 401)
            else:    
                user_token = token_service.create_token({"user_id": 1})
                return res.login_success_response(user_token)
        except:
            return res.login_error_response("login failed data is invalid", 400)
        finally:
            connection.close()
    else:
        return res.login_error_response("login failed", 400)


def auth_register(connection, email_service: email_provider.Email):
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
                    register_confirmation_template = templates.Template(templates.TEMPLATE_REGISTER_CONFIRM, {"user_id": connection.cursor.lastrowid})
                    register_confirmation_template.create_template()
                    email_service.send(email, "Hello there", register_confirmation_template.get_content())
                except Exception as e:
                    print(e)
                    return res.register_error_response("email failed to send", 400)
            except:
                return res.register_error_response("register failed your credentials are bad", 401)
            finally:
                connection.close()
        return res.register_success_response()
    else:
        return res.register_error_response("register failed", 400)


def auth_register_confirmation(connection, token_param: str):
    decoded_token = token_provider.Token.decode_token(token_param)
    # user_id = decoded_token['user_id']
    return res.response_success_message("asdasdas")
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
            return res.register_error_response("authorisation faild", 400)
        finally:
            connection.close()
    else:
        return res.register_error_response("faild to decode token", 400)
