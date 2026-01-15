import React from 'react';
import { motion } from 'framer-motion';

/**
 * AboutUs Section
 * 
 * This component clones the "Who we are" and "What we do" informational section 
 * from Codex. It adheres to the dark theme styling, typography, 
 * and layout patterns defined in the design system.
 */

const services = [
  {
    id: "01",
    title: "Digital Design & Branding",
    description: "Web designing, brand identity, and immersive visual storytelling that resonates with your audience and builds lasting connections.",
  },
  {
    id: "02",
    title: "Technical Engineering",
    description: "High-performance web and app development built for the modern web using the latest technologies and scalable architecture.",
  },
  {
    id: "03",
    title: "Intelligent Solutions",
    description: "Harnessing automation, data analysis, and data science to optimize your operations and drive informed decision making.",
  },
  {
    id: "04",
    title: "Growth & Visibility",
    description: "Strategic SEO and data-driven marketing to dominate your market and achieve sustainable business growth.",
  }
];

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
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl lg:text-6xl font-normal max-w-[900px] leading-[1.1] tracking-tight transform-gpu"
                style={{ willChange: "transform, opacity" }}
              >
                We are a <span className="text-muted-foreground italic">next-gen agency</span> dedicated to scaling brands through technical excellence and creative precision. From automation to data science, we build the future of digital commerce.
              </motion.p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 items-start pt-24 md:pt-40 border-t border-white/10">
          <div className="lg:col-span-4 self-start">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <h2 className="mono-label text-muted-foreground uppercase tracking-widest">04 — What we do</h2>
            </div>
          </div>
          <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="transform-gpu"
                style={{ willChange: "transform, opacity" }}
              >
                <p className="text-3xl md:text-5xl lg:text-6xl font-normal max-w-[900px] leading-[1.1] tracking-tight mb-16">
                Our multidisciplinary team delivers <span className="italic text-muted-foreground">end-to-end solutions</span> that drive real business growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {services.map((service) => (
                  <div key={service.id} className="group">
                    <span className="mono-label text-white/40 text-xs mb-4 block">
                      {service.id} — Service
                    </span>
                    <h3 className="text-2xl font-medium mb-4 group-hover:text-muted-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;