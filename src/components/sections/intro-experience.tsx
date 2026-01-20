"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Assets provided in the prompt:
 * 1. Experiences_01-1.jpg
 * 2. Experiences_02-2.jpg
 * 3. Experiences_03-3.jpg
 * 4. Experiences_04-4.jpg
 * 5. Experiences_05-5.jpg
 * 6. Experiences_06-6.jpg
 * 7. Experiences_07-7.jpg
 * 8. Experiences_08-8.jpg
 */

const experienceImages = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-estrela-studio/assets/images/aN7NX55xUNkB1bRi_Experiences_01-1.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-estrela-studio/assets/images/aN7NX55xUNkB1bRj_Experiences_02-2.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-estrela-studio/assets/images/aN7NYZ5xUNkB1bRk_Experiences_03-3.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-estrela-studio/assets/images/aN7NY55xUNkB1bRl_Experiences_04-4.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-estrela-studio/assets/images/aN7NY55xUNkB1bRm_Experiences_05-5.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-estrela-studio/assets/images/aN7NZJ5xUNkB1bRn_Experiences_06-6.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-estrela-studio/assets/images/aN7NZZ5xUNkB1bRo_Experiences_07-7.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-estrela-studio/assets/images/aN7NZp5xUNkB1bRp_Experiences_08-8.jpg",
];

const IntroExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="intro-experience"
      ref={containerRef}
      className="relative w-full bg-background text-foreground section-spacing overflow-hidden"
      data-theme="dark"
    >
      <div className="container relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Sticky Left Content */}
          <div className="lg:sticky lg:top-32 w-full lg:w-5/12 z-20">
            <div className="mono-label mb-6 text-primary/80 tracking-[0.2em] uppercase text-xs font-semibold">
              Inside Codex Infotech
            </div>

            <h2 className="text-4xl md:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] text-white mb-10">
              Crafting competitive <br />
              <span className="italic font-display text-primary/90">digital experiences</span>
            </h2>

            <div className="max-w-xl">
              <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground/90 mb-12">
                Codex Infotech is a global branding and digital design agency rooted in
                Bhavnagar. We live and breathe our craft, building brands,
                websites, and digital products that turn bold ideas into design that matters.
              </p>


            </div>
          </div>

          {/* Structured Image Grid Right */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {experienceImages.map((src, index) => {
                // Variations in vertical offset and aspect ratios for a structured but dynamic look
                const isEven = index % 2 === 0;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const y = useTransform(scrollYProgress, [0, 1], [0, isEven ? -50 : 50]);

                return (
                  <motion.div
                    key={index}
                    style={{ y, willChange: "transform" }}
                    className={`relative overflow-hidden rounded-lg bg-white/5 transform-gpu ${index === 0 || index === 3 || index === 4 || index === 7
                      ? 'aspect-[4/5]'
                      : 'aspect-[3/4]'
                      } ${index % 3 === 0 ? 'mt-12 lg:mt-24' : ''}`}
                  >
                    <Image
                      src={src}
                      alt={`Studio experience ${index + 1}`}
                      fill
                      unoptimized
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 30vw"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroExperience;
