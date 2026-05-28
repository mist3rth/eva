import React, { useRef } from 'react';
import { m, useScroll, useTransform } from 'motion/react';

const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Observer le défilement de cette section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculer des vitesses de déplacement vertical (y) différentes pour un effet parallaxe épuré
  const yTitle = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yParagraph = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section id="stats-text" ref={containerRef} className="pt-10 pb-24 md:pb-40 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[5vw]">
        <div className="max-w-4xl mx-auto text-center">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <m.h2 
              style={{ y: yTitle }}
              className="font-display text-4xl md:text-6xl font-light tracking-tight text-brand-text mb-10 leading-[1.1]"
            >
              Bâtir l'exception, <br className="hidden md:block"/> orchestrer la rigueur.
            </m.h2>
            <m.p 
              style={{ y: yParagraph }}
              className="font-sans font-light text-brand-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Basé à Paris, <span className="text-brand-text font-medium">EVA Maître d'œuvre</span> ne se contente pas de dessiner des espaces : nous les réalisons. De l'analyse technique à la réception de chantier, nous marions l'exigence du terrain à l'émotion architecturale. Chaque projet est une réponse structurelle aux défis de votre époque.
            </m.p>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
