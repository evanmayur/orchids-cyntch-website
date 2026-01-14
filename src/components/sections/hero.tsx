"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "@/components/ui/magnetic";

/**
 * Hero component for Cyntch.
 * Features a full-screen background video, large split-text headline,
 * an animated central icon (represented as a stylized SVG to match the studio aesthetic),
 * and a "Scroll to discover" indicator.
 */
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

    const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);


  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100vh] min-h-screen overflow-hidden flex flex-col items-center justify-center bg-black"
      data-theme="dark"
    >
      {/* Background Video */}
      <motion.figure 
        style={{ y: videoY }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <div className="relative w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 scale-105"
            src="https://estrelastudio.cdn.prismic.io/estrelastudio/aK8JRWGNHVfTOXgT_estrela-hero.mp4"
          />
        </div>
      </motion.figure>

      {/* Main Content Overlay */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 w-full px-[5vw] flex flex-col items-center justify-center text-center pointer-events-none"
      >
        
        {/* Large Split-Text Headline */}
        <h1 className="hero-title flex flex-col md:flex-row items-center justify-center gap-[0.5em] md:gap-[2vw] text-white select-none">
          <span className="block overflow-hidden">
            <span className="inline-block animate-in slide-in-from-bottom-full duration-1000 ease-out fill-mode-both">
              A people first
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-in slide-in-from-bottom-full duration-1000 delay-150 ease-out fill-mode-both">
              digital studio
            </span>
          </span>
        </h1>

        {/* Central Animated Icon (Fallback Style for Lottie if library not present) */}
        <motion.div 
          style={{ rotate }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25vw] h-[25vw] max-w-[480px] max-h-[480px] pointer-events-none opacity-80 mix-blend-screen overflow-visible"
        >
          <svg
            viewBox="0 0 480 480"
            className="w-full h-full animate-pulse duration-[4000ms]"
            style={{ filter: 'blur(1px)' }}
          >
            <g fill="none" stroke="white" strokeWidth="0.5">
              <circle cx="240" cy="240" r="120" className="animate-[spin_12s_linear_infinite]" strokeOpacity="0.3" strokeDasharray="4 8" />
              <circle cx="240" cy="240" r="160" className="animate-[spin_20s_linear_infinite_reverse]" strokeOpacity="0.15" strokeDasharray="1 10" />
              <path 
                d="M 240,80 C 240,80 320,160 320,240 C 320,320 240,400 240,400 C 240,400 160,320 160,240 C 160,160 240,80 240,80 Z" 
                className="animate-pulse" 
                strokeOpacity="0.4"
              />
            </g>
          </svg>
        </motion.div>
      </motion.div>

      {/* "Scroll to discover" Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-[4vh] left-1/2 -translate-x-1/2 z-20 hidden md:block select-none"
      >
        <Magnetic strength={0.2}>
          <span className="mono-label text-white/50 text-[10px] tracking-[0.2em] uppercase flex flex-col items-center gap-4 group cursor-pointer">
            <span className="animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-500 fill-mode-both">
              Scroll to discover our world
            </span>
            <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scroll-hint_2s_infinite_ease-in-out]"></div>
            </div>
          </span>
        </Magnetic>
      </motion.div>

      {/* Decorative Canvas-drawn Border logic (CSS handled) */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none z-30 m-4 md:m-8" />

      <style jsx global>{`
        @keyframes scroll-hint {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          100% { transform: translateY(200%); }
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 9vw, 8.5rem);
          line-height: 0.85;
          letter-spacing: -0.05em;
          font-weight: 400;
          text-transform: none;
        }

        @media (max-width: 768px) {
          .hero-title {
            line-height: 1;
            gap: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
