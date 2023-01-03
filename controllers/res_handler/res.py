import json


def login_error_response(message: str, code: int) -> (str, int):
    body = {
        "message": message,
        "status": code,
    }
    json_response = json.dumps(body)
    return json_response, code


def login_success_response(create_token) -> (str, int):
    body = {
        "token_service": create_token(),
        "status": 200,
    }
    json_response = json.dumps(body)
    return json_response, 200


def register_error_response(message: str, code: int) -> (str, int):
    body = {
        "message": message,
        "status": code,
    }
    json_response = json.dumps(body)
    return json_response, code


def register_success_response() -> (str, int):
    body = {
        "message": "please confirm your registration on email provider",
        "status": 200,
    }
    json_response = json.dumps(body)
    return json_response, 200
