import React from 'react';
import { motion } from 'motion/react';

const Stats: React.FC = () => {
  return (
    <section className="pb-24 md:pb-40 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[5vw]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-brand-text mb-10 leading-[1.1]">
              Bâtir l'exception, <br className="hidden md:block"/> orchestrer la rigueur.
            </h2>
            <p className="font-sans font-light text-brand-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Basé à Paris, <span className="text-brand-text font-medium">EVA Maître d'œuvre</span> ne se contente pas de dessiner des espaces : nous les réalisons. De l'analyse technique à la réception de chantier, nous marions l'exigence du terrain à l'émotion architecturale. Chaque projet est une réponse structurelle aux défis de votre époque.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
