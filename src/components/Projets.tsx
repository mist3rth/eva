import React, { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Zap from 'lucide-react/dist/esm/icons/zap';
import Ruler from 'lucide-react/dist/esm/icons/ruler';
import { cn } from '@/src/lib/utils';
import ProjectCard, { Project } from './ProjectCard';
import VideoPlayer from './VideoPlayer';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Appartement Rivoli",
    category: "Particulier",
    location: "Paris 1er",
    year: "2023",
    images: [
      `${import.meta.env.BASE_URL}images/projets/p1-1.webp`,
      `${import.meta.env.BASE_URL}images/projets/p1-2.webp`,
      `${import.meta.env.BASE_URL}images/projets/p1-3.webp`
    ],
    details: "Rénovation complète d'un appartement historique de 170m². Conception sur-mesure, décoration contemporaine et suivi de chantier rigoureux pour magnifier les volumes.",
    metrics: { area: "170m²", duration: "6 mois", budget: "Confidentiel" },
    likes: "342",
    caption: "Conception, décoration & suivi travaux",
    annotation: "Rivoli - 170m²"
  },
  {
    id: 2,
    title: "Stade Français",
    category: "Sport & Public",
    location: "Paris & St-Cloud",
    year: "2026",
    images: [
      `${import.meta.env.BASE_URL}images/projets/p2-1.webp`,
      `${import.meta.env.BASE_URL}images/projets/p2-2.webp`,
      `${import.meta.env.BASE_URL}images/projets/p2-3.webp`
    ],
    details: "Études de conception, d'aménagement et de rénovation pour trois sites historiques : Golf du Haras Lupin, La Faisanderie (Parc de Saint-Cloud) et Géo André. Optimisation structurelle, gestion des flux et mise en conformité technique.",
    phase: "ÉTUDE",
    metrics: { area: "2500m²", duration: "En cours", budget: "N/A" },
    likes: "189",
    caption: "Études et dossiers complexes en cours",
    annotation: "Haras Lupin / Faisanderie / Géo André"
  },
  {
    id: 3,
    title: "Maison Asnières",
    category: "Particulier",
    location: "Asnières-sur-Seine",
    year: "2025",
    images: [
      `${import.meta.env.BASE_URL}images/projets/p3-1.webp`,
      `${import.meta.env.BASE_URL}images/projets/p3-2.webp`,
      `${import.meta.env.BASE_URL}images/projets/p3-3.webp`
    ],
    details: "Rénovation complète et transformation d'une maison de caractère. Aménagement d'une cuisine contemporaine haut de gamme dans d'anciens boxes de chevaux, création de surfaces habitables supplémentaires en sous-sol et décoration sur-mesure.",
    metrics: { area: "300m²", duration: "9 mois", budget: "N/A" },
    likes: "567",
    caption: "Cuisine dans d'anciens boxes & sous-sol",
    annotation: "Cuisine & Extension sous-sol"
  },
  {
    id: 4,
    title: "Dubbing Brothers",
    category: "Entreprise",
    location: "Saint-Denis",
    year: "2024",
    images: [
      `${import.meta.env.BASE_URL}images/projets/p4-1.webp`,
      `${import.meta.env.BASE_URL}images/projets/p4-2.webp`,
      `${import.meta.env.BASE_URL}images/projets/p4-3.webp`
    ],
    details: "Conception et extension des bâtiments de Dubbing Brothers, N° 1 du doublage en Europe. Études architecturales et techniques de bâtiments sur plus de 6000 m² regroupant des studios d’enregistrement de pointe et un centre de formation.",
    metrics: { area: "> 6000m²", duration: "18 mois", budget: "N/A" },
    likes: "892",
    caption: "Conception & extension des studios",
    annotation: "Studios & Centre de formation"
  },
  {
    id: 5,
    title: "Duplex Neuilly",
    category: "Particulier",
    location: "Neuilly-sur-Seine",
    year: "2023",
    images: [
      `${import.meta.env.BASE_URL}images/projets/p5-1.webp`,
      `${import.meta.env.BASE_URL}images/projets/p5-2.webp`,
      `${import.meta.env.BASE_URL}images/projets/p5-3.webp`
    ],
    details: "Rénovation complète et modification structurelle d'un duplex de 400m². Aménagement d'un espace terrasse avec vue dégagée sur la Tour Eiffel. Conception sur-mesure et suivi de chantier rigoureux pendant 12 mois.",
    metrics: { area: "400m²", duration: "12 mois", budget: "N/A" },
    likes: "124",
    caption: "Duplex & terrasse vue Tour Eiffel",
    annotation: "Duplex & Terrasse panoramique"
  },
  {
    id: 6,
    title: "Immeuble Haussmannien",
    category: "Entreprise",
    location: "Paris 9e",
    year: "2025",
    images: [
      `${import.meta.env.BASE_URL}images/projets/p6-1.webp`,
      `${import.meta.env.BASE_URL}images/projets/p6-2.webp`,
      `${import.meta.env.BASE_URL}images/projets/p6-3.webp`
    ],
    details: "Rénovation globale d’un immeuble Haussmannien à Paris 9e. Restructurations et rénovations sur cours avec extensions et surélévations sur 3 niveaux avec créations de terrasses. Utilisation d'ossatures bois, aménagement de commerces en RDC et appartements.",
    metrics: { area: "2800m²", duration: "24 mois", budget: "N/A" },
    likes: "453",
    caption: "Surélévation bois & commerces",
    annotation: "Surélévation bois & Commerces"
  }
];

const Projets: React.FC = () => {
  const [activeMobileProject, setActiveMobileProject] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'video' | 'photos'>('video');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

  const photos = [
    {
      src: `${import.meta.env.BASE_URL}images/t1.webp`,
      caption: "Complexe de tennis principal rénové"
    },
    {
      src: `${import.meta.env.BASE_URL}images/t2.webp`,
      caption: "Structure porteuse en bois lamellé-collé"
    },
    {
      src: `${import.meta.env.BASE_URL}images/t3.webp`,
      caption: "Optimisation de l'éclairage zénithal et thermique"
    },
    {
      src: `${import.meta.env.BASE_URL}images/t4.webp`,
      caption: "Finitions de la surface du futsal"
    }
  ];

  return (
    <section 
      id="projets" 
      className="py-24 md:py-32 bg-[var(--color-brand-bg-warm)]"
      aria-labelledby="projets-title"
    >
      <div className="max-w-[1280px] mx-auto px-[5vw]">
        <div className="mb-16">
          <m.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-5xl font-light tracking-tight"
            id="projets-title"
          >
            {"Réalisations".split("").map((char, i) => (
              <m.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                {char}
              </m.span>
            ))}
          </m.h2>
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-brand-muted font-light max-w-xl text-lg leading-relaxed"
          >
            Une sélection de nos projets récents
          </m.p>
        </div>

        {/* Featured Case Study Card - Layout Bento Éclaté */}
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-24 lg:mb-40"
          role="region"
          aria-labelledby="case-study-title"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[var(--color-brand-bg)] border border-brand-accent-bg/20 shadow-architect relative overflow-hidden group/case">
            {/* Decorative Blueprint Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02] pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid-small" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--color-brand-text)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid-small)" />
              </svg>
            </div>

            {/* 1. Technical Info Column (Left - 4/12) */}
            <div className="md:col-span-4 p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-brand-accent-bg/10 relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <span className="w-6 h-px bg-brand-gold" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold">Étude de Cas</span>
                </div>
                
                <h3 
                  id="case-study-title"
                  className="font-display text-4xl lg:text-5xl font-light text-brand-text leading-[1.1] mb-8"
                >
                  Tennis Club <br /> de Paris
                </h3>
                
                <div className="space-y-6 mb-12">
                  <p className="font-sans text-base font-light text-brand-muted leading-relaxed">
                    Modernisation d'un club mythique. Un défi de haute précision alliant performance thermique et conservation patrimoniale.
                  </p>
                  
                  <div className="flex flex-col gap-4 pt-6 border-t border-brand-accent-bg/10">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-brand-muted/60">Localisation</span>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-brand-text">Paris 16e</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-brand-muted/60">Surface</span>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-brand-text">2 200 m²</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-brand-muted/60">Études & travaux</span>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-brand-text">2 ans</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-brand-muted/60">Sociétés</span>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-brand-text">Plus de 12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-brand-muted/60">Effectif géré</span>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-brand-text">130 personnes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-brand-muted/60">Status</span>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-[10px] uppercase tracking-wider font-bold text-brand-text">Livré</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-accent-bg/30 p-6 border-l-2 border-brand-gold">
                <p className="font-sans text-[11px] font-light italic text-brand-muted leading-relaxed">
                  "Une exécution millimétrée en site occupé. Zéro interruption d'activité pour nos membres."
                </p>
              </div>
            </div>

            {/* 2. Visual & Interaction Column (Right - 8/12) */}
            <div className="md:col-span-8 relative z-10 flex flex-col">
              {/* Visual Header */}
              <div className="p-8 md:p-10 flex items-center justify-between bg-brand-accent-bg/10 border-b border-brand-accent-bg/10">
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-text">Immersion Terrain</h4>
                  </div>
                </div>
                
                {/* Commutateur de Médias */}
                <div className="flex bg-brand-accent-bg/30 p-1 border border-brand-accent-bg/10">
                  <button
                    onClick={() => setActiveTab('video')}
                    className={cn(
                      "px-3 py-1.5 text-[9px] uppercase tracking-widest font-bold cursor-pointer transition-all duration-300",
                      activeTab === 'video' 
                        ? "bg-brand-gold text-brand-bg shadow-architect" 
                        : "text-brand-muted hover:text-brand-text"
                    )}
                  >
                    Vidéo
                  </button>
                  <button
                    onClick={() => setActiveTab('photos')}
                    className={cn(
                      "px-3 py-1.5 text-[9px] uppercase tracking-widest font-bold cursor-pointer transition-all duration-300",
                      activeTab === 'photos' 
                        ? "bg-brand-gold text-brand-bg shadow-architect" 
                        : "text-brand-muted hover:text-brand-text"
                    )}
                  >
                    Photos
                  </button>
                </div>
              </div>

              {/* Media Container with Technical Overlays */}
              <div className="flex-1 aspect-video md:aspect-auto md:min-h-[400px] relative overflow-hidden bg-black/20 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === 'video' ? (
                    <m.div
                      key="video"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <VideoPlayer 
                        webmSrc={`${import.meta.env.BASE_URL}video-tennis.webm`}
                        mp4Src={`${import.meta.env.BASE_URL}video-tennis.mp4`}
                        poster={`${import.meta.env.BASE_URL}images/poster-video-tennis.webp`}
                        title="Aperçu vidéo du projet Tennis Club de Paris - Rénovation technique"
                        containerClassName="w-full h-full group/video"
                      />
                    </m.div>
                  ) : (
                    <m.div
                      key="photos"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full relative group/gallery flex flex-col justify-between"
                    >
                      {/* Photo Display */}
                      <div className="absolute inset-0 w-full h-full">
                        <AnimatePresence mode="wait">
                          <m.img
                            key={currentPhotoIndex}
                            src={photos[currentPhotoIndex].src}
                            alt={photos[currentPhotoIndex].caption}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full object-cover"
                          />
                        </AnimatePresence>
                      </div>

                      {/* Photo Overlays & Navigation controls */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                      
                      {/* Upper Caption Overlay */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                        <span className="bg-black/60 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-widest text-brand-gold border border-brand-gold/20">
                          Photo {currentPhotoIndex + 1} / {photos.length}
                        </span>
                      </div>

                      {/* Navigation Controls */}
                      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4">
                        <button
                          onClick={() => setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))}
                          className="bg-black/60 hover:bg-brand-gold hover:text-brand-bg text-brand-text p-2 cursor-pointer backdrop-blur-sm border border-brand-accent-bg/20 transition-all duration-300"
                          aria-label="Photo précédente"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))}
                          className="bg-black/60 hover:bg-brand-gold hover:text-brand-bg text-brand-text p-2 cursor-pointer backdrop-blur-sm border border-brand-accent-bg/20 transition-all duration-300"
                          aria-label="Photo suivante"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      {/* Lower Caption Overlay & Dot Indicators */}
                      <div className="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                        <p className="text-xs text-white/90 font-light tracking-wide drop-shadow-md">
                          {photos[currentPhotoIndex].caption}
                        </p>
                        
                        {/* Dot Indicators */}
                        <div className="flex gap-1.5">
                          {photos.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentPhotoIndex(idx)}
                              className={cn(
                                "h-1 cursor-pointer transition-all duration-300",
                                currentPhotoIndex === idx 
                                  ? "w-6 bg-brand-gold" 
                                  : "w-2 bg-white/40 hover:bg-white/80"
                              )}
                              aria-label={`Aller à la photo ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Technical Grid */}
              <div className="grid grid-cols-3 divide-x divide-brand-accent-bg/10 border-t border-brand-accent-bg/10">
                {[
                  { label: "Isol. Thermique", value: "A+", icon: ShieldCheck },
                  { label: "Optim. LED", value: "-42%", icon: Zap },
                  { label: "Surfaces", value: "2.2k", icon: Ruler }
                ].map((stat, i) => (
                  <div key={i} className="p-6 flex flex-col items-center text-center group/stat">
                    <stat.icon size={16} className="text-brand-gold/60 mb-2 group-hover/stat:text-brand-gold transition-colors" aria-hidden="true" />
                    <span className="text-[7px] uppercase tracking-widest text-brand-muted/60 mb-1">{stat.label}</span>
                    <span className="text-sm font-bold text-brand-text tracking-tighter">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Narrative Cards (Horizontal Layout Below) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1 bg-brand-accent-bg/10 border border-brand-accent-bg/20">
            {[
              {
                num: '01',
                title: 'Le Défi Technique',
                content: 'Vétusté critique des installations & Urgence thermique d’un site de 2200m² sans interruption de l’activité sportive.',
                accent: 'border-l-4 border-brand-gold/20'
              },
              {
                num: '02',
                title: 'L’Intervention EVA',
                content: 'Pilotage minutieux en site occupé : Zéro interruption d’activité pour les 2500 membres du club. Optimisation radicale de l’éclairage LED.',
                accent: 'bg-[var(--color-brand-bg)] shadow-architect-hover z-20 scale-[1.02] border-t-4 border-brand-gold'
              },
              {
                num: '03',
                title: 'Impact & Performance',
                content: 'Réduction immédiate de 40% des coûts énergétiques et confort thermique d’exception pour les membres du club.',
                accent: 'border-r-4 border-brand-gold/20'
              }
            ].map((item, idx) => (
              <m.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={cn(
                  "p-10 transition-all duration-500",
                  item.accent
                )}
              >
                <div className="flex flex-col gap-6">
                  <span className="font-mono text-[10px] text-brand-gold font-bold">/0{idx + 1}</span>
                  <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-brand-text">{item.title}</h4>
                  <p className="text-sm font-light text-brand-muted leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>

        <m.div 
          layout
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-24 gap-x-8 md:gap-x-12 relative"
        >
          {/* Background Grid Accent */}
          <div className="absolute inset-0 blueprint-dots -z-10 pointer-events-none opacity-5" />
          
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={activeMobileProject === project.id}
                onToggle={() => setActiveMobileProject(activeMobileProject === project.id ? null : project.id)}
              />
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
};

export default Projets;
