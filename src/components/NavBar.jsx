import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { navLinks, company } from "../data/content";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [lastPath, setLastPath] = useState(location.pathname);

  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Logo />
        <nav className="main-nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-side">
          <a
            className="nav-phone"
            href={`tel:${company.phones[0].replace(/[^\d+]/g, "")}`}
          >
            <Icon name="phone" />
            {company.phones[0]}
          </a>
          <NavLink to="/contacto" className="btn btn-primary">
            Cotizar
          </NavLink>
        </div>
        <button
          className="burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`mobile-nav${open ? " open" : ""}`}
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
          <a
            className="nav-phone"
            href={`tel:${company.phones[0].replace(/[^\d+]/g, "")}`}
          >
            <Icon name="phone" />
            {company.phones[0]}
          </a>
          <NavLink to="/contacto" className="btn btn-primary">
            Cotizar
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
