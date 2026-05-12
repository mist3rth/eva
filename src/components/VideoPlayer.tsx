import React, { useRef, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

// Extending Window interface for requestIdleCallback (missing in standard TS)
declare global {
  interface Window {
    requestIdleCallback: (
      callback: (deadline: IdleDeadline) => void,
      options?: { timeout: number }
    ) => number;
    cancelIdleCallback: (handle: number) => void;
  }
}

interface VideoPlayerProps {
  webmSrc: string;
  mp4Src: string;
  poster?: string;
  title?: string;
  className?: string;
  containerClassName?: string;
}

/**
 * Premium VideoPlayer component with lazy-loading via Intersection Observer.
 * Prevents unnecessary bandwidth usage by injecting sources only when visible.
 */
const VideoPlayer: React.FC<VideoPlayerProps> = ({
  webmSrc,
  mp4Src,
  poster,
  title,
  className,
  containerClassName,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const startVideo = () => {
      // Avoid multiple injections
      if (!video.querySelector('source')) {
        const webm = document.createElement('source');
        webm.src = webmSrc;
        webm.type = 'video/webm';
        
        const mp4 = document.createElement('source');
        mp4.src = mp4Src;
        mp4.type = 'video/mp4';
        
        video.appendChild(webm);
        video.appendChild(mp4);
        video.load();
      }

      // Performance optimization: Play only when main thread is idle
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(() => {
          video.play().catch(() => {
            // Error handled silently: typical for autoplay/muted videos
          });
        });
      } else {
        timeoutId = setTimeout(() => {
          video.play().catch(() => {});
        }, 1000);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startVideo();
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '100px' // Start loading slightly before it enters the viewport
      }
    );

    observer.observe(video);
    
    return () => {
      observer.disconnect();
      if (idleId !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [webmSrc, mp4Src]);

  return (
    <div className={cn("relative overflow-hidden bg-brand-accent-bg/5 group/video", containerClassName)}>
      {/* Corner Markers for architectural aesthetic */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/20 z-20 pointer-events-none" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/20 z-20 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white/20 z-20 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/20 z-20 pointer-events-none" />

      {/* Center Reticle */}
      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-20 pointer-events-none group-hover/video:opacity-40 transition-opacity duration-500">
        <div className="w-12 h-px bg-white" />
        <div className="h-12 w-px bg-white absolute" />
        <div className="w-6 h-6 border border-white rounded-full absolute" />
      </div>

      <video 
        ref={videoRef}
        loop 
        muted 
        playsInline
        preload="none"
        poster={poster}
        title={title}
        className={cn(
          "absolute inset-0 w-full h-full grayscale-[30%] group-hover/video:grayscale-0 transition-all duration-1000 object-cover opacity-60 group-hover/video:opacity-95",
          className
        )}
      >
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  );
};

export default VideoPlayer;

