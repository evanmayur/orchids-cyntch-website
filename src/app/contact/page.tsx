import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />
      
      <main className="pt-32 pb-20 px-[5vw]">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="mb-6 text-white/40">
              <Sparkles size={48} strokeWidth={1} />
            </div>
            <h1 className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tighter font-bold mb-8">
              Let&apos;s Create <br /> Something <span className="text-white/40 italic">New</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Ready to elevate your digital presence? We&apos;re here to transform your vision into an immersive reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-white/40 mb-6 font-mono">Inquiries</h2>
                <a href="mailto:hello@codexinfotech.com" className="text-3xl md:text-4xl hover:text-white/60 transition-colors">
                  hello@codexinfotech.com
                </a>
              </div>
              
              <div>
                <h2 className="text-sm uppercase tracking-widest text-white/40 mb-6 font-mono">Calls</h2>
                <a href="tel:+27780548476" className="text-3xl md:text-4xl hover:text-white/60 transition-colors">
                  +27 (0) 78 054 8476
                </a>
              </div>

              <div>
                <h2 className="text-sm uppercase tracking-widest text-white/40 mb-6 font-mono">Location</h2>
                <p className="text-2xl text-white/80">
                  Global / Remote <br />
                  Based in South Africa
                </p>
              </div>
            </div>

            {/* Simple Form Placeholder / Contact Options */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-3xl">
              <h2 className="text-2xl font-light mb-8 tracking-tight">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-lg"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-lg"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your project" 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                  ></textarea>
                </div>
                <button className="group relative bg-white text-black px-10 py-5 rounded-full w-full mt-8 overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <span className="relative z-10 text-lg font-medium">Send Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
