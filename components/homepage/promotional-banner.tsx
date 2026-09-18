import Link from "next/link";
import Image from "next/image";
import { promotionalBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-8 md:py-16">
      <Container>
        <div className="relative overflow-hidden">
          <div className="relative min-h-[320px] md:min-h-[420px]">
            <Image
              src={promotionalBanner.image}
              alt={promotionalBanner.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
            <div className="relative flex min-h-[320px] max-w-xl flex-col items-start justify-center p-8 md:min-h-[420px] md:p-14">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-white md:text-5xl">
                {promotionalBanner.title}
              </h2>
              <p className="mt-4 leading-relaxed text-white/85">{promotionalBanner.description}</p>
              <Button asChild size="lg" className="mt-8 bg-ivory text-primary hover:bg-white">
                <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
