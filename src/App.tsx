// 1. Libraries
import React, { useState, useEffect, Suspense, lazy, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ArrowUp from 'lucide-react/dist/esm/icons/arrow-up';

// 2. Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import SectionLoader from './components/SectionLoader';

// 3. Lazy Components
const StatsBar = lazy(() => import('./components/StatsBar'));
const Stats = lazy(() => import('./components/Stats'));
const Projets = lazy(() => import('./components/Projets'));
const References = lazy(() => import('./components/References'));
const Expertises = lazy(() => import('./components/Expertises'));
const Approche = lazy(() => import('./components/Approche'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Communaute = lazy(() => import('./components/Communaute'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));
const ConfirmationPage = lazy(() => import('./components/ConfirmationPage'));
const LegalOverlay = lazy(() => import('./components/LegalOverlay'));

// 4. Hooks & Utilities
import { useActiveSection } from './hooks/useActiveSection';
import { loadNonCriticalScripts } from './lib/performance';

const App: React.FC = () => {
  const sectionIds = useMemo(() => [
    'hero', 'projets', 'references', 'expertises', 'approche', 'temoignages', 'communaute'
  ], []);

  const [activeSection, setActiveSection] = useActiveSection(sectionIds);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [legalView, setLegalView] = useState<'mentions' | 'privacy' | null>(null);

  // Handle scroll for the scroll-to-top button visibility with Throttling
  useEffect(() => {
    // Chargement différé des scripts non-critiques (Analytics, etc.)
    loadNonCriticalScripts([]);

    let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          setShowScrollTop(window.scrollY > 500);
          // Hide floating CTA when near bottom of page
          const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
          setIsAtBottom(isNearBottom);
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
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-gold/30 selection:text-brand-text">
      <Navbar activeSection={activeSection} onSectionClick={setActiveSection} />
      
      <main>
        <Hero onSetActiveSection={setActiveSection} />
        
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="300px" type="text" />}>
            <StatsBar />
            <Stats />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="800px" type="grid" />}>
            <Projets />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="200px" type="grid" />}>
            <References />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="600px" type="text" />}>
            <Expertises />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="600px" type="text" />}>
            <Approche />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="600px" type="text" />}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="400px" type="grid" />}>
            <Communaute />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="800px" type="text" />}>
            <ContactForm onSuccess={() => setShowConfirmation(true)} />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="400px" />}>
            <Footer setActiveSection={setActiveSection} setLegalView={setLegalView} />
          </Suspense>
        </ErrorBoundary>
      </main>

      {/* --- Overlay & UI Elements --- */}
      <AnimatePresence>
        {legalView && (
          <Suspense fallback={null}>
            <LegalOverlay type={legalView} onClose={() => setLegalView(null)} />
          </Suspense>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showConfirmation && (
          <Suspense fallback={null}>
            <ConfirmationPage onBack={() => setShowConfirmation(false)} />
          </Suspense>
        )}
      </AnimatePresence>

      {/* Mobile Floating Contact CTA */}
      <AnimatePresence>
        {showScrollTop && activeSection !== 'contact' && !isAtBottom && (
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('contact');
              const el = document.getElementById('contact');
              if (el) {
                const offset = 80;
                window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
              }
            }}
            className="fixed bottom-[calc(2rem+env(safe-area-inset-bottom,0px))] left-8 z-40 md:hidden bg-brand-gold text-white px-6 py-3 rounded-full shadow-2xl font-sans text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 cursor-pointer no-underline"
          >
            <span>Démarrer un projet</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-[calc(2rem+env(safe-area-inset-bottom,0px))] right-8 z-40 w-12 h-12 bg-brand-text text-white rounded-full flex items-center justify-center shadow-xl border border-white/10 group overflow-hidden cursor-pointer"
            aria-label="Retour en haut"
          >
            <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <ArrowUp size={20} className="relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
