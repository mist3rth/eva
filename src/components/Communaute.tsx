import React from 'react';
import { motion } from 'motion/react';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Facebook from 'lucide-react/dist/esm/icons/facebook';
import { cn } from '@/src/lib/utils';

// --- Sub-components ---
function BlueprintOverlay({ isActive }: { isActive?: boolean }) {
  return (
    <svg 
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 z-10",
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      {/* Dynamic technical lines */}
      <motion.path 
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        d="M5,5 L95,5 M5,95 L95,95 M5,5 L5,95 M95,5 L95,95" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.15" 
        strokeDasharray="2 1" 
        className="text-brand-gold/60" 
      />
      <motion.path 
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        d="M0,30 L100,30 M0,70 L100,70 M30,0 L30,100 M70,0 L70,100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.05" 
        className="text-brand-gold/20" 
      />
      
      {/* Corner markers */}
      <circle cx="5" cy="5" r="0.5" fill="currentColor" className="text-brand-gold" />
      <circle cx="95" cy="5" r="0.5" fill="currentColor" className="text-brand-gold" />
      <circle cx="5" cy="95" r="0.5" fill="currentColor" className="text-brand-gold" />
      <circle cx="95" cy="95" r="0.5" fill="currentColor" className="text-brand-gold" />
 
      {/* Technical text labels */}
      <text x="7" y="12" fontSize="1.5" className="fill-brand-gold/80 font-sans uppercase tracking-[0.2em]">Scale 1:50</text>
      <text x="72" y="92" fontSize="1.5" className="fill-brand-gold/80 font-sans uppercase tracking-[0.2em]">Ref. EVA-SOC-0{Math.floor(Math.random() * 9) + 1}</text>
      
      {/* Measurement lines */}
      <line x1="30" y1="25" x2="70" y2="25" stroke="currentColor" strokeWidth="0.1" className="text-brand-gold/40" />
      <text x="45" y="23" fontSize="1.2" className="fill-brand-gold/60 font-sans uppercase tracking-tighter">12.45m</text>
    </svg>
  );
}

const COMMUNITY_POSTS = [
  { 
    id: 1, 
    image: `${import.meta.env.BASE_URL}assets/images/social/insta_1.webp`, 
    likes: '124', 
    caption: 'Rénovation luxe Paris 16e',
    rotation: -1,
    yOffset: 0,
    annotation: "R+2 Façade"
  },
  { 
    id: 2, 
    image: `${import.meta.env.BASE_URL}assets/images/social/insta_2.webp`, 
    likes: '89', 
    caption: 'Détails constructifs : Béton & Laiton',
    rotation: 1.5,
    yOffset: 40,
    annotation: "Détail Matériau"
  },
  { 
    id: 3, 
    image: `${import.meta.env.BASE_URL}assets/images/social/insta_3.webp`, 
    likes: '210', 
    caption: 'Façade tertiaire contemporaine',
    rotation: -0.5,
    yOffset: -20,
    annotation: "Structure Acier"
  },
  { 
    id: 4, 
    image: `${import.meta.env.BASE_URL}assets/images/social/insta_4.webp`, 
    likes: '156', 
    caption: 'Étude technique en cours',
    rotation: 0.8,
    yOffset: 60,
    annotation: "Phase Étude"
  },
  { 
    id: 5, 
    image: `${import.meta.env.BASE_URL}assets/images/social/insta_5.webp`, 
    likes: '312', 
    caption: 'Escalier sculptural sur mesure',
    rotation: -1.2,
    yOffset: 10,
    annotation: "Circulation"
  },
  { 
    id: 6, 
    image: `${import.meta.env.BASE_URL}assets/images/social/insta_6.webp`, 
    likes: '178', 
    caption: 'Éclairage nocturne villa Antibes',
    rotation: 0.5,
    yOffset: -40,
    annotation: "Ambiance"
  }
];

export default function Communaute() {
  return (
    <section id="communaute" className="py-32 md:py-48 bg-draft-paper relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none blueprint-grid-mm" />
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none blueprint-grid-cm" />

      {/* Large Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] z-0">
        <span className="text-[25vw] font-display font-bold uppercase tracking-tighter whitespace-nowrap text-brand-text leading-none">
          Atelier
        </span>
      </div>

      {/* Construction lines decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute top-0 left-[15%] w-[0.5px] h-full bg-brand-gold/30" />
        <div className="absolute top-0 left-[85%] w-[0.5px] h-full bg-brand-gold/30" />
        <div className="absolute top-[20%] left-0 w-full h-[0.5px] bg-brand-gold/30" />
      </div>

      <div className="max-w-[1440px] mx-auto px-[5vw] relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-brand-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">Communauté</span>
            </motion.div>
            <h2 className="font-display text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-6">
              L'architecture au <br/> 
              <span className="italic font-serif">quotidien.</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-brand-text text-sm mb-2 font-medium">Actualités & Réalisations</p>
            <p className="text-brand-muted text-xs uppercase tracking-widest max-w-xs md:ml-auto">
              Coulisses, inspirations et chantiers en direct de l'agence.
            </p>
          </div>
        </div>
        
        {/* TODO: Intégration Flux Instagram - Ce conteneur accueillera le flux dynamique */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16"
        >
          {COMMUNITY_POSTS.map((post) => (
            <motion.div
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              className="group relative bg-white p-4 shadow-xl border border-brand-text/5 transition-all duration-500"
              style={{ 
                rotate: post.rotation,
                // @ts-ignore - dynamic style for motion
                '--tw-translate-y': `${post.yOffset}px`,
                transform: `rotate(${post.rotation}deg) translateY(${post.yOffset}px)`
              } as any}
            >
               <div className="relative aspect-square overflow-hidden mb-4 bg-brand-text/5">
                  <BlueprintOverlay />

                  <img 
                    src={post.image}
                    alt={post.caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
               </div>

               {/* Technical "Polaroid" footer */}
               <div className="mt-4 flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-widest text-brand-muted font-bold">
                    EVA / PROJECT_ID: 0{post.id}
                  </span>
               </div>

               {/* Tape decorations (top & bottom) */}
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-brand-gold/10 backdrop-blur-sm opacity-40 group-hover:opacity-60 transition-opacity border-x border-brand-gold/20" />
             </motion.div>
           ))}
        </motion.div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between border-t border-brand-text/10 pt-12 gap-8">
          <div className="flex gap-8 text-brand-text">
            {[
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
              { Icon: Facebook, label: "Facebook", href: "#" }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                aria-label={`Suivre EVA sur ${item.label}`}
                whileHover={{ y: -5, scale: 1.1 }}
                className="group relative flex items-center justify-center w-14 h-14 transition-all duration-500"
              >
                <span className="absolute inset-0 border border-brand-accent-bg rounded-full transition-all duration-500 group-hover:border-brand-gold/50 group-hover:scale-110"></span>
                <span className="absolute inset-0 bg-brand-gold rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-5 transition-all duration-700 ease-out"></span>
                <item.Icon size={20} strokeWidth={1} className="relative z-10 group-hover:text-brand-gold transition-colors duration-500" />
                <motion.span 
                  layoutId="social-glow"
                  className="absolute inset-0 rounded-full blur-md bg-brand-gold/0 group-hover:bg-brand-gold/10 transition-all duration-500"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
