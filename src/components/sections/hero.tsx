import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-[#000000] text-white pt-20 pb-4 md:pt-32 md:pb-8">
      <div className="container mx-auto px-5 max-w-[1200px]">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8 select-none">
          <a
            href="/marketplace/templates/category/"
            className="text-[14px] font-medium text-[#999999] hover:text-[#ffffff] transition-colors"
          >
            <span>Categories</span>
          </a>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            className="opacity-40"
          >
            <path
              d="M3 1.5L4.5 3L3 4.5"
              stroke="#999999"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <a
            href="/marketplace/templates/category/agency/"
            className="text-[14px] font-medium text-[#999999] hover:text-[#ffffff] transition-colors"
          >
            <span>Agency</span>
          </a>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            className="opacity-40"
          >
            <path
              d="M3 1.5L4.5 3L3 4.5"
              stroke="#999999"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[14px] font-medium text-[#ffffff]">
            <span>Cyntch</span>
          </p>
        </div>

        {/* Title & Description Container */}
        <div className="max-w-[800px]">
          <h1 className="text-[32px] md:text-[48px] font-semibold leading-[1.1] tracking-tight mb-6 text-balance">
            Cyntch — Modern Technology Landing Page
          </h1>
          <p className="text-[18px] leading-[1.6] text-[#999999] text-balance mb-10">
            A modern landing page template for Technology, Startup & AI companies.
            Ideal for a landing page, tech startup, software company, webapp, or
            SaaS software landing page. Designed to empower individuals and
            businesses in competitive technology and AI market.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="https://framer.link/wPmUEWX?duplicateType=siteTemplate"
            className="bg-[#ffffff] text-[#000000] px-6 py-[12px] rounded-full text-[15px] font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center whitespace-nowrap"
          >
            Use for Free
          </a>
          <a
            href="https://cyntch.framer.website/"
            className="border border-[#222222] bg-transparent text-[#ffffff] px-6 py-[12px] rounded-full text-[15px] font-medium hover:bg-[rgba(255,255,255,0.1)] transition-colors inline-flex items-center justify-center whitespace-nowrap"
          >
            Preview
          </a>
        </div>

        {/* Stats / Details Bar */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-6 pt-6 border-t border-[#222222]">
          {/* Creator */}
          <a
            href="/@tareq-william/"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#222222]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_26.png"
                alt="Tareq william"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-medium text-[#ffffff] group-hover:text-[#999999] transition-colors leading-tight">
                Tareq william
              </span>
              <span className="text-[13px] text-[#666666]">Creator</span>
            </div>
          </a>

          {/* Updated */}
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div className="flex flex-col">
              <span className="text-[14px] font-medium text-[#ffffff] leading-tight">
                3 days ago
              </span>
              <span className="text-[13px] text-[#666666]">Updated</span>
            </div>
          </div>

          {/* Pages */}
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v14.5a2.5 2.5 0 0 1-2.5 2.5H6.5A2.5 2.5 0 0 1 4 19.5z" />
              <path d="M9 3v18" />
            </svg>
            <div className="flex flex-col">
              <span className="text-[14px] font-medium text-[#ffffff] leading-tight">
                7
              </span>
              <span className="text-[13px] text-[#666666]">Pages</span>
            </div>
          </div>

          {/* Views */}
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <div className="flex flex-col">
              <span className="text-[14px] font-medium text-[#ffffff] leading-tight">
                50.8K
              </span>
              <span className="text-[13px] text-[#666666]">Views</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;