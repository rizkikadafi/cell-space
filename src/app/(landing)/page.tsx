import AboutSection from "./_components/about-section";
import BenefitsSection from "./_components/benefit-section";
import FeaturesSection from "./_components/features-section";
import FooterSection from "./_components/footer-section";
import HeroSection from "./_components/hero-section";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <div className="*:py-24">
        <AboutSection />
        <FeaturesSection />
        <BenefitsSection />
      </div>
      <FooterSection />
    </>
  );
}
