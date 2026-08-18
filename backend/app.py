import os
import resend
from flask import Flask, request, jsonify
from flask_cors import CORS
from pydantic import BaseModel, EmailStr, Field, ValidationError


from dotenv import load_dotenv
load_dotenv()

resend.api_key = os.environ["RESEND_API_KEY"]
MAIL_FROM = os.environ.get("MAIL_FROM", "onboarding@resend.dev")
CONTACT_TO = os.environ["CONTACT_TO"]


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
        min_length=7,
        max_length=30,
        pattern=r"^[0-9()+\-\s]+$"
    )

    message: str = Field(
        strip_whitespace=True,
        min_length=1,
        max_length=5000
    )

def send_email(payload: ContactPayload) -> None:
    body = f"""
Nombre: {payload.name} {payload.last_name}
Email: {payload.email}
Numero de Telefono: {payload.phone}

Mensaje:
{payload.message}
"""
    resend.Emails.send({
        "from": MAIL_FROM,
        "to": [CONTACT_TO],
        "reply_to": payload.email,
        "subject": f"Nuevo mensaje de {payload.name} {payload.last_name}",
        "text": body,
    })


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
