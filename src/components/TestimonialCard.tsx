import React from 'react';
import { m } from 'motion/react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  bgImage: string;
  year: string;
  project: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isMobile?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  isMobile = false,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <m.div 
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}
      whileHover={!isMobile ? { y: -10 } : {}}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative overflow-hidden group/card ${isMobile ? 'h-[500px] w-full' : 'h-[540px] border border-white/10 shadow-2xl'}`}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Background Image - Darkened for Architecture Layer Contrast */}
      <div className="absolute inset-0 z-0">
        <img 
          src={testimonial.bgImage} 
          alt={testimonial.project} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover brightness-[0.6] contrast-[1.1] transition-transform duration-1000 group-hover/card:scale-110"
        />
        <div className="absolute inset-0 bg-[#0A0908]/40" />
      </div>

      {/* Glassmorphism Content Area */}
      <div className={`relative z-10 h-full ${isMobile ? 'p-6' : 'p-8'} flex flex-col justify-between`}>
        <div className={`bg-white/[0.03] backdrop-blur-xl border border-white/10 ${isMobile ? 'p-6' : 'p-8'} h-full flex flex-col`}>
          <div className={`flex items-center gap-4 ${isMobile ? 'mb-6' : 'mb-8'}`}>
            <div className="relative">
              <div className="absolute inset-0 border-[0.5px] border-brand-gold rounded-full -m-1.5 opacity-40 group-hover/card:opacity-100 transition-opacity" />
              <div className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} rounded-full overflow-hidden border border-white/20 shrink-0`}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-sans ${isMobile ? 'text-[11px]' : 'text-xs'} font-medium tracking-[0.15em] uppercase text-white`}>{testimonial.name}</span>
              <span className={`font-sans ${isMobile ? 'text-[9px]' : 'text-[10px]'} font-light tracking-[0.08em] text-brand-gold/80`}>{testimonial.role}</span>
            </div>
          </div>

          <div className="relative flex-1">
            {/* Internal Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className={`${isMobile ? 'text-[100px]' : 'text-[120px]'} font-display font-black text-white/[0.02] rotate-[-15deg] select-none uppercase`}>EVA</span>
            </div>
            <span className={`absolute ${isMobile ? '-top-3 -left-1 text-4xl' : '-top-4 -left-2 text-6xl'} text-brand-gold opacity-20 font-serif`}>"</span>
            <blockquote className={`font-display ${isMobile ? 'text-[15px]' : 'text-[16px]'} font-light italic text-white/90 ${isMobile ? 'leading-[1.8]' : 'leading-[1.9]'} relative z-10`}>
              {testimonial.content}
            </blockquote>
          </div>

          <div className={`pt-8 border-t border-white/10 mt-auto flex justify-between items-end`}>
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 mb-1">PROJET LIVRÃ‰</span>
              <span className={`text-[10px] uppercase tracking-[0.18em] font-medium text-brand-gold ${isMobile ? 'max-w-[120px]' : 'max-w-[160px]'} leading-tight`}>{testimonial.project}</span>
            </div>
            
            {/* Validation Seal */}
            <div className={`border-[0.5px] border-brand-gold/30 -rotate-12 ${isMobile ? 'px-2 py-1' : 'px-3 py-1.5'} flex flex-col items-center opacity-40 group-hover/card:opacity-100 group-hover/card:border-brand-gold/60 transition-all duration-500`}>
              <span className={`${isMobile ? 'text-[6px]' : 'text-[7px]'} uppercase tracking-[0.2em] text-brand-gold font-bold`}>LivrÃ© en {testimonial.year}</span>
              <span className={`${isMobile ? 'text-[4px]' : 'text-[5px]'} uppercase tracking-[0.1em] text-white/50`}>EVA MaÃ®tre d'Å“uvre</span>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default TestimonialCard;
