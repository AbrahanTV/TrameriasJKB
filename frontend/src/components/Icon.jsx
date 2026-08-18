const paths = {
  phone: "M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.6 21 3 12.4 3 2c0-.6.4-1 1-1h3.8c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z",
  mail: "M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z M3.5 7l8.5 6 8.5-6",
  pin: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  chat: "M4 4h16v12H8l-4 4V4Z",
  check: "M5 12.5 9.5 17 19 7",
  arrow: "M5 12h13.5 M13 6l6.5 6-6.5 6",
  building: "M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16 M14 21V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11 M4 21h16 M7 8h1 M7 12h1 M7 16h1",
  shield: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z",
  spark: "M12 3v4 M12 17v4 M3 12h4 M17 12h4 M5.6 5.6l2.8 2.8 M15.6 15.6l2.8 2.8 M5.6 18.4l2.8-2.8 M15.6 8.4l2.8-2.8",
  "shelf-double": "M4 3v18 M20 3v18 M4 8h16 M4 13h16 M12 3v18",
  "shelf-single": "M5 3v18 M5 8h13l-2 3 2 3H5",
  cart: "M3 4h2l2.4 12.2A2 2 0 0 0 9.4 18H18a2 2 0 0 0 2-1.6L21.6 8H6.2 M10 21a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z M17 21a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z",
  basket: "M5 8h14l-1.5 11h-11L5 8Z M8 8V6a4 4 0 0 1 8 0v2",
  ladder: "M6 21V6l3-3 M18 21V6l-3-3 M6 8h12 M6 12h12 M6 16h12",
  palletjack: "M3 17h9l3-9h4 M6 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M15 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M3 13h9",
  trolley: "M4 6h13l2 2v9H6a2 2 0 0 1-2-2V6Z M8 20a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z M16 20a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z",
  bins: "M5 9h14l-1.5 11h-11L5 9Z M9 9V7a3 3 0 0 1 6 0v2",
  mesh: "M4 6h16v13H4Z M4 10h16 M4 14h16 M8 6v13 M12 6v13 M16 6v13",
  pallet: "M3 8h18v3H3Z M3 15h18v3H3Z M6 11v4 M12 11v4 M18 11v4",
};

export default function Icon({ name, width = 20, height = 20, ...props }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={width}
      height={height}
      {...props}
    >
      <path d={d} />
    </svg>
  );
}
