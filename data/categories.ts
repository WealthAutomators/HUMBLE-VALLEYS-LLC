import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Lighting, textiles, storage, and quiet objects for everyday rooms.",
    productCount: 8,
  },
  {
    id: "2",
    slug: "kitchen-dining",
    name: "Kitchen + Dining",
    image: "/categories/kitchen-dining.jpg",
    description: "Tableware, drinkware, and tools for cooking, serving, and gathering.",
    productCount: 7,
  },
  {
    id: "3",
    slug: "outdoor-weekend",
    name: "Outdoor + Weekend",
    image: "/categories/outdoor-weekend.jpg",
    description: "Patio, picnic, and leisure pieces for time spent outside.",
    productCount: 6,
  },
  {
    id: "4",
    slug: "travel",
    name: "Travel",
    image: "/categories/travel.jpg",
    description: "Weekenders, packs, and organizers for the road and the overnight.",
    productCount: 5,
  },
  {
    id: "5",
    slug: "everyday",
    name: "Everyday",
    image: "/categories/everyday.jpg",
    description: "Carry, organization, and personal accessories for daily use.",
    productCount: 5,
  },
  {
    id: "6",
    slug: "apparel-accessories",
    name: "Apparel + Accessories",
    image: "/categories/apparel-accessories.jpg",
    description: "Contemporary basics, light layers, and simple finishing pieces.",
    productCount: 5,
  },
  {
    id: "7",
    slug: "wellness-fitness",
    name: "Wellness + Fitness",
    image: "/categories/wellness-fitness.jpg",
    description: "Recovery, movement, and hydration for a steady everyday routine.",
    productCount: 5,
  },
  {
    id: "8",
    slug: "tech-workspace",
    name: "Tech + Workspace",
    image: "/categories/tech-workspace.jpg",
    description: "Useful electronics and desk tools that keep work comfortable.",
    productCount: 5,
  },
  {
    id: "9",
    slug: "gifts",
    name: "Gifts",
    image: "/categories/gifts.jpg",
    description: "Thoughtful, practical presents for the home and the people in it.",
    productCount: 5,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
