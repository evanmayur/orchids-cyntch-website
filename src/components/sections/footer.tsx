"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

/**
 * Footer component for Codex Infotech
 * Matching the reference image style.
 */
export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-white px-[5vw] pt-[120px] pb-[40px] font-sans overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 mb-[80px]">
          {/* Site Index */}
          <div className="md:col-span-3">
            <h6 className="text-[14px] font-medium text-muted-foreground mb-10">
              Site index
            </h6>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Privacy Policy"].map((item) => (
                <li key={item}>
                    <Link
                      href={
                        item === "Home" 
                          ? "/" 
                          : item === "Privacy Policy" 
                          ? "/privacy" 
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="text-[18px] text-white/80 hover:text-white transition-colors"
                    >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h6 className="text-[14px] font-medium text-muted-foreground mb-10">
              Social
            </h6>
            <ul className="space-y-4">
{[
                  { name: "Instagram", url: "#" },
                  { name: "Facebook", url: "#" },
                  { name: "LinkedIn", url: "#" },
                ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] text-white/80 hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-6 flex flex-col items-end">
            <Link
                href="/contact"
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 px-12 py-10 rounded-2xl w-full max-w-[500px] flex items-center justify-between transition-all hover:bg-white/10 hover:border-white/20 overflow-hidden mb-12"
              >
                {/* Liquid shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="text-2xl font-light tracking-tight">Contact Us</span>
                <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </Link>

              <div className="text-right space-y-6 max-w-[500px] w-full">
                <div>
                  <p className="text-white/60 text-lg mb-1">Tell us about your project.</p>
                  <p className="text-white text-lg">Let&apos;s collaborate.</p>
                </div>

                <div className="flex flex-col items-end gap-2 text-white/80">
                  <div className="text-[14px] font-mono mb-4">
                    {time} (IST)
                  </div>
                  <a href="tel:+917862003533" className="flex items-center gap-3 hover:text-white transition-colors group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white" />
                    +91 78620 03533
                  </a>
                  <a href="mailto:codexinfotechh@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white" />
                    Write Us
                  </a>

              </div>
            </div>
          </div>
        </div>

        {/* Brand Section */}
        <div className="mt-[120px] flex flex-col items-center">
          <div className="mb-10 text-white/40">
            <Sparkles size={48} strokeWidth={1} />
          </div>
          <h2 className="w-full flex justify-between text-[clamp(1rem,6vw,18rem)] leading-[0.8] font-bold text-white uppercase overflow-hidden">
            {"Codex Infotech".split("").map((char, i) => (
              <span key={i} className="inline-block">{char === " " ? "\u00A0" : char}</span>
            ))}
          </h2>
        </div>

        {/* Final Footer Bar */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-[12px] uppercase tracking-widest text-white/30 font-mono gap-4">
          <p>© 2026 Codex Infotech</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
