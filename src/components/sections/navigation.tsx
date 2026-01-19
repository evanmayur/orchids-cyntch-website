"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-[5vw] pt-0 pointer-events-none select-none">
        <Link
          href="/"
          className="pointer-events-auto group relative flex items-center justify-center transition-all duration-700 -mt-4 md:-mt-8"
          aria-label="Codex Infotech Home"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ce1589ff-8399-40fb-afc8-6e6951d6460b/Remove-Background-Preview-1768385708544.png?width=8000&height=8000&resize=contain"
            alt="Codex Infotech Logo"
            width={500}
            height={200}
            className="h-28 md:h-40 w-auto transition-transform duration-500 group-hover:scale-105 relative z-10"
            priority
          />
        </Link>

        <div className="pointer-events-auto hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 items-center gap-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-1.5 py-1 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
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

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="pointer-events-auto md:hidden fixed top-6 right-[5vw] w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full z-[101]"
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-4 flex flex-col justify-between">
            <motion.span
              className="w-full h-0.5 bg-white rounded-full origin-center"
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full"
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full origin-center"
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] md:hidden bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              <button
                onClick={() => scrollToSection("intro-experience")}
                className="text-3xl text-white/80 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-3xl text-white/80 hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about-us")}
                className="text-3xl text-white/80 hover:text-white transition-colors"
              >
                Inside
              </button>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 px-8 py-4 bg-white text-black rounded-full text-lg font-medium"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
