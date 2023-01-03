def mysql_decorator(mysql):
    def wrapper(func):

        def func_with_args():
            return func(mysql)

        if mysql is not None:
            return func_with_args
        else:
            return func

    return wrapper

