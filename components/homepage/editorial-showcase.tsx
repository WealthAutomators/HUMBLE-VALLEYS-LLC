"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { editorialShowcaseSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function EditorialShowcase() {
  const products = getProductsBySlugs(editorialShowcaseSlugs);

  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Editorial Showcase"
          subtitle="Three pieces that capture the shop: a quiet object for the room, a tool for the table, a layer for the weekend."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Link href={`/product/${product.slug}`} className="group block">
                <div className={`relative overflow-hidden bg-muted ${index === 1 ? "aspect-[3/4] md:mt-10" : "aspect-[4/5]"}`}>
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="mt-1 font-serif text-2xl group-hover:text-primary">{product.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <p className="mt-3 text-sm font-medium">{formatPrice(product.salePrice ?? product.price)}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
