import React from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle' | 'body' | 'caption';
  children: React.ReactNode;
  className?: string;
}

export function Typography({ variant = 'body', children, className }: TypographyProps) {
  switch (variant) {
    case 'h1':
      return <h1 className={cn("font-display text-4xl md:text-8xl font-light tracking-tight leading-tight", className)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn("font-display text-4xl md:text-6xl font-light tracking-tight leading-tight", className)}>{children}</h2>;
    case 'h3':
      return <h3 className={cn("font-display text-2xl md:text-4xl font-light tracking-tight", className)}>{children}</h3>;
    case 'h4':
      return <h4 className={cn("font-display text-xl md:text-2xl font-light tracking-tight", className)}>{children}</h4>;
    case 'subtitle':
      return <p className={cn("font-sans text-xs md:text-sm uppercase tracking-[0.3em] font-medium", className)}>{children}</p>;
    case 'caption':
      return <span className={cn("text-[10px] uppercase tracking-[0.3em] font-bold", className)}>{children}</span>;
    case 'body':
    default:
      return <p className={cn("font-sans text-base font-light leading-relaxed", className)}>{children}</p>;
  }
}
