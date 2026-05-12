import React from 'react';
import { motion } from 'motion/react';
import ArrowDown from 'lucide-react/dist/esm/icons/arrow-down';

interface HeroProps {
  onSetActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSetActiveSection }) => {
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
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-banner-small.webp`} 
          alt="Détail architectural - Rénovation de prestige Paris"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110 group-hover:scale-100 transition-transform duration-[3s]"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/20 via-transparent to-brand-bg/80" />
      </div>
      <div className="absolute inset-0 bg-brand-text/25" />
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1 
            className="font-display text-white text-4xl md:text-8xl font-light tracking-tight max-w-5xl mx-auto leading-tight"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {"L'art de bâtir, la discipline de diriger.".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                <motion.span
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
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 text-white/70 font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] max-w-2xl mx-auto leading-relaxed"
          >
            L'expertise de la maîtrise d'œuvre haut de gamme <br className="hidden md:block" /> pour vos actifs résidentiels et tertiaires.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12"
        >
          <button 
            onClick={scrollToProjects}
            className="glow-button px-8 py-4 border border-white/30 text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-brand-text transition-all duration-500 rounded-sm cursor-pointer group"
            aria-label="Découvrir nos projets réalisés"
          >
            VOIR LES PROJETS LIVRÉS
            <svg className="glow-container">
              <rect pathLength="100" strokeLinecap="round" className="glow-blur"></rect>
              <rect pathLength="100" strokeLinecap="round" className="glow-line"></rect>
            </svg>
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center text-white/60 gap-3 mt-[150px] mx-auto md:hidden"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Découvrez nous</span>
          <ArrowDown size={20} className="animate-bounce" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
