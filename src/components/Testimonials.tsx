import React, { useState } from 'react';
import { motion } from 'motion/react';
import TestimonialCard, { Testimonial } from './TestimonialCard';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Marc Lefebvre',
    role: 'Propriétaire',
    content: "Une rigueur technique exceptionnelle. EVA a su transformer notre appartement haussmannien en un espace contemporain tout en préservant son âme. Le suivi de chantier était exemplaire.",
    image: `${import.meta.env.BASE_URL}images/jean_d.webp`,
    bgImage: `${import.meta.env.BASE_URL}assets/images/appartement.webp`,
    year: '2023',
    project: 'Rénovation Foch'
  },
  {
    id: 2,
    name: 'Marie Lefebvre',
    role: 'Directrice Patrimoine',
    content: "En tant que foncière, nous exigeons une précision absolue sur les budgets et les délais. EVA Architecte est devenu notre partenaire de confiance pour toutes nos réhabilitations complexes.",
    image: `${import.meta.env.BASE_URL}images/marie_l.webp`,
    bgImage: `${import.meta.env.BASE_URL}assets/images/expertise-engineering.webp`,
    year: '2024',
    project: 'Bureaux Luxus'
  },
  {
    id: 3,
    name: 'Jean-Pierre Castaldi',
    role: 'Gérant, Villa Cap d\'Antibes',
    content: "L'accompagnement d'EVA a été déterminant dans la réussite de notre projet balnéaire. Une vision architecturale forte alliée à une gestion de chantier rigoureuse.",
    image: `${import.meta.env.BASE_URL}images/pierre_m.webp`,
    bgImage: `${import.meta.env.BASE_URL}assets/images/villa.webp`,
    year: '2024',
    project: 'Villa Antibes'
  }
];

const Testimonials: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <section id="temoignages" className="py-32 md:py-48 px-[5vw] bg-brand-bg-soft relative overflow-hidden" aria-labelledby="testimonials-title">
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Typographic Watermark */}
        <motion.div 
          animate={{ 
            opacity: hoveredProject !== null ? 0.06 : 0.03,
            scale: hoveredProject !== null ? 1.05 : 1
          }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rotate-[-12deg] hidden lg:block"
        >
          <span 
            className="text-[400px] font-display font-black leading-none tracking-tighter" 
            style={{ WebkitTextStroke: '1px var(--color-brand-text)', color: 'transparent' }}
          >
            MAÎTRISE
          </span>
        </motion.div>

        {/* Wireframe Schema */}
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] opacity-[0.05] -rotate-12">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M10 10L190 40M10 10L40 190M190 40L160 190M40 190L160 190M10 10L100 100M190 40L100 100M40 190L100 100M160 190L100 100" stroke="var(--color-brand-text)" strokeWidth="0.2"/>
            <circle cx="10" cy="10" r="0.5" fill="var(--color-brand-text)"/>
            <circle cx="190" cy="40" r="0.5" fill="var(--color-brand-text)"/>
            <circle cx="40" cy="190" r="0.5" fill="var(--color-brand-text)"/>
            <circle cx="160" cy="190" r="0.5" fill="var(--color-brand-text)"/>
            <circle cx="100" cy="100" r="0.5" fill="var(--color-brand-text)"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                id="testimonials-title"
                className="font-display text-4xl md:text-5xl font-light tracking-tight text-brand-text"
              >
                {"Témoignages".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
            <h3 className="font-display text-[38px] md:text-[60px] font-light text-brand-text leading-[1.1] mb-8 max-w-3xl">
              La réussite se mesure à la satisfaction de nos clients.
            </h3>
            <div className="flex items-center gap-6">
              <div className="w-20 h-px bg-brand-gold" />
              <p className="font-sans text-[11px] font-normal tracking-[0.3em] uppercase text-brand-gold">
                Plus de 600 chantiers menés avec la même rigueur technique
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Desktop Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
            className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial}
                onMouseEnter={() => setHoveredProject(testimonial.id.toString())}
                onMouseLeave={() => setHoveredProject(null)}
              />
            ))}
          </motion.div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            {/* Pagination Counter */}
            <div className="flex flex-col mb-10">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-brand-gold font-display text-3xl font-light">
                  0{testimonialIndex + 1}
                </span>
                <span className="text-brand-muted/40 font-display text-base">
                  / 0{TESTIMONIALS.length}
                </span>
              </div>
              <div className="w-full h-[1px] bg-brand-gold/10 relative overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: `${((testimonialIndex + 1) / TESTIMONIALS.length) * 100}%` }}
                  className="absolute inset-y-0 left-0 bg-brand-gold/60"
                  transition={{ duration: 0.4, ease: "circOut" }}
                />
              </div>
            </div>

            {/* Native Scroll Carousel */}
            <div 
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-y -mx-6 px-6 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={(e) => {
                const target = e.target as HTMLDivElement;
                // Calculate which card is most visible
                // Each card is w-[85%] + gap-6
                const cardWidth = target.offsetWidth * 0.85 + 24; 
                const index = Math.round(target.scrollLeft / cardWidth);
                if (index !== testimonialIndex && index >= 0 && index < TESTIMONIALS.length) {
                  setTestimonialIndex(index);
                }
              }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-[85%] flex-shrink-0 snap-center"
                >
                  <TestimonialCard testimonial={testimonial} isMobile />
                </div>
              ))}
            </div>

            {/* Visual Navigation Hint */}
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1 transition-all duration-500 rounded-full ${i === testimonialIndex ? 'w-8 bg-brand-gold' : 'w-2 bg-brand-gold/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
