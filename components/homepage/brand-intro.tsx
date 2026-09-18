"use client";

import { motion } from "framer-motion";
import { brandIntro } from "@/data/homepage";
import { Container } from "@/components/ui/container";

export function BrandIntro() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            {brandIntro.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">
            {brandIntro.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {brandIntro.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
