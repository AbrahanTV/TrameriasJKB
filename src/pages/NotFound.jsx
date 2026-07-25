import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container notfound">
      <h1>404</h1>
      <p>No encontramos la página que buscas.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  );
}
