import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import Icon from "../components/Icon";
import {
  rackingCategories,
  comerciales,
  otrosProductos,
  whatsappUrl,
} from "../data/content";
import { categoryPhotos, itemPhotos } from "../data/photos";

const TABS = [
  { key: "paletizada", label: "Carga paletizada" },
  { key: "manual", label: "Carga manual" },
  { key: "ligera", label: "Carga ligera" },
  { key: "comerciales", label: "Comerciales" },
  { key: "otros", label: "Otros productos" },
];
const DEFAULT_TAB = "paletizada";

function ItemCard({ item }) {
  const photo = itemPhotos[item.icon];
  if (photo) {
    return (
      <div className="icon-card icon-card-photo">
        <Photo
          src={photo}
          alt={item.title}
          ratio="4 / 3"
          className="card-photo"
        />
        <div className="card-body">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="icon-card">
      <div className="ic-wrap">
        <Icon name={item.icon} />
      </div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
}

export default function Productos() {
  const [searchParams] = useSearchParams();
  const requested = searchParams.get("cat");
  const isValidRequest = TABS.some((t) => t.key === requested);

  const [active, setActive] = useState(
    isValidRequest ? requested : DEFAULT_TAB,
  );
  const [lastRequested, setLastRequested] = useState(requested);

  if (requested !== lastRequested) {
    setLastRequested(requested);
    if (isValidRequest) setActive(requested);
  }

  const category = rackingCategories.find((c) => c.key === active);
  const catIdx = Math.max(
    rackingCategories.findIndex((c) => c.key === active),
    0,
  );

  return (
    <>
      <PageHero crumb="Productos" title="Nuestros productos">
        Estanterías metálicas modulares, resistentes y adaptables a distintos
        tipos de carga — personalizables según las necesidades de cada cliente.
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="prod-tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={active === tab.key}
                className={active === tab.key ? "active" : ""}
                onClick={() => setActive(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {category && (
            <div className="prod-block">
              <span className="eyebrow">
                {category.index} — {category.eyebrow}
              </span>
              <div className="prod-block-grid">
                <div className="prod-photos">
                  <Photo
                    src={categoryPhotos[category.key]?.[0]}
                    index={catIdx * 2}
                    alt={`${category.title} — vista 1`}
                    ratio="3 / 4"
                  />
                  <Photo
                    src={categoryPhotos[category.key]?.[1]}
                    index={catIdx * 2 + 1}
                    alt={`${category.title} — vista 2`}
                    ratio="3 / 4"
                  />
                </div>
                <div className="prod-copy">
                  <h3>{category.title}</h3>
                  <p>{category.summary}</p>
                  <div className="spec-row">
                    {category.specs.map((s) => (
                      <div key={s.label} className="spec-cell">
                        <div className="val">{s.value}</div>
                        <div className="lbl">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="feature-list">
                    {category.features.map((f) => (
                      <li key={f}>
                        <Icon name="check" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {active === "comerciales" && (
            <div className="prod-block">
              <span className="eyebrow">
                {comerciales.index} — {comerciales.eyebrow}
              </span>
              <h3 style={{ marginTop: 8, marginBottom: 14 }}>
                {comerciales.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--ink-soft)",
                  fontSize: 15.5,
                  lineHeight: 1.7,
                  maxWidth: "68ch",
                  marginBottom: 36,
                }}
              >
                {comerciales.summary}
              </p>

              <div className="checkout-block">
                <div className="prod-photos">
                  <Photo
                    src={categoryPhotos.comerciales?.[0]}
                    alt="Góndolas comerciales para exhibición y venta al detalle"
                    ratio="4 / 3"
                  />
                  <Photo
                    src={categoryPhotos.comerciales?.[1]}
                    index={1}
                    alt="Góndolas comerciales, distintos acabados"
                    ratio="4 / 3"
                  />
                </div>
                <div className="cb-copy">
                  <span className="eyebrow">
                    {comerciales.checkout.subtitle}
                  </span>
                  <h4>{comerciales.checkout.title}</h4>
                  <p>{comerciales.checkout.description}</p>
                </div>
              </div>

              <div className="icon-grid icon-grid-4">
                {comerciales.items.map((item) => (
                  <ItemCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          )}

          {active === "otros" && (
            <div className="prod-block">
              <span className="eyebrow">
                {otrosProductos.index} — {otrosProductos.eyebrow}
              </span>
              <h3 style={{ marginTop: 8, marginBottom: 14 }}>
                {otrosProductos.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--ink-soft)",
                  fontSize: 15.5,
                  lineHeight: 1.7,
                  maxWidth: "68ch",
                  marginBottom: 36,
                }}
              >
                {otrosProductos.summary}
              </p>
              <div className="icon-grid">
                {otrosProductos.items.map((item) => (
                  <ItemCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <span className="eyebrow">¿No encuentras lo que buscas?</span>
          <h2>Diseñamos la solución para tu espacio</h2>
          <div className="cta-actions">
            <a
              className="btn btn-primary"
              href={whatsappUrl(
                "Hola, quisiera información sobre sus productos de tramería.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar con ventas
            </a>
            <Link to="/contacto" className="btn btn-outline">
              Ir a contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
