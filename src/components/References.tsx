import React from 'react';
import { m } from 'motion/react';

const LOGOS = [
  'Coca-Cola', 'BNP Paribas', 'L\'Oréal', 'Cheuvreux', 'TC Paris', 'Stade Français'
];

/**
 * References Component
 * Displays a scrolling marquee of prestigious client names.
 * Optimized for performance with will-change: transform.
 */
const References: React.FC = () => {
  return (
    <section id="references" className="pt-16 pb-12 md:pt-20 md:pb-16 border-y border-brand-accent-bg bg-[#FBFBF9] relative overflow-hidden">
      <h2 className="sr-only">Clients et Références</h2>
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" 
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}assets/images/patterns/p6-dark.png')` }}
      />

      {/* Watermark Watermark Background */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none select-none z-0 overflow-hidden whitespace-nowrap opacity-[0.03]">
        <div className="animate-watermark whitespace-nowrap inline-block">
          <span className="text-[120px] md:text-[200px] font-display font-black tracking-[0.25em] uppercase" 
                style={{ WebkitTextStroke: '1.5px #1A1714', color: 'transparent' }}>
            MAITRISE D'OEUVRE • COORDINATION • RÉALISATION • CONCEPTION •&nbsp;
          </span>
          <span className="text-[120px] md:text-[200px] font-display font-black tracking-[0.25em] uppercase" 
                style={{ WebkitTextStroke: '1.5px #1A1714', color: 'transparent' }}>
            MAITRISE D'OEUVRE • COORDINATION • RÉALISATION • CONCEPTION •&nbsp;
          </span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <m.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-sans font-normal uppercase tracking-[0.4em] text-brand-gold"
          >
            Plus de 600 références, de l'habitat privé aux groupes internationaux.
          </m.span>
        </div>
      </div>

      {/* Marquee with Mask - Full Width */}
      <div className="relative w-full z-10">
        {/* Radial Fade Masks - Positioned relative to viewport edges */}
        <div className="absolute inset-y-0 left-0 w-[10vw] md:w-[20vw] bg-gradient-to-r from-[#FBFBF9] via-[#FBFBF9]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[10vw] md:w-[20vw] bg-gradient-to-l from-[#FBFBF9] via-[#FBFBF9]/80 to-transparent z-20 pointer-events-none" />

        <div className="animate-infinite-scroll flex gap-24 md:gap-40 items-center [will-change:transform] py-4">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-5xl font-display font-light text-brand-text/30 hover:text-brand-gold transition-all duration-500 uppercase tracking-[0.2em] whitespace-nowrap cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        <div className="mt-8 md:mt-12 text-center">
          <m.a 
            href="#projets"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-brand-text group border-b border-brand-gold/20 pb-2"
          >
            <span>Voir les cas clients</span>
            <span className="text-brand-gold transition-transform group-hover:translate-x-1">→</span>
          </m.a>
        </div>
      </div>
    </section>

  );
};

export default References;
