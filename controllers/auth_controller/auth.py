from flask import request
from validate_email import validate_email

import controllers.res_handler.res as res
import services.token_service.token_provider as token_provider
import services.email_service.email_provider as email_provider
import services.email_service.templates.template as templates


def intercept_headers() -> (str, int):
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


def auth_login(cursor, token_service: token_provider.Token) -> (str, int):
    request_data_json = request.get_json()
    username = request_data_json["username"]
    email = request_data_json["email_service"]
    password = request_data_json["password"]
    if not username or not email or not password:
        return res.login_error_response("login failed", 400)
    else:
        # cursor.execute(
        #     """
        #     SELECT * FROM users
        #     WHERE username = %(username)s OR email_service = %(email_service)s AND password = %(password)s
        #     """,
        #     {'username': username, 'email_service': email, 'password': password}
        # )
        # result = cursor.fetchone()
        # if not result:
        #     return res.login_error_response("login failed your credentials are bad", 401)
        user_token = token_service.create_token({"user_id": 1})
        return res.login_success_response(user_token)


def auth_register(email_service: email_provider.Email):
    request_data_json = request.get_json()
    username = request_data_json["username"]
    email = request_data_json["email"]
    password = request_data_json["password"]
    if not username or not email or not password:
        return res.register_error_response("register failed", 400)
    else:
        if validate_email(email):
            try:
                register_confirmation_template = templates.Template(templates.TEMPLATE_REGISTER_CONFIRM, {"user_id": 0})
                register_confirmation_template.create_template()
                email_service.send(email, "Hello there", register_confirmation_template.get_content())
                # cursor.execute(
                #     """
                #     INSERT INTO users (username, email, password, activated)
                #     VALUES (%(username)s, %(email)s, %(password)s), %(activated)s)
                #     """, {
                #         'username': username,
                #         'email': email,
                #         'password': password,
                #         'activated': False
                #     })
                # result = cursor.fetchone()
                # if not result:
                #     return res.register_error_response("register failed your credentials are bad", 401)
            except Exception as e:
                print(e)
                return res.register_error_response("email failed to send", 400)
            return res.register_success_response()



