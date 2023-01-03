from flask import Flask
from flask_mysqldb import MySQL
from flask_swagger_ui import get_swaggerui_blueprint
import env.env as env

import controllers.auth_controller.auth as auth

import services.token_service.token_provider as token_provider
import services.email_service.email_provider as email_provider

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

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flask'

try:
    mysql = MySQL(app)
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT VERSION()")
except Exception as e:
    print(e)

token_service = token_provider.Token()
email_service = email_provider.Email()


@app.route('/')
@mysql_decorator("1")
def hello_world(cursor_instance):
    return 'Hello World!%s' % cursor_instance


@app.route('/login', methods=["POST"])
def login():
    return auth.auth_login(cursor, token_service)


@app.route('/register', methods=["POST"])
def register():
    return auth.auth_register(email_service)


@app.route('/register/<token_param>', methods=["GET"])
def register_confirmation(token_param: str):
    print("am intrat ", token_param)
    return "auth successful", 200


if __name__ == '__main__':
    app.run(debug=True, port=5000)
