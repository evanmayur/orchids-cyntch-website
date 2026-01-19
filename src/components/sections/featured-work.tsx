"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    id: 1,
    title: 'Web Designing',
    description: 'Elevating digital identities through high-end visual design and immersive UI/UX experiences.',
    categories: ['UI/UX', 'Product Design', 'Interaction'],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563ec4c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Building robust, high-performance web applications tailored for scalability and speed.',
    categories: ['Full-stack', 'E-commerce', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Automation',
    description: 'Streamlining business operations with intelligent automation and custom workflow solutions.',
    categories: ['AI', 'Workflow', 'Efficiency'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'App Development',
    description: 'Creating seamless native and cross-platform mobile experiences for iOS and Android.',
    categories: ['iOS', 'Android', 'React Native'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Data Science',
    description: 'Turning complex data into actionable insights through advanced analysis and predictive modeling.',
    categories: ['Analysis', 'ML', 'Big Data'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'SEO Solutions',
    description: 'Dominating search results and driving organic growth through data-driven SEO strategies.',
    categories: ['Organic', 'Strategy', 'Growth'],
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Brand Design',
    description: 'Crafting cohesive and memorable brand stories that resonate with your target audience.',
    categories: ['Identity', 'Strategy', 'Visuals'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div 
      ref={container}
      style={{ opacity }}
      className="group relative flex flex-col md:flex-row gap-8 items-center md:items-end py-12 md:py-24 border-b border-white/5 last:border-0"
    >
      {/* Service Image */}
      <div className="relative w-full md:w-[55%] aspect-[16/10] overflow-hidden rounded-lg cursor-pointer">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Service Info */}
      <motion.div 
        style={{ y }}
        className="w-full md:w-[45%] text-left md:pl-12"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {service.categories.map((cat) => (
            <span 
              key={cat} 
              className="mono-label text-[10px] text-muted-foreground border border-white/10 px-3 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-7xl font-normal leading-tight tracking-tight mb-6">
          {service.title}
        </h3>
        <p className="text-muted-foreground font-light text-lg max-w-[400px] mb-8">
          {service.description}
        </p>
        <button className="text-white flex items-center gap-3 group/btn">
          <span className="mono-label text-sm uppercase tracking-widest border-b border-white/20 pb-1 group-hover/btn:border-white transition-colors">Learn More</span>
          <div className="w-1.5 h-1.5 bg-white rounded-full transition-transform group-hover/btn:scale-150"></div>
        </button>
      </motion.div>

      {/* Index Number */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block overflow-hidden">
        <motion.span 
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="text-[12rem] font-bold text-white/5 select-none leading-none"
        >
          0{index + 1}
        </motion.span>
      </div>
    </motion.div>
  );
};

const FeaturedWork = () => {
  return (
    <section className="bg-black text-white py-[clamp(100px,15vw,250px)] px-[5vw] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 border-t border-white/10 pt-20">
        {/* Left Column: Sticky Title */}
        <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
          <div className="mono-label text-muted-foreground mb-10 flex items-center gap-4">
            <span className="w-10 h-[1px] bg-white/20"></span>
            02 — OUR EXPERTISE
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-8 leading-[0.9] tracking-tighter">
            Services <br />
            <span className="italic text-muted-foreground">We Provide</span>
          </h2>
          <p className="max-w-[320px] text-muted-foreground text-xl leading-relaxed">
            Specialized solutions for a digital-first world. We blend creativity with technical precision to scale your agency.
          </p>
          
          <div className="mt-16 hidden lg:block">
            <div className="w-[1px] h-32 bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </div>

        {/* Right Column: Services List */}
        <div className="lg:col-span-8 lg:pl-12">
          <div className="flex flex-col">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-32 pt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h4 className="text-2xl mb-4">Have a project in mind?</h4>
              <p className="text-muted-foreground">Let's build something exceptional together.</p>
            </div>
<a 
                    href="/contact" 
                    className="relative group flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 px-12 py-6 rounded-full transition-all duration-700 hover:bg-white/10 hover:border-white/30 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <span className="font-medium text-white relative z-10">Get in Touch</span>
                    <div className="w-2 h-2 bg-white rounded-full ml-4 transition-transform group-hover:scale-125 relative z-10"></div>
                  </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
