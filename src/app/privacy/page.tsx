"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Cookie, Share2, ShieldCheck, FileKey, Scale, Link2, RefreshCw, Mail } from "lucide-react";

const sections = [
  {
    icon: Shield,
    number: "01",
    title: "Introduction",
    content: (
      <>
        <p>
          Welcome to Codex Infotech.
          Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or use our services.
        </p>
        <p className="mt-4">
          By using our website, you agree to this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    icon: Eye,
    number: "02",
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-6">We may collect the following information:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h4 className="text-white font-medium mb-4">Personal Information</h4>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/40 rounded-full" />Name</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/40 rounded-full" />Email address</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/40 rounded-full" />Phone number</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/40 rounded-full" />Company or business details</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/40 rounded-full" />Project-related information</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h4 className="text-white font-medium mb-4">Technical Information</h4>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/40 rounded-full" />IP address</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/40 rounded-full" />Browser type</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/40 rounded-full" />Device and operating system</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/40 rounded-full" />Pages visited and time spent</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/40 rounded-full" />Cookies and analytics data</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: Database,
    number: "03",
    title: "How We Use Your Information",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          "Respond to inquiries and provide services",
          "Communicate regarding projects or support",
          "Improve website functionality and performance",
          "Send updates or marketing emails (only with consent)",
          "Ensure website security and prevent misuse",
        ].map((item, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60 flex-shrink-0 mt-0.5">
              {i + 1}
            </div>
            <span className="text-white/70 text-sm">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Cookie,
    number: "04",
    title: "Cookies",
    content: (
      <p>
        Our website uses cookies to enhance user experience and analyze traffic.
        You can disable cookies through your browser settings, but some features may not work properly.
      </p>
    ),
  },
  {
    icon: Share2,
    number: "05",
    title: "Data Sharing",
    content: (
      <>
        <div className="bg-gradient-to-r from-white/10 to-transparent border border-white/20 rounded-xl p-4 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <p className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">We do not sell or rent your personal data.</p>
        </div>
        <p className="mb-4">Your information may be shared only:</p>
        <ul className="space-y-3">
          {[
            "With trusted third-party tools (hosting, analytics, payment services)",
            "If required by law or government authorities",
            "To protect our legal rights or prevent fraud",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Lock size={12} className="text-white/60" />
              </div>
              <span className="text-white/70">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Data Security",
    content: (
      <p>
        We use reasonable technical and organizational measures to protect your information. However, no method of transmission over the internet is completely secure.
      </p>
    ),
  },
  {
    icon: FileKey,
    number: "07",
    title: "Client Confidentiality",
    content: (
      <p>
        All client data, project details, and business information are treated as confidential and will not be disclosed without permission, except where legally required.
      </p>
    ),
  },
  {
    icon: Scale,
    number: "08",
    title: "Your Rights",
    content: (
      <>
        <p className="mb-6">You have the right to:</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {[
            "Access your personal data",
            "Request correction or deletion",
            "Withdraw consent",
            "Opt out of marketing communications",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-white/70 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p>
          Contact us at{" "}
          <a href="mailto:codexinfotechh@gmail.com" className="text-white hover:text-white/60 underline underline-offset-4 transition-colors">
            codexinfotechh@gmail.com
          </a>{" "}
          to exercise these rights.
        </p>
      </>
    ),
  },
  {
    icon: Link2,
    number: "09",
    title: "Third-Party Links",
    content: (
      <p>
        Our website may contain links to external websites. We are not responsible for their privacy practices.
      </p>
    ),
  },
  {
    icon: RefreshCw,
    number: "10",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <main className="pt-32 pb-32">
        <section className="px-[5vw] mb-24">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Lock size={20} className="text-white/60" />
                </div>
                <span className="text-white/40 font-mono text-sm tracking-wider uppercase">Legal</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tighter font-bold mb-6">
                Privacy Policy
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl text-white/50 max-w-2xl">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex items-center gap-4 mt-8 text-sm text-white/40">
                <span>Last updated: January 15, 2026</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>11 sections</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-[5vw]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
              <ScrollReveal className="hidden lg:block">
                <div className="sticky top-32">
                  <p className="text-white/40 text-sm font-mono uppercase tracking-wider mb-6">Quick Navigation</p>
                  <nav className="space-y-2">
                    {sections.map((section, i) => (
                      <motion.a
                        key={i}
                        href={`#section-${section.number}`}
                        className="flex items-center gap-3 py-2 px-3 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all group"
                        whileHover={{ x: 4 }}
                      >
                        <span className="font-mono text-xs text-white/30 group-hover:text-white/50">{section.number}</span>
                        <span className="text-sm">{section.title}</span>
                      </motion.a>
                    ))}
                  </nav>
                </div>
              </ScrollReveal>

              <div className="space-y-16">
                {sections.map((section, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <motion.article
                      id={`section-${section.number}`}
                      className="scroll-mt-32 group"
                      initial={{ opacity: 0.5 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ margin: "-20%" }}
                    >
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                          <section.icon size={24} className="text-white/60 group-hover:text-white/80 transition-colors" />
                        </div>
                        <div>
                          <span className="text-white/30 font-mono text-sm">{section.number}</span>
                          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-1">{section.title}</h2>
                        </div>
                      </div>
                      <div className="pl-0 md:pl-20 text-white/70 leading-relaxed">
                        {section.content}
                      </div>
                    </motion.article>
                  </ScrollReveal>
                ))}

                <ScrollReveal delay={0.1}>
                  <div className="border-t border-white/10 pt-16" id="section-11">
                    <div className="bg-gradient-to-br from-white/5 to-transparent rounded-3xl p-8 md:p-12 border border-white/10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                          <Mail size={24} className="text-white/80" />
                        </div>
                        <div>
                          <span className="text-white/30 font-mono text-sm">11</span>
                          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-1">Contact Us</h2>
                        </div>
                      </div>
                      <p className="text-white/60 mb-8 max-w-xl">
                        If you have questions about this Privacy Policy, we&apos;re here to help.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <a
                          href="mailto:codexinfotechh@gmail.com"
                          className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all group"
                        >
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="text-lg">📧</span>
                          </div>
                          <div>
                            <p className="text-white/40 text-xs uppercase tracking-wider">Email</p>
                            <p className="text-white group-hover:text-white/80 transition-colors">codexinfotechh@gmail.com</p>
                          </div>
                        </a>
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="text-lg">📍</span>
                          </div>
                          <div>
                            <p className="text-white/40 text-xs uppercase tracking-wider">Location</p>
                            <p className="text-white">Bhavnagar, India</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-white font-medium text-lg">Codex Infotech</p>
                        <p className="text-white/40 text-sm mt-1">Web Design & Development Agency</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
