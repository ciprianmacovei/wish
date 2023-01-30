import json
from typing import Tuple


def response_error_message(message: str, code: int) -> Tuple[str, int]:
    body = {
        "message": message,
        "status": code,
    }
    json_response = json.dumps(body)
    return json_response, code


def response_success_message(message: str, code: int) -> Tuple[str, int]:
    body = {
        "message": message,
        "status": code,
    }
    json_response = json.dumps(body)
    return json_response, 200


def response_success_message_body(dict: dict, code: int) -> Tuple[str, int]:
    json_response = json.dumps(dict)
    return json_response, code
