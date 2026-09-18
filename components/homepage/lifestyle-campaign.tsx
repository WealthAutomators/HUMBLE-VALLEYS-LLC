"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LifestyleCampaignProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  products: Product[];
  reverse?: boolean;
  tone?: "default" | "dark";
}

export function LifestyleCampaign({
  eyebrow,
  title,
  description,
  ctaText,
  ctaLink,
  image,
  products,
  reverse = false,
  tone = "default",
}: LifestyleCampaignProps) {
  return (
    <section className={cn("py-8 md:py-12", tone === "dark" && "bg-primary text-primary-foreground")}>
      <Container>
        <div className={cn("grid items-center gap-8 lg:grid-cols-2 lg:gap-14", reverse && "lg:[&>*:first-child]:order-2")}>
          <motion.div
            className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-[5/4]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </motion.div>

          <div>
            <p
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.28em]",
                tone === "dark" ? "text-white/70" : "text-accent"
              )}
            >
              {eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight md:text-4xl">{title}</h2>
            <p
              className={cn(
                "mt-4 max-w-md text-base leading-relaxed",
                tone === "dark" ? "text-white/75" : "text-muted-foreground"
              )}
            >
              {description}
            </p>
            <Button
              asChild
              size="lg"
              className={cn("mt-6", tone === "dark" && "bg-ivory text-primary hover:bg-white")}
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.slug}`} className="group min-w-0">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="150px"
                    />
                  </div>
                  <p className="mt-2 truncate text-xs font-medium">{product.name}</p>
                  <p className={cn("text-xs", tone === "dark" ? "text-white/65" : "text-muted-foreground")}>
                    {formatPrice(product.salePrice ?? product.price)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
