import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import PressSection from "@/components/home/PressSection";
import BestsellerGrid from "@/components/home/BestsellerGrid";
import BenefitsSection from "@/components/home/BenefitsSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import HowItWorksTeaser from "@/components/home/HowItWorksTeaser";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";
import BlogPreview from "@/components/home/BlogPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <PressSection />
      <BestsellerGrid />
      <BenefitsSection />
      <BeforeAfterSection />
      <HowItWorksTeaser />
      <TestimonialsSection />
      <CtaBanner />
      <BlogPreview />
    </>
  );
}
