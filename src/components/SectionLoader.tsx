import React from 'react';

interface SectionLoaderProps {
  height?: string;
  type?: 'grid' | 'text' | 'default';
}

/**
 * SectionLoader (Skeleton Screen)
 * Remplace le spinner classique par une structure mimant le contenu réel
 * pour un rendu plus premium et une réduction du CLS.
 */
const SectionLoader: React.FC<SectionLoaderProps> = ({ height = '400px', type = 'default' }) => {
  return (
    <div 
      style={{ height }}
      className="w-full bg-brand-bg px-6 py-24 flex flex-col items-center overflow-hidden border-t border-brand-accent-bg/10 relative"
    >
      {/* Background Grid - Very subtle */}
      <div className="absolute inset-0 blueprint-grid-mm opacity-[0.03] pointer-events-none" />
      
      {/* Absolute Technical Marks */}
      <div className="absolute top-8 left-8 flex flex-col gap-1 opacity-20 pointer-events-none">
        <div className="w-10 h-px bg-brand-gold" />
        <div className="text-[6px] font-mono text-brand-gold uppercase tracking-tighter">REF_DOC:SKEL_01</div>
        <div className="text-[5px] font-mono text-brand-gold/60">REV: 2.4.0_FINAL</div>
      </div>

      {/* Vertical Section Dimension Line (Full height) */}
      <div className="absolute right-4 top-12 bottom-12 w-px bg-brand-gold/10 pointer-events-none hidden lg:block">
        <div className="absolute top-0 left-0 -translate-x-1/2 w-2 h-px bg-brand-gold/40 rotate-[45deg]" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 w-2 h-px bg-brand-gold/40 rotate-[45deg]" />
        <div className="absolute top-1/2 -right-8 -translate-y-1/2 -rotate-90 text-[6px] font-mono text-brand-gold/30 tracking-[0.3em]">
          SEC_HEIGHT: {height}
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto h-full flex flex-col gap-16 relative z-10">
        {/* En-tête de section simulé */}
        <div className="flex flex-col items-center gap-4 relative">
          <div className="w-24 h-[1px] bg-brand-gold/20 animate-pulse" />
          <div className="w-48 h-3 bg-brand-text/5 animate-pulse rounded-full" />
          
          {/* Decorative architectural marks */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex items-center gap-2">
             <div className="w-8 h-px bg-brand-gold/10" />
             <div className="text-[7px] font-mono text-brand-gold/20">0.00</div>
          </div>
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex items-center gap-2">
             <div className="text-[7px] font-mono text-brand-gold/20">MAX</div>
             <div className="w-8 h-px bg-brand-gold/10" />
          </div>
        </div>
        
        {/* Contenu Grid (Projets, Références) */}
        {type === 'grid' && (
          <div className="relative">
            {/* Horizontal dimension line between columns */}
            <div className="absolute -top-12 left-0 right-0 h-px bg-brand-gold/5 hidden md:block">
               <div className="absolute top-0 left-0 w-px h-2 bg-brand-gold/20" />
               <div className="absolute top-0 right-0 w-px h-2 bg-brand-gold/20" />
               <div className="absolute top-0 left-1/3 w-px h-2 bg-brand-gold/10" />
               <div className="absolute top-0 left-2/3 w-px h-2 bg-brand-gold/10" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-bg px-2 text-[6px] font-mono text-brand-gold/20 tracking-widest uppercase">
                  3_COL_GRID_SYSTEM
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 flex-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col gap-6 relative group">
                  {/* Simulated Crosshairs & Coordinates */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-brand-gold/10 flex items-start justify-start p-1">
                     <div className="text-[5px] font-mono text-brand-gold/10 scale-75 origin-top-left">X:{i*120}</div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-brand-gold/10 flex items-end justify-end p-1">
                     <div className="text-[5px] font-mono text-brand-gold/10 scale-75 origin-bottom-right">Y:VAR</div>
                  </div>
                  
                  <div className="aspect-[16/10] w-full bg-brand-text/5 animate-pulse rounded-sm relative overflow-hidden">
                    {/* Diagonal line to simulate architectural draft */}
                    <div className="absolute top-0 left-0 w-[141%] h-px bg-brand-gold/5 rotate-[32deg] origin-top-left" />
                    
                    {/* Centered target */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                       <div className="w-10 h-10 border border-brand-gold rounded-full flex items-center justify-center">
                         <div className="w-px h-12 bg-brand-gold" />
                         <div className="h-px w-12 bg-brand-gold absolute" />
                       </div>
                    </div>

                    {/* Corner Angle Marker */}
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-brand-gold/20 rounded-bl-[1px]" />
                  </div>
                  <div className="space-y-3 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3/4 h-2 bg-brand-text/5 animate-pulse rounded-full" />
                      <div className="w-4 h-[1px] bg-brand-gold/10" />
                    </div>
                    <div className="w-1/2 h-2 bg-brand-text/5 animate-pulse rounded-full opacity-40" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contenu Textuel (Expertises, Témoignages) */}
        {type === 'text' && (
          <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full flex-1 relative">
            {/* Top limit line */}
            <div className="absolute -top-8 left-0 right-0 h-px bg-brand-gold/5">
               <div className="absolute left-0 top-0 -translate-y-1/2 w-px h-3 bg-brand-gold/20" />
               <div className="absolute right-0 top-0 -translate-y-1/2 w-px h-3 bg-brand-gold/20" />
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-bg px-2 text-[5px] font-mono text-brand-gold/10 tracking-widest">CONTENT_LIMIT_4XL</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2].map((group) => (
                <div key={group} className="space-y-6 relative p-6 border border-brand-accent-bg/20 rounded-sm">
                  {/* Dimension marker with ticks */}
                  <div className="absolute top-0 left-0 w-px h-full bg-brand-gold/10">
                    <div className="absolute top-0 left-0 -translate-x-1/2 w-2 h-px bg-brand-gold/40 rotate-[45deg]" />
                    <div className="absolute bottom-0 left-0 -translate-x-1/2 w-2 h-px bg-brand-gold/40 rotate-[45deg]" />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-text/5 animate-pulse flex items-center justify-center">
                       <div className="w-6 h-6 border border-brand-gold/5 rounded-full" />
                    </div>
                    <div className="flex flex-col">
                      <div className="w-24 h-px bg-brand-gold/10" />
                      <div className="text-[5px] font-mono text-brand-gold/20 mt-1 uppercase">comp_id:00{group}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-full h-2 bg-brand-text/5 animate-pulse rounded-full" />
                    <div className="w-full h-2 bg-brand-text/5 animate-pulse rounded-full" />
                    <div className="w-4/5 h-2 bg-brand-text/5 animate-pulse rounded-full" />
                    <div className="w-3/5 h-2 bg-brand-text/5 animate-pulse rounded-full opacity-50" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fallback par défaut */}
        {type === 'default' && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 relative">
            <div className="w-64 h-2 bg-brand-text/5 animate-pulse rounded-full" />
            <div className="w-48 h-2 bg-brand-text/5 animate-pulse rounded-full opacity-50" />
            
            {/* Center target mark with technical label */}
            <div className="absolute w-12 h-12 border border-brand-gold/5 rounded-full flex items-center justify-center">
              <div className="w-px h-24 bg-brand-gold/5" />
              <div className="h-px w-24 bg-brand-gold/5 absolute" />
              <div className="absolute top-14 text-[5px] font-mono text-brand-gold/20 tracking-[0.5em] whitespace-nowrap">CENTER_ALIGN_AXIS</div>
            </div>

            {/* Radius indicator */}
            <div className="absolute top-1/2 left-1/2 w-12 h-px bg-brand-gold/10 -translate-y-1/2 origin-left rotate-45 pointer-events-none">
               <div className="absolute right-0 top-0 -translate-y-1/2 w-1 h-1 rounded-full bg-brand-gold/30" />
               <div className="absolute -right-6 top-0 -translate-y-1/2 text-[4px] font-mono text-brand-gold/20">R:24.0</div>
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom Scale Mark */}
      <div className="absolute bottom-8 right-8 flex flex-col items-end gap-1 opacity-20 pointer-events-none">
        <div className="flex items-end h-4 gap-1">
          <div className="w-px h-full bg-brand-gold" />
          <div className="w-px h-1/2 bg-brand-gold" />
          <div className="w-px h-full bg-brand-gold" />
          <div className="w-px h-1/2 bg-brand-gold" />
          <div className="w-px h-full bg-brand-gold" />
        </div>
        <div className="text-[6px] font-mono text-brand-gold tracking-widest uppercase">Scale 1:50</div>
      </div>
    </div>
  );
};

export default SectionLoader;
