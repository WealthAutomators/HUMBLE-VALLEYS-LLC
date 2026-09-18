import { company } from "./company";

const fullAddress = `${company.address.street}, ${company.address.city}, ${company.address.state} ${company.address.zip}`;

export const faqItems = [
  {
    question: "What does Humble Valleys sell?",
    answer:
      "We offer a curated selection of contemporary lifestyle products across home, kitchen and dining, outdoor and weekend, travel, everyday carry, apparel, wellness, workspace, and gifts.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes. We offer free standard shipping on all orders over $75 within the contiguous United States. Orders under $75 have a flat rate of $9.99. Express shipping is available at checkout for $14.99.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping delivers in 3–5 business days. Express shipping delivers in 1–2 business days. You'll receive a tracking number by email once your order ships.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of delivery. Items must be unused and in original packaging. Visit our Returns page for step-by-step instructions or email us for help.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. Once your order ships, you'll receive an email with a tracking number and link. You can also visit our Track Order page and enter your order number and email address.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we ship within the United States only, including Alaska and Hawaii.",
  },
  {
    question: "How do I use a coupon code?",
    answer:
      "Enter your coupon code in the coupon field on the cart page and click Apply. Valid codes update your order total immediately. Only one coupon code can be used per order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay. Checkout on this site is a demonstration flow and does not process live payments.",
  },
  {
    question: "How can I contact you?",
    answer: `Email us at ${company.email}. We typically respond within one business day.`,
  },
];

export const shippingPolicy = {
  title: "Shipping Policy",
  description: "How HUMBLE VALLEYS LLC delivers orders.",
  sections: [
    {
      title: "Processing Time",
      content:
        "Orders are processed within 1–2 business days. Orders placed on weekends or holidays ship the next business day.",
    },
    {
      title: "Shipping Methods & Rates",
      content: "",
      list: [
        "Standard Shipping (3–5 business days): $9.99 — FREE on orders over $75",
        "Express Shipping (1–2 business days): $14.99",
        "Alaska & Hawaii: Standard shipping rates apply; delivery may take 5–7 business days",
      ],
    },
    {
      title: "Order Tracking",
      content:
        "Once your order ships, you'll receive a confirmation email with a tracking number. You can track your package from the email link or visit our Track Order page.",
    },
    {
      title: "Shipping Restrictions",
      content:
        "We currently ship to all 50 US states. We do not ship to PO boxes for express orders.",
    },
    {
      title: "Lost or Damaged Packages",
      content: `If your package arrives damaged or doesn't arrive within 10 business days of the estimated delivery date, please contact us at ${company.email}. We'll work with the carrier to resolve the issue.`,
    },
  ],
};

export const returnPolicy = {
  title: "Return Policy",
  description: "If a HUMBLE VALLEYS LLC order isn't right, we'll help make it right.",
  sections: [
    {
      title: "30-Day Return Window",
      content:
        "You may return most items within 30 days of delivery for a refund or exchange. Items must be unused and in their original packaging.",
    },
    {
      title: "How to Start a Return",
      content: "",
      list: [
        "Email us at " + company.email + " with your order number and reason for return",
        "We'll send return instructions within one business day",
        "Pack items securely in original packaging",
        "Refund processed within 5–7 business days of receiving your return",
      ],
    },
    {
      title: "Non-Returnable Items",
      content: "",
      list: [
        "Items marked as final sale",
        "Used or altered products",
        "Items without original packaging",
        "Gift cards",
      ],
    },
    {
      title: "Exchanges",
      content:
        "Need a different size or color? Contact us and we'll arrange an exchange when stock allows.",
    },
  ],
};

export const refundPolicy = {
  title: "Refund Policy",
  description: "How refunds are handled for HUMBLE VALLEYS LLC orders.",
  sections: [
    {
      title: "Refund Eligibility",
      content:
        "Refunds are available for items returned within 30 days of delivery in unused condition with original packaging. Sale items are eligible unless marked as final sale.",
    },
    {
      title: "Refund Processing Time",
      content:
        "Once we receive and inspect your return, refunds are processed within 5–7 business days to your original payment method. Please allow additional time for your bank to reflect the credit.",
    },
    {
      title: "Partial Refunds",
      content: "",
      list: [
        "Items with obvious signs of use may receive a partial refund",
        "Items returned without original packaging may incur a 15% restocking fee",
        "Shipping costs are non-refundable unless the return is due to our error",
      ],
    },
    {
      title: "Defective or Wrong Items",
      content:
        "If you receive a defective or incorrect item, contact us. We'll arrange a return and issue a full refund including original shipping, or send a replacement.",
    },
    {
      title: "Contact Us",
      content: `Questions about refunds? Email ${company.email}.`,
    },
  ],
};

export const privacyPolicy = {
  title: "Privacy Policy",
  description: "How HUMBLE VALLEYS LLC collects, uses, and protects your information.",
  sections: [
    {
      title: "Information We Collect",
      content:
        "When you visit our website, create an account, or place an order, we may collect your name, email address, shipping address, and payment information. We also collect browsing data through cookies to improve your shopping experience.",
    },
    {
      title: "How We Use Your Information",
      content: "",
      list: [
        "Process and fulfill your orders",
        "Send order confirmations and shipping updates",
        "Respond to customer service requests",
        "Send marketing communications (with your consent)",
        "Improve our website and product offerings",
        "Prevent fraud and ensure security",
      ],
    },
    {
      title: "Information Sharing",
      content:
        "We do not sell your personal information. We share data only with trusted service providers who help us operate — such as shipping carriers and payment processors — and only as needed to provide our services.",
    },
    {
      title: "Cookies",
      content:
        "We use cookies to remember your cart, wishlist, and preferences. You can disable cookies in your browser settings, though some site features may not function properly.",
    },
    {
      title: "Your Rights",
      content:
        "You may request access to, correction of, or deletion of your personal data by contacting us at " +
        company.email +
        ".",
    },
    {
      title: "Contact",
      content: `For privacy-related inquiries, contact us at ${company.email} or write to: ${company.name}, ${fullAddress}.`,
    },
  ],
};

export const termsPolicy = {
  title: "Terms & Conditions",
  description: "Please read these terms carefully before using the HUMBLE VALLEYS LLC website.",
  sections: [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using the HUMBLE VALLEYS LLC website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.",
    },
    {
      title: "Products & Pricing",
      content:
        "We strive to display accurate product descriptions, images, and pricing. Errors may occur. We reserve the right to correct any errors and to change or update information at any time without prior notice. Prices are in US dollars and subject to change.",
    },
    {
      title: "Orders & Payment",
      content:
        "Placing an order constitutes an offer to purchase. We reserve the right to refuse or cancel any order. This website uses a demonstration checkout and does not process live payments.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this website — including text, images, logos, and design — is the property of HUMBLE VALLEYS LLC and protected by copyright and trademark laws. You may not reproduce, distribute, or use our content without written permission.",
    },
    {
      title: "Limitation of Liability",
      content:
        "HUMBLE VALLEYS LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the product in question.",
    },
    {
      title: "Governing Law",
      content:
        "These terms are governed by the laws of the State of Texas, United States. Any disputes shall be resolved in the courts of Tarrant County, Texas.",
    },
  ],
};
