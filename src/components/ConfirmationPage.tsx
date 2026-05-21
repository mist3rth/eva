import React from 'react';
import { m } from 'motion/react';

interface ConfirmationPageProps {
  onBack: () => void;
}

const ArchitecturalBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {/* Base Grid */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    
    {/* Technical Blueprint Elements */}
    <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.1]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="archGrid" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="0" cy="0" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#archGrid)" />
      
      {/* Decorative Technical Lines & Measurements */}
      <m.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <m.path 
          d="M 0 15% L 100% 15% M 15% 0 L 15% 100%" 
          stroke="currentColor" 
          strokeWidth="0.3" 
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        
        {/* Architectural Circles & Crosses */}
        <m.circle 
          cx="15%" cy="15%" r="12" 
          stroke="currentColor" 
          strokeWidth="0.2" 
          fill="none"
          initial={{ pathLength: 0, rotate: -90 }}
          animate={{ pathLength: 1, rotate: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <m.path d="M 15% 10% L 15% 20% M 10% 15% L 20% 15%" stroke="currentColor" strokeWidth="0.2" />
        
        {/* Right Side Technical Detail - Drafting Table Look */}
        <m.g
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <path d="M 85% 20% L 95% 20% L 95% 30%" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <text x="86%" y="18%" fontSize="6" className="fill-current font-mono opacity-60 uppercase tracking-tighter">Scale 1:50</text>
          <text x="86%" y="24%" fontSize="6" className="fill-current font-mono opacity-60 uppercase tracking-tighter">Ref: ARCH_CONF_V2.0</text>
          
          {/* Elevation Lines */}
          <path d="M 80% 60% H 95% M 80% 65% H 95% M 80% 70% H 95%" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 2" />
          <text x="81%" y="58%" fontSize="4" className="fill-current font-mono opacity-40">ELEVATION_A</text>
        </m.g>

        {/* Bottom Left Dimension */}
        <m.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <path d="M 5% 85% L 15% 85% M 15% 80% L 15% 90%" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <text x="6%" y="83%" fontSize="6" className="fill-current font-mono opacity-60 uppercase tracking-tighter">Dim_X: 2400mm</text>
          <path d="M 5% 75% Q 10% 75%, 10% 80%" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
        </m.g>

        {/* Compass/North Arrow faint */}
        <m.g
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 0.15, rotate: 0 }}
          transition={{ delay: 2, duration: 2 }}
          className="origin-center"
        >
          <circle cx="50%" cy="50%" r="100" stroke="currentColor" strokeWidth="0.1" fill="none" />
          <path d="M 50% 40% L 50% 60% M 40% 50% H 60%" stroke="currentColor" strokeWidth="0.1" />
          <text x="49.5%" y="38%" fontSize="8" className="fill-current font-serif italic">N</text>
        </m.g>
      </m.g>
    </svg>

    {/* Paper Texture Overlay */}
    <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none" 
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} 
    />
    
    {/* Faint Architectural Sketch Overlay (top right) */}
    <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-[0.03] pointer-events-none rotate-12 translate-x-1/4 -translate-y-1/4">
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.1">
        <rect x="10" y="10" width="80" height="60" />
        <path d="M 10 70 L 50 20 L 90 70 Z" />
        <line x1="10" y1="10" x2="90" y2="70" />
        <line x1="90" y1="10" x2="10" y2="70" />
      </svg>
    </div>
  </div>
);

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onBack }) => (
  <m.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[120] bg-brand-bg flex flex-col items-center justify-center px-[5vw] text-center overflow-hidden"
  >
    <ArchitecturalBackground />
    
    <m.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl relative z-10"
    >
      {/* Icon with complex drawing animation */}
      <div className="w-24 h-24 bg-brand-gold/5 flex items-center justify-center rounded-full mx-auto mb-12 border border-brand-gold/20 relative overflow-hidden group">
        <m.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
          className="absolute inset-0 bg-brand-gold/10"
        />
        
        {/* Animated Drawing Path for the Checkmark */}
        <svg 
          viewBox="0 0 52 52" 
          className="w-12 h-12 text-brand-gold relative z-10"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Technical drafting lines that appear during drawing */}
          <m.path
            d="M 5 27 H 47 M 22 5 V 47"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            strokeWidth="0.5"
          />
          <m.circle
            cx="22" cy="35" r="4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.4 }}
            strokeWidth="0.5"
          />

          {/* Main animated path */}
          <m.path
            d="m14 27 8 8 16-16"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 1, 
              ease: [0.65, 0, 0.35, 1],
              delay: 0.8 
            }}
          />
          
          {/* Drafting "overshoot" effect */}
          <m.path
            d="m13.5 26.5 8.5 8.5 m-0.5 0.5 17 -17"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              delay: 0.9 
            }}
            strokeWidth="1"
          />
        </svg>
        
        {/* Radial Waves */}
        {[1, 2].map((i) => (
          <m.div
            key={i}
            className="absolute inset-0 border border-brand-gold/20 rounded-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      <m.h2 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="font-display text-4xl md:text-6xl font-light tracking-tight text-brand-text mb-8 uppercase"
      >
        Message Reçu.
      </m.h2>
      
      <m.p 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="font-sans text-brand-muted text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed tracking-wide font-light"
      >
        Merci de votre confiance. Votre demande a été transmise avec succès. <br className="hidden md:block" />
        Nous reviendrons vers vous sous 48h pour échanger sur votre projet.
      </m.p>
      
      <m.button 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={onBack}
        className="group relative inline-flex items-center justify-center px-12 py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-brand-gold transition-all duration-500 shadow-2xl cursor-pointer rounded-sm overflow-hidden"
        type="button"
      >
        <span className="relative z-10">Retour au site principal</span>
        <m.div 
          className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
        />
      </m.button>
    </m.div>
    
    {/* Decorative Bottom Label */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center gap-2">
      <div className="w-[1px] h-12 bg-brand-text" />
      <span className="text-[8px] uppercase tracking-[0.5em] font-mono">STATUS: CONFIRMED</span>
      <span className="text-[6px] uppercase tracking-[0.2em] font-mono opacity-50">BY_EVA_DRAFTING_TOOL</span>
    </div>
  </m.div>
);

export default ConfirmationPage;


