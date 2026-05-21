import React, { useState } from 'react';
import { m, useScroll, useMotionValueEvent } from 'motion/react';
import ArrowDown from 'lucide-react/dist/esm/icons/arrow-down';
import { Button } from './ui/Button';

interface HeroProps {
  onSetActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSetActiveSection }) => {
  const { scrollY } = useScroll();
  const [isColored, setIsColored] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isColored) {
      setIsColored(true);
    }
  });

  const scrollToProjects = () => {
    onSetActiveSection('projets');
    const el = document.getElementById('projets');
    if (el) {
      const offset = 80; // height of navbar
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', '#projets');
    }
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-[calc(120px+env(safe-area-inset-top,20px))] md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-brand-bg">
        <picture>
          {/* Mobile Image (Portrait) - loaded when screen width is < 768px */}
          <source 
            media="(max-width: 767px)" 
            srcSet={`${import.meta.env.BASE_URL}images/hero-banner-mobile.webp`} 
          />
          {/* Desktop Image (Landscape) - loaded when screen width is >= 768px */}
          <source 
            media="(min-width: 768px)" 
            srcSet={`${import.meta.env.BASE_URL}images/hero-banner-small.webp`} 
          />
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-banner-small.webp`} 
            alt="Détail architectural - Rénovation de prestige Paris"
            className={`w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-1000 ease-out ${isColored ? 'opacity-80 mix-blend-normal' : 'opacity-60 mix-blend-luminosity'}`}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/20 via-transparent to-brand-bg/80" />
      </div>
      <div className="absolute inset-0 bg-brand-text/25" />
      
      <div className="relative z-10 text-center px-6">
        <m.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <m.h1 
            className="font-display text-white text-4xl md:text-8xl font-light tracking-tight max-w-5xl mx-auto leading-tight mt-12 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {"L'art de bâtir, la discipline de diriger.".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                <m.span
                  className="inline-block"
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0 }
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {word}
                  {i === 2 ? <br className="hidden md:block" /> : null}
                </m.span>
              </span>
            ))}
          </m.h1>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 text-white/70 font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] max-w-2xl mx-auto leading-relaxed"
          >
            L'expertise de la maîtrise d'œuvre haut de gamme <br className="hidden md:block" /> pour vos actifs résidentiels et tertiaires.
          </m.p>
        </m.div>
        
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12"
        >
          <Button 
            variant="glow"
            onClick={scrollToProjects}
            aria-label="Découvrir nos projets réalisés"
            className="bg-white text-brand-text md:bg-transparent md:text-white border-white/10 md:border-white/30"
          >
            VOIR LES PROJETS LIVRÉS
          </Button>
        </m.div>
        
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center text-white/60 gap-3 mt-[150px] mx-auto md:hidden"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Découvrez nous</span>
          <ArrowDown size={20} className="animate-bounce" aria-hidden="true" />
        </m.div>
      </div>
    </section>
  );
};

export default Hero;
