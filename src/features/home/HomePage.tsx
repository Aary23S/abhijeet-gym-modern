import { SEO } from "../../shared/components/SEO/SEO";
import { AboutSection } from "./components/AboutSection";
import { BranchesSection } from "./components/BranchesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";

export function HomePage() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <BranchesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}