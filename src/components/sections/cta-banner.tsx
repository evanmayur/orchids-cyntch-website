import React from 'react';
import Image from 'next/image';

/**
 * CTABanner Component
 * Clones the "Become a Framer Creator today" call-to-action section.
 * Features: Central text alignment, "Learn More" button, and glowing blue graphic.
 */
const CTABanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#000000] py-[120px] md:py-[160px]">
      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Heading Section */}
        <h2 className="mb-4 text-[32px] font-semibold leading-[1.1] tracking-tight text-white md:text-[48px]">
          Become a Framer <br className="sm:hidden" />
          Creator today
        </h2>
        
        {/* Subtext Section */}
        <p className="mb-8 max-w-[420px] text-[16px] leading-[1.5] text-[#999999] md:text-[18px]">
          Sell products, make referrals, and keep all your earnings.
        </p>

        {/* Action Button */}
        <a
          href="https://www.framer.com/creators"
          className="mb-16 inline-flex h-[40px] items-center justify-center rounded-full bg-white px-6 text-[14px] font-medium text-black transition-opacity hover:opacity-90"
        >
          Learn More
        </a>

        {/* Glowing Graphic Element */}
        <div className="relative mt-4 w-full max-w-[800px] flex justify-center">
          {/* Central Blue Glow */}
          <div 
            className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-60"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 112, 243, 0.4) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          
          {/* Main Visual Asset: "Publish" button and finger */}
          <div className="relative z-20 w-full max-w-[600px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_29.png"
              alt="Become a Framer Creator"
              width={1200}
              height={800}
              layout="responsive"
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Subtle bottom border to separate from footer if needed */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#222222]" />
    </section>
  );
};

export default CTABanner;