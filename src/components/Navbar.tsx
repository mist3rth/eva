import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import { cn } from '../lib/utils';

interface NavLink {
  name: string;
  id: string;
}

const NAV_LINKS: NavLink[] = [
  { name: 'Réalisations', id: 'projets' },
  { name: 'Expertises', id: 'expertises' },
  { name: 'Approche', id: 'approche' },
  { name: 'Témoignages', id: 'temoignages' },
  { name: 'Communauté', id: 'communaute' }
];

const PRELOAD_MAP: Record<string, () => Promise<unknown>> = {
  projets: () => import('./Projets'),
  expertises: () => import('./Expertises'),
  approche: () => import('./Approche'),
  temoignages: () => import('./Testimonials'),
  communaute: () => import('./Communaute'),
};

interface NavbarProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 400) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      onSectionClick(id);
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleMouseEnter = (id: string) => {
    if (PRELOAD_MAP[id]) {
      PRELOAD_MAP[id]().catch(() => {});
    }
  };

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={(hidden && !mobileMenuOpen) ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-colors duration-500",
          "min-h-[80px] pt-[env(safe-area-inset-top,20px)] pb-2 flex items-center px-[5vw]",
          isScrolled ? "bg-brand-bg shadow-sm" : "bg-transparent"
        )}
      >
        <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex flex-col items-start group cursor-pointer"
          >
            <span className="font-display text-2xl md:text-3xl tracking-[0.3em] font-extralight uppercase leading-none text-brand-text group-hover:text-brand-gold transition-colors duration-300">
              EVA
            </span>
            <span className="font-sans text-[7px] md:text-[8px] tracking-[0.5em] uppercase font-light text-brand-muted mt-1.5 pl-0.5 group-hover:text-brand-gold transition-all duration-300">
              Maitrise d’œuvre
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id || 
                                (link.id === 'projets' && activeSection === 'references');
                return (
                  <a 
                    key={link.id} 
                    href={`#${link.id}`}
                    onMouseEnter={() => handleMouseEnter(link.id)}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={cn(
                      "relative text-[10px] uppercase tracking-[0.3em] transition-all duration-300 py-2",
                      isActive ? "text-brand-gold font-normal" : "text-brand-text/50 hover:text-brand-text font-light"
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div 
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <AnimatePresence mode="wait">
              {activeSection !== 'hero' && !mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: 10, filter: 'blur(4px)' }}
                  className="mr-4 pr-4 border-r border-brand-gold/20"
                >
                  <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gold font-medium">
                    {NAV_LINKS.find(l => l.id === activeSection)?.name || activeSection}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              className="p-2 -mr-2 text-brand-text focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-bg z-[100] md:hidden overflow-hidden overscroll-none touch-none"
          >
            {/* Main Menu Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 35, stiffness: 300 }}
            className="absolute inset-0 w-full h-full flex flex-col pt-[calc(8rem+env(safe-area-inset-top,20px))] pb-[calc(3rem+env(safe-area-inset-bottom,0px))] overflow-y-auto overflow-x-hidden scrollbar-hide overscroll-none"
            >
              {/* Close Button Inside - Strictly positioned to avoid layout shifts */}
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-[calc(1.5rem+env(safe-area-inset-top,20px))] right-6 p-3 text-brand-text hover:text-brand-gold transition-colors duration-300 z-50"
                aria-label="Fermer le menu"
              >
                <X size={32} strokeWidth={1.5} />
              </button>

              {/* Architectural Background Details - Pointer events none and absolute */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 left-[10%] w-[1px] h-full bg-brand-text" />
                <div className="absolute top-0 left-[50%] w-[1px] h-full bg-brand-text" />
                <div className="absolute top-0 left-[90%] w-[1px] h-full bg-brand-text" />
                <div className="absolute top-[20%] left-0 w-full h-[1px] bg-brand-text" />
                <div className="absolute top-[50%] left-0 w-full h-[1px] bg-brand-text" />
                <div className="absolute top-[80%] left-0 w-full h-[1px] bg-brand-text" />
              </div>

              {/* Navigation Links */}
              <div className="relative z-10 flex flex-col items-center gap-8 py-4">
                {NAV_LINKS.map((link, index) => {
                  const isActive = activeSection === link.id || 
                                  (link.id === 'projets' && activeSection === 'references');
                  return (
                    <motion.a 
                      key={link.id} 
                      href={`#${link.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className={cn(
                        "relative text-2xl uppercase tracking-[0.3em] transition-all duration-300 px-6 py-3 text-center",
                        isActive ? "text-brand-gold font-normal scale-105" : "text-brand-text/30 font-light"
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div 
                          layoutId="mobileActiveDot"
                          className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-gold rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Menu Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pt-12 relative z-10 flex flex-col items-center gap-3"
              >
                <div className="w-12 h-[1px] bg-brand-gold/30" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-brand-muted/60 font-light">Architecture & Design</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
