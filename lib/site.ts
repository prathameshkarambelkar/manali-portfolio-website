export const site = {
  name: "Manali Jagtap",
  firstName: "Manali",
  handle: "@manalijagtap_13",
  foodHandle: "@forking_aroundddd",
  role: "Lifestyle & Brand Content Creator",
  tagline: "Stories that make people stop, save and show up.",
  location: "Mumbai, India",
  email: "hello@manalijagtap.com",
  phoneDisplay: "+91 98200 00013",
  phone: "919820000013",
  instagram: "https://www.instagram.com/manalijagtap_13/",
  foodInstagram: "https://www.instagram.com/forking_aroundddd/",
  since: "2023",
  availability: "Open for collaborations · 2026",
  bio: [
    "I'm Manali — a Mumbai-based travel and lifestyle creator who plans trips around light, food and the stories in between. From Ganga aarti mornings in Haridwar to slow Goa afternoons, I make content that feels like a friend's recommendation.",
    "I create travel, stay, café and beauty content for brands — reviews, stay tours, unboxings and the kind of reels people save for their next trip. And I still get excited about a good window seat.",
  ],
  tags: ["Travel", "Food", "Beauty", "Lifestyle", "Stays"],
};

export const coverStats = [
  { value: "525K", label: "views in 30 days" },
  { value: "3,357", label: "followers" },
  { value: "793K", label: "top reel" },
  { value: "4", label: "brand partners" },
];

export const insights = {
  period: "Last 30 days",
  views: "525,140",
  followers: "3,357",
  netFollowers: "+95",
  viewers: "373,659",
  reelShare: "97%",
  dailyAverage: "17.5K",
  indiaShare: "58.9%",
  age: [
    { label: "13–17", value: 1.0 },
    { label: "18–24", value: 22.1 },
    { label: "25–34", value: 43.3 },
    { label: "35–44", value: 20.4 },
    { label: "45–54", value: 9.1 },
    { label: "55–64", value: 3.1 },
    { label: "65+", value: 1.0 },
  ],
  locations: [
    { label: "Mumbai", value: 8.1 },
    { label: "Panvel", value: 7.5 },
    { label: "Navi Mumbai", value: 4.8 },
    { label: "Thane", value: 2.3 },
    { label: "Delhi", value: 2.0 },
  ],
  languages: [
    { label: "English", value: 68.0 },
    { label: "Hindi", value: 6.8 },
    { label: "Marathi", value: 6.7 },
  ],
  viewsByType: [
    { label: "Reels", value: "510K" },
    { label: "Stories", value: "7.4K" },
  ],
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
    title: "Fashion & shopping",
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
  video?: string;
  webm?: string;
  startAt?: number;
  top?: boolean;
};

/**
 * Local MP4s power in-site playback. Travel reels without a local file open
 * an in-site "full reel on request" preview instead of redirecting.
 * `startAt` is the playback offset in seconds.
 */
export const videos: Video[] = [
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
    title: "Ganga Aarti, Haridwar",
    brand: "Haridwar",
    type: "Travel film",
    views: "793K",
    image: "/images/cover-aarti.webp",
    href: site.instagram,
    top: true,
  },
  {
    title: "MARS foundation",
    brand: "MARS Cosmetics",
    type: "Beauty content",
    views: "13.1K",
    image: "/images/video-mars.webp",
    href: "https://www.instagram.com/p/Dd0RtuvBbut/",
    video: "/videos/mars.mp4",
    webm: "/videos/mars.webm",
    startAt: 2,
  },
  {
    title: "OneGummy biotin",
    brand: "OneGummy",
    type: "Wellness content",
    views: "",
    image: "/images/video-gummy.webp",
    href: "https://www.instagram.com/reel/Dc5DnGSzqmT/",
    video: "/videos/onegummy.mp4",
    webm: "/videos/onegummy.webm",
    startAt: 2,
  },
];

export const moreBrandWork = [
  { brand: "Maybelline New York", views: "Collab in progress" },
];

export type Partner = {
  name: string;
  category: string;
  logo: string;
  href: string;
  status: "Collab live" | "Content in progress";
  tone: "ink" | "paper";
  collab?: string;
};

export const partners: Partner[] = [
  {
    name: "OneGummy",
    category: "Wellness & supplements",
    logo: "/images/brands/onegummy.webp",
    href: "https://www.instagram.com/onegummy/",
    status: "Collab live",
    tone: "paper",
    collab: "https://www.instagram.com/reel/Dc5DnGSzqmT/",
  },
  {
    name: "MARS Cosmetics",
    category: "Beauty & cosmetics",
    logo: "/images/brands/mars.png",
    href: "https://www.instagram.com/reachedmars/",
    status: "Collab live",
    tone: "ink",
    collab: "https://www.instagram.com/p/Dd0RtuvBbut/",
  },
  {
    name: "Maybelline New York",
    category: "Beauty & cosmetics",
    logo: "/images/brands/maybelline.webp",
    href: "https://www.instagram.com/maybelline_ind/",
    status: "Content in progress",
    tone: "paper",
  },
  {
    name: "Casa Regal",
    category: "Stays & villas · South Goa",
    logo: "/images/brands/casa-regal.webp",
    href: "https://casaregal.in/",
    status: "Collab live",
    tone: "paper",
    collab: "https://www.instagram.com/reel/DXRqGQOCkkK/",
  },
];

export const navLinks = [
  { label: "Work", href: "#videos" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];
