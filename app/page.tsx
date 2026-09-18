import { HeroBanner } from "@/components/homepage/hero-banner";
import { BrandIntro } from "@/components/homepage/brand-intro";
import { LifestyleGrid } from "@/components/homepage/lifestyle-grid";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { EditorialShowcase } from "@/components/homepage/editorial-showcase";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { HumbleEdit } from "@/components/homepage/humble-edit";
import { LifestyleCampaign } from "@/components/homepage/lifestyle-campaign";
import { BestSellers } from "@/components/homepage/best-sellers";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { BrandPhilosophy } from "@/components/homepage/brand-philosophy";
import { FeaturesRow } from "@/components/homepage/features-row";
import { Newsletter } from "@/components/homepage/newsletter";
import { lifestyleCampaigns, homeGatherSlugs, outdoorWeekendSlugs, everydayAwaySlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";

const secondarySlugs = [
  "hardcover-notebook",
  "vessel-scented-candle",
  "cotton-overshirt",
  "manual-coffee-grinder",
] as const;

export default function HomePage() {
  const homeGather = getProductsBySlugs(homeGatherSlugs);
  const outdoorWeekend = getProductsBySlugs(outdoorWeekendSlugs);
  const everydayAway = getProductsBySlugs(everydayAwaySlugs);
  const secondary = getProductsBySlugs(secondarySlugs);

  return (
    <>
      <HeroBanner />
      <BrandIntro />
      <FeaturesRow />
      <LifestyleGrid />
      <FeaturedCollection />
      <EditorialShowcase />
      <NewArrivals />
      <HumbleEdit />
      <LifestyleCampaign {...lifestyleCampaigns.homeGather} products={homeGather} />
      <LifestyleCampaign {...lifestyleCampaigns.outdoorWeekend} products={outdoorWeekend} reverse />
      <LifestyleCampaign {...lifestyleCampaigns.everydayAway} products={everydayAway} tone="dark" />
      <BestSellers />
      <LifestyleCampaign {...lifestyleCampaigns.secondary} products={secondary} reverse />
      <PromotionalBanner />
      <BrandPhilosophy />
      <Newsletter />
    </>
  );
}
