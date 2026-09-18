"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { lifestyleCampaigns } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function BrandPhilosophy() {
  const { philosophy } = lifestyleCampaigns;

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src={philosophy.image}
        alt={philosophy.title}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/70" />
      <Container className="relative">
        <motion.div
          className="mx-auto max-w-2xl text-center text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
            {philosophy.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium md:text-5xl">{philosophy.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">{philosophy.description}</p>
          <Button asChild size="lg" className="mt-8 bg-ivory text-primary hover:bg-white">
            <Link href={philosophy.ctaLink}>{philosophy.ctaText}</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
