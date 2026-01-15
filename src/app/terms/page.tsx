"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { FileText, Briefcase, CreditCard, Copyright, Users, AlertTriangle, XCircle, Blocks, Scale, RefreshCw, Mail } from "lucide-react";

const sections = [
  {
    icon: FileText,
    number: "01",
    title: "Introduction",
    content: (
      <>
        <p>
          These Terms & Conditions govern your use of Codex Infotech&apos;s website and services.
        </p>
        <p className="mt-4">
          By accessing our website or hiring our services, you agree to these Terms.
        </p>
      </>
    ),
  },
  {
    icon: Briefcase,
    number: "02",
    title: "Services",
    content: (
      <>
        <p className="mb-6">We provide services including but not limited to:</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            "Website design & development",
            "UI/UX design",
            "Digital marketing",
            "Branding & consulting",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-white/70 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p>All services are provided as per agreed proposals or contracts.</p>
      </>
    ),
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Payments",
    content: (
      <div className="space-y-3">
        {[
          "Payments must be made according to the agreed schedule",
          "Late payments may result in project delays or suspension",
          "Advance payments are non-refundable unless stated otherwise",
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
    icon: Copyright,
    number: "04",
    title: "Intellectual Property",
    content: (
      <div className="space-y-3">
        {[
          "All designs, code, and content remain our property until full payment is received",
          "After full payment, ownership of final deliverables is transferred to the client",
          "We reserve the right to display completed projects in our portfolio unless restricted in writing",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Copyright size={12} className="text-white/60" />
            </div>
            <span className="text-white/70">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Users,
    number: "05",
    title: "Client Responsibilities",
    content: (
      <>
        <p className="mb-6">Clients agree to:</p>
        <div className="grid sm:grid-cols-1 gap-3">
          {[
            "Provide accurate project requirements",
            "Supply necessary content and approvals on time",
            "Avoid unlawful or copyrighted materials without permission",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-white/70 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    icon: AlertTriangle,
    number: "06",
    title: "Limitation of Liability",
    content: (
      <>
        <p className="mb-6">We are not liable for:</p>
        <div className="grid sm:grid-cols-1 gap-3 mb-6">
          {[
            "Loss of business or profits",
            "Data loss caused by third-party services",
            "Delays due to client-side issues or force majeure",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-white/70 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-white/10 to-transparent border border-white/20 rounded-xl p-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <p className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Our liability is limited to the amount paid for the service.</p>
        </div>
      </>
    ),
  },
  {
    icon: XCircle,
    number: "07",
    title: "Termination",
    content: (
      <div className="space-y-4">
        <p>Either party may terminate services with written notice.</p>
        <p>Any completed work up to termination must be paid for.</p>
      </div>
    ),
  },
  {
    icon: Blocks,
    number: "08",
    title: "Third-Party Services",
    content: (
      <p>
        We may use third-party tools, APIs, or hosting services. We are not responsible for their downtime or policy changes.
      </p>
    ),
  },
  {
    icon: Scale,
    number: "09",
    title: "Governing Law",
    content: (
      <p>
        These Terms are governed by the laws of India.
      </p>
    ),
  },
  {
    icon: RefreshCw,
    number: "10",
    title: "Changes to Terms",
    content: (
      <p>
        We reserve the right to update these Terms at any time. Continued use of the website implies acceptance of the updated terms.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <main className="pt-32 pb-32">
        <section className="px-[5vw] mb-24">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <FileText size={20} className="text-white/60" />
                </div>
                <span className="text-white/40 font-mono text-sm tracking-wider uppercase">Legal</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tighter font-bold mb-6">
                Terms & Conditions
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl text-white/50 max-w-2xl">
                Please read these terms carefully before using our services. By engaging with us, you agree to be bound by these conditions.
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
          <div className="max-w-[900px] mx-auto">
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
                          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-1">Contact Information</h2>
                        </div>
                      </div>
                      <p className="text-white/60 mb-8 max-w-xl">
                        For questions regarding these Terms & Conditions:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <a
                          href="mailto:codexinfotechh@gmail.com"
                          className="flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-5 transition-all group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Mail size={20} className="text-white/80" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                            <p className="text-white group-hover:text-white/80 transition-colors font-medium break-all">codexinfotechh@gmail.com</p>
                          </div>
                        </a>
                        <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 transition-all group hover:bg-white/10 hover:border-white/20">
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <span className="text-lg">📍</span>
                          </div>
                          <div className="min-w-0">
                            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Location</p>
                            <p className="text-white font-medium">Bhavnagar, India</p>
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
