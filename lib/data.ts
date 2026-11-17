export const site = {
  name: "Apo Filipino Cuisine",
  address: "373 Wilson Ave, North York, ON M3H 1T3",
  hoursText: "8 am to 8:40 pm",
  // Minutes after midnight, Toronto time
  opensAt: 8 * 60,
  closesAt: 20 * 60 + 40,
  timeZone: "America/Toronto",
  phones: [
    { label: "416-398-9777", tel: "+14163989777" },
    { label: "647-553-9787", tel: "+16475539787" },
  ],
  facebook: "https://www.facebook.com/ApoFoodBathurstandWilson",
  facebookReviews: "https://www.facebook.com/ApoFoodBathurstandWilson/reviews",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=APO+Filipino+Cuisine,+373+Wilson+Ave,+North+York,+ON",
  mapEmbed:
    "https://www.google.com/maps?q=APO+Filipino+Cuisine,+373+Wilson+Ave,+North+York,+ON&z=16&output=embed",
};

export type DeliveryApp = {
  name: string;
  logo: string;
  /** Zoom to trim transparent padding around the icon */
  logoScale?: number;
  note: string;
  href: string;
};

export const deliveryApps: DeliveryApp[] = [
  {
    name: "Uber Eats",
    logo: "/logos/ubereats-com-logo.png",
    logoScale: 1.04,
    note: "Delivery or pickup",
    href: "https://www.ubereats.com/ca/store/apo-food-373-wilson-ave/4JturnYFUbqATq6GP9vhbQ",
  },
  {
    name: "DoorDash",
    logo: "/logos/doordash-com-logo.png",
    note: "Delivery or pickup",
    href: "https://www.doordash.com/store/apo-food-toronto-38053807/86595750/",
  },
  {
    name: "Fantuan",
    logo: "/logos/fantuan.avif",
    logoScale: 1.12,
    note: "Delivery",
    href: "https://www.fantuanorder.com/store/apo-filipino-cuisine/ca-4804580",
  },
];

export type Favourite = {
  tag: string;
  name: string;
  desc: string;
  price?: string;
  image: "sisig" | "bbq" | "bopis" | "pancit";
  alt: string;
};

export const favourites: Favourite[] = [
  {
    tag: "Most liked on Uber Eats",
    name: "Sisig",
    desc: "Chopped pork, sizzled with onion, chili and calamansi.",
    price: "$12.99",
    image: "sisig",
    alt: "A tray of sisig topped with lemon wedges, red chilies and green onion",
  },
  {
    tag: "Off the grill",
    name: "BBQ skewers",
    desc: "Sweet, sticky glaze, grilled until the edges char.",
    image: "bbq",
    alt: "Glazed Filipino barbecue skewers with charred grill marks",
  },
  {
    tag: "Spicy",
    name: "Bopis",
    desc: "Finely diced pork sautéed with peppers and plenty of chilies.",
    image: "bopis",
    alt: "A tray of bopis, finely diced and sautéed, topped with whole red chilies",
  },
  {
    tag: "Canton + bihon",
    name: "Mix noodles",
    desc: "Egg and rice noodles stir-fried with vegetables.",
    price: "$8.99",
    image: "pancit",
    alt: "Pancit with yellow egg noodles, thin rice noodles, vegetables and green onion",
  },
];

export type MenuItem = { name: string; price: string; desc: string };
export type MenuSection = {
  id: string;
  label: string;
  sub: string;
  special?: { title: string; text: string };
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "ulam",
    label: "Ulam",
    sub: "mains",
    items: [
      { name: "Sisig", price: "$12.99", desc: "Sizzling chopped pork with onion, chili and calamansi." },
      { name: "Bicol Express", price: "$12.99", desc: "Pork in spicy coconut milk." },
      { name: "Lechon", price: "$16.99 / lb", desc: "Roast pork with crackling skin." },
      { name: "Chicken wings", price: "$9.99", desc: "Fried crisp." },
      { name: "Combo 1", price: "$13.99", desc: "A plate of rice with your picks from the counter." },
    ],
  },
  {
    id: "silog",
    label: "Silog",
    sub: "all-day breakfast",
    special: { title: "Free taho", text: "with every breakfast meal, 8 to 11 am." },
    items: [
      { name: "Tapsilog (pork)", price: "$13.99", desc: "Juicy pork tapa with rice, fried egg and banana." },
      { name: "Longsilog", price: "$11.99", desc: "Longganisa sausage with rice, fried egg and banana." },
      { name: "Tocilog", price: "$11.99", desc: "Sweet pork tocino with rice, fried egg and banana." },
      { name: "Bangsilog", price: "$11.99", desc: "Fried bangus (milkfish) with rice, fried egg and banana." },
      { name: "Tinapa silog", price: "$11.99", desc: "Smoked fish with rice, fried egg and banana." },
      { name: "Tuyo silog", price: "$11.99", desc: "Crispy dried fish with rice, fried egg and banana." },
      { name: "Embotidong silog", price: "$11.99", desc: "Home-made embotido with rice, fried egg and banana." },
      { name: "Spamsilog", price: "$11.99", desc: "Fried Spam with rice, fried egg and banana." },
      { name: "Hotsilog", price: "$11.99", desc: "Classic Filipino hotdog with rice, fried egg and banana." },
    ],
  },
  {
    id: "pancit",
    label: "Pancit",
    sub: "noodles",
    items: [
      { name: "Pancit bihon", price: "$8.99", desc: "Rice noodles stir-fried with shrimp, pork and vegetables. Comes with calamansi." },
      { name: "Pancit canton", price: "$8.99", desc: "Egg noodles stir-fried with vegetables in a savoury sauce." },
      { name: "Mix noodles", price: "$8.99", desc: "Canton and bihon together." },
    ],
  },
  {
    id: "kanin",
    label: "Kanin",
    sub: "rice",
    items: [
      { name: "Garlic fried rice", price: "$3.99", desc: "Sinangag. Goes with everything." },
      { name: "Pork fried rice", price: "$6.99", desc: "Fried rice with pork." },
      { name: "Chicken fried rice", price: "$6.99", desc: "Fried rice with chicken." },
    ],
  },
  {
    id: "gulay",
    label: "Gulay",
    sub: "vegetables",
    items: [
      { name: "Laing", price: "$9.99", desc: "Taro leaves cooked down in coconut milk." },
      { name: "Pinakbet", price: "$9.99", desc: "Mixed vegetable stew." },
      { name: "Ginataang kalabasa", price: "$9.99", desc: "Squash in coconut milk." },
      { name: "Ginataang langka", price: "$9.99", desc: "Young jackfruit in coconut milk." },
      { name: "Ampalaya", price: "$9.99", desc: "Sautéed bitter melon." },
      { name: "Bamboo shoot", price: "$9.99", desc: "Tender bamboo shoots." },
    ],
  },
];

export const reviews = [
  { quote: "Super worth it! The food was really delicious and served fresh. The staff were warm, friendly, and very attentive… we’ll definitely be back!", author: "Jhoan C." },
  { quote: "Love the chocolate meat, dinakdakan, laing, and lechon kawali… Staffs are friendly! Keep it up!", author: "MaryAnn T." },
  { quote: "Lechon Baboy and Chicken Skin The BEST!", author: "Jayvee D." },
  { quote: "Masarap tlg ang food, will come back here again", author: "Carmelita H.", gloss: "“Masarap” means delicious." },
  { quote: "Highly recommended. Delicious food and friendly staff.", author: "Ronalyn M." },
  { quote: "Excellent food and excellent staff and crew… bravo", author: "Riza U." },
];

export const packages = [
  {
    name: "Package 1",
    pax: "Feeds 10 to 15 people",
    price: "$350",
    items: ["Lechon belly", "Chocolate cake", "Kakanin mix (large)", "Pancit mix, palabok or Filipino spaghetti (small)", "Lumpiang Shanghai (50 pcs)", "Chicken wings (40 pcs)"],
  },
  {
    name: "Package 2",
    pax: "Feeds 10 to 15 people",
    price: "$500",
    items: ["Cochinillo", "Chocolate cake", "Kakanin mix (large)", "Pancit mix, palabok or Filipino spaghetti (small)", "Chicken wings (40 pcs)", "Pork menudo (small)", "Chopsuey (small)"],
  },
  {
    name: "Package 3",
    pax: "Feeds 20 to 30 people",
    price: "$730",
    items: ["Lechon (regular)", "Chocolate cake", "Kakanin mix (large)", "Pancit mix, palabok or Filipino spaghetti (large)", "Beef caldereta (large)", "Chicken wings (80 pcs)", "Bamboo shoot (small)"],
  },
];
