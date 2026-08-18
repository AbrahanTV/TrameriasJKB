import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from pydantic import BaseModel, EmailStr, Field, ValidationError
from email.message import EmailMessage


from dotenv import load_dotenv
load_dotenv()


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

    #phone: 

    message: str = Field(
        strip_whitespace=True,
        min_length=1,
        max_length=5000
    )

def send_email(payload: ContactPayload) -> None:
    msg = EmailMessage()
    msg["Subject"] = f"Nuevo mensaje de {payload.name} {payload.last_name}"
    msg["De"] = payload.email
    msg["Para"] = "abrahantolentinov@gmail.com"

    msg.set_content(f""" 
Nombre: {payload.name} {payload.last_name}
Email: {payload.email}
Numero de Telefono: {payload.phone}

Mensaje:
{payload.message}
 """)
