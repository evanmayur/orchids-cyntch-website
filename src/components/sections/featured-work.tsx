import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'PayJustNow',
    description: 'An App Redesign Built for Discovery',
    categories: ['UI Design', 'UX Design'],
    image: 'https://images.prismic.io/estrelastudio/aN7NX55xUNkB1bRi_Experiences_01.jpg?w=800&auto=compress,format',
  },
  {
    id: 2,
    title: 'Yucca Packaging',
    description: 'A Packaging Website with Purpose',
    categories: ['UX Design', 'Brand Design', 'UI Design'],
    image: 'https://images.prismic.io/estrelastudio/aN7NX55xUNkB1bRj_Experiences_02.jpg?w=800&auto=compress,format',
  },
  {
    id: 3,
    title: 'Helpguide',
    description: 'A Digital Revamp for Mental Wellbeing',
    categories: ['Design Strategy', 'UI Design', 'Brand Design', 'UX Design'],
    image: 'https://images.prismic.io/estrelastudio/aN7NYZ5xUNkB1bRk_Experiences_03.jpg?w=800&auto=compress,format',
  },
];

const FeaturedWork = () => {
  return (
    <section className="bg-background text-foreground py-[clamp(80px,12vw,200px)] px-[5vw] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 border-t border-white/10 pt-16">
        {/* Left Column: Title & Intro */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="mono-label text-muted-foreground mb-8">03 — WORK</div>
          <h2 className="section-title mb-6 leading-[1.1] tracking-[-0.02em]">
            Featured Work
          </h2>
          <p className="max-w-[360px] text-muted-foreground text-lg leading-relaxed lg:pr-10">
            Design without compromise. Explore our blend of digital product design, website design, and branding.
          </p>
        </div>

        {/* Right Column: Projects Scroll/Grid */}
        <div className="lg:col-span-8">
          <div className="flex flex-col gap-24 lg:gap-32">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group relative flex flex-col md:flex-row gap-8 items-end"
              >
                {/* Project Image */}
                <div className="relative w-full md:w-[60%] aspect-[4/5] overflow-hidden rounded-sm cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="glass-button px-8 py-4 rounded-full flex items-center gap-3">
                      <span className="mono-label text-xs">View Project</span>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full md:w-[40%] text-left md:pl-8 pb-4">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.categories.map((cat) => (
                      <span 
                        key={cat} 
                        className="mono-label text-[10px] text-muted-foreground border border-white/10 px-3 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-light text-base max-w-[280px]">
                    {project.description}
                  </p>
                </div>

                {/* Vertical index line */}
                <div className="absolute -left-[5vw] top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block"></div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-white/5 flex justify-end">
            <a 
              href="/work" 
              className="glass-button px-10 py-5 rounded-full inline-flex items-center gap-4 group"
            >
              <span className="nav-link">View all projects</span>
              <div className="w-2 h-2 bg-white rounded-full transition-transform group-hover:scale-125"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;