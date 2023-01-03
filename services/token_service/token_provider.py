import jwt
import env.env as env


class Token:

    def __init__(self):
        self.token = None

    def create_token(self, body) -> Exception | str:
        try:
            token = jwt.encode(body, env.get_env_variables("JWT_SECRET"), algorithm='HS256')
            self.token = token
            return token
        except Exception as e:
            print(e)
            return Exception("Token cannot be created")

    @staticmethod
    def decode_token(token) -> Exception | dict:
        try:
            decoded = jwt.decode(token, env.get_env_variables("JWT_SECRET"))
            return decoded
        except Exception as e:
            print(e)
            return Exception("Token cannot be decoded")
