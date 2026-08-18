import { tramoPhotos } from "../data/photos";

// Real photo. Pass `src` directly to show a specific image, or omit it to
// cycle through the generic set (see data/photos.js) since there are more
// image slots on the site than supplied photos.
export default function Photo({
  src,
  index = 0,
  alt,
  ratio = "4 / 3",
  className = "",
  eager = false,
}) {
  const resolvedSrc = src || tramoPhotos[index % tramoPhotos.length];
  return (
    <img
      className={`photo ${className}`}
      src={resolvedSrc}
      alt={alt}
      style={{ aspectRatio: ratio }}
      loading={eager ? "eager" : "lazy"}
    />
  );
}
