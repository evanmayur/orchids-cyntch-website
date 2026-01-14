"use client";

import React, { useState } from "react";
import Image from "next/image";
import FullscreenMenu from "@/components/overlay/fullscreen-menu";

/**
 * Navigation component for Codex Infotech
 * Featuring:
 * - Codex Infotech wordmark logo
 * - Menu links (Work, About, Services, Contact) with hover "reveal" animation
 * - 9-dot grid toggle icon
 * - Responsive mobile menu (simplified for this section clone)
 */
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Menu Toggle Section */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="pointer-events-auto flex items-center justify-center w-14 h-14 transition-all duration-500 group -mt-8"
        aria-label="Toggle Menu"
      >
        <div className="grid grid-cols-3 gap-[3px] relative z-10">
          {[...Array(9)].map((_, i) => (
            <span
              key={i}
              className="w-[3px] h-[3px] bg-white rounded-full transition-transform duration-300 group-hover:scale-125"
            ></span>
          ))}
        </div>
      </button>

      <FullscreenMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </nav>
  );
}

/** 
 * SCSS/Tailwind notes for this specific implementation:
 * - Nav links use a double-layered span for the hover "slide up" effect.
 * - Backdrop-blur and border-white/10 mimic the "glass-button" style from the design instructions.
 * - Custom letter spacing and font sizes match the typography scale provided.
 */