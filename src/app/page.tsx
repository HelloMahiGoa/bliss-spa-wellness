import { FaqSection } from "@/components/site/FaqSection";
import { FindUsSection } from "@/components/site/FindUsSection";
import { FirstVisitStrip } from "@/components/site/FirstVisitStrip";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { OfferBanner } from "@/components/site/OfferBanner";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { RitualsGrid } from "@/components/site/RitualsGrid";
import { SeoContent } from "@/components/site/SeoContent";

export default function Home() {
  return (
    <>
      <Header />
      <OfferBanner />
      <main className="flex min-w-0 flex-1 flex-col">
        <Hero />
        <FirstVisitStrip />
        <RitualsGrid />
        <ReviewsSection />
        <FindUsSection />
        <FaqSection />
        <SeoContent />
      </main>
      <Footer />
    </>
  );
}
