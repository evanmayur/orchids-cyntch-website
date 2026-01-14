"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, Play } from "lucide-react";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const gmt2 = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Africa/Johannesburg", // GMT+2 approximation
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(gmt2);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-background text-foreground transition-all duration-500 ease-in-out overflow-hidden">
      {/* Background Overlay Effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10" />

      {/* Top Header Section */}
      <div className="flex w-full border-b border-white/10 h-[80px] lg:h-[100px]">
        {/* Showreel Column */}
        <div className="hidden lg:flex flex-1 items-center px-[5vw] border-r border-white/10 group">
          <div className="relative w-[160px] h-[90px] overflow-hidden rounded-sm bg-muted flex items-center justify-center">
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              autoPlay
              muted
              loop
              playsInline
              src="https://estrelastudio.cdn.prismic.io/estrelastudio/aRwnE7pReVYa4l9N_Estrela_CompressedShowreel.mp4"
            />
            <div className="relative z-10 flex items-center gap-2 mono-label text-[10px] tracking-widest text-white">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Showreel
            </div>
          </div>
        </div>

        {/* Close Toggle Column */}
        <div className="flex-[0.5] lg:flex-none lg:w-[100px] flex items-center justify-center border-r border-white/10 bg-background">
          <button
            onClick={onClose}
            className="group relative flex flex-col items-center justify-center w-full h-full transition-colors hover:bg-accent"
            aria-label="Close menu"
          >
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <span
                  key={i}
                  className="w-[3px] h-[3px] bg-white rounded-full group-hover:scale-150 transition-transform duration-300"
                />
              ))}
            </div>
          </button>
        </div>

        {/* Contact Column */}
        <div className="flex-1 lg:flex flex items-center justify-end lg:justify-start px-[5vw]">
          <a
            href="/contact"
            className="flex items-center gap-3 glass-button px-6 py-3 rounded-full group"
          >
            <span className="mono-label text-[11px] font-medium tracking-widest uppercase">
              Contact Us
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row flex-grow overflow-y-auto lg:overflow-hidden">
        {/* Navigation Links Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-[5vw] py-12 lg:py-0 border-r border-white/10">
          <div className="flex flex-col gap-4 lg:gap-2">
            {[
              { label: "Home", href: "/" },
              { label: "Work", href: "/work" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-6 py-2 transition-all duration-300"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
                <span className="text-[12vw] lg:text-[6vw] font-normal leading-[0.9] tracking-tighter transition-transform group-hover:translate-x-4 duration-500 italic group-hover:not-italic">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Info & Newsletter Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-[5vw] bg-[#050505]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <a
                    href="tel:+27780548476"
                    className="text-[18px] hover:text-white/60 transition-colors"
                  >
                    +27 (0) 78 054 8476
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <a
                    href="mailto:accounts@codex.studio"
                    className="text-[18px] hover:text-white/60 transition-colors"
                  >
                    Write Us
                  </a>
                </div>
              </div>

              {/* Newsletter Toggle */}
              <div className="relative mt-4">
                <button
                  onClick={() => setNewsletterOpen(!newsletterOpen)}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                  <span className="text-[18px] group-hover:underline decoration-white/20 underline-offset-4">
                    Newsletter Signup
                  </span>
                  {newsletterOpen && <X className="w-3 h-3 ml-2 opacity-60" />}
                </button>

                {newsletterOpen && (
                  <div className="mt-6 p-6 rounded-lg bg-white/[0.03] border border-white/10 animate-in fade-in slide-in-from-top-4 duration-500">
                    <p className="text-[14px] leading-relaxed mb-6 text-muted-foreground">
                      Join our newsletter for fresh updates and exclusive studio
                      insights.
                    </p>
                    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="First name"
                          className="bg-white/[0.05] border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                        />
                        <input
                          type="text"
                          placeholder="Last name"
                          className="bg-white/[0.05] border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="bg-white/[0.05] border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                      />
                      <button className="flex items-center justify-between px-6 py-2.5 mt-2 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
                        Submit Details
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-6">
              <span className="mono-label text-white/40 mb-2">Social</span>
              <div className="flex flex-col gap-2">
                {["Instagram", "Facebook", "LinkedIn", "Awwwards", "Behance"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-[16px] hover:text-white/60 transition-colors py-0.5"
                    >
                      {social}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Footer Clock & Detail */}
          <div className="flex items-end justify-between mt-12 pt-8 border-t border-white/5">
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-muted-foreground">Local Time</span>
              <div className="text-[16px] font-mono tracking-wider">
                {currentTime} <span className="text-white/30 ml-1">(GMT+2)</span>
              </div>
            </div>
            <div className="hidden lg:block text-[14px] text-white/20 select-none">
              © CODEX 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenMenu;