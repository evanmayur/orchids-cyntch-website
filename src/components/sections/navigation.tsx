"use client";

import React from "react";
import Image from "next/image";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-[5vw] pt-0 pointer-events-none select-none">
        {/* Logo Section */}
        <a
          href="/"
          className="pointer-events-auto group relative flex items-center justify-center transition-all duration-700 -mt-8"
          aria-label="Codex Infotech Home"
        >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ce1589ff-8399-40fb-afc8-6e6951d6460b/Remove-Background-Preview-1768385708544.png?width=8000&height=8000&resize=contain"
              alt="Codex Infotech Logo"
              width={500}
              height={200}
              className="h-40 w-auto transition-transform duration-500 group-hover:scale-105 relative z-10"
            />
        </a>

        {/* Navigation Buttons - Centered with Glass Effect */}
        <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-6 flex items-center gap-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-1.5 py-1 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <button
            onClick={() => scrollToSection("intro-experience")}
            className="text-white/80 hover:text-white text-xs uppercase tracking-wider transition-all duration-300 px-3 py-1.5 rounded-full hover:bg-white/10 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white/80 hover:text-white text-xs uppercase tracking-wider transition-all duration-300 px-3 py-1.5 rounded-full hover:bg-white/10 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about-us")}
            className="text-white/80 hover:text-white text-xs uppercase tracking-wider transition-all duration-300 px-3 py-1.5 rounded-full hover:bg-white/10 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]"
          >
            Inside
          </button>
        </div>


    </nav>
  );
}

/** 
 * SCSS/Tailwind notes for this specific implementation:
 * - Nav links use a double-layered span for the hover "slide up" effect.
 * - Backdrop-blur and border-white/10 mimic the "glass-button" style from the design instructions.
 * - Custom letter spacing and font sizes match the typography scale provided.
 */