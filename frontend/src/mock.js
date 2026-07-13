// Mock data for Elegant Style salon website

export const SALON = {
  name: "Elegant Style",
  owner: "Upasana Rajput",
  tagline: "Refined. Radiant. Yours.",
  established: 2016,
  rating: 5.0,
  reviewCount: 238,
  yearsOperating: 10,
  phone: "085271 18833",
  phoneRaw: "+918527118833",
  address: {
    street: "E-5, Arya Samaj Rd, near Scoops, Block E/F",
    area: "Uttam Nagar",
    city: "New Delhi",
    pincode: "110059",
  },
  hours: {
    weekdays: "10:00 AM – 9:00 PM",
    sunday: "11:00 AM – 8:00 PM",
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  stylists: ["Siraj", "Nasreen", "Aamir", "Sidhu"],
};

// Uploaded salon interior photos
export const SALON_PHOTOS = [
  {
    id: "p0",
    src: "/images/hero.jpg",
    title: "The Storefront",
    category: "Exterior",
    tag: "Entrance",
  },
  {
    id: "p1",
    src: "/images/chairs2.jpg",
    title: "Styling Suite",
    category: "Interior",
    tag: "Hair",
  },
  {
    id: "p2",
    src: "/images/mirrors.jpg",
    title: "Signature Station",
    category: "Interior",
    tag: "Styling",
  },
  {
    id: "p3",
    src: "/images/nails.jpg",
    title: "The Colour Bar",
    category: "Retail",
    tag: "Products",
  },
  {
    id: "p4",
    src: "/images/reception.jpg",
    title: "Welcome Desk",
    category: "Reception",
    tag: "Entry",
  },
  {
    id: "p5",
    src: "/images/facial2.jpg",
    title: "Skincare Suite",
    category: "Facial",
    tag: "Wellness",
  },
  {
    id: "p6",
    src: "/images/gallery1.jpg",
    title: "Bridal Group",
    category: "Makeup",
    tag: "Event",
  },
  {
    id: "p7",
    src: "/images/gallery2.jpg",
    title: "Bridal Styling",
    category: "Makeup",
    tag: "Event",
  },
  {
    id: "p8",
    src: "/images/gallery3.jpg",
    title: "Bridal Portrait",
    category: "Makeup",
    tag: "Bridal",
  },
  {
    id: "p9",
    src: "/images/gallery4.jpg",
    title: "Bridal Look",
    category: "Makeup",
    tag: "Bridal",
  },
];

export const SERVICES = [
  // Hair
  { id: "s1", category: "Hair", name: "Haircut & Styling (Women)", duration: "45 min", price: 850 },
  { id: "s2", category: "Hair", name: "Haircut (Men)", duration: "30 min", price: 450 },
  { id: "s3", category: "Hair", name: "Global Hair Colour", duration: "90 min", price: 3500 },
  { id: "s4", category: "Hair", name: "Highlights & Balayage", duration: "180 min", price: 6500 },
  { id: "s5", category: "Hair", name: "Keratin Smoothening", duration: "180 min", price: 5500 },
  { id: "s6", category: "Hair", name: "Hair Spa (Deep Conditioning)", duration: "60 min", price: 1400 },

  // Makeup
  { id: "s7", category: "Makeup", name: "Party / Event Makeup", duration: "60 min", price: 3500 },
  { id: "s8", category: "Makeup", name: "Bridal Makeup (HD)", duration: "120 min", price: 18000 },
  { id: "s9", category: "Makeup", name: "Engagement Makeup", duration: "90 min", price: 12000 },
  { id: "s10", category: "Makeup", name: "Airbrush Makeup", duration: "90 min", price: 15000 },

  // Skincare
  { id: "s11", category: "Skincare", name: "Classic Clean-up", duration: "45 min", price: 750 },
  { id: "s12", category: "Skincare", name: "Hydra Facial", duration: "60 min", price: 2800 },
  { id: "s13", category: "Skincare", name: "Korean Glow Facial", duration: "75 min", price: 3500 },
  { id: "s14", category: "Skincare", name: "Anti-Ageing Treatment", duration: "60 min", price: 4500 },

  // Nails
  { id: "s15", category: "Nails", name: "Classic Manicure", duration: "30 min", price: 500 },
  { id: "s16", category: "Nails", name: "Gel Polish (Gelish)", duration: "45 min", price: 1200 },
  { id: "s17", category: "Nails", name: "Nail Extensions", duration: "90 min", price: 2500 },
  { id: "s18", category: "Nails", name: "Spa Pedicure", duration: "45 min", price: 900 },

  // Grooming
  { id: "s19", category: "Grooming", name: "Beard Shape & Trim", duration: "20 min", price: 250 },
  { id: "s20", category: "Grooming", name: "Threading (Eyebrows + Upper Lip)", duration: "15 min", price: 120 },
  { id: "s21", category: "Grooming", name: "Full Body Wax", duration: "60 min", price: 1400 },
  { id: "s22", category: "Grooming", name: "Head Massage", duration: "30 min", price: 500 },
];

export const CATEGORIES = ["All", "Hair", "Makeup", "Skincare", "Nails", "Grooming"];

export const SEED_REVIEWS = [
  {
    id: "r1",
    name: "Priya Sharma",
    rating: 5,
    date: "2 weeks ago",
    service: "Bridal Makeup",
    text: "Upasana ma'am is truly gifted. She made me feel like royalty on my wedding day — every guest complimented my look. Highly recommend Elegant Style!",
  },
  {
    id: "r2",
    name: "Ananya Verma",
    rating: 5,
    date: "1 month ago",
    service: "Balayage & Haircut",
    text: "Best salon in Uttam Nagar hands down. Siraj is a magician with colour — he understood exactly what I wanted. Ambience is beautiful and calming.",
  },
  {
    id: "r3",
    name: "Rahul Mehta",
    rating: 5,
    date: "3 weeks ago",
    service: "Men's Grooming",
    text: "Aamir gave me the cleanest fade I've had in years. Genuinely a premium experience without the crazy south-Delhi price tag.",
  },
  {
    id: "r4",
    name: "Neha Kapoor",
    rating: 5,
    date: "1 week ago",
    service: "Korean Glow Facial",
    text: "My skin was glowing for days after the Korean facial. Nasreen is so knowledgeable and gentle. Booking again next month for sure.",
  },
  {
    id: "r5",
    name: "Sana Ali",
    rating: 5,
    date: "2 months ago",
    service: "Keratin Treatment",
    text: "Frizz-free hair for 6 months straight. Worth every rupee. The team is warm, professional, and truly passionate.",
  },
  {
    id: "r6",
    name: "Ishita Gupta",
    rating: 5,
    date: "5 days ago",
    service: "Nail Extensions",
    text: "Gorgeous nail work — subtle, chic, and long-lasting. The studio itself is like a mini five-star. Love, love, love.",
  },
];

export const HERO_STOREFRONT =
  "/images/hero.jpg";

export const SALON_VIDEOS = [
  {
    id: "v1",
    src: "/videos/video1.mp4.mov",
    title: "Salon Walkthrough",
    category: "Interior",
    tag: "Tour",
  },
  {
    id: "v2",
    src: "/videos/video2.mp4.mov",
    title: "Bridal Styling process",
    category: "Makeup",
    tag: "Event",
  },
  {
    id: "v3",
    src: "/videos/video3.mp4.mov",
    title: "Client Experience",
    category: "Interior",
    tag: "Client",
  },
  {
    id: "v5",
    src: "/videos/video5.mp4.mov",
    title: "Beautiful Result",
    category: "Hair",
    tag: "Styling",
  }
];
