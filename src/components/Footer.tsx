import React from 'react';
import { m } from 'motion/react';
import { Linkedin, Facebook, Instagram, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
  setLegalView: (view: 'mentions' | 'privacy' | null) => void;
}

export default function Footer({ setActiveSection, setLegalView }: FooterProps) {
  return (
    <footer className="relative pt-32 pb-16 border-t border-brand-accent-bg bg-technical-footer overflow-hidden">
      {/* Subtle Overlay to make texture look more like a blueprint */}
      <div className="absolute inset-0 bg-[#FBFBF9]/95 z-0" />
      
      <div className="max-w-[1280px] mx-auto px-[5vw] md:pr-[120px] relative z-10">
        {/* Top CTA Row */}
        <div className="mb-24 md:mb-32">
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-brand-accent-bg pb-16"
          >
            <div className="max-w-xl">
              <span className="text-brand-gold font-sans text-xs uppercase tracking-[0.4em] mb-6 block">Perspective</span>
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight leading-tight">
                Un projet à Paris ou partout en France ? Échangeons sur vos ambitions.
              </h2>
            </div>
            <m.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-5 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-colors duration-500 shadow-2xl"
            >
              Engager la discussion
            </m.a>
          </m.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-16 md:gap-8 mb-24">
          {/* Left: Brand & Address (40%) */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex flex-col items-start group cursor-pointer mb-10" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-display text-5xl md:text-7xl tracking-[0.25em] font-extralight uppercase leading-none group-hover:text-brand-gold transition-colors duration-300">EVA</span>
              <span className="font-sans text-[11px] md:text-[13px] tracking-[0.6em] uppercase font-light text-brand-gold mt-4 pl-0.5">Maitrise d’œuvre</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-text font-bold mb-3">Siège Social</h4>
                <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-brand-muted leading-relaxed max-w-[240px] opacity-80">
                  17 rue de la Banque<br />
                  75002 Paris
                </p>
                <a 
                  href="https://maps.google.com/?q=17+rue+de+la+Banque+75002+Paris" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[9px] uppercase tracking-widest text-brand-gold border-b border-brand-gold/30 pb-0.5 hover:border-brand-gold transition-colors"
                >
                  Itinéraire →
                </a>
              </div>
              
              {/* Assurance Décennale Badge */}
              <div className="pt-6 flex items-center gap-4">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/images/Smabtp.webp`} 
                  alt="Partenaire SMABTP - Assurance Décennale"
                  className="h-10 w-auto opacity-30 grayscale brightness-200 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="flex flex-col">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-brand-text">Garantie</span>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-brand-text">Décennale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Navigation (30%) */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-text font-bold mb-8">Navigation</h4>
            <nav className="flex flex-col gap-5">
              {[
                { name: 'Réalisations', id: 'projets' },
                { name: 'Expertises', id: 'expertises' },
                { name: 'Approche', id: 'approche' },
                { name: 'Témoignages', id: 'temoignages' }
              ].map(link => (
                <a 
                  key={link.name} 
                  href={`#${link.id}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(link.id);
                    const el = document.getElementById(link.id);
                    if (el) {
                      const offset = 72;
                      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="text-[11px] uppercase tracking-[0.2em] text-brand-muted hover:text-brand-gold transition-all duration-300 transform hover:translate-x-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Contact & Connect (30%) */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-text font-bold mb-8">Nous Contacter</h4>
            <div className="space-y-6">
              <a href="tel:+33620160905" className="block text-lg font-display tracking-widest text-[#1A1714] hover:text-brand-gold transition-colors">
                +33 (0)6 20 16 09 05
              </a>
              <a href="mailto:contact@eva-fr.com" className="block text-xs font-sans tracking-widest text-brand-muted hover:text-brand-gold transition-colors">
                contact@eva-fr.com
              </a>
              
              {/* Section Réseaux Sociaux désactivée temporairement
              <div className="pt-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-brand-muted/50 mb-4 block">Réseaux Sociaux</span>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    {[
                      { Icon: Linkedin, href: "https://www.linkedin.com/company/eva-maitrise-d-oeuvre", label: "LinkedIn" },
                      { Icon: Facebook, href: "#", label: "Facebook" },
                      { Icon: Instagram, href: "#", label: "Instagram" }
                    ].map((item, idx) => (
                      <a 
                        key={idx}
                        href={item.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        onClick={(e) => {
                          if (item.href === "#") e.preventDefault();
                        }}
                        className="w-10 h-10 rounded-full border border-brand-accent-bg flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/5 transition-all duration-500"
                      >
                        <item.Icon size={14} strokeWidth={1} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-brand-accent-bg/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-brand-muted/80 text-center md:text-left flex flex-wrap justify-center md:justify-start items-center gap-1">
            © {new Date().getFullYear()} EVA Maitrise d’œuvre — 
            <button onClick={() => setLegalView('privacy')} className="hover:text-brand-gold transition-colors cursor-pointer uppercase">Privacy by design</button> — 
            <a 
              href="https://mist3rth.github.io/presentMe/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-gold transition-colors inline-flex items-center gap-1 font-bold cursor-pointer"
            >
              Made by T.Thiesson <ExternalLink size={8} />
            </a>
          </p>
          <div className="flex gap-8">
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setLegalView('mentions');
              }}
              className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-muted/60 hover:text-brand-gold transition-colors cursor-pointer"
              aria-label="Voir les mentions légales"
            >
              Mentions Légales
            </button>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setLegalView('privacy');
              }}
              className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-muted/60 hover:text-brand-gold transition-colors cursor-pointer"
              aria-label="Voir la politique de confidentialité"
            >
              Confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
