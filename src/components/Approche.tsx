import React, { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import Eye from 'lucide-react/dist/esm/icons/eye';
import Ruler from 'lucide-react/dist/esm/icons/ruler';
import Compass from 'lucide-react/dist/esm/icons/compass';
import { cn } from '@/src/lib/utils';
import { BlossomCarousel } from '@blossom-carousel/react';
import '@blossom-carousel/core/style.css';

const PILLARS = [
  { label: 'Vision', sub: 'Anticipation', icon: Eye },
  { label: 'Rigueur', sub: 'Excellence', icon: Ruler },
  { label: 'Sur-mesure', sub: 'Singularité', icon: Compass }
];

const Approche: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasSeenApprocheSwipeHint');
    }
    return true;
  });

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.firstElementChild) {
      const index = Math.round(target.scrollLeft / target.firstElementChild.clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section id="approche" className="py-32 md:py-56 bg-brand-bg-warm relative overflow-hidden" aria-labelledby="approche-title-desktop">
      {/* Architectural Grid Background (Subtle) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--color-brand-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-text) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        {/* Mobile Order: Title (Who) -> Photo -> Short Text -> 3 Pillars -> CTA */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-0">
          
          {/* Title Section (Visual only on mobile to avoid H2 duplication) */}
          <div className="w-full mb-8 md:hidden">
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              role="presentation"
              id="approche-title-mobile"
              className="font-display text-4xl font-light tracking-tight text-brand-text"
            >
              Mon approche
            </m.div>
            <div className="w-12 h-px bg-brand-gold mt-4" />
          </div>

          {/* Photo Column */}
          <div className="w-full md:w-5/12 aspect-[4/5] md:aspect-[3.5/5] bg-brand-accent-bg overflow-hidden group shadow-2xl relative">
            <img 
              src={`${import.meta.env.BASE_URL}assets/images/regenerated_image_1778143930021.webp`} 
              alt="Réda Lahlou - Maître d'œuvre"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            {/* Technical Detail on Image */}
            <div className="absolute top-4 left-4 flex flex-col gap-1 opacity-40">
              <div className="w-8 h-px bg-white" />
              <div className="h-8 w-px bg-white" />
            </div>
          </div>

          {/* Text Content Column (Overlapping on Desktop) */}
          <div className="w-full md:w-8/12 md:-ml-24 md:mt-24 z-20">
            <m.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-xl md:bg-white p-8 md:p-16 border border-brand-accent-bg md:shadow-[40px_40px_80px_rgba(0,0,0,0.03)]"
            >
              <div className="hidden md:block mb-12">
                <h2 id="approche-title-desktop" className="font-display text-5xl font-light tracking-tight text-brand-text">Mon approche</h2>
                <div className="w-16 h-px bg-brand-gold mt-6" />
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-brand-text mb-8 leading-tight font-light">
                Réda Lahlou : Bâtir l'exception, orchestrer la rigueur.
              </h3>
              
              <div className="space-y-6 font-sans text-brand-muted font-light leading-relaxed text-lg mb-12">
                <p>
                  Depuis 30 ans, je transforme vos aspirations en volumes et en lumière. De la renaissance d'hôtels particuliers aux sièges sociaux internationaux, je m'engage sur un résultat où la vision stratégique rencontre une exécution millimétrée.
                </p>
                <p>
                  Mon approche est guidée par trois piliers fondamentaux qui assurent la cohérence de chaque projet, de la première esquisse à la livraison finale.
                </p>
                <div className="pt-4">
                  <p className="font-signature text-4xl text-brand-text opacity-80">Réda Lahlou</p>
                </div>
              </div>

              {/* The Three Pillars: Carousel on Mobile, Grid on Desktop */}
              <div className="relative pt-4 border-t border-brand-accent-bg mb-12">
                {/* Mobile Slider Section */}
                <div className="md:hidden relative">
                  <AnimatePresence>
                    {activeIndex === 0 && showSwipeHint && (
                      <m.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 3, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
                        onAnimationComplete={() => {
                          setShowSwipeHint(false);
                          if (typeof window !== 'undefined') {
                            sessionStorage.setItem('hasSeenApprocheSwipeHint', 'true');
                          }
                        }}
                        className="absolute inset-0 bg-brand-text/5 backdrop-blur-[1px] z-30 flex flex-col items-center justify-center pointer-events-none rounded-lg"
                      >
                        <m.div 
                          animate={{ x: [-15, 15, -15] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          className="text-brand-gold mb-2"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 18l6-6-6-6" />
                            <path d="M5 18l6-6-6-6" opacity="0.5" />
                          </svg>
                        </m.div>
                        <span className="text-[9px] text-brand-text uppercase tracking-[0.3em] font-mono">Glisser pour explorer</span>
                      </m.div>
                    )}
                  </AnimatePresence>

                  <BlossomCarousel
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none relative"
                    onScroll={handleScroll}
                  >
                    {PILLARS.map((pillar, idx) => (
                      <div 
                        key={pillar.label}
                        className="min-w-full snap-start flex flex-col items-center text-center transition-all duration-500 pt-12 pb-8"
                        style={{ 
                          opacity: activeIndex === idx ? 1 : 0.3, 
                          transform: `scale(${activeIndex === idx ? 1 : 0.9})`,
                          touchAction: 'pan-y'
                        }}
                      >
                        <div className="w-20 h-20 rounded-full bg-brand-gold/5 flex items-center justify-center mx-auto mb-6 relative select-none">
                          <div className={cn(
                            "absolute inset-0 border border-brand-gold/10 rounded-full scale-110 transition-transform duration-500",
                            activeIndex === idx && "scale-125 border-brand-gold/30"
                          )} />
                          <pillar.icon className="w-8 h-8 text-brand-gold" strokeWidth={1} />
                        </div>
                        <h4 className="text-brand-text text-sm font-bold uppercase tracking-[0.2em] mb-2 select-none">
                          {pillar.label}
                        </h4>
                        <p className="text-[10px] uppercase tracking-widest text-brand-gold select-none">
                          {pillar.sub}
                        </p>
                      </div>
                    ))}
                  </BlossomCarousel>
                    
                  {/* Progress Indicators (Dots) */}
                  <div className="flex justify-center gap-4 mt-8">
                    {PILLARS.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className="p-2 -m-2 group"
                        aria-label={`Aller au pilier ${idx + 1}`}
                      >
                        <div className={cn(
                          "h-[2px] rounded-full transition-all duration-500",
                          activeIndex === idx ? "bg-brand-gold w-8" : "bg-brand-gold/20 w-4 group-hover:bg-brand-gold/40"
                        )} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Desktop Grid (Existing) */}
                <div className="hidden md:grid grid-cols-3 gap-8">
                  {PILLARS.map((pillar) => (
                    <m.div 
                      key={pillar.label}
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="w-12 h-12 rounded-full bg-brand-gold/5 flex items-center justify-center mb-4 transition-colors group-hover:bg-brand-gold/10">
                        <pillar.icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <h4 className="text-brand-text text-[11px] font-bold uppercase tracking-[0.2em] mb-1">{pillar.label}</h4>
                      <p className="text-[9px] uppercase tracking-widest text-brand-gold/70">{pillar.sub}</p>
                    </m.div>
                  ))}
                </div>
              </div>

              <m.a 
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 bg-brand-text text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-colors duration-500 shadow-xl"
              >
                Échanger sur votre projet
              </m.a>

            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approche;
