import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-cinematic.jpg",
    headline: "Made for everyday living.",
    description:
      "A calm, considered shop for the home, the table, the weekend, and the road — pieces chosen to be used, not displayed.",
    ctaText: "Shop the Collection",
    ctaLink: "/shop",
    secondaryCtaText: "The Humble Edit",
    secondaryCtaLink: "/shop?collection=humble-edit",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Free Shipping Over $75",
    description: "Standard delivery in 3–5 business days on qualifying orders.",
  },
  {
    id: "2",
    icon: "rotate",
    title: "30-Day Returns",
    description: "Send back unused items in original condition within 30 days.",
  },
  {
    id: "3",
    icon: "shield",
    title: "Secure Checkout",
    description: "Demo checkout with encrypted, protected payment fields.",
  },
  {
    id: "4",
    icon: "star",
    title: "Carefully Chosen",
    description: "A smaller catalog, edited for usefulness and lasting design.",
  },
];

export const dealsEndTime = "2026-12-31T18:00:00.000Z";

export const homepageDealsSlugs = [
  "cotton-bath-towel-set",
  "stovetop-tea-kettle",
  "everyday-sunglasses",
  "studio-yoga-mat",
  "canvas-weekender-duffel",
  "vessel-scented-candle",
] as const;

export const homepageBestsellerSlugs = [
  "knit-sofa-throw",
  "everyday-ceramic-mug",
  "canvas-weekender-duffel",
  "slim-leather-wallet",
  "studio-yoga-mat",
  "portable-bluetooth-speaker",
  "stoneware-dinner-plates",
  "cotton-everyday-tee",
] as const;

export const homepageFeaturedSlugs = [
  "ceramic-console-lamp",
  "walnut-serving-board",
  "porch-lantern",
  "canvas-weekender-duffel",
  "compact-crossbody-bag",
  "cotton-overshirt",
  "hardcover-notebook",
  "vessel-scented-candle",
] as const;

export const homepageNewArrivalSlugs = [
  "canvas-hammock",
  "linen-lounge-cushion",
  "leather-document-cover",
  "adjustable-desk-light",
  "loose-leaf-tea-set",
  "garden-fire-bowl",
] as const;

export const humbleEditSlugs = [
  "knit-sofa-throw",
  "everyday-ceramic-mug",
  "weekend-picnic-blanket",
  "canvas-daypack",
  "slim-leather-wallet",
  "hardcover-notebook",
  "vessel-scented-candle",
  "cotton-everyday-tee",
] as const;

export const homeGatherSlugs = [
  "ceramic-console-lamp",
  "stoneware-dinner-plates",
  "ceramic-serving-bowl",
  "linen-lounge-cushion",
] as const;

export const outdoorWeekendSlugs = [
  "porch-lantern",
  "wicker-picnic-basket",
  "weekend-picnic-blanket",
  "garden-watering-can",
] as const;

export const everydayAwaySlugs = [
  "canvas-weekender-duffel",
  "travel-backpack",
  "compact-crossbody-bag",
  "aluminium-day-bottle",
] as const;

export const editorialShowcaseSlugs = [
  "stoneware-bud-vase",
  "manual-coffee-grinder",
  "midweight-denim-jacket",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Good things, simply chosen.",
  description:
    "A seasonal edit of home textiles, tableware, and weekend pieces — useful objects with a quieter kind of presence.",
  buttonText: "Shop New Arrivals",
  buttonLink: "/new-arrivals",
  image: "/banners/promo.jpg",
};

export const aboutSection = {
  title: "Grounded in the everyday.",
  description:
    "Humble Valleys is a shop for modern living: home objects, outdoor weekend pieces, travel bags, and practical essentials. We look for things that feel considered without being precious — designed to settle into daily life.",
  checklist: [
    "Edited collections instead of endless aisles",
    "Pieces meant for regular use, not display only",
    "Warm materials and calm, contemporary design",
    "Straightforward shipping, returns, and support",
  ],
  buttonText: "Our Approach",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "Featured Collection",
  description: "A cross-section of the shop: home, table, travel, and everyday carry.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "home",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Home", slug: "home" },
  { label: "Kitchen", slug: "kitchen-dining" },
  { label: "Outdoor", slug: "outdoor-weekend" },
  { label: "Everyday", slug: "everyday" },
];

export const newsletter = {
  title: "Notes from the shop",
  description: "New arrivals, seasonal edits, and a few useful recommendations — sent occasionally.",
  placeholder: "Your email address",
  buttonText: "Subscribe",
};

export const brandIntro = {
  eyebrow: "Humble Valleys",
  title: "A quieter kind of shop.",
  description:
    "We gather practical, well-made pieces for contemporary American living — the table you set on a weeknight, the bag you take for two days away, the throw that stays on the sofa all season.",
};

export const lifestyleCampaigns = {
  homeGather: {
    eyebrow: "Home, Gathered",
    title: "Rooms meant to be lived in.",
    description:
      "Lighting, linens, and tableware with a warm, unhurried presence — objects that make gathering feel easy.",
    ctaText: "Shop Home",
    ctaLink: "/categories/home",
    image: "/banners/home-gather.jpg",
  },
  outdoorWeekend: {
    eyebrow: "Weekend Well Spent",
    title: "Time outside, kept simple.",
    description:
      "Picnic pieces, porch lighting, and garden tools for slow afternoons and long light.",
    ctaText: "Shop Outdoor",
    ctaLink: "/categories/outdoor-weekend",
    image: "/banners/outdoor-weekend.jpg",
  },
  everydayAway: {
    eyebrow: "Out + About",
    title: "Packed without the fuss.",
    description:
      "Weekenders, daypacks, and everyday bags for the drive, the overnight, and the in-between.",
    ctaText: "Shop Travel",
    ctaLink: "/categories/travel",
    image: "/banners/everyday-away.jpg",
  },
  secondary: {
    eyebrow: "Modern Living, Grounded",
    title: "Useful things, chosen with care.",
    description:
      "From the kitchen island to the desk, a collection that favors natural materials, clear function, and a calm silhouette.",
    ctaText: "Shop All",
    ctaLink: "/shop",
    image: "/banners/campaign.jpg",
  },
  philosophy: {
    eyebrow: "How we choose",
    title: "Less noise. More use.",
    description:
      "Humble Valleys is not a story about a ranch or a founding myth. It is a shop with a simple brief: find well-designed everyday objects, photograph them honestly, and make them easy to live with.",
    ctaText: "Read About Us",
    ctaLink: "/about",
    image: "/banners/philosophy.jpg",
  },
};

export const humbleEdit = {
  eyebrow: "Signature collection",
  title: "The Humble Edit",
  description:
    "Eight pieces we keep returning to — across home, table, weekend, and everyday carry. Not a theme. A standard.",
  image: "/banners/humble-edit.jpg",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
