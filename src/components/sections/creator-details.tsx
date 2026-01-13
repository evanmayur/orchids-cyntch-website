thoughtfulness
import React from "react";
import Image from "next/image";
import { Clock, BookOpen, Eye } from "lucide-react";

/**
 * CreatorDetails component clones the metadata bar displaying the creator's profile,
 * update frequency, page count, and total view count with associated icons.
 * 
 * Data mapping:
 * - Creator: Tareq william (with avatar)
 * - Updated: 3 days ago (Clock icon)
 * - Pages: 7 (Pages/BookOpen icon)
 * - Views: 50.8K (Eye icon)
 */

const CreatorDetails = () => {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5">
      <div className="flex flex-wrap items-center justify-between gap-4 py-8 border-b border-[#222222] md:flex-nowrap">
        <div className="flex flex-1 items-center justify-between w-full md:w-auto md:justify-start md:gap-12">
          
          {/* Creator Item */}
          <a 
            href="/@tareq-william/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80 group"
          >
            <div className="relative flex-shrink-0">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#222222]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ce1589ff-8399-40fb-afc8-6e6951d6460b-framer-com/assets/images/images_26.png"
                  alt="Tareq william"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[14px] font-medium text-white truncate leading-tight">
                Tareq william
              </span>
              <span className="text-[12px] text-[#999999] leading-tight">
                Creator
              </span>
            </div>
          </a>

          {/* Metric Items Container */}
          <div className="flex items-center gap-6 md:gap-12">
            
            {/* Updated Item */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 text-[#999999]">
                <Clock size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-medium text-white leading-tight">
                  <span className="hidden sm:inline">3 days ago</span>
                  <span className="sm:hidden">3d ago</span>
                </span>
                <span className="text-[12px] text-[#999999] leading-tight">
                  Updated
                </span>
              </div>
            </div>

            {/* Pages Item (Tablet/Desktop only usually, but matches layout) */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex-shrink-0 text-[#999999]">
                <BookOpen size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-medium text-white leading-tight">
                  7
                </span>
                <span className="text-[12px] text-[#999999] leading-tight">
                  Pages
                </span>
              </div>
            </div>

            {/* Views Item */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 text-[#999999]">
                <Eye size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-medium text-white leading-tight">
                  50.8K
                </span>
                <span className="text-[12px] text-[#999999] leading-tight">
                  Views
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDetails;