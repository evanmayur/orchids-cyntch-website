"use client";

import React, { useState } from "react";
import Image from "next/image";
import FullscreenMenu from "@/components/overlay/fullscreen-menu";

/**
 * Navigation component for Codex
 * Featuring:
 * - Codex wordmark logo
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
        className="pointer-events-auto group relative flex items-center justify-center bg-black/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-sm transition-all duration-500 hover:bg-white/10"
          aria-label="Codex Home"
        >
          <span className="text-white font-semibold text-[20px] tracking-tight">CODEX</span>
      </a>

      {/* Center Links Section (Desktop) */}
      <div className="hidden lg:flex pointer-events-auto bg-black/5 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden h-14">
        <div className="flex items-center px-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-6 py-4 overflow-hidden group h-full flex items-center"
              aria-label={link.label}
            >
              <div className="relative flex flex-col items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                <span className="nav-link text-white text-[14px] font-medium tracking-[0.05em] uppercase">
                  {link.label}
                </span>
                <span className="nav-link absolute top-full left-0 text-white text-[14px] font-medium tracking-[0.05em] uppercase whitespace-nowrap">
                  {link.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Menu Toggle Section */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="pointer-events-auto flex items-center justify-center bg-black/5 backdrop-blur-md border border-white/10 w-14 h-14 rounded-sm transition-all duration-500 hover:bg-white/10 group"
        aria-label="Toggle Menu"
      >
        <div className="grid grid-cols-3 gap-[3px]">
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