"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionLink = motion.create(Link);

const services = [
  {
    id: "01",
    slug: "web-designing",
    title: "Web Designing",
    description: "Elevating digital identities through high-end visual design and immersive UI/UX experiences.",
    tags: ["UI/UX", "Product Design", "Interaction"]
  },
  {
    id: "02",
    slug: "web-development",
    title: "Web Development",
    description: "Building robust, high-performance web applications tailored for scalability and speed.",
    tags: ["Full-stack", "E-commerce", "Next.js"]
  },
  {
    id: "03",
    slug: "automation",
    title: "Automation",
    description: "Streamlining business operations with intelligent automation and custom workflow solutions.",
    tags: ["AI", "Workflow", "Efficiency"]
  },
  {
    id: "04",
    slug: "app-development",
    title: "App Development",
    description: "Creating seamless native and cross-platform mobile experiences for iOS and Android.",
    tags: ["iOS", "Android", "React Native"]
  },
  {
    id: "05",
    slug: "data-science",
    title: "Data Science",
    description: "Turning complex data into actionable insights through advanced analysis and predictive modeling.",
    tags: ["Analysis", "ML", "Big Data"]
  },
  {
    id: "06",
    slug: "seo-solutions",
    title: "SEO Solutions",
    description: "Dominating search results and driving organic growth through data-driven SEO strategies.",
    tags: ["Organic", "Strategy", "Growth"]
  },
  {
    id: "07",
    slug: "brand-design",
    title: "Brand Design",
    description: "Crafting cohesive and memorable brand stories that resonate with your target audience.",
    tags: ["Identity", "Strategy", "Visuals"]
  }
];

const ServiceCard = ({ service, index, progress, range, targetScale }: { 
  service: typeof services[0], 
  index: number, 
  progress: any, 
  range: [number, number],
  targetScale: number 
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
    <motion.div 
          style={{ 
            scale,
            top: `calc(-5vh + ${index * 25}px)`,
            willChange: "transform, scale"
          }}
          className="relative w-[90%] md:w-[900px] h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row transform-gpu"
        >
        {/* Liquid Glass Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Content Side */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between relative z-10">
          <div>
            <span className="mono-label text-white/40 text-sm mb-4 block">
              {service.id} — Service
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
              {service.title}
            </h3>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-md">
              {service.description}
            </p>
          </div>
          
            <div className="flex flex-wrap gap-2 mt-8">
              {service.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50">
                  {tag}
                </span>
              ))}
            </div>
            
            <Link 
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 mt-6 text-white/60 hover:text-white transition-colors duration-300 group/link"
            >
              <span className="text-sm uppercase tracking-widest">Read More</span>
              <svg 
                className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        {/* Visual Side */}
        <div className="hidden md:flex flex-1 bg-white/5 border-l border-white/10 overflow-hidden group relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            src="https://estrelastudio.cdn.prismic.io/estrelastudio/aK8JRWGNHVfTOXgT_estrela-hero.mp4"
          />
          {/* Pinkish-purple glow to match the requested "pink element" aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-violet-500/20 mix-blend-screen" />
          
          <div className="relative z-10 w-full h-full flex items-center justify-center p-16 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
            <svg
              viewBox="0 0 480 480"
              className="w-full h-full max-w-[300px]"
            >
              <g fill="none" stroke="white" strokeWidth="1.5">
                  <circle cx="240" cy="240" r="120" strokeOpacity="0.2" strokeDasharray="4 8" />
                </g>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [0.8, 0.6]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.4, 0.4, 0]);

  return (
    <section id="services" ref={container} className="relative bg-black">
      {/* Background Video (Scaled down floating element) */}
      <motion.div 
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden"
      >
        <div className="relative w-full h-full max-w-[1400px] max-h-[800px] rounded-[4rem] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-30 grayscale contrast-125"
            src="https://estrelastudio.cdn.prismic.io/estrelastudio/aK8JRWGNHVfTOXgT_estrela-hero.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
      </motion.div>

      {/* Header Content */}
      <div className="relative z-10 px-[5vw] pt-32 pb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-[1px] bg-white/20" />
          <h2 className="mono-label text-muted-foreground uppercase tracking-widest">02 — OUR EXPERTISE</h2>
        </div>
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-normal mb-8 leading-[0.9] tracking-tighter">
          Services <br />
          <span className="italic text-muted-foreground">We Provide</span>
        </h2>
        <p className="max-w-xl text-muted-foreground text-xl md:text-2xl font-light leading-relaxed">
          Specialized solutions for a digital-first world. We blend creativity with technical precision to scale your agency.
        </p>
      </div>

      {/* Stacking Cards */}
      <div className="relative z-10">
        {services.map((service, i) => {
          const targetScale = 1 - ( (services.length - i) * 0.05);
          // Distribute the scroll range across all 7 cards
          const step = 1 / services.length;
          const start = i * step;
          return (
            <ServiceCard 
              key={service.id}
              index={i}
              service={service}
              progress={scrollYProgress}
              range={[start, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      
      {/* Footer / Call to Action inside the scroll */}
      <div className="relative z-10 px-[5vw] py-40 border-t border-white/10 bg-black flex flex-col items-center text-center">
        <h3 className="text-4xl md:text-6xl font-normal mb-12">Have a project in mind?</h3>
        <MotionLink 
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 px-12 py-6 rounded-full transition-all duration-700 hover:bg-white/10 hover:border-white/30"
        >
          <span className="font-medium text-white relative z-10">Get in Touch</span>
          <div className="w-2 h-2 bg-white rounded-full ml-4" />
        </MotionLink>
      </div>
    </section>
  );
};

export default Services;
