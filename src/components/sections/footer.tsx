import React from 'react';
import Image from 'next/image';

/**
 * Footer Component
 * 
 * A pixel-perfect clone of the Framer Marketplace detailed footer.
 * Includes multi-column links, the secondary Framer logo, and a cookie consent banner.
 */

const Footer = () => {
  const footerSections = [
    {
      title: 'Resources',
      links: [
        { label: 'Desktop app', href: '#' },
        { label: 'Marketplace', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Developers', href: '#' },
        { label: 'Wallpapers', href: '#' },
        { label: 'Startups', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Security', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Report', href: '#' },
        { label: 'Status', href: '#' },
        { label: 'Legal', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Creators',
      links: [
        { label: 'Program', href: '#' },
        { label: 'Payouts', href: '#' },
        { label: 'Experts', href: '#' },
        { label: 'Awards', href: '#' },
        { label: 'Events', href: '#' },
        { label: 'Brand', href: '#' },
      ],
    },
    {
      title: 'Compare',
      links: [
        { label: 'Squarespace', href: '#' },
        { label: 'Wordpress', href: '#' },
        { label: 'Unbounce', href: '#' },
        { label: 'Webflow', href: '#' },
        { label: 'Figma', href: '#' },
        { label: 'Wix', href: '#' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Figma to HTML', href: '#' },
        { label: 'Website builder', href: '#' },
        { label: 'Portfolio maker', href: '#' },
        { label: 'Landing pages', href: '#' },
        { label: 'UI/UX design', href: '#' },
        { label: 'No-code', href: '#' },
      ],
    },
    {
      title: 'Socials',
      links: [
        { label: 'Instagram', href: '#' },
        { label: 'X Twitter', href: '#' },
        { label: 'YouTube', href: '#' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Threads', href: '#' },
        { label: 'TikTok', href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-[#000000] pt-[80px] pb-[100px] font-sans">
      <div className="container mx-auto max-w-[1200px] px-5">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-y-10">
          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 flex-grow">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h6 className="text-[14px] font-semibold text-white tracking-tight">
                  {section.title}
                </h6>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] font-medium text-[#999999] hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Secondary Logo */}
          <div className="flex justify-end pt-1 lg:pt-0 min-w-[32px]">
            <a href="https://www.framer.com" aria-label="Framer Home">
              <svg 
                width="16" 
                height="24" 
                viewBox="0 0 16 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white fill-current"
              >
                <path d="M0 0H16V8L8 16H16V24L0 8V0Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </footer>
  );
};

/**
 * Cookie Banner Component
 * Floating overlay as seen in the screenshots.
 */
function CookieBanner() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-5 z-[50] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div 
        className="flex items-center gap-4 bg-white rounded-[16px] p-5 pr-6 shadow-2xl max-w-[380px]"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
      >
        <p className="text-[14px] leading-[1.4] font-medium text-black">
          We use cookies to personalize content, run ads, and analyze traffic.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 bg-[#f5f5f5] hover:bg-[#ebebeb] text-black text-[14px] font-semibold py-2 px-5 rounded-full transition-colors"
        >
          Okay
        </button>
      </div>
    </div>
  );
}

export default Footer;