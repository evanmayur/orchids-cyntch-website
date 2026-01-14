"use client";

import React, { useState } from "react";
import { Plus, Minus, LayoutGrid, Monitor, Rocket, Zap, Palette, Moon, Layers, FileText, HelpCircle, ShieldCloseIcon, Mail, Info } from "lucide-react";

const features = [
  { name: "A11y Optimized" },
  { name: "Animations & Effects" },
  { name: "Automated SEO" },
  { name: "Built-in Analytics" },
  { name: "Components" },
  { name: "Project Styles" },
  { name: "Sticky Scrolling" },
  { name: "Visual Breakpoints" },
];

const categories = [
  { name: "Agency", icon: <LayoutGrid className="size-4" /> },
  { name: "Landing Page", icon: <Monitor className="size-4" /> },
  { name: "Startup", icon: <Rocket className="size-4" /> },
  { name: "Modern", icon: <Zap className="size-4" /> },
  { name: "Animated", icon: <Layers className="size-4" /> },
  { name: "Dark", icon: <Moon className="size-4" /> },
  { name: "Gradient", icon: <Palette className="size-4" /> },
  { name: "Professional", icon: <Zap className="size-4" /> },
];

const pages = [
  { name: "Home" },
  { name: "About" },
  { name: "Contact" },
  { name: "Error page" },
  { name: "Pricing" },
  { name: "Privacy policy" },
  { name: "Services" },
];

const supportLinks = [
  { name: "About Templates", icon: <HelpCircle className="size-4" /> },
  { name: "Refund Policy", icon: <ShieldCloseIcon className="size-4" /> },
  { name: "Contact Creator", icon: <Mail className="size-4" /> },
  { name: "Report Template", icon: <Info className="size-4" /> },
];

export default function DetailsAndFeatures() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white w-full py-20 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-24">
        {/* Left Column */}
        <div className="flex flex-col gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-[32px] font-semibold tracking-tight mb-6">
              About this Template
            </h2>
            <div className="text-[18px] leading-[1.6] text-[#999999] max-w-3xl">
              <p>
                Cyntch is tailored to meet the evolving needs of technology companies and perfect for AI startups and tech businesses boasting an intuitive interface and modern aesthetic that perfectly blend functionality with visual appeal. Ideal for those prioritizing a seamless digital experience, Cyntch provides a user-friendly platform to showcase products and services effectively. Its sleek design ensures easy navigation and engaging interactions, enhancing user engagement and satisfaction. Whether highlighting innovative solutions, detailing technical specifications, or promoting client success stories, Cyntch supports your business goals with style and efficiency. Embrace Cyntch to elevate your online presence, captivate your audience, and reinforce your brand&apos;s commitment to excellence in the competitive software industry.
              </p>
            </div>
          </div>

          {/* Features Accordion Section */}
          <div>
            <h2 className="text-[32px] font-semibold tracking-tight mb-6">
              Features
            </h2>
            <div className="border-t border-[#222222]">
              {features.map((feature, index) => (
                <div key={index} className="border-b border-[#222222]">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left transition-colors hover:text-[#999999] group"
                  >
                    <span className="text-[16px] font-medium">{feature.name}</span>
                    <div className="flex items-center justify-center text-[#999999] group-hover:text-white transition-colors">
                      {openIndex === index ? (
                        <Minus className="size-5 transform rotate-0" />
                      ) : (
                        <Plus className="size-5 transform rotate-0" />
                      )}
                    </div>
                  </button>
                  {/* Content space for expansion if needed, currently just structural placeholder */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      openIndex === index ? "max-height-20 pb-5" : "max-h-0"
                    }`}
                  >
                    {/* Placeholder content for accordion body as per marketplace patterns */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column / Sidebar */}
        <div className="flex flex-col gap-10">
          {/* Categories */}
          <div>
            <h6 className="text-[12px] font-medium uppercase tracking-widest text-white mb-4">
              Categories
            </h6>
            <ul className="flex flex-col gap-3">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <a
                    href="#"
                    className="flex items-center gap-2.5 text-[14px] text-[#999999] hover:text-white transition-colors"
                  >
                    <span className="text-[#666]">{cat.icon}</span>
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h6 className="text-[12px] font-medium uppercase tracking-widest text-white mb-4">
              Pages
            </h6>
            <ul className="flex flex-col gap-3">
              {pages.map((page) => (
                <li key={page.name}>
                  <a
                    href="#"
                    className="flex items-center gap-2.5 text-[14px] text-[#999999] hover:text-white transition-colors"
                  >
                    <FileText className="size-4 text-[#666]" />
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-[12px] font-medium uppercase tracking-widest text-white mb-4">
              Support
            </h6>
            <ul className="flex flex-col gap-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    className="flex items-center gap-2.5 text-[14px] text-[#999999] hover:text-white transition-colors"
                  >
                    <span className="text-[#666]">{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}