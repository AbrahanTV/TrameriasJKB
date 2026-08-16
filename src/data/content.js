// Site copy and structured content, sourced from the company's Spanish
// proposal PDF (Documentos/Propuesta...pdf).

export const company = {
  name: "Tramerías JKB",
  tagline: "Para la organización de tu mercancía, somos la solución.",
  phones: ["(829) 376-4125", "(829) 297-1723"],
  email: "trameriasjkb@gmail.com",
  address: "Autopista Duarte, Km 11, La Penda, La Vega",
  addressFull:
    "Autopista Duarte, Km 11, La Penda, La Vega, República Dominicana",
  contactName: "Lic. Bryant Figueroa",
  contactRole: "Gerente de Ventas",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Autopista Duarte, Km 11, La Penda, La Vega, República Dominicana",
    ),
};

export const whatsappNumber = "18293764125";
export const whatsappUrl = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/contacto", label: "Contacto" },
];

// Racking / tramería categories shown on the Productos page.
export const rackingCategories = [
  {
    key: "paletizada",
    index: "01",
    eyebrow: "El sistema más utilizado",
    title: "Tramería de Carga Paletizada",
    summary:
      "El sistema de almacenaje más utilizado por compañías en la actualidad. Proveniente de nuestra fábrica en China, se recomienda para almacenes, supermercados, centros de distribución y otros espacios de logística.",
    specs: [
      { value: "2,500 kg", label: "Por nivel" },
      { value: "Fábrica", label: "Propia" },
      { value: "Modular", label: "Cada nivel, un producto" },
    ],
    features: [
      "Estructura y operación simples",
      "Acceso directo a cada artículo",
      "Aprovecha mejor el espacio y la altura de tu almacén",
    ],
    homeCardCopy:
      "Hasta 2,500 kg por nivel. Ideal para almacenes y centros de distribución.",
  },
  {
    key: "manual",
    index: "02",
    eyebrow: "Para espacios más pequeños",
    title: "Tramería de Carga Manual",
    summary:
      "Ideal para artículos ligeros o medianos que pueden ser colocados y retirados a mano. Proveniente de nuestra fábrica en China, se recomienda su uso para espacios más pequeños.",
    specs: [
      { value: "200–800 kg", label: "Capacidad" },
      { value: "Fábrica", label: "Propia" },
      { value: "Ajustable", label: "Ancho del tramo" },
    ],
    features: [
      "Uso individual o en conjunto con otros cuerpos",
      "Ancho del tramo modificable según necesidad",
      "Facilita el acceso al producto",
    ],
    homeCardCopy:
      "200 a 800 kg. Pensada para espacios más pequeños y acceso directo.",
  },
  {
    key: "ligera",
    index: "03",
    eyebrow: "Productos pequeños",
    title: "Tramería de Carga Ligera",
    summary:
      "Sistema de estantería diseñado para almacenar productos livianos que se manipulan de forma manual, sin necesidad de maquinaria. Fácil de ensamblar y adecuada para productos de tamaño pequeño.",
    specs: [
      { value: "50–150 kg", label: "Por nivel" },
      { value: "Ajustable", label: "Altura de nivel" },
      { value: "Rápido", label: "Fácil ensamblaje" },
    ],
    features: [
      "Altura de cada nivel ajustable",
      "Ideal para productos de tamaño pequeño y poco peso",
    ],
    homeCardCopy:
      "50 a 150 kg por nivel. Fácil de ensamblar, niveles ajustables.",
  },
];

export const comerciales = {
  index: "04",
  eyebrow: "Punto de venta",
  title: "Productos Comerciales",
  summary:
    "Equipo para supermercados y comercios: góndolas, carros y canastas de compra, y mobiliario para punto de cobro. Disponibles en distintos colores y tamaños.",
  checkout: {
    title: "Góndolas de supermercado",
    subtitle: "Exhibición de productos",
    description:
      "Góndolas para exhibición y venta al detalle, en formato central de doble cara o mural de una sola cara. Estructura metálica resistente, con acabados y tamaños personalizables según el espacio disponible.",
  },
  homeCardCopy:
    "Góndolas, carros de compra, canastas y equipo para punto de venta.",
  items: [
    {
      title: "Góndolas centrales",
      description:
        "Doble cara, 50–150 kg. Disponibles en cualquier color y tamaño.",
      icon: "shelf-double",
    },
    {
      title: "Góndolas murales",
      description: "Una sola cara, ideales para colocar contra la pared.",
      icon: "shelf-single",
    },
    {
      title: "Carro de compras",
      description:
        "Estructura resistente, ruedas giratorias y manillar ergonómico.",
      icon: "cart",
    },
    {
      title: "Canastas de compras",
      description: "Plástico o metal, asas ergonómicas y modelos plegables.",
      icon: "basket",
    },
  ],
};

export const otrosProductos = {
  index: "05",
  eyebrow: "Complementos",
  title: "Otros Productos",
  summary:
    "Equipo complementario para el manejo diario de mercancía en almacén y punto de venta.",
  items: [
    {
      title: "Escalera",
      description: "Escalera rodante para acceso seguro a niveles altos.",
      icon: "ladder",
    },
    {
      title: "Pallet Jack",
      description: "Transpaleta manual para mover cargas paletizadas.",
      icon: "palletjack",
    },
    {
      title: "Trolley",
      description: "Carro plataforma plegable para traslado de mercancía.",
      icon: "trolley",
    },
    {
      title: "Plastic Bins",
      description: "Gavetas apilables para organización de piezas pequeñas.",
      icon: "bins",
    },
    {
      title: "Foldable Wire Mesh Container",
      description: "Contenedor plegable de malla para almacenaje y transporte.",
      icon: "mesh",
    },
    {
      title: "Plastic Pallet",
      description: "Base plástica resistente para el transporte de carga.",
      icon: "pallet",
    },
  ],
};

export const homeFeatureStrip = [
  "Equipo técnico capacitado",
  "Optimización real del espacio",
  "Asesoría personalizada",
  "Adaptado a cada proyecto",
];

export const homeCards = [
  { ...rackingCategories[0], cardTitle: "Carga paletizada" },
  { ...rackingCategories[1], cardTitle: "Carga manual" },
  { ...rackingCategories[2], cardTitle: "Carga ligera" },
  {
    cardTitle: "Productos comerciales",
    index: "04",
    homeCardCopy: comerciales.homeCardCopy,
    key: "comerciales",
  },
];

export const guarantees = [
  {
    title: "Sistemas funcionales",
    description:
      "Estructuras resistentes, adaptadas a los más altos estándares del mercado.",
    icon: "building",
  },
  {
    title: "Seguridad y durabilidad",
    description:
      "Equipos de alta calidad, pensados para manejo y almacenamiento seguro.",
    icon: "shield",
  },
  {
    title: "Asesoría personalizada",
    description:
      "Nos adaptamos a las necesidades específicas de cada cliente y espacio.",
    icon: "spark",
  },
];

export const sectors = ["Comercio", "Industria", "Logística"];

export const aboutParagraphs = [
  "Somos una empresa comprometida con ofrecer soluciones eficientes, seguras y duraderas para el manejo y almacenamiento de productos. Nos especializamos en la venta e instalación de tramerías y equipos de almacenaje de alta calidad, diseñados para optimizar el espacio, mejorar la organización y aumentar la productividad de nuestros clientes en sectores como el comercio, la industria y la logística.",
  "Con una amplia gama de productos y un equipo técnico altamente capacitado, en JKB garantizamos sistemas de almacenaje funcionales, resistentes y adaptados a los más altos estándares del mercado.",
  "Nuestra experiencia en el sector y el enfoque en la innovación nos permiten brindar asesoría personalizada y adaptarnos a las necesidades específicas de cada proyecto.",
];

// 8 completed projects — currently placeholders until real photos are supplied.
export const projectPhotos = [
  {
    alt: "Instalación de tramería industrial en almacén con estructura de techo metálico",
  },
  { alt: "Góndolas comerciales instaladas en área de punto de venta" },
  {
    alt: "Tramería de carga paletizada con mercancía embalada en pasillo de almacén",
  },
  { alt: "Vista de pasillo de almacén con tramería cargada de sacos y cajas" },
  { alt: "Mobiliario comercial en proceso de instalación" },
  { alt: "Góndolas murales sin ensamblar en piso de tienda" },
  { alt: "Tramería de carga paletizada cargada con cajas de cartón" },
  { alt: "Pasillo de almacén con tramería y transpaleta manual" },
];
