import jwt
import env.env as env
import datetime
import ast


class Token:

    def __init__(self):
        self.token = None

    def create_token(self, playload: dict) -> Exception | str:
        try:
            now = datetime.datetime.utcnow()
            expiration = now + datetime.timedelta(hours=12)
            playload["exp"] = expiration
            token = jwt.encode(playload, env.get_env_variables(
                "JWT_SECRET"), algorithm='HS256')
            self.token = token
            return token
        except Exception as e:
            print(e)
            return Exception("Token cannot be created")

    @staticmethod
    def decode_token(token: str) -> Exception | dict:
        try:
            payload = jwt.decode(token, env.get_env_variables("JWT_SECRET"), algorithms=['HS256'])
            if datetime.datetime.utcnow() > datetime.datetime.fromtimestamp(payload['exp']):
                return None
            return payload
        except:
            return None