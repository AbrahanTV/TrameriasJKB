import { useState } from "react";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { company, whatsappUrl } from "../data/content";

const API_BASE = import.meta.env.VITE_API_URL || "";

export default function Contacto() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.target;
    const payload = {
      name: form.fname.value,
      last_name: form.lname.value,
      email: form.femail.value,
      phone: form.fphone.value,
      message: form.fmsg.value,
    };

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero crumb="Contacto" title="Hablemos de tu proyecto">
        Escríbenos, llámanos o completa el formulario y te contactamos a la
        brevedad.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Información de contacto</h2>

              <div className="contact-item">
                <Icon name="phone" />
                <div>
                  <div className="ci-label">Teléfono</div>
                  <div className="ci-value">
                    {company.phones.map((phone, i) => (
                      <span key={phone}>
                        <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                          {phone}
                        </a>
                        {i < company.phones.length - 1 ? " / " : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <Icon name="mail" />
                <div>
                  <div className="ci-label">Correo</div>
                  <div className="ci-value">
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <Icon name="pin" />
                <div>
                  <div className="ci-label">Dirección</div>
                  <div className="ci-value">{company.address}</div>
                </div>
              </div>

              <hr className="contact-divider" />

              <div className="contact-person">
                <strong>{company.contactName}</strong>
                <span>{company.contactRole}</span>
              </div>

              <a
                className="btn btn-primary"
                href={whatsappUrl(
                  "Hola, quisiera solicitar información sobre tramerías.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="chat" /> Escribir por WhatsApp
              </a>
            </div>

            <div className="contact-form">
              <h2>Envíanos un mensaje</h2>
              <p>Cuéntanos qué necesitas y un asesor te contactará.</p>

              {sent ? (
                <div className="form-success">
                  ¡Gracias! Hemos recibido tu mensaje y te contactaremos a la
                  brevedad.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="field full full-name">
                      <div className="fname-cont">
                        <label htmlFor="fname">Nombre</label>
                        <input
                          id="fname"
                          type="text"
                          placeholder="Tu nombre"
                          required
                        />
                      </div>
                      <div className="lname-cont">
                        <label htmlFor="lname">Apellido</label>
                        <input
                          id="lname"
                          type="text"
                          placeholder="Tu apellido"
                          required
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="fphone">Teléfono</label>
                      <input
                        id="fphone"
                        type="tel"
                        placeholder="(829) 000-0000"
                        pattern="[0-9()+\-\s]{7,20}"
                        title="Ingresa un número de teléfono válido (solo dígitos, espacios, +, -, paréntesis)"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9()+\-\s]/g,
                            "",
                          );
                        }}
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="femail">Correo</label>
                      <input
                        id="femail"
                        type="email"
                        placeholder="tucorreo@empresa.com"
                        required
                      />
                    </div>
                    <div className="field full">
                      <label htmlFor="fmsg">Mensaje</label>
                      <textarea
                        id="fmsg"
                        rows="4"
                        placeholder="Cuéntanos sobre tu espacio y tipo de carga"
                        required
                      />
                    </div>
                  </div>
                  {error && (
                    <p className="form-error">
                      No se pudo enviar tu mensaje. Intenta de nuevo o
                      escríbenos por WhatsApp.
                    </p>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={sending}
                  >
                    {sending ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="map-note">
            <Icon name="pin" />
            <p>
              {company.addressFull}.{" "}
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
