import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glow';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  if (variant === 'glow') {
    return (
      <button 
        className={cn(
          "glow-button px-8 py-4 border border-white/30 text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-brand-text transition-all duration-500 rounded-sm cursor-pointer group",
          className
        )}
        {...props}
      >
        {children}
        <svg className="glow-container">
          <rect pathLength="100" strokeLinecap="round" className="glow-blur"></rect>
          <rect pathLength="100" strokeLinecap="round" className="glow-line"></rect>
        </svg>
      </button>
    );
  }

  return (
    <button 
      className={cn(
        "w-full md:w-auto px-6 py-4 md:px-20 md:py-6 text-[11px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-black transition-all duration-500 shadow-3xl group relative overflow-hidden cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variant === 'primary' && "bg-brand-gold text-white hover:bg-white hover:text-brand-gold",
        variant === 'secondary' && "bg-white/5 border border-white/10 text-white hover:border-brand-gold/40 hover:bg-white/10",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
