"use client";

import React, { useState } from "react";
import Image from "next/image";
import FullscreenMenu from "@/components/overlay/fullscreen-menu";

/**
 * Navigation component for Cyntch
 * Featuring:
 * - Cyntch wordmark logo
 * - Menu links (Work, About, Services, Contact) with hover "reveal" animation
 * - 9-dot grid toggle icon
 * - Responsive mobile menu (simplified for this section clone)
 */
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
      <nav className="fixed top-0 left-0 w-full z-[100] flex items-start justify-between px-[5vw] pt-10 pointer-events-none select-none">
        {/* Logo Section */}
        <a
          href="/"
          className="pointer-events-auto group relative flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full transition-all duration-700 hover:bg-white/10 hover:border-white/30 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] overflow-hidden"
          aria-label="Cyntch Home"
        >
          {/* Liquid shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <Image
            src="/logo.png"
            alt="Cyntch Logo"
            width={120}
            height={48}
            className="h-12 w-auto invert brightness-200 contrast-125 transition-transform duration-500 group-hover:scale-110 relative z-10"
          />
        </a>

        {/* Menu Toggle Section */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="pointer-events-auto flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 w-14 h-14 rounded-full transition-all duration-500 hover:bg-white/10 hover:border-white/30 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] group overflow-hidden"
        aria-label="Toggle Menu"
      >
        {/* Liquid shine effect for toggle */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
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