// 1. Libraries
import React, { useState, useEffect, Suspense, lazy, useMemo } from 'react';
import { m, AnimatePresence } from 'motion/react';

// 2. Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import SectionLoader from './components/SectionLoader';
import { ScrollToTop } from './components/ui/ScrollToTop';

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

const SECTION_IDS = [
  'hero', 'stats', 'references', 'stats-text', 'projets', 'expertises', 'approche', 'temoignages', 'communaute'
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useActiveSection(SECTION_IDS);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [legalView, setLegalView] = useState<'mentions' | 'privacy' | null>(null);

  useEffect(() => {
    // Chargement différé des scripts non-critiques (Analytics, etc.)
    loadNonCriticalScripts([]);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-gold/30 selection:text-brand-text">
      <Navbar activeSection={activeSection} onSectionClick={setActiveSection} />
      
      <main>
        <Hero onSetActiveSection={setActiveSection} />
        
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="300px" type="text" />}>
            <StatsBar />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="200px" type="grid" />}>
            <References />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="300px" type="text" />}>
            <Stats />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader height="800px" type="grid" />}>
            <Projets />
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

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default App;
