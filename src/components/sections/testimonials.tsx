"use client";

import React from 'react';

/**
 * TestimonialSection Component
 * 
 * Clones the client testimonials carousel for Codex Infotech.
 * Based on high-level design: Minimalist, sophisticated aesthetic with sophisticated typography.
 * The quotes use large fonts (approximately 1.25rem - 1.5rem) and the names/roles follow a mono-font style.
 */

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The team at Codex Infotech have been amazing and critical to our UI/UX journey, they challenge our thoughts for the better and have allowed us to become South Africa's fastest-growing Buy Now Pay Later platform. I cannot recommend them enough.",
    name: "Craig Newborn",
    role: "Former CEO, PayJustNow"
  },
  {
    quote: "Working with Codex Infotech has been a genuinely outstanding experience. Their team brings a rare combination of creativity, technical expertise, and collaborative spirit. Codex Infotech met us exactly where we were – they listened closely, understood the strategic goals and translated that direction into clear, compelling visual design. They led the project with confidence, and I recommend them without hesitation.",
    name: "Donna Blackwell-Kopotic",
    role: "Sims Lifecycle Service (US)"
  },
  {
    quote: "The Codex Infotech team have a grasp of branding and product design like I've never seen before. We searched the globe for a tech-focused CI design agency and found that the top talent was right here in Bhavnagar.",
    name: "Colleen Harrison",
    role: "Former Head of Marketing, Payfast"
  },
  {
    quote: "Working with Natalia and the Codex Infotech team is like working with a bomb squad. They know exactly which wires to cut to get exactly the results we were looking for. They are the only agency we have on speed dial.",
    name: "Jason Bagley",
    role: "Founder and CEO, Growth Experts (US)"
  },
  {
    quote: "Working with Natalia and the Codex Infotech team on the HelpGuide rebrand has been a true pleasure. Their design approach is strategic, thoughtful, and truly user-centric, and we couldn't be more pleased with the results.",
    name: "Melinda Smith",
    role: "Executive Director & Editor in Chief, HelpGuide (US)"
  }
];

const Testimonials = () => {
  return (
    <section
      className="bg-black text-white section-spacing overflow-hidden"
      style={{ paddingTop: 'clamp(80px, 12vw, 200px)', paddingBottom: 'clamp(80px, 12vw, 200px)' }}
    >
      <div className="container mx-auto px-[5vw]">
        {/* Header Label */}
        <div className="mb-20">
          <span className="mono-label text-[#a1a1a1] block mb-4">
            Testimonials
          </span>
          <h2 className="section-title text-white max-w-4xl">
            Some words from our valued clients
          </h2>
        </div>

        {/* Testimonials List */}
        <div className="space-y-32">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative border-t border-white/10 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Quote Section */}
              <div className="lg:col-span-8">
                <blockquote
                  className="text-[1.5rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[1.2] font-normal tracking-tight balance transition-opacity duration-700 hover:opacity-100 opacity-90"
                >
                  {testimonial.quote}
                </blockquote>
              </div>

              {/* Author Info Section */}
              <div className="lg:col-span-4 lg:text-right mt-6 lg:mt-0">
                <div className="space-y-2">
                  <h4 className="text-xl font-normal text-white">
                    {testimonial.name}
                  </h4>
                  <p className="mono-label text-[#a1a1a1] text-[0.75rem] tracking-[0.1em] uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Carousel Nav Placeholder - Based on Studio behavior of "Reveal on Scroll" */}
        <div className="mt-20 flex justify-between items-center border-t border-white/10 pt-8 hidden">
          <div className="mono-label text-[#a1a1a1]">
            Scroll to explore more
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-white opacity-100"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-20"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-20"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .section-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .mono-label {
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;