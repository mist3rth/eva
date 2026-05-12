import React from 'react';
import { motion } from 'motion/react';

const StatsBar: React.FC = () => {
  return (
    <section id="stats" className="py-24 md:py-40 bg-white overflow-hidden">
      <h2 className="sr-only">Expertise Technique et Chiffres Clés</h2>
      <div className="max-w-[1280px] mx-auto px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative">
          
          {/* Lignes de cotes techniques (décoratives) */}
          <div className="absolute -top-12 left-0 right-0 h-px bg-brand-gold/20 hidden md:block">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-gold rotate-45" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-gold rotate-45" />
            <span className="absolute top-[-14px] left-1/2 -translate-x-1/2 text-[8px] text-brand-gold tracking-[0.2em] font-mono">1280.00mm</span>
          </div>

          {/* Colonne 1 : La Technique (Béton) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-4 relative group h-[400px] md:h-[500px] overflow-hidden"
          >
            <img 
              src={`${import.meta.env.BASE_URL}assets/images/concrete-texture.webp`} 
              alt="Texture Béton Architectural" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.6] contrast-[1.1] transition-transform duration-700 group-hover:scale-110"
            />
            <div className="relative z-10 h-full p-10 flex flex-col justify-end">
              <span className="text-6xl md:text-7xl font-display font-light text-white mb-4">+600</span>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-2">Technique</p>
              <p className="text-sm font-light text-white/70 leading-relaxed max-w-[200px]">
                Chantiers livrés avec une précision millimétrée en site occupé ou libre.
              </p>
            </div>
          </motion.div>

          {/* Colonne 2 : L'Expérience (Papier/Plan) */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 relative group h-[450px] md:h-[550px] md:-mt-10 bg-[#F5F2ED] overflow-hidden border-x-[0.5px] border-brand-gold/10"
          >
            {/* Filigrane Logo EVA */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
              <span className="text-[200px] font-display font-black rotate-12">EVA</span>
            </div>
            
            <div className="relative z-10 h-full p-10 flex flex-col justify-center items-center text-center">
              <span className="text-6xl md:text-7xl font-display font-light text-brand-text mb-4">30</span>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-4">Maîtrise</p>
              <div className="w-12 h-px bg-brand-gold/30 mb-4" />
              <p className="text-sm font-light text-brand-muted leading-relaxed">
                Années de savoir-faire technique et de gestion de corps d'état architecturaux.
              </p>
            </div>
          </motion.div>

          {/* Colonne 3 : La Vision (Photo Projet) */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-4 relative group h-[420px] md:h-[520px] md:mt-10 overflow-hidden"
          >
            <img 
              src={`${import.meta.env.BASE_URL}assets/images/architectural-detail.webp`} 
              alt="Détail Architectural Technique" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.6] contrast-[1.1] transition-transform duration-700 group-hover:scale-110"
            />
            <div className="relative z-10 h-full p-10 flex flex-col justify-start">
              <span className="text-6xl md:text-7xl font-display font-light text-brand-gold mb-4">3</span>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-2">Expertise</p>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Univers d'excellence : <br />
                <span className="text-brand-gold">Résidentiel • Tertiaire • Sport</span>
              </p>
            </div>

            {/* Sceau de validation */}
            <div className="absolute bottom-8 right-8 z-20">
              <div className="relative w-24 h-24 flex items-center justify-center">
                 <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-30" viewBox="0 0 100 100">
                   <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                   <text className="text-[8px] uppercase tracking-[0.1em] fill-brand-gold font-bold">
                     <textPath xlinkHref="#circlePath">CONCEPTION • COORDINATION • RÉALISATION •</textPath>
                   </text>
                 </svg>
                 <div className="w-12 h-12 border border-brand-gold/30 rounded-full flex items-center justify-center rotate-[-15deg]">
                   <span className="text-[8px] font-bold text-brand-gold">VALIDE</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
