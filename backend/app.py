from flask import Flask
# from flask_mysqldb import MySQL
from flask_swagger_ui import get_swaggerui_blueprint
import env.env as env

import controllers.auth_controller.auth as auth_controller
import controllers.wishbox_controller.wishbox as wishbox_controller
from services.token_service import Token
from services.email_service import Email

from decorators.mysql_decorator import mysql_decorator

env.set_env_variables()

app = Flask(__name__)
### SWAGGER ###
SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.json'
SWAGGERUI_BLUEPRINT = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "Api recommender"
    }
)
app.register_blueprint(SWAGGERUI_BLUEPRINT, url_prefix=SWAGGER_URL)
### SWAGGER ###

token_service = Token()
email_service = Email()

conn = None


@app.route('/')
def hello_world():
    return 'Hello World'


@app.route('/login', methods=["POST"])
@mysql_decorator()
def login(connection):
    return auth_controller.auth_login(connection, token_service)


@app.route('/register', methods=["POST"])
@mysql_decorator()
def register(connection):
    return auth_controller.auth_register(connection, email_service)


@app.route('/register/<token_param>', methods=["GET"])
@mysql_decorator()
def register_confirmation(connection, token_param: str):
    return auth_controller.auth_register_confirmation(connection, token_param)


@app.route('/create/wishbox', methods=["POST"])
@mysql_decorator()
def create_wishbox(connection):
    auth_headers_interceptor_guard = auth_controller.intercept_auth_headers()
    if auth_headers_interceptor_guard is None:
        return wishbox_controller.create_wishbox(connection, token_service)
    return auth_headers_interceptor_guard


@app.route('/wishbox/<token_param>', methods=["GET"])
@mysql_decorator()
def get_public_wishbox(connection, token_param: str):
    return wishbox_controller.get_public_wishbox(connection, token_service, token_param)


@app.route('/wishbox', methods=["GET"])
@mysql_decorator()
def get_wishbox(connection):
    auth_headers_interceptor_guard = auth_controller.intercept_auth_headers()
    if auth_headers_interceptor_guard is None:
        return wishbox_controller.get_wishbox(connection, token_service)
    return auth_headers_interceptor_guard


@app.route('/create/wishes', methods=["POST"])
@mysql_decorator()
def create_wishes(connection):
    auth_headers_interceptor_guard = auth_controller.intercept_auth_headers()
    if auth_headers_interceptor_guard is None:
        return wishbox_controller.create_wishes(connection)
    return auth_headers_interceptor_guard



@app.route('/update/wishes/contributors', methods=["POST"])
@mysql_decorator()
def update_wishes_contributors(connection):
    auth_headers_interceptor_guard = auth_controller.intercept_auth_headers()
    if auth_headers_interceptor_guard is None:
        return wishbox_controller.update_wishes_contributions(connection)
    return auth_headers_interceptor_guard


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
