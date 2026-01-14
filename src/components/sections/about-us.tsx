import React from 'react';

/**
 * AboutUs Section
 * 
 * This component clones the "Who we are" and "What we do" informational section 
 * from Estrela Studio. It adheres to the dark theme styling, typography, 
 * and layout patterns defined in the design system.
 */

const AboutUs: React.FC = () => {
  return (
    <section className="bg-background text-foreground section-spacing px-[5vw] flex flex-col gap-y-24 md:gap-y-40">
      {/* Who We Are Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 items-start">
        <div className="lg:col-span-4 self-start">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <h2 className="mono-label text-muted-foreground">Who we are</h2>
          </div>
        </div>
        <div className="lg:col-span-8">
          <p className="section-title max-w-[900px]">
            Estrela Studio is a people-first design studio that cares as much about your business and product as you do. We’re big on honesty, collaboration, and good coffee, the foundations of every great partnership. No project is too small for our A-game and we pour the same craft and care into every brief. Our promise is simple: to guide you with a steady, nurturing hand and turn your ideas, big or small, into brands, websites, and experiences that truly matter.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-border opacity-50" />

      {/* What We Do Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <h2 className="mono-label text-muted-foreground">What we do</h2>
          </div>
          <div className="max-w-[340px]">
            <p className="text-xl md:text-2xl font-normal leading-tight">
              Discover our services and how we shape purpose-driven digital and branding experiences.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-y-16 md:gap-y-24">
          {/* Service 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8 md:pt-12">
            <h3 className="text-2xl md:text-3xl font-normal">Product strategy and design</h3>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
              Great products don’t just happen, they’re shaped by insight. We dig into research, audits, and user testing to understand what people need, then translate those findings into smart, intuitive UX solutions where every decision has purpose.
            </p>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8 md:pt-12">
            <h3 className="text-2xl md:text-3xl font-normal">App and website design</h3>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
              We think outside the box to make sure your product sets itself apart and sets the bar. We build beautiful, intuitive interfaces that are compelling and consistent, powered by scalable design systems.
            </p>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8 md:pt-12">
            <h3 className="text-2xl md:text-3xl font-normal">Brand strategy and identity design</h3>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
              Why look like someone else when you want to stand out? Together, we craft unique brand identities across touchpoints with a digital-first mindset. We bring the spark by distilling your brand DNA and getting to the root of what your users actually want.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;