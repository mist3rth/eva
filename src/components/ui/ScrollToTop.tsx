import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'motion/react';
import ArrowUp from 'lucide-react/dist/esm/icons/arrow-up';

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          setShowScrollTop(window.scrollY > 500);
          throttleTimeout = null;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <m.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-[calc(2rem+env(safe-area-inset-bottom,0px))] right-8 z-40 w-12 h-12 bg-brand-text text-white rounded-full hidden md:flex items-center justify-center shadow-xl border border-white/10 group overflow-hidden cursor-pointer"
          aria-label="Retour en haut"
        >
          <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <ArrowUp size={20} className="relative z-10" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
