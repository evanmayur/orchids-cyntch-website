"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useParams } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

const MotionLink = motion.create(Link);

function HeroSection({ service }: { service: typeof servicesData[keyof typeof servicesData] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-20"
          src="https://estrelastudio.cdn.prismic.io/estrelastudio/aK8JRWGNHVfTOXgT_estrela-hero.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </motion.div>

      <div className="relative z-10 px-[5vw] py-32 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-sm uppercase tracking-widest">Back to Services</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="mono-label text-white/40 text-sm">{service.id} — Service</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal leading-[0.9] tracking-tighter mb-8">
            {service.title}
          </h1>

          <p className="text-2xl md:text-3xl text-white/60 font-light leading-relaxed max-w-3xl mb-12">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {service.tags.map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-white/50">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

function ProcessSection({ service }: { service: typeof servicesData[keyof typeof servicesData] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-[5vw]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-[1px] bg-white/20" />
            <h2 className="mono-label text-muted-foreground uppercase tracking-widest">Our Process</h2>
          </div>

          <h2 className="text-5xl md:text-7xl font-normal mb-20 leading-[0.9] tracking-tighter">
            How We <br />
            <span className="italic text-muted-foreground">Deliver Results</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block" />
          
          <div className="space-y-16">
            {service.process.map((step, index) => (
              <ProcessStep key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: { step: string; title: string; description: string }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative grid md:grid-cols-[100px_1fr] gap-8 items-start"
    >
      <div className="relative">
        <div className="absolute left-8 top-1/2 w-4 h-4 -ml-2 rounded-full bg-white/10 border border-white/20 hidden md:block" />
        <span className="text-6xl md:text-7xl font-light text-white/10">{step.step}</span>
      </div>
      
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/[0.07] transition-colors duration-500">
        <h3 className="text-2xl md:text-3xl font-normal mb-4">{step.title}</h3>
        <p className="text-lg text-white/60 font-light leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

function ToolsSection({ service }: { service: typeof servicesData[keyof typeof servicesData] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-[5vw] bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-[1px] bg-white/20" />
            <h2 className="mono-label text-muted-foreground uppercase tracking-widest">Tech Stack</h2>
          </div>

          <h2 className="text-5xl md:text-7xl font-normal mb-16 leading-[0.9] tracking-tighter">
            Tools & <br />
            <span className="italic text-muted-foreground">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {service.tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <span className="relative text-lg font-medium text-white/80 group-hover:text-white transition-colors">
                {tool}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ service }: { service: typeof servicesData[keyof typeof servicesData] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-[5vw] bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-12 md:p-20"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-[1px] bg-white/20" />
            <span className="mono-label text-muted-foreground uppercase tracking-widest">Expected Timeline</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-6xl md:text-8xl font-normal leading-[0.9] tracking-tighter mb-4">
                {service.timeline}
              </h2>
              <p className="text-xl text-white/60 font-light">
                Average project completion time
              </p>
            </div>
            
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/90"
            >
              Start Your Project
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExamplesSection({ service }: { service: typeof servicesData[keyof typeof servicesData] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0.4, 0.9], ["0%", "-100%"]);

  const firstPairOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const firstPairY = useTransform(scrollYProgress, [0, 0.15], [80, 0]);
  
  const secondPairOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const secondPairY = useTransform(scrollYProgress, [0.5, 0.65], [80, 0]);

  return (
    <section ref={containerRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-[5vw] w-full mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[1px] bg-white/20" />
              <h2 className="mono-label text-muted-foreground uppercase tracking-widest">Success Stories</h2>
            </div>

            <h2 className="text-5xl md:text-7xl font-normal leading-[0.9] tracking-tighter">
              Featured <br />
              <span className="italic text-muted-foreground">Case Studies</span>
            </h2>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="relative flex gap-6 px-[5vw]">
          {service.examples.slice(0, 2).map((example, index) => (
            <motion.div
              key={index}
              style={{ opacity: firstPairOpacity, y: firstPairY }}
              className="flex-shrink-0 w-[300px] md:w-[400px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500 group"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-white/50">
                  {example.industry}
                </span>
                <span className="ml-auto text-white/20 text-sm font-mono">0{index + 1}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-normal mb-4 group-hover:text-white transition-colors">
                {example.title}
              </h3>
              <div className="pt-6 border-t border-white/10">
                <span className="mono-label text-white/40 text-xs uppercase tracking-widest">Result</span>
                <p className="text-lg md:text-xl font-light text-white/80 mt-2">{example.result}</p>
              </div>
            </motion.div>
          ))}
          
          {service.examples.slice(2, 4).map((example, index) => (
            <motion.div
              key={index + 2}
              style={{ opacity: secondPairOpacity, y: secondPairY }}
              className="flex-shrink-0 w-[300px] md:w-[400px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500 group"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-white/50">
                  {example.industry}
                </span>
                <span className="ml-auto text-white/20 text-sm font-mono">0{index + 3}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-normal mb-4 group-hover:text-white transition-colors">
                {example.title}
              </h3>
              <div className="pt-6 border-t border-white/10">
                <span className="mono-label text-white/40 text-xs uppercase tracking-widest">Result</span>
                <p className="text-lg md:text-xl font-light text-white/80 mt-2">{example.result}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExampleCard({ example, index, isInView }: { 
  example: { title: string; industry: string; result: string }; 
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500 group"
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-white/50">
          {example.industry}
        </span>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-normal mb-4 group-hover:text-white transition-colors">
        {example.title}
      </h3>
      
      <div className="pt-6 border-t border-white/10">
        <span className="mono-label text-white/40 text-xs uppercase tracking-widest">Result</span>
        <p className="text-xl md:text-2xl font-light text-white/80 mt-2">{example.result}</p>
      </div>
    </motion.div>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 px-[5vw] border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-7xl font-normal mb-8 leading-[0.9] tracking-tighter">
          Ready to get started?
        </h2>
        <p className="text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto">
          Let&apos;s discuss your project and explore how we can help transform your vision into reality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-full font-medium transition-all duration-300 hover:bg-white/90"
          >
            Start a Project
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </MotionLink>
          
          <MotionLink
            href="/#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-white/5 border border-white/20 text-white px-10 py-5 rounded-full font-medium transition-all duration-300 hover:bg-white/10"
          >
            Explore Other Services
          </MotionLink>
        </div>
      </motion.div>
    </section>
  );
}

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Service not found</h1>
          <Link href="/#services" className="text-white/60 hover:text-white transition-colors">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />
      <main>
        <HeroSection service={service} />
        <ProcessSection service={service} />
        <ToolsSection service={service} />
        <TimelineSection service={service} />
        <ExamplesSection service={service} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
