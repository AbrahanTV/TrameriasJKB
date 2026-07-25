import { tramoPhotos } from "../data/photos";

// Real photo, cycling through the available set (see data/photos.js) since
// there are more image slots on the site than supplied photos.
export default function Photo({ index = 0, alt, ratio = "4 / 3", className = "", eager = false }) {
  const src = tramoPhotos[index % tramoPhotos.length];
  return (
    <img
      className={`photo ${className}`}
      src={src}
      alt={alt}
      style={{ aspectRatio: ratio }}
      loading={eager ? "eager" : "lazy"}
    />
  );
}
