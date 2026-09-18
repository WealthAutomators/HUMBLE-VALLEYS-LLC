import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.shortName}`}
        description={company.description}
        breadcrumbs={[{ label: "About" }]}
      />

      <Container className="pb-16">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="How we think about the shop">
            <p>
              Humble Valleys is a contemporary lifestyle shop. We look for practical, well-designed
              objects for the home, the table, the weekend, and everyday carry — pieces that feel
              considered without being precious.
            </p>
            <p className="mt-4">
              The name is meant to feel calm and grounded. It is not a story about a valley, a ranch,
              or a family property. It is a standard for how the catalog is chosen: useful first,
              then beautiful, then quiet.
            </p>
            <p className="mt-4">
              {company.name} ships from {company.address.city}, {company.address.state}. Questions
              about an order or a product can be sent to{" "}
              <a href={`mailto:${company.email}`} className="text-primary underline-offset-4 hover:underline">
                {company.email}
              </a>
              .
            </p>
          </PageSection>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Edited, not endless", desc: "A smaller catalog across home, outdoor, travel, and everyday living." },
            { title: "Meant to be used", desc: "We prefer objects that settle into daily life rather than sit on a shelf." },
            { title: "Straightforward service", desc: "Clear shipping, 30-day returns, and a real person at the other end of an email." },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border bg-ivory p-6">
              <h3 className="font-serif text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <PageSection title="What customers say" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div key={t.id} className="border border-border bg-ivory p-6">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
