import mysql.connector


class DBManager:
    def __init__(self, database='wish', host="db", user="root", password_file=None):
        pf = open(password_file, 'r')
        self.connection = mysql.connector.connect(
            user=user, 
            password=pf.read(),
            host=host, # name of the mysql service as set in the docker compose file
            database=database,
            auth_plugin='mysql_native_password'
        )
        pf.close()
        self.cursor = self.connection.cursor()
    
    # def populate_db(self):
    #     self.cursor.execute('DROP TABLE IF EXISTS blog')
    #     self.cursor.execute('CREATE TABLE blog (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255))')
    #     self.cursor.executemany('INSERT INTO blog (id, title) VALUES (%s, %s);', [(i, 'Blog post #%d'% i) for i in range (1,5)])
    #     self.connection.commit()
    
    # def query_titles(self):
    #     self.cursor.execute('SELECT title FROM blog')
    #     rec = []
    #     for c in self.cursor:
    #         rec.append(c[0])
    #     return rec

    def close(self):
        if self.cursor is not None:
            self.cursor.close()
            self.cursor = None
        if self.connection is not None:
            self.connection.close()
            self.connection = None
