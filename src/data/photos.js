/* import tramo01 from "../assets/tramos/tramo-01.jpg"; */
import tramo05 from "../assets/tramos/tramo-05.jpg";
/* import tramo03 from "../assets/tramos/tramo-03.jpg";
import tramo04 from "../assets/tramos/tramo-04.jpg";
import tramo05 from "../assets/tramos/tramo-05.jpg"; */
import paletizada01 from "../assets/photos/carga-paletizada/paletizada-01.png";
import paletizada02 from "../assets/photos/carga-paletizada/paletizada-02.jpeg";

import manual01 from "../assets/photos/carga-manual/manual-01.jpg";
import manual07 from "../assets/photos/carga-manual/manual-07.jpeg";
import manual09 from "../assets/photos/carga-manual/manual-09.jpg";

import ligera01 from "../assets/photos/carga-ligera/ligera-01.jpg";
import ligera02 from "../assets/photos/carga-ligera/ligera-02.jpg";

import comercial01 from "../assets/photos/comercial/comercial-01.jpg";
import comercial02 from "../assets/photos/comercial/comercial-02.jpg";

import escalera01 from "../assets/photos/escalera/escalera-01.jpg";
import trolley01 from "../assets/photos/otros-productos/trolley-01.jpg";
import plasticBins01 from "../assets/photos/otros-productos/plastic-bins-01.jpg";
import palletJack01 from "../assets/photos/otros-productos/pallet-jack-01.jpg";
import wireMesh01 from "../assets/photos/otros-productos/wire-mesh-01.jpg";
import plasticPallet from "../assets/photos/otros-productos/plastic-pallet-01.jpg";

import proyecto01 from "../assets/photos/proyectos/proyecto-01.jpg";
import proyecto02 from "../assets/photos/proyectos/proyecto-02.jpg";
import proyecto03 from "../assets/photos/proyectos/proyecto-03.jpg";
import proyecto04 from "../assets/photos/proyectos/proyecto-04.jpg";
import proyecto05 from "../assets/photos/proyectos/proyecto-05.jpg";
import proyecto06 from "../assets/photos/proyectos/proyecto-06.jpg";
import proyecto07 from "../assets/photos/proyectos/proyecto-07.jpg";
import proyecto08 from "../assets/photos/proyectos/proyecto-08.jpg";

// Only 5 generic real photos are available today — pages cycle through this
// list (see Photo.jsx) so every placeholder gets covered, repeating as needed.
export const tramoPhotos = [
  paletizada01,
  paletizada02,
  proyecto02,
  manual07,
  tramo05,
];

// Dedicated photos per Productos category — takes priority over the generic
// cycling set above when present (see Productos.jsx). Fill in as real photos
// arrive for each category (paletizada, ligera, comerciales, otros...).
export const categoryPhotos = {
  manual: [manual01, manual09],
  ligera: [ligera01, ligera02],
  comerciales: [comercial01, comercial02],
  paletizada: [paletizada01, paletizada02],
};

// Photos for individual items inside "Otros productos" / "Comerciales",
// keyed by that item's `icon` field in data/content.js. Add one entry per
// item as real photos arrive — items without an entry keep the icon card.
export const itemPhotos = {
  ladder: escalera01,
  trolley: trolley01,
  bins: plasticBins01,
  palletjack: palletJack01,
  mesh: wireMesh01,
  pallet: plasticPallet,
};

// Proyectos realizados gallery — one photo per slot, in order.
export const proyectoPhotos = [
  proyecto01,
  proyecto02,
  proyecto03,
  proyecto04,
  proyecto05,
  proyecto06,
  proyecto07,
  proyecto08,
];
