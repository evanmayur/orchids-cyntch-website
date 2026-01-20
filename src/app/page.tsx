import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import IntroExperience from "@/components/sections/intro-experience";
import Services from "@/components/sections/services";
import AboutUs from "@/components/sections/about-us";
import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faqs";
import Footer from "@/components/sections/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { LoadingScreen } from "@/components/ui/loading-screen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <Navigation />
        <main>
          <Hero />
          <ScrollReveal>
            <IntroExperience />
          </ScrollReveal>

          <Services />

          <ScrollReveal>
            <AboutUs />
          </ScrollReveal>
          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>
          <ScrollReveal>
            <FAQSection />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </>
  );
}
