import React from 'react';
import { m } from 'motion/react';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import Compass from 'lucide-react/dist/esm/icons/compass';

interface NotFoundProps {
  onBack?: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onBack }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#1A1714] flex items-center justify-center overflow-hidden">
      {/* Background Blueprint - New Premium Asset */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: `url("${import.meta.env.BASE_URL}assets/images/blueprint-404.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 z-10 opacity-5 pointer-events-none blueprint-grid-mm" />
      <div className="absolute inset-0 z-10 opacity-10 pointer-events-none blueprint-grid-cm" />

      <div className="relative z-20 max-w-2xl w-full px-6 text-center">
        {/* Viseurs (Corner Markers) avec plus de détails techniques */}
        <div className="absolute -top-12 -left-4 w-12 h-12 border-t border-l border-brand-gold/50" />
        <div className="absolute -top-12 -right-4 w-12 h-12 border-t border-r border-brand-gold/50" />
        <div className="absolute -bottom-12 -left-4 w-12 h-12 border-b border-l border-brand-gold/50" />
        <div className="absolute -bottom-12 -right-4 w-12 h-12 border-b border-r border-brand-gold/50" />
        
        {/* Addition of tiny technical annotations */}
        <div className="absolute -top-14 left-10 text-[6px] font-mono text-brand-gold/40 uppercase tracking-widest">Ref. Point_Alpha_00</div>
        <div className="absolute top-1/2 -left-16 -rotate-90 text-[6px] font-mono text-brand-gold/40 uppercase tracking-widest">Axis_Horizontal_X</div>

        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <Compass size={20} className="text-brand-gold animate-[spin_8s_linear_infinite]" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold">Erreur 404 — Hors Plan</span>
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-light text-white mb-6 leading-tight tracking-tight">
            Espace <span className="text-brand-gold italic">Non Bâti</span>
          </h1>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent mx-auto mb-10" />

          <p className="font-sans text-base md:text-xl text-brand-accent-bg/80 font-light leading-relaxed mb-12 max-w-lg mx-auto">
            Le plan que vous tentez de consulter n'a pas encore été tracé ou a été archivé. 
            Aucune coordonnée technique ne correspond à cette requête.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button
              onClick={() => onBack ? onBack() : window.location.href = '/'}
              className="group relative flex items-center gap-4 px-10 py-5 bg-brand-gold text-white hover:bg-white hover:text-brand-text transition-all duration-700 rounded-sm cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform relative z-10" />
              <span className="text-[12px] uppercase tracking-[0.3em] font-bold relative z-10">Retour à l'agence</span>
            </button>

            <div className="flex flex-col items-start text-left border-l border-brand-gold/30 pl-8 hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[9px] font-mono text-white/60 uppercase tracking-tighter">Status: Void_Entry_404</span>
              </div>
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter mb-1 block">Layer: Non_Existent_Coordinate</span>
              <span className="text-[9px] font-mono text-brand-gold uppercase tracking-tighter block">Scale: 1:0 [Undefined]</span>
            </div>
          </div>
        </m.div>
      </div>

      {/* Decorative Technical Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-brand-gold/10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-brand-gold/10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-brand-gold/10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-brand-gold/10 pointer-events-none" />
      
      {/* Animated Scan Line */}
      <m.div 
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent pointer-events-none z-30"
      />
    </div>

  );
};

export default NotFound;
