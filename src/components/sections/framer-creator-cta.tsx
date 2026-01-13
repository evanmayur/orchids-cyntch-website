import React from 'react';
import Image from 'next/image';

/**
 * FramerCreatorCTA component
 * 
 * Clones the "Become a Framer Creator today" section with pixel-perfect accuracy.
 * Features:
 * - High-impact typography
 * - Central rounded CTA button
 * - The iconic blue-glowing "Publish" graphic with hand interaction
 */
const FramerCreatorCTA = () => {
  return (
    <section className="relative w-full bg-black pt-24 pb-0 overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Main Heading */}
        <h2 className="text-white text-[32px] md:text-[48px] font-semibold tracking-tight leading-[1.1] mb-4 max-w-[600px] text-balance">
          Become a Framer Creator today
        </h2>
        
        {/* Subtext */}
        <p className="text-[#999999] text-base md:text-lg mb-8 max-w-[400px] leading-relaxed text-balance">
          Sell products, make referrals, and keep all your earnings.
        </p>

        {/* CTA Button */}
        <a 
          href="https://www.framer.com/creators/"
          className="inline-flex items-center justify-center bg-white text-black text-sm font-semibold h-10 px-6 rounded-full transition-transform hover:scale-105 active:scale-95 duration-200"
        >
          Learn More
        </a>

        {/* High-impact Visual: Glow and Publish Hand */}
        <div className="relative mt-16 w-full max-w-[1000px] flex justify-center">
          {/* Blue Glow Effect */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[60%] h-[80%] rounded-full opacity-60 blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(0, 112, 243, 0.8) 0%, rgba(0, 70, 243, 0) 70%)',
            }}
          />
          
          {/* The Main Asset */}
          <div className="relative z-10 w-full aspect-[16/9] max-h-[500px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_28.png"
              alt="Become a Framer Creator today"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background radial gradient to smooth transition into footer */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
        }}
      />
    </section>
  );
};

export default FramerCreatorCTA;