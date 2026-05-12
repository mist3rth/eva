import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour détecter la section active via IntersectionObserver.
 * Gère également les changements du DOM via MutationObserver pour les composants lazy-loadés.
 * 
 * @param sectionIds Liste des IDs de sections à observer
 * @returns [activeSection, setActiveSection] La section active et son setter
 */
export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-85px 0px -75% 0px', // Déclenchement dès que le haut de la section approche de la Nav
      threshold: 0, // Plus réactif pour les petites sections
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // On cherche la section qui a la plus grande part d'intersection dans notre zone cible
      const intersecting = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (intersecting.length > 0) {
        setActiveSection(intersecting[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    // Observation initiale
    observeElements();

    // Comme les composants sont lazy-loadés, on observe le conteneur principal
    // pour ré-attacher l'observer aux sections nouvellement montées
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mutationObserver.observe(mainElement, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [sectionIds]);

  return [activeSection, setActiveSection] as const;
};
