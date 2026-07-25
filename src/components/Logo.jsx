import { Link } from "react-router-dom";

export default function Logo({ withTag = true }) {
  return (
    <Link to="/" className="brand">
      <svg className="brand-mark" viewBox="0 0 100 112" aria-hidden="true">
        <polygon points="34,0 100,0 100,24 44,24 44,10" fill="var(--navy-800)" />
        <polygon points="0,26 22,26 22,8 36,0 6,0 0,4" fill="var(--orange)" />
        <rect x="52" y="24" width="22" height="70" fill="var(--navy-800)" />
        <polygon points="44,88 82,88 90,112 36,112" fill="var(--orange)" />
      </svg>
      <span>
        <span className="brand-word">Tramerías JKB</span>
        {withTag && <span className="brand-tag">Almacenaje &amp; Tramerías</span>}
      </span>
    </Link>
  );
}
