// All brand-specific content lives here.

const whatsappNumber = "2348129626017"; // international format, digits only

export const whatsapp = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const site = {
  name: "MA'FOODIES",
  shortName: "Ma'FOODIES",
  tagline: "A Taste of Eminence",
  description:
    "Experience authentic Nigerian cuisine and premium catering services at Ma'FOODIES, where every meal is a celebration of flavor and tradition.",
  metaDescription:
    "Authentic Nigerian catering in Nigeria. Explore private catering, event catering, corporate meals, and the Ma'Cooking Journey cookbook from Ma'FOODIES.",
  logo: "/images/mafoodies-logo.jpeg",
  heroVideo: "/videos/hero.mp4",
  heroPoster: "/images/signature-dish.jpeg",
  socials: {
    instagram: "https://rb.gy/hvpt1h",
    facebook: "https://surl.li/nxeghg",
    tiktok: "https://surli.cc/uikekm",
  },
  phone: { display: "+234 812 962 6017", tel: "+2348129626017" },
  email: "mafoodie8@gmail.com",
  hours: [
    "Monday - Friday: Available",
    "Saturday: bulk order delivery only",
    "Sunday: By Appointment",
  ],
  developer: {
    label: "Contact Developer",
    href: "https://wa.me/2348038364706?text=Hello%2C%20I%20would%20like%20to%20work%20with%20you%20on%20a%20website.",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Services", href: "#services" },
  { label: "Cookbook", href: "#cookbook" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Premium Nigerian Catering",
  titleLine1: "A Taste of",
  titleLine2: "Eminence",
  body: "Authentic Nigerian cuisine, prepared with fine-dining precision and brought to your home, your office or your celebration.",
  primaryCta: { label: "Place an Order", message: "Hello Ma'FOODIES! I would like to place an order." },
  secondaryCta: { label: "View Our Dishes", href: "#menu" },
  orderMessage: "Hello Ma'FOODIES! I would like to place an order.",
};

export const services = {
  title: "Our Services",
  intro:
    "From intimate private dinners to large corporate events, we provide exceptional catering services and delicious food experiences for every occasion.",
  items: [
    { icon: "utensils", title: "Private Catering", body: "Intimate dining experiences for your special occasions, family gatherings, and private celebrations with personalized menu options." },
    { icon: "trees", title: "Picnic Catering", body: "Perfect outdoor dining solutions for picnics, park gatherings, and outdoor events with portable, delicious meals." },
    { icon: "briefcase", title: "Corporate Catering", body: "Professional catering services for business meetings, conferences, and corporate events of any size with timely delivery." },
    { icon: "party", title: "Event Catering", body: "Comprehensive catering for weddings, birthdays, anniversaries, and special celebrations with full-service options." },
    { icon: "menu", title: "Food Menus", body: "Customized menu planning and consultation services to create the perfect dining experience for your specific needs." },
    { icon: "calendar", title: "Food Timetable", body: "Personalized meal schedules built around your preferences, lifestyle, dietary needs, and allergies with doctor or dietician recommendations factored in where applicable." },
  ],
  note: { strong: "Special Saturday Service:", text: "We serve food in liters and barrels only on Saturdays" },
};

export const dishes = {
  eyebrow: "From the Pass",
  title: "Signature Creations",
  intro: "A short look at the plates our guests return for.",
  items: [
    { name: "Jollof & White Rice Platter", detail: "Jollof rice, white rice, gizdodo, coated chicken", image: "/images/signature-dish.jpeg" },
    { name: "Traditional Pepper Soup", detail: "Slow-simmered, aromatic spices", image: "/images/pepper-soup.jpeg" },
    { name: "Potato Croquettes & Kebab", detail: "Crisp potato croquettes, spiced kebab skewers", image: "/images/appetizers.jpeg" },
    { name: "Peppered Meat & Yam Balls", detail: "Crisp yam croquettes, smoky pepper glaze", image: "/images/pounded-yam.jpeg" },
  ],
};

export const cookbook = {
  eyebrow: "Bestseller",
  title: "Ma'Cooking Journey",
  paragraphs: [
    "Discover the secrets behind our delicious recipes with \"Ma'Cooking Journey\" by Sonia Adjei. This comprehensive cookbook features a delightful array of quick, healthy, and delicious recipes perfect for any gathering.",
    "Whether you're a seasoned cook or just starting your culinary journey, this book is perfect for anyone who enjoys good food, regardless of their cooking expertise.",
  ],
  prices: [
    { label: "On Selar", value: "₦3,000" },
    { label: "Hardcopy", value: "₦5,000" },
  ],
  buyOnline: { label: "Buy on Selar", href: "https://selar.com/6m88g4" },
  hardcopy: {
    label: "Order Hardcopy",
    message: "Hello Ma'FOODIES! I would like to order a hardcopy of the Ma'Cooking Journey cookbook for N5000.",
  },
  image: "/images/cookbook-order.jpeg",
  imageAspect: "aspect-[720/604]",
};

export const story = {
  eyebrow: "Our Story",
  title: "Nigerian tradition, served with ceremony",
  paragraphs: [
    "Ma'FOODIES was founded on a simple conviction: our food deserves a fine-dining stage. We cook the recipes of home and present them with the polish of a five-star house.",
    "From intimate private dinners to large celebrations, our team handles the menu, the timing and the table, so you only handle the toast.",
  ],
  image: "/images/promotional-flyer-new.jpeg",
  stats: [
    { label: "Guests Served", value: "1k+" },
    { label: "Events Catered", value: "10+" },
    { label: "Signature Dishes", value: "40+" },
  ],
};

export const contact = {
  title: "Get In Touch",
  intro:
    "Ready to experience the taste of eminence? Contact us for catering services, cookbook orders, or any inquiries.",
  inquiryMessage: "Hello Ma'FOODIES! I would like to make an inquiry.",
};
