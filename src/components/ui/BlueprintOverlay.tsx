import React from 'react';
import { m } from 'motion/react';
import { cn } from '../../lib/utils';

interface BlueprintOverlayProps {
  isActive?: boolean;
  scale?: string;
  reference?: string;
  measurement?: string;
}

export function BlueprintOverlay({ 
  isActive, 
  scale = "1:50", 
  reference = "EVA-SOC-01", 
  measurement = "12.45m" 
}: BlueprintOverlayProps) {
  return (
    <svg 
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 z-10",
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      {/* Dynamic technical lines */}
      <m.path 
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        d="M5,5 L95,5 M5,95 L95,95 M5,5 L5,95 M95,5 L95,95" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.15" 
        strokeDasharray="2 1" 
        className="text-brand-gold/60" 
      />
      <m.path 
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        d="M0,30 L100,30 M0,70 L100,70 M30,0 L30,100 M70,0 L70,100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.05" 
        className="text-brand-gold/20" 
      />
      
      {/* Corner markers */}
      <circle cx="5" cy="5" r="0.5" fill="currentColor" className="text-brand-gold" />
      <circle cx="95" cy="5" r="0.5" fill="currentColor" className="text-brand-gold" />
      <circle cx="5" cy="95" r="0.5" fill="currentColor" className="text-brand-gold" />
      <circle cx="95" cy="95" r="0.5" fill="currentColor" className="text-brand-gold" />

      {/* Technical text labels */}
      <text x="7" y="12" fontSize="1.5" className="fill-brand-gold/80 font-sans uppercase tracking-[0.2em]">Scale {scale}</text>
      <text x="72" y="92" fontSize="1.5" className="fill-brand-gold/80 font-sans uppercase tracking-[0.2em]">{reference}</text>
      
      {/* Measurement lines */}
      <line x1="30" y1="25" x2="70" y2="25" stroke="currentColor" strokeWidth="0.1" className="text-brand-gold/40" />
      <text x="45" y="23" fontSize="1.2" className="fill-brand-gold/60 font-sans uppercase tracking-tighter">{measurement}</text>
    </svg>
  );
}
