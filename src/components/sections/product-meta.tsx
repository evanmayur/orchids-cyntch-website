import React from 'react';
import Image from 'next/image';
import { Clock, BookText, Eye } from 'lucide-react';

/**
 * ProductMeta component displays horizontal metadata for a product including 
 * creator info, update status, page count, and view count.
 * 
 * Design: High-end digital marketplace aesthetic, dark mode, 
 * subtle icons, and high-contrast labels.
 */

const ProductMeta = () => {
  const creatorImage = "https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/creators/28822/g9qaOO4QqUHJeeJ36AiX3wVGAjU-xc87ERnTAfOnjTGW7s58a1B69xvXgZ.jpg";

  return (
    <div className="w-full py-10">
      <div className="flex flex-wrap items-center justify-start md:justify-center gap-x-12 gap-y-6">
        
        {/* Creator Info */}
        <a 
          href="/@tareq-william/" 
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
            <Image
              src={creatorImage}
              alt="Tareq william"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold text-white truncate leading-tight">
              Tareq william
            </span>
            <span className="text-[12px] font-medium uppercase tracking-wider text-[#999999]">
              Creator
            </span>
          </div>
        </a>

        {/* Updated Status */}
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-white opacity-80" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold text-white leading-tight">
              <span className="hidden md:inline">3 days ago</span>
              <span className="md:hidden">3d ago</span>
            </span>
            <span className="text-[12px] font-medium uppercase tracking-wider text-[#999999]">
              Updated
            </span>
          </div>
        </div>

        {/* Page Count */}
        <div className="flex items-center gap-3">
          <BookText className="h-5 w-5 text-white opacity-80" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold text-white leading-tight">
              7
            </span>
            <span className="text-[12px] font-medium uppercase tracking-wider text-[#999999]">
              Pages
            </span>
          </div>
        </div>

        {/* View Count */}
        <div className="flex items-center gap-3">
          <Eye className="h-5 w-5 text-white opacity-80" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold text-white leading-tight">
              50.8K
            </span>
            <span className="text-[12px] font-medium uppercase tracking-wider text-[#999999]">
              Views
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductMeta;