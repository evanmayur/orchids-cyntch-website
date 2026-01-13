import React from 'react';
import Image from 'next/image';

/**
 * Gallery component for Cyntch template preview.
 * This component replicates the grid layout seen in the marketplace for template screenshots.
 * Theme: Dark
 */

const GallerySection = () => {
  // Asset URLs provided in the prompt
  const images = [
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_1.png",
      alt: "Screenshot 1 for Cyntch, a Framer Marketplace template by Tareq william."
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_2.png",
      alt: "Screenshot 2 for Cyntch, a Framer Marketplace template by Tareq william."
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_3.png",
      alt: "Screenshot 3 for Cyntch, a Framer Marketplace template by Tareq william."
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_4.png",
      alt: "Screenshot 4 for Cyntch, a Framer Marketplace template by Tareq william."
    }
  ];

  return (
    <section className="bg-black py-10 lg:py-20">
      <div className="container px-5 mx-auto max-w-[1200px]">
        {/* Gallery Grid Structure Replicated from HTML Structure */}
        {/* gallery-module-scss-module__b2Eq6G__container gallery-module-scss-module__b2Eq6G__twoRowsGrid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          {/* Top Left Image - Primary Feature */}
          <div className="relative overflow-hidden rounded-[12px] border border-[#222222] bg-[#111111] aspect-[16/12]">
            <Image
              src={images[0].url}
              alt={images[0].alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Top Right Image */}
          <div className="relative overflow-hidden rounded-[12px] border border-[#222222] bg-[#111111] aspect-[16/12]">
            <Image
              src={images[1].url}
              alt={images[1].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Bottom Left Image */}
          <div className="relative overflow-hidden rounded-[12px] border border-[#222222] bg-[#111111] aspect-[16/12]">
            <Image
              src={images[2].url}
              alt={images[2].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="relative overflow-hidden rounded-[12px] border border-[#222222] bg-[#111111] aspect-[16/12]">
            <Image
              src={images[3].url}
              alt={images[3].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default GallerySection;