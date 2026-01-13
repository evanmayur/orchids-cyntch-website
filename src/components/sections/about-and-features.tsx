import React from 'react';
import { Plus } from 'lucide-react';

const categories = [
  { name: 'Agency', icon: '🏢' },
  { name: 'Landing Page', icon: '🌐' },
  { name: 'Startup', icon: '🚀' },
  { name: 'Modern', icon: '💎' },
  { name: 'Animated', icon: '✨' },
  { name: 'Dark', icon: '🌙' },
  { name: 'Gradient', icon: '🌈' },
  { name: 'Professional', icon: '💼' }
];

const pages = [
  { name: 'Home', icon: '🏠' },
  { name: 'About', icon: '📄' },
  { name: 'Contact', icon: '📄' },
  { name: 'Error page', icon: '📄' },
  { name: 'Pricing', icon: '📄' },
  { name: 'Privacy policy', icon: '📄' },
  { name: 'Services', icon: '📄' }
];

const support = [
  { name: 'About Templates', icon: '❓' },
  { name: 'Refund Policy', icon: '↩️' },
  { name: 'Contact Creator', icon: '✉️' },
  { name: 'Report Template', icon: '🚩' }
];

const features = [
  'A11y Optimized',
  'Animations & Effects',
  'Automated SEO',
  'Built-in Analytics',
  'Components',
  'Project Styles',
  'Sticky Scrolling',
  'Visual Breakpoints'
];

export default function AboutAndFeatures() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto max-w-[1200px] px-5">
        <div className="flex flex-col lg:flex-row gap-x-24 gap-y-12">
          {/* Main Content Column */}
          <div className="flex-1">
            <div className="mb-20">
              <h2 className="text-[32px] font-semibold text-white mb-6 leading-tight">
                About this Template
              </h2>
              <div className="text-[16px] leading-[1.6] text-[#999999] space-y-4">
                <p>
                  Cyntch is tailored to meet the evolving needs of technology companies and perfect for AI startups and tech businesses boasting an intuitive interface and modern aesthetic that perfectly blend functionality with visual appeal. Ideal for those prioritizing a seamless digital experience, Cyntch provides a user-friendly platform to showcase products and services effectively.
                </p>
                <p>
                  Its sleek design ensures easy navigation and engaging interactions, enhancing user engagement and satisfaction. Whether highlighting innovative solutions, detailing technical specifications, or promoting client success stories, Cyntch supports your business goals with style and efficiency. Embrace Cyntch to elevate your online presence, captivate your audience, and reinforce your brand&apos;s commitment to excellence in the competitive software industry.
                </p>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-[32px] font-semibold text-white mb-8 leading-tight">
                Features
              </h2>
              <div className="border-t border-[#222222]">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group border-bottom border-b border-[#222222] transition-colors hover:bg-[#111111]"
                  >
                    <button className="w-full flex items-center justify-between py-5 text-left active:opacity-70 transition-opacity">
                      <span className="text-[16px] font-medium text-white">
                        {feature}
                      </span>
                      <Plus className="w-5 h-5 text-[#666666] group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="w-full lg:w-[240px] flex flex-col gap-12">
            <div>
              <h6 className="text-[14px] font-semibold text-white mb-4 uppercase tracking-wider">
                Categories
              </h6>
              <ul className="space-y-3">
                {categories.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-[14px] grayscale opacity-60">{item.icon}</span>
                    <a href="#" className="text-[14px] text-[#999999] hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-[14px] font-semibold text-white mb-4 uppercase tracking-wider">
                Pages
              </h6>
              <ul className="space-y-3">
                {pages.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-[14px] grayscale opacity-60">{item.icon}</span>
                    <a href="#" className="text-[14px] text-[#999999] hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-[14px] font-semibold text-white mb-4 uppercase tracking-wider">
                Support
              </h6>
              <ul className="space-y-3">
                {support.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-[14px] grayscale opacity-60">{item.icon}</span>
                    <a href="#" className="text-[14px] text-[#999999] hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}