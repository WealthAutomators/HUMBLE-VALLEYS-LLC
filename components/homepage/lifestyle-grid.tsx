"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function LifestyleGrid() {
  return (
    <section className="py-8 md:py-16">
      <Container>
        <SectionHeading
          title="Shop by Lifestyle"
          subtitle="Nine rooms of the shop — home, table, weekend, travel, and the things you carry every day."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <Link
                href={`/categories/${category.slug}`}
                className="group relative block overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                      {category.productCount} pieces
                    </p>
                    <h3 className="mt-1 font-serif text-2xl text-white">{category.name}</h3>
                    <p className="mt-1 max-w-sm text-sm text-white/80">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
