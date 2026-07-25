import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import { projectPhotos, whatsappUrl } from "../data/content";

const RATIOS = ["4 / 3", "4 / 3", "3 / 4", "3 / 4", "4 / 3", "3 / 4", "3 / 4", "4 / 3"];

export default function Proyectos() {
  return (
    <>
      <PageHero crumb="Proyectos" title="Proyectos realizados">
        Una muestra de instalaciones de tramería industrial y equipamiento comercial que hemos entregado.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="projects-gallery">
            {projectPhotos.map((p, i) => (
              <Photo key={i} index={i} alt={p.alt} ratio={RATIOS[i % RATIOS.length]} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <span className="eyebrow">Tu proyecto podría ser el próximo</span>
          <h2>Cuéntanos qué necesitas organizar</h2>
          <div className="cta-actions">
            <Link to="/contacto" className="btn btn-primary">Solicitar cotización</Link>
            <a
              className="btn btn-outline"
              href={whatsappUrl("Hola, me gustaría cotizar un proyecto de tramería.")}
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
