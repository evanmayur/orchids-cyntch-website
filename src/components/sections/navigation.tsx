import React from 'react';
import { Search, ChevronRight, Menu, X } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-background">
      {/* Top Global Header */}
      <div className="h-[60px] border-b border-border flex items-center">
        <div className="container px-5 mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="https://www.framer.com" className="flex items-center gap-2 group">
              <svg 
                width="16" 
                height="24" 
                viewBox="0 0 16 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-foreground"
              >
                <path d="M0 0H16V8H8L0 0ZM0 8H8L16 16H0V8ZM8 16V24L0 16H8Z" fill="currentColor"/>
              </svg>
              <span className="font-semibold text-[15px] text-foreground tracking-tight">Framer</span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {['Product', 'Teams', 'Resources', 'Community', 'Support'].map((item) => (
                <button
                  key={item}
                  className={`px-3 py-2 text-[14px] font-medium transition-colors rounded-md hover:bg-surface-10 ${
                    item === 'Resources' ? 'text-foreground bg-surface-10' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a 
                href="https://www.framer.com/enterprise" 
                className="px-3 py-2 text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Enterprise
              </a>
              <a 
                href="https://www.framer.com/pricing" 
                className="px-3 py-2 text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="https://login.framer.com" 
                className="px-4 py-2 text-[14px] font-medium text-foreground hover:bg-surface-10 rounded-full transition-colors"
              >
                Log in
              </a>
              <a 
                href="https://framer.com/r/signup/" 
                className="bg-foreground text-background px-4 py-2 rounded-full text-[14px] font-semibold hover:opacity-90 transition-opacity"
              >
                Sign up
              </a>
            </div>
            
            {/* Mobile Menu Icon */}
            <button className="lg:hidden p-2 text-foreground">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Marketplace Sub-nav */}
      <div className="h-[64px] border-b border-border flex items-center bg-background/80 backdrop-blur-md">
        <div className="container px-5 mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/marketplace/" className="flex items-center gap-2">
              <span className="font-semibold text-[15px] text-foreground tracking-tight">Marketplace</span>
            </a>

            <div className="hidden sm:flex items-center gap-6">
              {[
                { name: 'Templates', active: true, href: '/marketplace/templates/' },
                { name: 'Plugins', active: false, href: '/marketplace/plugins/' },
                { name: 'Components', active: false, href: '/marketplace/components/' },
                { name: 'Vectors', active: false, href: '/marketplace/vectors/' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-[14px] font-medium transition-colors ${
                    item.active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-end max-w-md">
            <div className="relative w-full max-w-[240px] hidden sm:block group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-foreground transition-colors">
                <Search size={16} strokeWidth={2.5} />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-9 bg-[#111111] hover:bg-[#1a1a1a] focus:bg-surface-10 border border-transparent focus:border-white/10 rounded-full pl-10 pr-4 text-[14px] text-foreground placeholder-muted-foreground transition-all outline-none"
              />
            </div>
            
            {/* Mobile Search Icon */}
            <button className="sm:hidden p-2 text-muted-foreground hover:text-foreground">
              <Search size={20} />
            </button>

            {/* Mobile Chevron Menu */}
            <div className="sm:hidden">
              <button className="p-2 flex flex-col gap-1 items-end">
                <div className="w-4 h-[2px] bg-foreground"></div>
                <div className="w-2 h-[2px] bg-foreground"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;