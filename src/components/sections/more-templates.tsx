import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  priceTag: string;
  category?: string;
  imageUrl: string;
}

const TemplateCard = ({ title, priceTag, category, imageUrl }: TemplateCardProps) => {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-[#111111] mb-3">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[14px] font-semibold text-white leading-tight">{title}</h3>
        <p className="text-[12px] text-[#999999] font-medium uppercase tracking-wider">
          {category ? `${category} · ` : ''}{priceTag}
        </p>
      </div>
    </div>
  );
};

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-[20px] font-semibold text-white tracking-tight">{title}</h2>
      <a 
        href="#" 
        className="flex items-center gap-1 text-[13px] font-medium text-white hover:opacity-70 transition-opacity"
      >
        See All <ChevronRight size={14} />
      </a>
    </div>
  );
};

export default function MoreTemplates() {
  const creatorTemplates = [
    {
      title: "Naqsh",
      priceTag: "Free",
      category: "Template",
      imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_6.png",
    }
  ];

  const relatedTemplates = [
    {
      title: "Sonic",
      priceTag: "Free",
      imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_8.png",
    },
    {
      title: "Blocks",
      priceTag: "Free",
      imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_10.png",
    },
    {
      title: "Vitalflow",
      priceTag: "Free",
      imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_11.png",
    },
    {
      title: "Landio",
      priceTag: "Free",
      imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_6.png", // Fallback to provided assets
    }
  ];

  const bottomRelated = [
    { title: "Polo", priceTag: "Free", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_8.png" },
    { title: "Billie", priceTag: "Free", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_10.png" },
    { title: "LanX", priceTag: "Free", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_11.png" },
    { title: "Pearl", priceTag: "Free", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_6.png" },
  ];

  return (
    <section className="w-full bg-[#000000] py-[80px]">
      <div className="container mx-auto max-w-[1200px] px-5 sm:px-10">
        
        {/* More from Tareq william Section */}
        <div className="mb-[80px]">
          <SectionHeader title="More from Tareq william" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {creatorTemplates.map((template, idx) => (
              <TemplateCard key={idx} {...template} />
            ))}
          </div>
        </div>

        {/* Related Templates Section */}
        <div>
          <SectionHeader title="Related Templates" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-10">
            {relatedTemplates.map((template, idx) => (
              <TemplateCard key={idx} {...template} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {bottomRelated.map((template, idx) => (
              <TemplateCard key={idx} {...template} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}