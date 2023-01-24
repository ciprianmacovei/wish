import mysql.connector

class DBManager:
    def __init__(self, database='wish', host="db", user="root", password_file=None):
        pf = open(password_file, 'r')
        self.connection = mysql.connector.connect(
            user=user, 
            password=pf.read(),
            host=host, # name of the mysql service as set in the docker compose file
            database=database,
            auth_plugin='mysql_native_password',
        )
        pf.close()
        self.cursor = self.connection.cursor()
    
    def close(self):
        if self.connection is not None:
            self.connection.close()
            self.connection = None

