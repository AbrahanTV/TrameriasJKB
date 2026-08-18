import os
import smtplib
import ssl
from flask import Flask, request, jsonify
from flask_cors import CORS
from pydantic import BaseModel, EmailStr, Field, ValidationError
from email.message import EmailMessage


from dotenv import load_dotenv
load_dotenv()

GMAIL_USER = os.environ["GMAIL_USER"]
GMAIL_APP_PASSWORD = os.environ["GMAIL_APP_PASSWORD"]
CONTACT_TO = os.environ.get("CONTACT_TO", GMAIL_USER)


app = Flask(__name__)

CORS(
    app,
    resources={r"/api/*": {"origins": [
        "https://www.trameriasjkb.com",
        "https://trameriasjkb.com",
        "http://localhost:5173"
    ]}},
    supports_credentials=False
)

class ContactPayload(BaseModel):
    name: str = Field(
        strip_whitespace=True,
        min_length=1,
        max_length=100
    )

    last_name: str = Field(
        strip_whitespace=True,
        min_length=1,
        max_length=100
    )

    email: EmailStr

    phone: str = Field(
        strip_whitespace=True,
        min_length=1,
        max_length=30
    )

    message: str = Field(
        strip_whitespace=True,
        min_length=1,
        max_length=5000
    )

def send_email(payload: ContactPayload) -> None:
    msg = EmailMessage()
    msg["Subject"] = f"Nuevo mensaje de {payload.name} {payload.last_name}"
    msg["From"] = GMAIL_USER
    msg["To"] = CONTACT_TO
    msg["Reply-To"] = payload.email

    msg.set_content(f"""
Nombre: {payload.name} {payload.last_name}
Email: {payload.email}
Numero de Telefono: {payload.phone}

Mensaje:
{payload.message}
""")

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as smtp:
        smtp.login(GMAIL_USER, GMAIL_APP_PASSWORD)
        smtp.send_message(msg)


@app.route("/api/contact", methods=["POST"])
def contact():
    try:
        payload = ContactPayload(**request.get_json(force=True, silent=True) or {})
    except ValidationError as e:
        return jsonify({"error": e.errors()}), 400

    try:
        send_email(payload)
    except Exception:
        app.logger.exception("Failed to send contact email")
        return jsonify({"error": "No se pudo enviar el mensaje."}), 502

    return jsonify({"status": "ok"}), 200


if __name__ == "__main__":
    app.run(port=int(os.environ.get("PORT", 8000)))
