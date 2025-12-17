import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy">
      <Header />
      <HeroSlider />
      <Services />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
