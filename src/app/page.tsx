import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import CreatorDetails from "@/components/sections/creator-details";
import GallerySection from "@/components/sections/gallery";
import AboutAndFeatures from "@/components/sections/about-and-features";
import AuthorMore from "@/components/sections/author-more";
import RelatedTemplates from "@/components/sections/related-templates";
import CTABanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-[124px]"> {/* Offset for fixed dual navigation */}
        <HeroSection />
        <GallerySection />
        <AboutAndFeatures />
        <AuthorMore />
        <RelatedTemplates />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
