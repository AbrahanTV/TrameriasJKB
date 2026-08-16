import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Photo from "../components/Photo";
import {
  homeFeatureStrip,
  homeCards,
  aboutParagraphs,
  projectPhotos,
  whatsappUrl,
} from "../data/content";
import { proyectoPhotos } from "../data/photos";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div>
            <span className="eyebrow">Tramerías y equipos de almacenaje</span>
            <h1>
              Organiza tu mercancía <em>con estructura real.</em>
            </h1>
            <p>
              Ofrecemos soluciones eficientes, seguras y duraderas para el
              manejo y almacenamiento de productos. Venta e instalación de
              tramerías y equipos para comercio, industria y logística.
            </p>
            <div className="hero-actions">
              <Link to="/productos" className="btn btn-primary">
                Ver productos
              </Link>
              <Link to="/contacto" className="btn btn-outline">
                Solicitar cotización
              </Link>
            </div>
          </div>
          <Photo
            index={0}
            alt="Sistema de tramería de carga paletizada"
            ratio="4 / 3"
            eager
          />
        </div>
      </section>

      <div className="feature-strip">
        <div className="container">
          <ul>
            {homeFeatureStrip.map((item) => (
              <li key={item}>
                <Icon name="check" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="section">
        <div className="container about-grid">
          <div className="about-photos">
            <Photo
              index={1}
              alt="Interior de almacén con tramería cargada"
              ratio="3 / 4"
            />
            <Photo
              index={2}
              alt="Pasillo de tramería industrial"
              ratio="3 / 4"
            />
          </div>
          <div className="about-copy">
            <span className="eyebrow">Quiénes somos</span>
            <h2>Comprometidos con el orden de tu operación</h2>
            <p>{aboutParagraphs[0]}</p>
            <p>{aboutParagraphs[1]}</p>
            <Link to="/nosotros" className="text-link">
              Conoce más sobre nosotros <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Catálogo</span>
            <h2>Sistemas para cada tipo de carga</h2>
            <p>
              Desde almacenes de gran altura hasta puntos de venta, tenemos la
              tramería adecuada para tu operación.
            </p>
          </div>
          <div className="cat-grid">
            {homeCards.map((card) => (
              <Link
                key={card.key}
                to={`/productos?cat=${card.key}`}
                className="cat-card"
              >
                <span className="num">{card.index}</span>
                <h3>{card.cardTitle}</h3>
                <p>{card.homeCardCopy}</p>
                <Icon name="arrow" className="arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title-row">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Trabajo realizado</span>
              <h2>Proyectos entregados</h2>
            </div>
            <Link
              to="/proyectos"
              className="text-link"
              style={{ marginTop: 0 }}
            >
              Ver todos los proyectos <Icon name="arrow" />
            </Link>
          </div>
          <div className="projects-preview-grid">
            {projectPhotos.slice(0, 4).map((p, i) => (
              <Photo
                key={i}
                src={proyectoPhotos[i]}
                alt={p.alt}
                ratio="4 / 3"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <span className="eyebrow">Empecemos</span>
          <h2>¿Listo para organizar tu mercancía?</h2>
          <p>
            Escríbenos y te asesoramos según el espacio, la carga y el sector de
            tu operación.
          </p>
          <div className="cta-actions">
            <Link to="/contacto" className="btn btn-primary">
              Contáctanos
            </Link>
            <a
              className="btn btn-outline"
              href={whatsappUrl(
                "Hola, quisiera información sobre tramerías y equipos de almacenaje.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
