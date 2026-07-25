import { Link } from "react-router-dom";
import { company } from "../data/content";

export default function PageHero({ crumb, title, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="breadcrumb">
          <Link to="/">{company.name}</Link> / {crumb}
        </p>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  );
}
