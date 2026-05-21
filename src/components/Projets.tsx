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
    title: "Appartement Victor Hugo",
    category: "RÃ©sidentiel Luxe",
    location: "Paris 16e",
    year: "2023",
    images: [
      `${import.meta.env.BASE_URL}assets/images/appartement.webp`,
      `${import.meta.env.BASE_URL}assets/images/architectural-detail.webp`,
      `${import.meta.env.BASE_URL}assets/images/concrete-texture.webp`
    ],
    details: "RÃ©novation complÃ¨te d'un appartement de maÃ®tre. Valorisation des volumes originaux et intÃ©gration de domotique invisible.",
    metrics: { area: "240mÂ²", duration: "8 mois", budget: "450kâ‚¬" },
    likes: "342",
    caption: "RÃ©novation de maÃ®tre",
    annotation: "Volumes & LumiÃ¨re"
  },
  {
    id: 2,
    title: "SiÃ¨ge Social Tech",
    category: "Tertiaire",
    location: "Boulogne",
    year: "2023",
    images: [
      `${import.meta.env.BASE_URL}assets/images/siege-social.webp`,
      `${import.meta.env.BASE_URL}assets/images/architectural-detail.webp`,
      `${import.meta.env.BASE_URL}assets/images/concrete-texture.webp`
    ],
    details: "AmÃ©nagement de bureaux en open-space avec focus sur l'acoustique et la lumiÃ¨re naturelle.",
    metrics: { area: "1200mÂ²", duration: "14 mois", budget: "1.2Mâ‚¬" },
    likes: "189",
    caption: "Espace de travail agile",
    annotation: "Focus Acoustique"
  },
  {
    id: 3,
    title: "HÃ´tel Particulier Marais",
    category: "RÃ©novation Historique",
    location: "Paris 4e",
    year: "2022",
    images: [
      `${import.meta.env.BASE_URL}assets/images/villa.webp`,
      `${import.meta.env.BASE_URL}assets/images/appartement.webp`,
      `${import.meta.env.BASE_URL}assets/images/architectural-detail.webp`
    ],
    details: "Restauration minutieuse d'un bÃ¢timent du XVIIe siÃ¨cle. Mise en conformitÃ© technique et structurelle.",
    metrics: { area: "650mÂ²", duration: "18 mois", budget: "2.8Mâ‚¬" },
    likes: "567",
    caption: "Restauration monument historique",
    annotation: "Patrimoine XVIIe"
  },
  {
    id: 4,
    title: "Villa Cap d'Antibes",
    category: "Architecture BalnÃ©aire",
    location: "Antibes",
    year: "2023",
    images: [
      `${import.meta.env.BASE_URL}assets/images/villa.webp`,
      `${import.meta.env.BASE_URL}assets/images/concrete-texture.webp`,
      `${import.meta.env.BASE_URL}assets/images/architectural-detail.webp`
    ],
    details: "Villa contemporaine avec vue mer. Utilisation de bÃ©ton banchÃ© et de larges surfaces vitrÃ©es.",
    metrics: { area: "450mÂ²", duration: "22 mois", budget: "3.5Mâ‚¬" },
    likes: "892",
    caption: "Transparence & Horizon",
    annotation: "Vue Mer 180Â°"
  },
  {
    id: 5,
    title: "Gymnase Polyvalent",
    category: "Sport & Public",
    location: "Lyon",
    year: "2022",
    images: [
      `${import.meta.env.BASE_URL}assets/images/tennis-club.webp`,
      `${import.meta.env.BASE_URL}assets/images/concrete-texture.webp`,
      `${import.meta.env.BASE_URL}assets/images/architectural-detail.webp`
    ],
    details: "Ã‰quipement sportif basse consommation. Charpente bois apparente et toiture vÃ©gÃ©talisÃ©e.",
    metrics: { area: "1800mÂ²", duration: "18 mois", budget: "4.2Mâ‚¬" },
    likes: "124",
    caption: "Ã‰quipement durable",
    annotation: "Structure Bois"
  },
  {
    id: 6,
    title: "Boutique Flagship",
    category: "Retail Luxe",
    location: "Paris 8e",
    year: "2023",
    images: [
      `${import.meta.env.BASE_URL}assets/images/boutique.webp`,
      `${import.meta.env.BASE_URL}assets/images/concrete-texture.webp`,
      `${import.meta.env.BASE_URL}assets/images/architectural-detail.webp`
    ],
    details: "Concept store innovant. Mise en scÃ¨ne thÃ©Ã¢trale des produits et parcours client immersif.",
    metrics: { area: "150mÂ²", duration: "5 mois", budget: "800kâ‚¬" },
    likes: "453",
    caption: "ExpÃ©rience immersive",
    annotation: "Retail Design"
  }
];

const Projets: React.FC = () => {
  const [activeMobileProject, setActiveMobileProject] = useState<number | null>(null);

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
            {"RÃ©alisations".split("").map((char, i) => (
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
            Une sÃ©lection de nos projets rÃ©cents
          </m.p>
        </div>

        {/* Featured Case Study Card - Layout Bento Ã‰clatÃ© */}
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
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold">Ã‰tude de Cas</span>
                </div>
                
                <h3 
                  id="case-study-title"
                  className="font-display text-4xl lg:text-5xl font-light text-brand-text leading-[1.1] mb-8"
                >
                  Tennis Club <br /> de Paris
                </h3>
                
                <div className="space-y-6 mb-12">
                  <p className="font-sans text-base font-light text-brand-muted leading-relaxed">
                    Modernisation d'un club mythique. Un dÃ©fi de haute prÃ©cision alliant performance thermique et conservation patrimoniale.
                  </p>
                  
                  <div className="flex flex-col gap-4 pt-6 border-t border-brand-accent-bg/10">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-brand-muted/60">Localisation</span>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-brand-text">Paris 16e</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-brand-muted/60">Surface</span>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-brand-text">5 200 mÂ²</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-brand-muted/60">Status</span>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-[10px] uppercase tracking-wider font-bold text-brand-text">LivrÃ©</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-accent-bg/30 p-6 border-l-2 border-brand-gold">
                <p className="font-sans text-[11px] font-light italic text-brand-muted leading-relaxed">
                  "Une exÃ©cution millimÃ©trÃ©e en site occupÃ©. ZÃ©ro interruption d'activitÃ© pour nos membres."
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
                    <p className="text-[10px] text-brand-muted tracking-widest uppercase">Video_Report_TCP.mp4</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                </div>
              </div>

              {/* Video Container with Technical Overlays */}
              <VideoPlayer 
                webmSrc={`${import.meta.env.BASE_URL}video-tennis.webm`}
                mp4Src={`${import.meta.env.BASE_URL}video-tennis.mp4`}
                poster={`${import.meta.env.BASE_URL}images/poster-video-tennis.webp`}
                title="AperÃ§u vidÃ©o du projet Tennis Club de Paris - RÃ©novation technique"
                containerClassName="flex-1 aspect-video md:aspect-auto md:min-h-[400px] group/video"
              />

              {/* Bottom Technical Grid */}
              <div className="grid grid-cols-3 divide-x divide-brand-accent-bg/10 border-t border-brand-accent-bg/10">
                {[
                  { label: "Isol. Thermique", value: "A+", icon: ShieldCheck },
                  { label: "Optim. LED", value: "-42%", icon: Zap },
                  { label: "Surfaces", value: "5.2k", icon: Ruler }
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
                title: 'Le DÃ©fi Technique',
                content: 'VÃ©tustÃ© critique des installations & Urgence thermique dâ€™un site de 5000mÂ² sans interruption de lâ€™activitÃ© sportive.',
                accent: 'border-l-4 border-brand-gold/20'
              },
              {
                num: '02',
                title: 'Lâ€™Intervention EVA',
                content: 'Pilotage minutieux en site occupÃ© : ZÃ©ro interruption dâ€™activitÃ© pour les 2500 membres du club. Optimisation radicale de lâ€™Ã©clairage LED.',
                accent: 'bg-[var(--color-brand-bg)] shadow-architect-hover z-20 scale-[1.02] border-t-4 border-brand-gold'
              },
              {
                num: '03',
                title: 'Impact & Performance',
                content: 'RÃ©duction immÃ©diate de 40% des coÃ»ts Ã©nergÃ©tiques et confort thermique dâ€™exception pour les membres du club.',
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
