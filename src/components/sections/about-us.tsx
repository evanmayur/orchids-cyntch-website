"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from "@/components/ui/magnetic";

/**
 * AboutUs Section
 * 
 * Updated to reflect the new agency status and services.
 */

const AboutUs: React.FC = () => {
  return (
    <section className="bg-black text-white py-[clamp(100px,15vw,200px)] px-[5vw] flex flex-col gap-y-24 md:gap-y-40 overflow-hidden">
      {/* Who We Are Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 items-start">
        <div className="lg:col-span-4 self-start">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            <h2 className="mono-label text-muted-foreground uppercase tracking-widest">03 — Who we are</h2>
          </div>
        </div>
        <div className="lg:col-span-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-normal max-w-[900px] leading-[1.1] tracking-tight"
            >
              We are a <span className="text-muted-foreground italic">next-gen agency</span> dedicated to scaling brands through technical excellence and creative precision. From automation to data science, we build the future of digital commerce.
            </motion.p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10" />

      {/* What We Do Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16">
        <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-2 h-2 rounded-full bg-white" />
            <h2 className="mono-label text-muted-foreground uppercase tracking-widest">04 — What we do</h2>
          </div>
          <div className="max-w-[340px]">
            <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
              Our multidisciplinary team delivers end-to-end solutions that drive real business growth.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-y-12">
          {/* Service Categories */}
          {[
            {
              title: "Digital Design & Branding",
              desc: "Web designing, brand identity, and immersive visual storytelling that resonates.",
              tags: ["UI/UX", "Brand Development", "Visual Systems"]
            },
            {
              title: "Technical Engineering",
              desc: "High-performance web and app development built for the modern web.",
              tags: ["Next.js", "React Native", "Scalable Architecture"]
            },
            {
              title: "Intelligent Solutions",
              desc: "Harnessing automation, data analysis, and data science to optimize your operations.",
              tags: ["AI/ML", "Workflow Automation", "Data Science"]
            },
            {
              title: "Growth & Visibility",
              desc: "Strategic SEO and data-driven marketing to dominate your market.",
              tags: ["SEO", "Performance Marketing", "Strategy"]
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-t border-white/10 pt-10 pb-2"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="max-w-[400px]">
                  <h3 className="text-2xl md:text-3xl font-normal mb-4 group-hover:italic transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 h-fit md:justify-end md:max-w-[200px]">
                  {item.tags.map(tag => (
                    <span key={tag} className="mono-label text-[10px] border border-white/10 px-2 py-1 rounded text-muted-foreground/60 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
            <div className="mt-12">
              <Magnetic strength={0.3}>
                <button className="relative group flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full transition-all duration-700 hover:bg-white/10 hover:border-white/30 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] overflow-hidden">
                  {/* Liquid shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <span className="mono-label text-sm uppercase tracking-widest text-white relative z-10">
                    View Full Capabilities
                  </span>
                  <div className="w-1.5 h-1.5 bg-white rounded-full ml-4 transition-transform group-hover:scale-150 relative z-10" />
                </button>
              </Magnetic>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
