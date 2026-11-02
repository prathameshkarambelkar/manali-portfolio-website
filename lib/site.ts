export const site = {
  name: "Manali Jagtap",
  firstName: "Manali",
  handle: "@manalijagtap_13",
  foodHandle: "@forking_aroundddd",
  role: "Travel & Lifestyle Creator",
  tagline: "Curating journeys you'll feel, not just see.",
  location: "Mumbai, India",
  email: "hello@manalijagtap.com",
  phoneDisplay: "+91 98200 00013",
  phone: "919820000013",
  instagram: "https://www.instagram.com/manalijagtap_13/",
  foodInstagram: "https://www.instagram.com/forking_aroundddd/",
  years: "3+",
  since: "2023",
  availability: "Open for collaborations · 2026",
  bio: [
    "I'm Manali — a Mumbai-based travel and lifestyle creator who plans trips around light, food and the stories in between. From Ganga aarti mornings in Haridwar to slow Goa afternoons, I make content that feels like a friend's recommendation.",
    "I create UGC for travel, stays, cafés and beauty brands — reviews, stay tours, unboxings and the kind of reels people save for their next trip. Three years in, and I still get excited about a good window seat.",
  ],
  tags: ["Travel", "Lifestyle", "Food", "Stays", "UGC"],
};

export const coverStats = [
  { value: "525K", label: "views in 30 days" },
  { value: "3,357", label: "followers" },
  { value: "793K", label: "top reel" },
  { value: "8+", label: "brand partners" },
];

export const insights = {
  period: "Last 30 days",
  asOf: "November 2026",
  views: "525K",
  followers: "3,357",
  netFollowers: "+95",
  posts: "124",
  nonFollowerViews: "486K",
  nonFollowerPct: "92.6%",
  profileVisits: "3.1K",
  dailyAverage: "17.5K",
  age: [
    { label: "13–17", value: 3 },
    { label: "18–24", value: 28 },
    { label: "25–34", value: 52 },
    { label: "35–44", value: 13 },
    { label: "45+", value: 4 },
  ],
  locations: [
    { label: "Mumbai", value: 38 },
    { label: "Pune", value: 16 },
    { label: "Delhi NCR", value: 9 },
    { label: "Bengaluru", value: 7 },
    { label: "Rest of India", value: 30 },
  ],
  gender: { women: 71, men: 29 },
};

export type Theme = {
  number: string;
  title: string;
  description: string;
  icon: "star" | "package" | "sparkles" | "bag" | "map" | "bed" | "food";
};

export const themes: Theme[] = [
  {
    number: "01",
    title: "Reviews",
    description:
      "Honest, detail-first reviews of stays, cafés and products — the good, the meh, and the worth-it.",
    icon: "star",
  },
  {
    number: "02",
    title: "Unboxing",
    description:
      "First impressions with texture, sound, and a reason to care about what's inside the box.",
    icon: "package",
  },
  {
    number: "03",
    title: "Get ready with me",
    description:
      "Slow, aesthetic GRWM edits that make a product feel like a ritual, not a placement.",
    icon: "sparkles",
  },
  {
    number: "04",
    title: "Shopping haul",
    description:
      "Try-ons and hauls with styling notes, honest sizing, and the pieces actually worth buying.",
    icon: "bag",
  },
  {
    number: "05",
    title: "Travel reels",
    description:
      "Destination films with a hook, a route, and the kind of frame that makes people book.",
    icon: "map",
  },
  {
    number: "06",
    title: "Stay tours",
    description:
      "Walk-throughs that show how a place actually feels to wake up in — not just how it photographs.",
    icon: "bed",
  },
  {
    number: "07",
    title: "Café & food features",
    description:
      "Menus, first bites, and the neighbourhood places worth a detour (and a second visit).",
    icon: "food",
  },
];

export type Video = {
  title: string;
  brand: string;
  type: string;
  views: string;
  image: string;
  href: string;
  top?: boolean;
};

/**
 * Reel URLs are placeholders that point to Manali's Instagram profile.
 * Replace each `href` with the individual reel link before launch.
 */
export const videos: Video[] = [
  {
    title: "Ganga Aarti, Haridwar",
    brand: "Haridwar",
    type: "Travel film",
    views: "793K",
    image: "/images/cover-aarti.webp",
    href: site.instagram,
    top: true,
  },
  {
    title: "Rishikesh must-experience",
    brand: "Rishikesh",
    type: "Travel reel",
    views: "185K",
    image: "/images/video-rishikesh.webp",
    href: site.instagram,
  },
  {
    title: "Midnight road trip",
    brand: "Road trip",
    type: "Travel reel",
    views: "77K",
    image: "/images/video-roadtrip.webp",
    href: site.instagram,
  },
  {
    title: "Goa beach reel",
    brand: "Goa",
    type: "Travel reel",
    views: "56.2K",
    image: "/images/video-goa.webp",
    href: site.instagram,
  },
  {
    title: "Rishikesh diaries",
    brand: "Rishikesh",
    type: "Travel diary",
    views: "49.7K",
    image: "/images/video-diaries.webp",
    href: site.instagram,
  },
  {
    title: "Goa stay tour",
    brand: "Goa stay",
    type: "Stay tour",
    views: "24.6K",
    image: "/images/video-stay.webp",
    href: site.instagram,
  },
  {
    title: "Karjat luxury villa",
    brand: "Karjat villa",
    type: "Stay tour",
    views: "23.7K",
    image: "/images/video-villa.webp",
    href: site.instagram,
  },
  {
    title: "MARS foundation",
    brand: "MARS Cosmetics",
    type: "Beauty UGC",
    views: "13.1K",
    image: "/images/video-mars.webp",
    href: site.instagram,
  },
];

export const moreBrandWork = [
  { brand: "Bombay Boba & Co.", views: "13.5K" },
  { brand: "Nuvola Gelato, Dadar", views: "15.1K" },
  { brand: "Goa stays", views: "15.4K" },
  { brand: "MARS Cosmetics", views: "13.1K" },
];

export const keyStats = [
  { value: "525K", label: "views in 30 days", note: "Instagram Insights" },
  { value: "793K", label: "top reel", note: "Ganga Aarti, Haridwar" },
  { value: "3,357", label: "followers", note: "and growing" },
  { value: "9.2%", label: "engagement rate", note: "last 30 days" },
];

export type Partner = {
  name: string;
  category: string;
  monogram: string;
  tone: "ink" | "clay" | "sage" | "teal" | "outline" | "gold";
};

export const partners: Partner[] = [
  {
    name: "MARS Cosmetics",
    category: "Beauty & cosmetics",
    monogram: "M",
    tone: "ink",
  },
  {
    name: "Bombay Boba & Co.",
    category: "Café & beverage",
    monogram: "BB",
    tone: "clay",
  },
  {
    name: "Nuvola Gelato",
    category: "Dessert & café",
    monogram: "N",
    tone: "sage",
  },
  {
    name: "Rowdy Momo Café",
    category: "Café & food",
    monogram: "RM",
    tone: "teal",
  },
  {
    name: "Airbnb stay hosts",
    category: "Stays & villas",
    monogram: "A",
    tone: "outline",
  },
  {
    name: "Goa & Karjat villas",
    category: "Stay tours",
    monogram: "GK",
    tone: "gold",
  },
];

export type Package = {
  number: string;
  name: string;
  price: string;
  unit: string;
  line: string;
  includes: string[];
  featured?: boolean;
};

/**
 * Starting rates in INR. Replace with Manali's final pricing.
 */
export const packages: Package[] = [
  {
    number: "01",
    name: "Sponsored Post",
    price: "₹12,000",
    unit: "/ post",
    line: "One scroll-stopping reel, plus stories.",
    includes: [
      "1 reel (20–40s)",
      "3 story frames",
      "Hook, script & edit",
      "30-day organic usage",
    ],
  },
  {
    number: "02",
    name: "Brand Ambassador",
    price: "₹35,000",
    unit: "/ month",
    line: "A monthly presence your audience trusts.",
    includes: [
      "2 reels + 4 stories / month",
      "Product integration",
      "Monthly content calendar",
      "90-day usage",
    ],
  },
  {
    number: "03",
    name: "Video Campaign",
    price: "₹22,000",
    unit: "/ campaign",
    line: "A multi-reel story around your launch.",
    includes: [
      "3 reels",
      "8 edited stills",
      "Concept + shot list",
      "60-day paid usage",
    ],
    featured: true,
  },
  {
    number: "04",
    name: "Static + Video Campaign",
    price: "₹30,000",
    unit: "/ campaign",
    line: "One shoot, every asset you need.",
    includes: [
      "2 reels + 10 stills",
      "Creative direction",
      "2 rounds of edits",
      "90-day paid usage",
    ],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  brand: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Manali made our café feel like the kind of place you text a friend about. The reel crossed 13K views in a week — and the tables filled up.",
    author: "Riya Shah",
    role: "Founder",
    brand: "Bombay Boba & Co.",
  },
  {
    quote:
      "She shot the villa like she actually lived there. Our DMs were full of booking enquiries the same weekend the tour went live.",
    author: "Arjun Mehta",
    role: "Host",
    brand: "Karjat villa",
  },
  {
    quote:
      "The foundation reel felt honest, not scripted. That's exactly the tone we wanted — and it outperformed our own ad cut.",
    author: "Neha Kulkarni",
    role: "Marketing",
    brand: "MARS Cosmetics",
  },
];

export const navLinks = [
  { label: "Work", href: "#videos" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];
