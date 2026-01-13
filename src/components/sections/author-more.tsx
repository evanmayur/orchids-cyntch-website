import React from 'react';
import Image from 'next/image';

/**
 * AuthorMore Section Component
 * 
 * This component clones the "More from Tareq william" section with pixel perfection,
 * focusing on the "Naqsh" template card as specified in the instructions.
 */
export default function AuthorMore() {
  const assets = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_5.png"
  ];

  return (
    <section className="w-full bg-black py-[80px]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[24px] font-semibold tracking-tight text-white leading-[1.3]">
            More from Tareq william
          </h2>
          <a
            href="/@tareq-william"
            className="flex items-center gap-1 text-[14px] font-medium text-white hover:opacity-70 transition-opacity"
          >
            See All
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-0.5"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Horizontal List / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Naqsh Template Card */}
          <div className="group cursor-pointer">
            <a href="/marketplace/templates/naqsh" className="block outline-none">
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-[#222222] transition-colors group-hover:border-[#444444]">
                <Image
                  src={assets[0]}
                  alt="Naqsh - Framer template preview"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Card Content */}
              <div className="mt-4 flex flex-col gap-0.5">
                <h3 className="text-[15px] font-semibold text-white leading-tight">
                  Naqsh
                </h3>
                <div className="flex items-center gap-1.5 text-[14px] text-[#999999] font-medium">
                  <span>Template</span>
                  <span className="text-[10px] opacity-40">•</span>
                  <span>Free</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Divider consistent with the structure */}
      <div className="container mx-auto px-5 max-w-[1200px] mt-20">
        <div className="w-full h-[1px] bg-[#222222]" />
      </div>
    </section>
  );
}