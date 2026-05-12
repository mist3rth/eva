import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface Expertise {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  align: 'left' | 'right';
}

const EXPERTISES: Expertise[] = [
  {
    id: "01",
    title: "Architecture de Vie",
    subtitle: "(Concept)",
    description: "Votre vision, magnifiée par la technique. Nous concevons des espaces singuliers qui valorisent votre patrimoine tout en respectant strictement vos habitudes de vie.",
    image: `${import.meta.env.BASE_URL}assets/images/expertise-concept.webp`,
    align: "left"
  },
  {
    id: "02",
    title: "Signature Esthétique",
    subtitle: "(Design)",
    description: "L’équilibre entre audace et pérennité. Choix des matières, gestion de la lumière et ergonomie : nous créons une identité visuelle forte et intemporelle pour votre bien.",
    image: `${import.meta.env.BASE_URL}assets/images/expertise-design.webp`,
    align: "right"
  },
  {
    id: "03",
    title: "Sérénité Chantier",
    subtitle: "(Développement)",
    description: "Nous gérons les contraintes, vous savourez l'avancement. Maîtrise totale des budgets et des délais. 98% de nos chantiers sont livrés à la date convenue.",
    image: `${import.meta.env.BASE_URL}assets/images/expertise-management.webp`,
    align: "left"
  },
  {
    id: "04",
    title: "Ingénierie de Réalisation",
    subtitle: "(Architecture)",
    description: "La rigueur du trait, la solidité du bâti. Une direction de travaux sans concession pour garantir la conformité technique et la longévité de votre ouvrage.",
    image: `${import.meta.env.BASE_URL}assets/images/expertise-engineering.webp`,
    align: "right"
  },
  {
    id: "05",
    title: "Éco-Performance",
    subtitle: "(Construction)",
    description: "Bâtir aujourd'hui pour demain. Optimisation énergétique et matériaux biosourcés pour réduire votre empreinte carbone et vos coûts d'exploitation futurs.",
    image: `${import.meta.env.BASE_URL}assets/images/expertise-eco.webp`,
    align: "left"
  }
];

const Expertises: React.FC = () => {
  const [expandedId, setExpandedId] = React.useState<string | null>(EXPERTISES[0].id);

  return (
    <section id="expertises" className="pt-12 md:pt-16 pb-32 md:pb-[180px] px-[5vw] relative bg-brand-bg overflow-hidden" aria-labelledby="expertises-title">
      {/* Background Texture Element */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}assets/images/patterns/p6-dark.png')` }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="mb-24 md:mb-40">
          <motion.h2 
            id="expertises-title"
            className="font-display text-4xl md:text-6xl font-light tracking-tight text-brand-text mb-8"
          >
            {"Expertises".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <div className="flex items-center gap-6">
            <div className="w-12 h-px bg-brand-gold" />
            <p className="font-sans text-[11px] font-normal tracking-[0.3em] uppercase text-brand-gold">
              La Maîtrise en Mouvement
            </p>
          </div>
        </div>

        {/* --- Mobile View: Accordion (Shortened Height) --- */}
        <div className="md:hidden space-y-4">
          {EXPERTISES.map((exp, i) => (
            <div key={exp.id} className="border-b border-brand-accent-bg last:border-0 group">
              <button
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className="w-full py-8 flex items-center justify-between text-left group/btn"
                aria-expanded={expandedId === exp.id}
                aria-label={`Voir l'expertise : ${exp.title}`}
                aria-controls={`expertise-content-${exp.id}`}
                id={`expertise-trigger-${exp.id}`}
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-brand-gold/40 group-hover/btn:text-brand-gold transition-colors">
                    0{i + 1}
                  </span>
                  <h3 className={cn(
                    "font-display text-2xl transition-all duration-500",
                    expandedId === exp.id ? "text-brand-gold translate-x-2" : "text-brand-text"
                  )}>
                    {exp.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === exp.id ? 45 : 0 }}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <div className="w-4 h-[1px] bg-brand-gold" />
                  <div className="w-[1px] h-4 bg-brand-gold absolute" />
                </motion.div>
              </button>

              <AnimatePresence mode="wait">
                {expandedId === exp.id && (
                  <motion.div
                    key="content"
                    id={`expertise-content-${exp.id}`}
                    role="region"
                    aria-labelledby={`expertise-trigger-${exp.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="pt-2 pb-6 flex flex-col gap-8">
                      <div className="relative aspect-[16/10] overflow-hidden bg-brand-accent-bg group/img">
                        {/* Architectural Details on Mobile */}
                        <div className="absolute inset-0 border border-brand-gold/10 pointer-events-none z-10" />
                        <div className="absolute top-2 left-2 w-4 h-px bg-brand-gold/40 z-10" />
                        <div className="absolute top-2 left-2 h-4 w-px bg-brand-gold/40 z-10" />
                        
                        <img 
                          src={exp.image} 
                          alt={exp.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                        
                        {/* Mobile technical tag */}
                        <div className="absolute bottom-2 right-2 bg-white/10 backdrop-blur-md px-2 py-1 border border-white/20">
                          <span className="text-[6px] font-mono text-white/70 tracking-widest uppercase">TECH_{exp.id}</span>
                        </div>
                      </div>
                      <p className="font-sans text-brand-text-muted text-lg font-light leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* --- Desktop View: Immersive Scroll (Hidden on Mobile) --- */}
        <div className="hidden md:block space-y-72 relative">
          {/* Connecting Vertical Cote Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-gold/10 -translate-x-1/2 z-0" />

          {EXPERTISES.map((exp) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "flex flex-col md:flex-row items-center gap-16 md:gap-32 relative z-10",
                exp.align === "right" ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Text Content */}
              <div className="flex-1 w-full relative">
                {/* Background Large Number */}
                <div className="absolute -top-24 md:-top-32 left-0 md:-left-20 pointer-events-none select-none opacity-[0.05] z-0">
                  <span 
                    className="text-[140px] md:text-[280px] font-display font-black leading-none" 
                    style={{ WebkitTextStroke: '2.5px var(--color-brand-text)', color: 'transparent' }}
                  >
                    {exp.id}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-[0.5px] bg-brand-gold/40" />
                    <span className="text-brand-gold font-mono text-[9px] tracking-[.4em] uppercase">{exp.subtitle}</span>
                  </div>
                  <h3 className="font-display text-4xl md:text-6xl font-light text-brand-text mb-10 leading-[1.1] tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-brand-text-muted text-lg md:text-xl font-light leading-relaxed max-w-md opacity-80">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Visual Reveal Element */}
              <div className="flex-1 w-full group relative">
                {/* Dimension Lines (Technical Detail) */}
                <div className="absolute -inset-6 border-brand-gold/10 pointer-events-none z-0">
                  <div className="absolute top-0 left-0 w-12 h-px bg-brand-gold/30" />
                  <div className="absolute top-0 left-0 h-12 w-px bg-brand-gold/30" />
                  <div className="absolute bottom-0 right-0 w-12 h-px bg-brand-gold/30" />
                  <div className="absolute bottom-0 right-0 h-12 w-px bg-brand-gold/30" />
                  
                  {/* Corner Crosshairs */}
                  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-brand-gold/20 rounded-full" />
                  <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-3 h-3 border border-brand-gold/20 rounded-full" />
                </div>

                <div className="relative aspect-[4/5] md:aspect-[4/3] overflow-hidden bg-brand-accent-bg shadow-2xl">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale brightness-[0.6] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />
                  
                  {/* Technical Tag Label */}
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl px-4 py-2 border border-white/20 flex flex-col">
                    <span className="text-[7px] font-mono text-white/50 tracking-widest uppercase mb-1">Status: OK</span>
                    <span className="text-[9px] font-mono text-white tracking-[0.2em] uppercase font-bold">SEC_{exp.id}_TECH</span>
                  </div>

                  {/* SVG Graphic element (Compass style) */}
                  <div className="absolute top-8 right-8 w-16 h-16 border border-white/20 rounded-full hidden md:flex items-center justify-center animate-spin-slow opacity-30">
                    <div className="w-px h-full bg-white/40 absolute left-1/2 -translate-x-1/2" />
                    <div className="h-px w-full bg-white/40 absolute top-1/2 -translate-y-1/2" />
                    <div className="w-8 h-8 border border-white/40 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-brand-gold rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertises;
