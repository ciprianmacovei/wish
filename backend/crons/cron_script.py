import sys
import os

current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
sys.path.append(parent_dir)

from services.database_service import DBManager

id = sys.argv[1]

print(id, flush=True)

if __name__ == '__main__':
    try:
        connection = DBManager(password_file='/run/secrets/db-password')
        connection.cursor.execute(
            """
            DELETE FROM wishbox where id = %(id)s
            """,
            {'id': id}
        )
        connection.connection.commit()
        print(id, 'was deleted successfully', flush=True)
    except Exception as e:
        print(e, flush=True)
    finally:
        connection.close()
