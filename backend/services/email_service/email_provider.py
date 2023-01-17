import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

import env.env as env


class Email:
    def __init__(self):
        self.port = 465
        self.smtp_server_domain_name = "smtp.gmail.com"
        self.sender_mail = env.get_env_variables("EMAIL_ADDR")
        self.password = env.get_env_variables("EMAIL_PASSWORD")

    def send(self, to, subject, body):
        msg = MIMEMultipart()
        msg['From'] = self.sender_mail
        msg['To'] = to
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'html'))
        ssl_context = ssl.create_default_context()
        service = smtplib.SMTP_SSL(self.smtp_server_domain_name, self.port, context=ssl_context)
        service.login(self.sender_mail, self.password)
        service.sendmail(self.sender_mail, to, msg.as_string())
        service.quit()