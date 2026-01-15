"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Sparkles, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, project }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      setFullName("");
      setEmail("");
      setProject("");
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
            <div className="space-y-12">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-white/40 mb-6 font-mono">Inquiries</h2>
                  <a href="mailto:codexinfotechh@gmail.com" className="text-xl md:text-2xl hover:text-white/60 transition-colors">
                    codexinfotechh@gmail.com
                  </a>
              </div>
              
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-white/40 mb-6 font-mono">Calls</h2>
                  <a href="tel:+917862003533" className="text-3xl md:text-4xl hover:text-white/60 transition-colors">
                    +91 78620 03533
                  </a>
                </div>

              <div>
                <h2 className="text-sm uppercase tracking-widest text-white/40 mb-6 font-mono">Location</h2>
                  <p className="text-2xl text-white/80">
                    Global / Remote <br />
                    Bhavnagar, India
                  </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-3xl">
              <h2 className="text-2xl font-light mb-8 tracking-tight">Send us a message</h2>
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-white/60">We&apos;ll get back to you soon.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-white/60 hover:text-white underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-lg"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-lg"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Tell us about your project" 
                      rows={4}
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                    ></textarea>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="group relative bg-white text-black px-10 py-5 rounded-full w-full mt-8 overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 text-lg font-medium flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Inquiry"
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
