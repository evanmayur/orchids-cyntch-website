"use client";

import React from 'react';
import Image from 'next/image';

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
  return (
    <section 
      className="exp relative w-full overflow-hidden bg-background text-foreground section-spacing" 
      data-theme="dark"
    >
      <div className="container relative flex flex-col items-center">
        
        {/* Floating Images Grid Overlay - Absolute Positioning for Desktop */}
        <div className="exp-images hidden lg:block absolute inset-0 pointer-events-none select-none">
          {experienceImages.map((src, index) => {
            // Precise positioning based on the "floating grid" design logic
            const positions = [
              { top: '5%', left: '4%', width: '12vw', rotate: '-5deg', z: 10 },
              { top: '15%', right: '6%', width: '10vw', rotate: '8deg', z: 10 },
              { bottom: '20%', left: '8%', width: '11vw', rotate: '4deg', z: 10 },
              { bottom: '10%', right: '12%', width: '13vw', rotate: '-6deg', z: 10 },
              { top: '50%', left: '2%', width: '9vw', rotate: '-2deg', translate: '-50%', z: 5 },
              { top: '40%', right: '2%', width: '14vw', rotate: '3deg', z: 5 },
              { top: '-2%', left: '45%', width: '11vw', rotate: '10deg', z: 5 },
              { bottom: '-5%', left: '30%', width: '10vw', rotate: '-12deg', z: 5 },
            ];
            const pos = positions[index];

            return (
              <figure 
                key={index} 
                className="absolute opacity-40 transition-transform duration-700 ease-out hover:opacity-100 hover:scale-110"
                style={{
                  top: pos.top,
                  left: pos.left,
                  right: pos.right,
                  bottom: pos.bottom,
                  width: pos.width,
                  transform: `rotate(${pos.rotate}) ${pos.translate ? `translateY(${pos.translate})` : ''}`,
                  zIndex: pos.z
                }}
              >
                <div className="relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 rounded-sm aspect-[3/4]">
                  <Image
                    src={src}
                    alt={`Studio experience ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1100px) 20vw, 15vw"
                  />
                </div>
              </figure>
            );
          })}
        </div>

        {/* Central Content Block */}
        <div className="exp-content relative z-20 flex flex-col items-center text-center max-w-[80vw]">
          <h2 
            className="section-title mb-10 text-white" 
            aria-label="Crafting competitive digital experiences"
          >
            <div className="flex flex-wrap justify-center gap-x-4">
              <span>Crafting</span>
              <span>competitive</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4">
              <span>digital</span>
              <span className="italic font-display text-primary/80 transition-colors hover:text-white cursor-default">experiences</span>
            </div>
          </h2>

          <div className="mono-label mb-8 text-muted-foreground tracking-[0.2em]">
            Inside Estrela Studio
          </div>

          <div className="exp-text-wrapper max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-light leading-relaxed text-balance text-muted-foreground/90">
              Estrela Studio is a global branding and digital design agency rooted in 
              Vienna and Cape Town. We live and breathe our craft, building brands, 
              websites, and digital products that turn bold ideas into design that matters.
            </p>
          </div>

          {/* Showreel Button Trigger */}
          <div className="mt-16 group relative cursor-pointer">
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-5 rounded-full transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105 active:scale-95">
              <span className="mono-label text-white group-hover:tracking-[0.3em] transition-all duration-300">
                Play Showreel
              </span>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Mobile Visible Only Grid (Horizontal scroll or simple stack) */}
        <div className="flex lg:hidden overflow-x-auto gap-4 py-12 w-full no-scrollbar px-5 mt-10">
          {experienceImages.slice(0, 4).map((src, index) => (
            <div key={index} className="flex-shrink-0 w-[60vw] aspect-[3/4] relative rounded-lg overflow-hidden border border-white/10">
              <Image
                src={src}
                alt={`Studio life ${index + 1}`}
                fill
                className="object-cover grayscale"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default IntroExperience;