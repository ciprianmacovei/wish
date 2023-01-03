import os


def set_env_variables():
    os.environ["JWT_SECRET"] = "0aa173207e5b29d5520926b" \
        "c88e799489104b7023448a3512" \
        "15fa53d6a05ac29cfafb01c24" \
        "48f3a3ead645721f152ee10d391" \
        "74ba171b84c91fc0533bffb6279"
    os.environ["JWT_EXPIRATION_TIME"] = "3600"
    os.environ["JWT_REFRESH_TOKEN_EXPIRATION_TIME"] = "3600"
    os.environ["EMAIL_ADDR"] = "testemailmaco@gmail.com"
    os.environ["EMAIL_PASSWORD"] = "ovlzttjdycioqixx"


def get_env_variables(var: str) -> str:
    return os.environ[var]

