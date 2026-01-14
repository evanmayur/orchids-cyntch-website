"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Footer component for Codex
 * Includes: "Let's collaborate" CTA, Site index, Social links, Newsletter form, and GMT+2 Clock.
 */
export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Adjusting to GMT+2 specifically as requested
      const gmt2Time = new Date(now.getTime() + (now.getTimezoneOffset() + 120) * 60000);
      const hours = String(gmt2Time.getHours()).padStart(2, "0");
      const minutes = String(gmt2Time.getMinutes()).padStart(2, "0");
      const seconds = String(gmt2Time.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-white px-[5vw] pt-[120px] pb-[40px] border-t border-white/10 font-sans">
      <div className="max-w-[1800px] mx-auto">
        {/* Main CTA Section */}
        <div className="mb-[120px] md:mb-[200px]">
          <p className="text-[14px] uppercase tracking-[0.1em] font-mono text-muted-foreground mb-4">
            Tell us about your project.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.04em] hover:opacity-70 transition-opacity"
          >
            Let&apos;s collaborate.
            <div className="ml-8 w-[clamp(40px,6vw,100px)] h-[clamp(40px,6vw,100px)] rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowRight className="w-1/2 h-1/2" strokeWidth={1} />
            </div>
          </Link>
        </div>

        {/* Lower Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
          {/* Site Index */}
          <div className="md:col-span-3">
            <h6 className="text-[12px] uppercase tracking-[0.1em] font-mono text-muted-foreground mb-8">
              Site index
            </h6>
            <ul className="space-y-4">
              {["Work", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-[18px] hover:text-muted-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h6 className="text-[12px] uppercase tracking-[0.1em] font-mono text-muted-foreground mb-8">
              Social
            </h6>
            <ul className="space-y-4">
              {[
                { name: "Instagram", url: "#" },
                { name: "Facebook", url: "#" },
                { name: "LinkedIn", url: "#" },
                { name: "Awwwards", url: "#" },
                { name: "Behance", url: "#" },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] hover:text-muted-foreground transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-6 lg:pl-[10vw]">
            <p className="text-[18px] leading-[1.4] mb-8 max-w-[400px]">
              Join our newsletter for fresh updates and exclusive studio insights.
            </p>
            <form className="relative flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="bg-transparent border-b border-white/20 pb-2 flex-1 focus:outline-none focus:border-white transition-colors placeholder:text-muted-foreground text-[16px]"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="bg-transparent border-b border-white/20 pb-2 flex-1 focus:outline-none focus:border-white transition-colors placeholder:text-muted-foreground text-[16px]"
                />
              </div>
              <div className="flex items-end gap-4 mt-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-b border-white/20 pb-2 flex-1 focus:outline-none focus:border-white transition-colors placeholder:text-muted-foreground text-[16px]"
                />
                <button
                  type="submit"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all mb-1"
                >
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[80px] pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex gap-8 text-[14px] text-muted-foreground font-mono uppercase tracking-widest">
            <span>© 2024 Codex</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </div>

          <div className="text-[14px] font-mono uppercase tracking-[0.1em] text-white">
            <span className="text-muted-foreground mr-2">{time}</span> (GMT+2)
          </div>

          <div className="text-[14px] text-muted-foreground font-mono uppercase tracking-widest">
            Made with love in Cape Town & Vienna
          </div>
        </div>
      </div>
    </footer>
  );
}