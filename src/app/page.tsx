import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import IntroExperience from "@/components/sections/intro-experience";
import FeaturedWork from "@/components/sections/featured-work";
import AboutUs from "@/components/sections/about-us";
import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faqs";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <IntroExperience />
        <FeaturedWork />
        <AboutUs />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
