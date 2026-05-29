// Replace with the actual Booksy URL once available
export const BOOKSY_URL = "https://booksy.com";

export const SITE_URL = "https://clippers-ginnheim.de";

export const SHOP_NAME = "Clippers Ginnheim";

export const CONTACT = {
  name: "Clippers Ginnheim",
  address: "Ginnheimer Landstraße 146",
  city: "Frankfurt am Main",
  phone: "+49 69 53055532",
  email: "info@clippers-frankfurt.de",
};

export const RATING = {
  score: 4.7,
  count: 194,
  platform: "Google",
} as const;

export const HOURS = [
  { day: "Montag – Freitag", hours: "09:00 – 19:00" },
  { day: "Samstag", hours: "09:00 – 17:00" },
  { day: "Sonntag", hours: "Geschlossen" },
];

export const SOCIAL = {
  instagram: "https://www.instagram.com/clippers.ginnheim/",
  facebook: "https://facebook.com/clippers_frankfurt",
  tiktok: "https://www.tiktok.com/@clippers.ginnheim",
};

// Embed URL for Ginnheimer Landstraße 146 — get the exact iframe src from
// Google Maps → Share → Embed a map and replace this URL
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Ginnheimer+Landstra%C3%9Fe+146+Frankfurt+am+Main&output=embed";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/preisliste", label: "Preisliste" },
  { href: "/galerie", label: "Galerie" },
  { href: "/team", label: "Team" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
