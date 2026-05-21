import React, { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  images: string[];
  details: string;
  metrics: {
    area: string;
    duration: string;
    budget: string;
  };
  likes: string;
  caption: string;
  annotation: string;
}

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onToggle: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive, onToggle }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Mise Ã  jour dynamique des contraintes de drag lors du redimensionnement
  useEffect(() => {
    const updateConstraints = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        setDragConstraints({
          left: -((project.images.length - 1) * containerWidth),
          right: 0
        });
      }
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, [project.images.length]);

  return (
    <m.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full group relative"
    >
      {/* --- Technical Crosshairs (Corner Markers) --- */}
      <div className="viseur-corner viseur-top-left" />
      <div className="viseur-corner viseur-top-right" />
      <div className="viseur-corner viseur-bottom-left" />
      <div className="viseur-corner viseur-bottom-right" />
 
       {/* --- Main Card Container --- */}
      <article 
        className="bg-[var(--color-brand-bg)] border border-brand-accent-bg/30 overflow-hidden shadow-sm hover:shadow-architect-hover transition-all duration-700 relative"
        aria-label={`Projet : ${project.title}`}
      >
         
         {/* --- Image Section (16/9) --- */}
        <div className="relative aspect-video overflow-hidden bg-[var(--color-brand-accent-bg)]" aria-hidden="true">
           {/* Blueprint Overlay (Millimetric Grid) */}
          <div className="blueprint-overlay" />
 
           {/* Carousel (Framer Motion Slider pour Ã©viter le blocage du scroll mobile) */}
           <div className="absolute inset-0 overflow-hidden bg-[var(--color-brand-accent-bg)]" ref={carouselRef}>
             <m.div 
               drag="x"
               dragDirectionLock
               dragConstraints={dragConstraints}
               dragElastic={0.1}
               dragListener={true}
               dragMomentum={true}
               dragTransition={{ power: 0.2, timeConstant: 200 }}
               onDragStart={() => setIsDragging(true)}
               onDragEnd={(_, info) => {
                 setIsDragging(false);
                 const threshold = 50;
                 if (info.offset.x < -threshold && carouselIndex < project.images.length - 1) {
                   setCarouselIndex(prev => prev + 1);
                 } else if (info.offset.x > threshold && carouselIndex > 0) {
                   setCarouselIndex(prev => prev - 1);
                 }
               }}
               animate={{ x: `-${carouselIndex * 100}%` }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
               className="flex h-full cursor-grab active:cursor-grabbing"
               style={{ touchAction: isDragging ? 'none' : 'pan-y' }}
             >
               {project.images.map((img, idx) => (
                 <div 
                   key={idx} 
                   className="min-w-full h-full relative overflow-hidden flex-shrink-0"
                   style={{ touchAction: 'pan-y' }}
                 >
                   <img 
                     src={img}
                     alt={`${project.title} - Vue ${idx + 1}`}
                     className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out select-none"
                     loading="lazy"
                     draggable={false}
                   />
                 </div>
               ))}
             </m.div>
           </div>
 
           {/* Dimension Lines with Ticks (Hover Only) */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            <div className="dimension-line top-4 left-4 right-4" />
            <div className="dimension-line bottom-4 left-4 right-4" />
          </div>
 
           {/* Carousel Counter (1/3) */}
           <div className="absolute bottom-4 right-4 z-20">
            <div className="bg-brand-text/80 backdrop-blur-sm px-2 py-1 text-white font-mono text-[10px] tracking-widest flex items-center gap-2 border border-white/10" aria-label={`Image ${carouselIndex + 1} sur ${project.images.length}`}>
               <span className="opacity-60">IMAGE_SEQ</span>
               <span className="font-bold">{carouselIndex + 1}/{project.images.length}</span>
             </div>
           </div>
         </div>
 
         {/* --- Cartouche Bar (Year & Technical Note) --- */}
        <div className="flex items-center justify-between px-6 py-2 bg-brand-accent-bg/20 border-b border-brand-accent-bg/40 text-tech">
           <div className="flex items-center gap-2">
             <span className="text-brand-gold">YEAR_</span>
             <span className="text-brand-text font-bold">{project.year}</span>
           </div>
           <div className="flex items-center gap-2">
             <span className="text-brand-gold">PHASE_</span>
             <span className="text-brand-text font-bold">LIVRÃ‰</span>
           </div>
         </div>
 
         {/* --- Content Section --- */}
         <div className="p-6 relative">
           <div className="mb-6">
             <div className="mb-4">
               <h3 className="font-display text-xl md:text-2xl font-light text-brand-text mb-2 tracking-tight group-hover:text-brand-gold transition-colors duration-500 leading-tight">
                 {project.title} <span className="text-sm font-sans uppercase tracking-[0.1em] text-brand-muted block mt-1">{project.location}</span>
               </h3>
               <div className="w-12 h-0.5 bg-brand-gold/30 group-hover:w-full transition-all duration-700" />
             </div>
             
             <p className="text-[12px] font-sans text-brand-text font-semibold uppercase tracking-tight mb-4">
               {project.category}
             </p>
           </div>
 
           {/* Metrics Grid (Cahier Technique Style) */}
           <div className="grid grid-cols-3 border-t border-b border-brand-accent-bg/40 divide-x divide-brand-accent-bg/40 mb-6 bg-[var(--color-brand-accent-bg)]/5">
             {[
               { label: 'Surface', value: project.metrics.area },
               { label: 'DurÃ©e', value: project.metrics.duration },
               { label: 'Budget', value: project.metrics.budget }
             ].map((m, i) => (
               <div key={i} className="py-4 px-2 flex flex-col items-center group/metric">
                 <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-brand-muted mb-1 group-hover/metric:text-brand-gold transition-colors">
                   {m.label}
                 </span>
                 <span className="text-[14px] font-mono font-bold text-brand-text tracking-tighter">
                   {m.value}
                 </span>
               </div>
             ))}
           </div>
 
           <button 
            type="button"
            className="w-full text-left cursor-pointer group/readmore focus-visible:ring-2 focus-visible:ring-brand-gold outline-none"
             onClick={onToggle}
            aria-expanded={isActive}
            aria-label={isActive ? "Masquer les dÃ©tails du projet" : "Voir les dÃ©tails du projet"}
            aria-controls={`details-${project.id}`}
           >
             <p className="text-sm font-light text-brand-muted leading-relaxed line-clamp-2 group-hover/readmore:text-brand-text transition-colors duration-300">
               {project.caption}
             </p>
             
             <AnimatePresence>
               {isActive && (
                 <m.div 
                  id={`details-${project.id}`}
                   initial={{ height: 0, opacity: 0 }}
                   animate={{ height: "auto", opacity: 1 }}
                   exit={{ height: 0, opacity: 0 }}
                   transition={{ duration: 0.4, ease: "circOut" }}
                   className="overflow-hidden"
                 >
                   <p className="text-sm text-brand-muted mt-4 font-light leading-relaxed italic border-l-2 border-brand-gold/20 pl-4 py-1">
                     {project.details}
                   </p>
                 </m.div>
               )}
             </AnimatePresence>
 
             <div className="mt-6 flex items-center justify-between">
               <div className="flex items-center gap-6">
                 <span className="text-[8px] font-mono text-brand-muted uppercase tracking-widest border border-brand-accent-bg px-2 py-0.5">
                   {isActive ? 'CLOSE_X' : 'OPEN_DETAILS'}
                 </span>
               </div>
 
               <div className="flex items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
                 <span className="text-[7px] font-mono text-brand-gold uppercase tracking-widest">Blueprint_Active</span>
               </div>
             </div>
           </button>
         </div>
      </article>
    </m.div>
  );
};

export default ProjectCard;
