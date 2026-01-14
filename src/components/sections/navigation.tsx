"use client";

import React, { useState } from "react";
import Image from "next/image";
import FullscreenMenu from "@/components/overlay/fullscreen-menu";

/**
 * Navigation component for Estrela Studio
 * Featuring:
 * - Estrela Studio wordmark logo
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
        aria-label="Estrela Studio Home"
      >
        <svg
          width="92"
          height="13"
          viewBox="0 0 92 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white"
        >
          <path d="M0 0.160156H6.84V2.19216H2.1V5.12016H6.36V7.15216H2.1V10.1282H6.96V12.1602H0V0.160156Z" />
          <path d="M11.832 2.19216V12.1602H9.732V2.19216H7.116V0.160156H14.46V2.19216H11.832Z" />
          <path d="M15.48 0.160156H20.76C22.62 0.160156 23.904 1.10816 23.904 2.80016C23.904 4.01216 23.232 4.90016 22.092 5.23616L24.168 12.1602H21.948L19.98 5.60816H17.58V12.1602H15.48V0.160156ZM20.46 3.73616C21.144 3.73616 21.6 3.42416 21.6 2.86016C21.6 2.30816 21.168 2.03216 20.496 2.03216H17.58V3.73616H20.46Z" />
          <path d="M25.776 0.160156H32.616V2.19216H27.876V5.12016H32.136V7.15216H27.876V10.1282H32.736V12.1602H25.776V0.160156Z" />
          <path d="M34.56 0.160156H36.66V10.1282H41.4V12.1602H34.56V0.160156Z" />
          <path d="M48.06 9.87616H42.996L42.228 12.1602H40.008L44.532 0.160156H46.548L51.072 12.1602H48.816L48.06 9.87616ZM47.4 7.95616L45.528 2.16016L43.656 7.95616H47.4Z" />
          <path d="M58.38 5.48816C58.38 6.55616 57.564 6.94016 56.412 7.37216L55.512 7.72016C54.12 8.24816 52.896 8.95616 52.896 10.6002C52.896 12.5682 54.492 12.9282 55.944 12.9282C57.192 12.9282 58.368 12.6042 59.436 12.0642V10.0482C58.5 10.7442 57.276 11.0802 56.244 11.0802C55.488 11.0802 55.032 10.8762 55.032 10.3722C55.032 9.77216 55.512 9.53216 56.544 9.13616L57.516 8.76416C59.328 8.08016 60.516 7.15616 60.516 5.40416C60.516 3.55616 59.1 2.80016 57.312 2.80016C55.824 2.80016 54.456 3.19616 53.304 4.02416V6.13616C54.516 5.24816 55.848 4.67216 57.18 4.67216C57.828 4.67216 58.38 4.93616 58.38 5.48816Z" />
          <path d="M66.42 2.19216V12.1602H64.32V2.19216H61.704V0.160156H69.048V2.19216H66.42Z" />
          <path d="M70.92 0.160156V8.12816C70.92 10.1442 71.952 11.1642 74.004 11.1642C76.056 11.1642 77.088 10.1442 77.088 8.12816V0.160156H79.188V8.12816C79.188 11.5242 77.124 13.0002 74.004 13.0002C70.884 13.0002 68.82 11.5242 68.82 8.12816V0.160156H70.92Z" />
          <path d="M80.7 0.160156H85.44C89.064 0.160156 90.984 2.16416 90.984 6.16016C90.984 10.1562 89.064 12.1602 85.44 12.1602H80.7V0.160156ZM85.344 10.1282C87.816 10.1282 88.884 9.10816 88.884 6.16016C88.884 3.21216 87.816 2.19216 85.344 2.19216H82.8V10.1282H85.344Z" />
          <path d="M92.016 0.160156V12.1602H93.116V0.160156H92.016Z" className="hidden" />
        </svg>
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