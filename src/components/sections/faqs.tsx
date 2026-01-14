"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-white/10 group">
      <button
        onClick={onClick}
        className="w-full py-[2.5rem] md:py-[4rem] text-left flex items-start justify-between gap-8 focus:outline-none transition-colors"
      >
        <h3 className="text-[1.5rem] md:text-[2.25rem] leading-[1.1] tracking-[-0.02em] font-normal max-w-[85%]">
          {question}
        </h3>
        <div className="mt-2 md:mt-4">
          <div
            className={cn(
              "w-6 h-6 md:w-8 md:h-8 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
              isOpen ? "rotate-45" : "rotate-0"
            )}
          >
            <Plus className="w-full h-full stroke-[1px]" />
          </div>
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isOpen ? "max-height-[500px] pb-[3rem] md:pb-[5rem]" : "max-height-0"
        )}
      >
        <p className="text-[1.125rem] md:text-[1.375rem] leading-[1.6] font-light text-white/70 max-w-[800px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of projects do you take on?",
      answer:
        "We specialise in branding and UX/UI design for websites and apps, but our approach is versatile. Whether it’s a full brand identity, a design system build, or ongoing design support, we adapt to fit your business goals.",
    },
    {
      question: "Which industries do you work with?",
      answer:
        "Our core expertise is in fintech and e-commerce, but we’ve partnered with clients across hospitality, law, accounting, packaging, edtech and many more. We are an agile team and our skills can adapt to most verticals, bringing a fresh, human-centric perspective to any industry.",
    },
    {
      question: "How does your pricing work?",
      answer:
        "We offer both project-based pricing and ongoing retainers, billed at a flat hourly rate. Once we scope your project, you’ll receive a clear estimate before we begin. If the scope shifts, we’ll flag it early so there are no surprises.",
    },
    {
      question: "Do you handle development too?",
      answer:
        "We focus on what we do best: design. For development, we collaborate with trusted partners we believe are the best of the best. If you already have a dev team, we’ll work hand-in-hand with them to ensure a smooth handover and seamless build.",
    },
    {
      question: "What is your design process like?",
      answer:
        "Every project begins with a discovery session to align on your goals. From there, we move through two key phases: UX Discovery & Design, where we focus on research, user flows, and wireframes to create an intuitive experience, and UI Discovery & Design, where we bring your brand to life through polished, visually engaging interfaces. We work transparently, keep you involved at every stage, and iterate throughout the process to ensure the final product meets your vision.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timelines depend on scope, but most branding projects take roughly 6 to 8 weeks, and websites or apps typically run 8 to 12 weeks from kickoff to development handover. We’ll always share a timeline upfront to ensure clarity and structure.",
    },
  ];

  return (
    <section className="bg-black text-white px-[5vw] py-[80px] md:py-[150px] font-sans">
      <div className="container mx-auto max-w-[1400px]">
        <div className="mb-[4rem] md:mb-[6rem]">
          <h2 className="text-[3rem] md:text-[5rem] leading-[1.1] tracking-[-0.02em] font-normal">
            FAQs
          </h2>
        </div>
        <div className="border-t border-white/10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;