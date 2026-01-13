import React from 'react';
import Link from 'next/link';
import { Search, ChevronDown, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex flex-col w-full border-b border-[#222222] bg-black/70 backdrop-blur-md">
      {/* Top Tier: Framer Brand Resources */}
      <div className="h-14 flex items-center justify-center border-b border-[#222222]">
        <div className="container flex items-center justify-between w-full max-w-[1200px]">
          {/* Brand/Wordmark */}
          <div className="flex items-center gap-2">
            <Link href="https://www.framer.com" className="flex items-center gap-2 group">
              <svg 
                width="16" 
                height="24" 
                viewBox="0 0 16 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M0 0H16V8H8L0 0ZM0 8H8L16 16H0V8ZM0 16H8V24L0 16Z" fill="currentColor" />
              </svg>
              <span className="text-white font-semibold text-[15px] tracking-tight">Framer</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            <button className="px-3 py-1.5 text-[14px] font-medium text-[#999999] hover:text-white transition-colors">Product</button>
            <button className="px-3 py-1.5 text-[14px] font-medium text-[#999999] hover:text-white transition-colors">Teams</button>
            <button className="px-3 py-1.5 text-[14px] font-medium text-white bg-[#111111] rounded-md transition-colors">Resources</button>
            <button className="px-3 py-1.5 text-[14px] font-medium text-[#999999] hover:text-white transition-colors">Community</button>
            <button className="px-3 py-1.5 text-[14px] font-medium text-[#999999] hover:text-white transition-colors">Support</button>
            <div className="w-[1px] h-4 bg-[#222222] mx-2"></div>
            <Link href="https://www.framer.com/enterprise" className="px-3 py-1.5 text-[14px] font-medium text-[#999999] hover:text-white transition-colors">Enterprise</Link>
            <Link href="https://www.framer.com/pricing" className="px-3 py-1.5 text-[14px] font-medium text-[#999999] hover:text-white transition-colors">Pricing</Link>
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            <Link href="https://login.framer.com" className="hidden sm:block px-3 py-1.5 text-[14px] font-medium text-[#999999] hover:text-white transition-colors">Log in</Link>
            <Link 
              href="https://framer.com/r/signup/" 
              className="px-4 py-1.5 text-[14px] font-semibold text-black bg-white rounded-full hover:bg-[#eeeeee] transition-all"
            >
              Sign up
            </Link>
            {/* Mobile Nav Toggle Icon could go here, but focusing on functional dual-tier per instructions */}
          </div>
        </div>
      </div>

      {/* Secondary Tier: Marketplace Specific */}
      <div className="h-[60px] flex items-center justify-center bg-black/40">
        <div className="container flex items-center justify-between w-full max-w-[1200px]">
          <div className="flex items-center gap-8">
            {/* Marketplace Label */}
            <div className="flex items-center gap-2">
              <Link href="/marketplace/" className="flex items-center gap-2">
                <svg 
                  width="14" 
                  height="21" 
                  viewBox="0 0 16 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white opacity-40 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M0 0H16V8H8L0 0ZM0 8H8L16 16H0V8ZM0 16H8V24L0 16Z" fill="currentColor" />
                </svg>
                <span className="text-white font-medium text-[14px]">Marketplace</span>
              </Link>
            </div>

            {/* Marketplace Sub-nav */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/marketplace/templates/" className="text-[14px] font-medium text-white relative after:content-[''] after:absolute after:-bottom-[20px] after:left-0 after:right-0 after:h-[2px] after:bg-white transition-colors">
                Templates
              </Link>
              <Link href="/marketplace/plugins/" className="text-[14px] font-medium text-[#999999] hover:text-white transition-colors">
                Plugins
              </Link>
              <Link href="/marketplace/components/" className="text-[14px] font-medium text-[#999999] hover:text-white transition-colors">
                Components
              </Link>
              <Link href="/marketplace/vectors/" className="text-[14px] font-medium text-[#999999] hover:text-white transition-colors">
                Vectors
              </Link>
            </div>
          </div>

          {/* Search Functionality */}
          <div className="flex items-center gap-4">
            <form className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={16} className="text-[#999999] group-focus-within:text-white transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search templates..." 
                className="bg-[#111111] border border-transparent rounded-full pl-10 pr-4 py-2 text-[14px] text-white placeholder-[#666666] w-[200px] focus:w-[280px] focus:outline-none focus:border-[#222222] focus:bg-[#1a1a1a] transition-all duration-300 cursor-text"
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;