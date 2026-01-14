import React from 'react';
import Image from 'next/image';

interface TemplateCardProps {
  title: string;
  price: string;
  image: string;
  link: string;
}

const TemplateCard = ({ title, price, image, link }: TemplateCardProps) => (
  <a href={link} className="group flex flex-col gap-3 no-underline">
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-[#222222] transition-colors group-hover:border-[#444444]">
      <Image
        src={image}
        alt={`${title} template screenshot`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-col gap-0.5">
      <h3 className="text-[15px] font-medium leading-tight text-white m-0">
        {title}
      </h3>
      <p className="text-[14px] leading-tight text-[#999999] m-0">
        {price}
      </p>
    </div>
  </a>
);

const RelatedTemplates = () => {
  const templates = [
    {
      title: 'Sonic',
      price: 'Free',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_6.png',
      link: '#',
    },
    {
      title: 'Blocks',
      price: 'Free',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_7.png',
      link: '#',
    },
    {
      title: 'Vitalflow',
      price: 'Free',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_8.png',
      link: '#',
    },
    {
      title: 'Landio',
      price: 'Free',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_9.png',
      link: '#',
    },
    {
      title: 'Polo',
      price: 'Free',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_10.png',
      link: '#',
    },
    {
      title: 'Billie',
      price: 'Free',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_11.png',
      link: '#',
    },
    {
      title: 'LanX',
      price: 'Free',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_12.png',
      link: '#',
    },
    {
      title: 'Pearl',
      price: 'Free',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_13.png',
      link: '#',
    },
  ];

  return (
    <section className="w-full bg-black py-[80px]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[20px] font-semibold tracking-tight text-white md:text-[24px]">
            Related Templates
          </h2>
          <a 
            href="/marketplace/templates/" 
            className="flex items-center gap-1.5 text-[14px] font-medium text-[#999999] transition-colors hover:text-white"
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
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.title + index}
              title={template.title}
              price={template.price}
              image={template.image}
              link={template.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedTemplates;