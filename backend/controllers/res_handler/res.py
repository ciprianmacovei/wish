import json
from typing import Tuple


def login_error_response(message: str, code: int) -> Tuple[str, int]:
    body = {
        "message": message,
        "status": code,
    }
    json_response = json.dumps(body)
    return json_response, code


def login_success_response(create_token) -> Tuple[str, int]:
    body = {
        "token": create_token,
        "status": 200,
    }
    json_response = json.dumps(body)
    return json_response, 200


def register_error_response(message: str, code: int) -> Tuple[str, int]:
    body = {
        "message": message,
        "status": code,
    }
    json_response = json.dumps(body)
    return json_response, code


def register_success_response() -> Tuple[str, int]:
    body = {
        "message": "please confirm your registration on email provider",
        "status": 200,
    }
    json_response = json.dumps(body)
    return json_response, 200

def register_error_response(message: str, code: int) -> Tuple[str, int]:
    body = {
        "message": message,
        "status": code,
    }
    json_response = json.dumps(body)
    return json_response, code


def register_confirm_success_response() -> Tuple[str, int]:
    body = {
        "message": "authorisation was successful",
        "status": 200,
    }
    json_response = json.dumps(body)
    return json_response, 200


def response_success_message(message: str) -> Tuple[str, int]:
    body = {
        "message": message,
        "status": 200,
    }
    json_response = json.dumps(body)
    return json_response, 200

def response_success_message_body(dict: dict) -> Tuple[str, int]:
    json_response = json.dumps(dict)
    return json_response, 200
