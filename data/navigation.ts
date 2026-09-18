import { NavLink } from "@/types";

export const navigationLinks: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Home", href: "/categories/home" },
  { label: "Outdoor", href: "/categories/outdoor-weekend" },
  { label: "Everyday", href: "/categories/everyday" },
  { label: "Travel", href: "/categories/travel" },
  {
    label: "More",
    href: "/categories",
    children: [
      { label: "Kitchen + Dining", href: "/categories/kitchen-dining" },
      { label: "Apparel + Accessories", href: "/categories/apparel-accessories" },
      { label: "Wellness + Fitness", href: "/categories/wellness-fitness" },
      { label: "Tech + Workspace", href: "/categories/tech-workspace" },
      { label: "Gifts", href: "/categories/gifts" },
      { label: "New Arrivals", href: "/new-arrivals" },
      { label: "Best Sellers", href: "/best-sellers" },
    ],
  },
];

export const footerLinks = {
  shop: [
    { label: "Shop All", href: "/shop" },
    { label: "Categories", href: "/categories" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  customerCare: [
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Track Order", href: "/track-order" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
