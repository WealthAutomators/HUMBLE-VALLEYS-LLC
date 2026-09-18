"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { humbleEdit, humbleEditSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HumbleEdit() {
  const products = getProductsBySlugs(humbleEditSlugs);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={humbleEdit.image}
                alt={humbleEdit.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              {humbleEdit.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              {humbleEdit.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              {humbleEdit.description}
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/shop?collection=humble-edit">Shop the Edit</Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-8 lg:col-span-7">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <Link href={`/product/${product.slug}`} className="group flex gap-4">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-muted sm:h-28 sm:w-24">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="96px"
                    />
                  </div>
                  <div className="min-w-0 py-1">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")} · {product.category}
                    </p>
                    <h3 className="mt-1 text-sm font-medium leading-snug group-hover:text-primary">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {formatPrice(product.salePrice ?? product.price)}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
