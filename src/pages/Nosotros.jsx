import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import Icon from "../components/Icon";
import { aboutParagraphs, guarantees, sectors } from "../data/content";

export default function Nosotros() {
  return (
    <>
      <PageHero crumb="Nosotros" title="Sobre nosotros">
        Especialistas en la venta e instalación de tramerías y equipos de
        almacenaje de alta calidad.
      </PageHero>

      <section className="section">
        <div className="container about-grid">
          <div className="about-copy">
            <span className="eyebrow">Nuestra historia</span>
            <p style={{ marginTop: 14 }}>{aboutParagraphs[0]}</p>
            <p>{aboutParagraphs[1]}</p>
            <p>{aboutParagraphs[2]}</p>
            <div style={{ marginTop: 28 }}>
              <span className="eyebrow">Sectores que atendemos</span>
              <div className="pill-row" style={{ marginTop: 14 }}>
                {sectors.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="about-photos about-photos-stack">
            <Photo
              index={4}
              alt="Instalación de tramería industrial en curso"
              ratio="3 / 4"
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center" style={{ maxWidth: "48ch" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Cómo trabajamos
            </span>
            <h2>Lo que garantizamos en cada proyecto</h2>
          </div>
          <div className="guarantee-grid">
            {guarantees.map((g) => (
              <div key={g.title} className="guarantee-card">
                <Icon name={g.icon} className="gi" />
                <h3>{g.title}</h3>
                <p>{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Photo
        index={2}
        alt="Tramería de carga paletizada, vista frontal completa"
        ratio="16 / 6"
      />
    </>
  );
}
