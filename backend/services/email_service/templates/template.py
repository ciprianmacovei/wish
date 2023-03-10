from services.token_service import Token
import services.email_service.templates.html.register_activation as html

TEMPLATE_REGISTER_CONFIRM = 'register_confirmation'

token_service = Token()

class Template:

    def __init__(self, name, data: dict):
        self.content = None
        self.name = name
        self.data = data

    def create_template(self):
        if self.name == TEMPLATE_REGISTER_CONFIRM:
            if self.data.get("user_id") is not None:
                try:
                    generated_token = token_service.create_token({"user_id": self.data.get("user_id")})
                    registration_activation_link = "http://localhost/register/%s" % generated_token
                    self.content = html.REGISTER_ACTIVATION_TEMPLATE % \
                                   (registration_activation_link, registration_activation_link)
                except Exception as e:
                    print(e, "error creating template")
            else:
                self.content = None

    def get_content(self):
        return self.content
