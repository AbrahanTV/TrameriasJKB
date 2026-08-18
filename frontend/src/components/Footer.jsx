import { Link } from "react-router-dom";
import Logo from "./Logo";
import { navLinks, company } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <Logo withTag={false} />
            <p className="tag">{company.tagline}</p>
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
                </li>
              ))}
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li>{company.address}</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {company.name}. Todos los derechos reservados.</span>
          <span>{company.contactName} · {company.contactRole}</span>
        </div>
      </div>
    </footer>
  );
}
