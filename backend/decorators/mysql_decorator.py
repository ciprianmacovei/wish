from functools import wraps
import database.database_manager as db_manager

def mysql_decorator():
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # Pass the cursor as an argument to the function
            connection = db_manager.DBManager(password_file='/run/secrets/db-password')
            if connection is not None:
                kwargs['connection'] = connection

            # Call the function with the modified kwargs
            result = func(*args, **kwargs)

            return result
        return wrapper
    return decorator
