from flask import Flask
# from flask_mysqldb import MySQL
from flask_swagger_ui import get_swaggerui_blueprint
import env.env as env

import controllers.auth_controller.auth as auth

import services.token_service.token_provider as token_provider
import services.email_service.email_provider as email_provider

from decorators.mysql_decorator import mysql_decorator
import database.database_manager as db_manager

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

# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = 'db-78n9n'
# app.config['MYSQL_DB'] = 'wish'
# try:
#     mysql = MySQL(app)
#     cursor = mysql.connection.cursor()
#     cursor.execute("SELECT VERSION()")
# except Exception as e:
#     print(e)

token_service = token_provider.Token()
email_service = email_provider.Email()

conn = None

@app.route('/')
def hello_world():
    global conn
    if not conn:
        conn = db_manager.DBManager(password_file='/run/secrets/db-password')
        conn.populate_db()
    rec = conn.query_titles()

    response = ''
    for c in rec:
        response = response  + '<div>   Hello  ' + c + '</div>'
    return response


@app.route('/login', methods=["POST"])
@mysql_decorator()
def login(connection):
    return auth.auth_login(connection, token_service)


@app.route('/register', methods=["POST"])
@mysql_decorator()
def register(connection):
    return auth.auth_register(connection, email_service)


@app.route('/register/<token_param>', methods=["GET"])
@mysql_decorator()
def register_confirmation(connection, token_param: str):
    return auth.auth_register_confirmation(connection, token_param)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
