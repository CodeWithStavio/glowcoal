import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import About from "@/components/About";
import VideoShowcase from "@/components/VideoShowcase";
import StatsBenefits from "@/components/StatsBenefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import OrangeSectionsWrapper from "@/components/OrangeSectionsWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy">
      <Header />
      <HeroSlider />
      <Services />
      <About />
      <VideoShowcase />
      {/* Single world map background spans all orange sections */}
      <OrangeSectionsWrapper>
        <StatsBenefits />
        <CTA />
        <Footer />
      </OrangeSectionsWrapper>
    </main>
  );
}
