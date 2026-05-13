# TODO - Eva Architecte

## 🎯 Objectifs Immédiats

- [x] Valider l'architecture avec l'utilisateur.
- [x] Corriger les bugs visuels et techniques mineurs.

## 📝 Stories d'Implémentation

### Story 1 : Refactorisation Full-Stack & Performance
- [x] Refactorisation Full-Stack :
  - [x] Nettoyer `App.tsx` et composants (audit des console.log, commentaires).
  - [x] Optimiser Intersection Observer dans `VideoPlayer.tsx` (cleanup functions).
  - [x] Sécuriser les variables d'environnement pour le déploiement.
- [x] Performance :
  - [x] Vérifier le lazy-loading de tous les composants lourds.
  - [x] Audit final des assets et formats (WebP/AVIF).
- [x] Vérifier les chemins de toutes les images (correction du bug `/src/assets/...` -> `/assets/...` si nécessaire).
- [x] S'assurer que toutes les images ont `loading="lazy"`.

### Story 3 : Accessibilité (A11Y)

- [x] Ajout des `aria-label` manquants sur les boutons sociaux et filtres.

### Story 4 : SEO & Sémantique

- [x] Injecter le JSON-LD pour Réda Lahlou / Eva Architecte.
- [x] Optimiser les meta-tags (Title, Description).
- [x] Vérifier la hiérarchie Hn (un seul H1).

### Story 5 : Polissage UI/UX & Formulaire de Confirmation

- [x] **Formulaire :** Ajouter une micro-animation d'entrée (checkmark dessiné en SVG).
- [x] **Formulaire :** Ajouter un fond texturé architectural à la page de confirmation.
- [x] **Footer :** Remplacer "Assurance Décennale Professionnelle" par "Privacy by design" (lien confidentialité).
- [x] **Footer :** Remplacer "Projets livrés sur mesure." par "Make by T.Thiesson" (lien externe avec icône).
- [x] **Vidéo :** Ajouter un attribut `poster` à la balise `<video>` Hero.

### Story 6 : Optimisations Mobiles

- [x] **Interaction :** Gérer les comportements hover sur mobile (clic pour simuler le hover).
- [x] **Réalisations :** Afficher l'indicateur "1/3" sur les 6 cartes en version mobile.
- [x] **CSS :** Utiliser `@media (hover: hover)` pour séparer les comportements.

### Story 7 : Mentions Légales & Confidentialité

- [x] **Navigation :** Fixer le scroll automatique lors du clic sur les liens du footer (rester à la position actuelle).
- [x] **UI :** Ajouter `cursor-pointer` sur l'icône de fermeture et le lien "Retour au site principal".

### Story 8 : Redesign "Cahier Technique" des Projets

- [x] **Extraction :** Créer `src/components/ProjectCard.tsx` et isoler la logique.
- [x] **UI :** Implémenter les viseurs (crosshairs) et lignes de côtes (cotes).
- [x] **Interaction :** Ajouter l'effet "Blueprint" et grille millimétrée au survol.
- [x] **Typo :** Appliquer la dualité Serif/Mono sur les titres et métriques.
- [x] **Responsive :** Vérifier l'adaptabilité du design technique sur mobile.

### Story 9 : Refactorisation de la section Expertises

- [x] Créer `src/components/Expertises.tsx` et isoler la logique.
- [x] Transférer les données et le JSX de la section Expertises.
- [x] Assurer la compatibilité avec Framer Motion.
- [x] Intégrer le composant dans `App.tsx`.
- [x] Vérifier la préservation des animations et du design technique.

### Story 10 : Refactorisation de la section Approche

- [x] Créer `src/components/Approche.tsx` et isoler la logique.
- [x] Transférer les données et le JSX de la section Approche.
- [x] Assurer la compatibilité avec Framer Motion (staggered animations).
- [x] Intégrer le composant dans `App.tsx`.
- [x] Vérifier la préservation de l'esthétique "Premium Technique".
- [x] **Fix :** Optimiser le swipe mobile (w-[85%] et calculs de scroll).

### Story 11 : Refactorisation de la section Hero

- [x] Créer `src/components/Hero.tsx` et isoler la logique.
- [x] Transférer les données et le JSX de la section Hero.
- [x] Gérer la transmission de la fonction `setActiveSection`.
- [x] Intégrer le composant dans `App.tsx`.
- [x] Vérifier la fluidité de la transition vers les projets.

### Story 12 : Refactorisation de la section Communauté

- [x] Créer `src/components/Communaute.tsx`.
- [x] Transférer la logique Instagram et Blueprint.
- [x] Intégrer dans `App.tsx`.

### Story 13 : Refactorisation de la section References

- [x] Créer `src/components/References.tsx`.
- [x] Transférer le marquee défilant et les données LOGOS.
- [x] Optimiser les performances (`will-change`).
- [x] Intégrer dans `App.tsx`.

### Story 14 : Refactorisation de la section Témoignages

- [x] Créer `src/components/Testimonials.tsx`.
- [x] Transférer les données `TESTIMONIALS` et le JSX.
- [x] Gérer l'état `testimonialIndex` localement.
- [x] Intégrer dans `App.tsx`.
- [x] Vérifier la cohérence du design et des animations.

### Story 15 : Refactorisation de la section Stats & Nettoyage App.tsx

- [x] Créer `src/components/Stats.tsx`.
- [x] Créer `src/components/StatsBar.tsx`.
- [x] Transférer la section "Matière & Expertise" vers `Stats.tsx` et `StatsBar.tsx`.
- [x] Isoler le `Navbar` dans `src/components/Navbar.tsx`.
- [x] Nettoyer `App.tsx` (suppression des composants internes, fonctions inutilisées).
- [x] Corriger les erreurs de syntaxe (balises fermantes orphelines).
- [x] Synchroniser les liens de navigation entre `App.tsx` et `Navbar.tsx`.

### Story 16 : Optimisation Performance (Pre-fetching)

- [x] Implémenter la logique de `preloadComponent` dans `Navbar.tsx`.
- [x] Ajouter `onMouseEnter` sur les liens de navigation pour déclencher l'import dynamique.
- [x] Vérifier la cohérence des chemins avec `App.tsx`.

### Story 17 : Refactorisation Logic & Hooks

- [x] Créer le hook personnalisé `src/hooks/useActiveSection.ts`.
- [x] Déporter la logique `IntersectionObserver` et `MutationObserver`.
- [x] Nettoyer `App.tsx` du code mort (simulation 404, anciens useEffects).
- [x] Harmoniser les props entre `App.tsx` et `Hero.tsx`.

### Story 18 : Fiabilité & Gestion des Erreurs

- [x] Créer le composant `src/components/ErrorBoundary.tsx`.
- [x] Implémenter l'interface de secours (Fallback UI) premium.
- [x] Envelopper chaque section `Suspense` dans `App.tsx` avec un `ErrorBoundary`.
- [x] Gérer les erreurs de type `ChunkLoadError` via rechargement.

### Story 19 : Skeleton Screens Premium (SectionLoader)

- [x] Transformer le `SectionLoader` en véritable Skeleton Screen technique.
- [x] Implémenter les types `grid` et `text` pour matcher les sections réelles.
- [x] Ajouter les animations de chargement (pulse).
- [x] Ajouter des détails architecturaux (cotes, viseurs) dans les skeletons.

### Story 20 : Ergonomie Mobile & Réduction du Scroll

- [x] Transformer la section Expertises en accordéons fluides sur mobile.
- [x] Transformer les piliers de l'Approche en carousel tactile sur mobile.
- [x] Implémenter des indicateurs de progression minimalistes (dots) pour le slider.
- [x] Utiliser Framer Motion pour des transitions fluides et premium.
- [x] **Fix :** Résoudre l'erreur `ReferenceError: AnimatePresence is not defined` dans `Expertises.tsx`.

### Story 21 : Navigation Mobile & Feedback Contextuel

- [x] Ajouter un indicateur de section active (Sticky) dans la Navbar mobile.
- [x] Styliser les liens du menu hamburger pour refléter la section active (doré #C9A96E + point indicateur).
- [x] Transformer le menu mobile en overlay plein écran avec détails architecturaux.
- [x] Garantir un feedback visuel immédiat et une fermeture fluide lors du clic sur un lien mobile.
- [x] **Fix :** Verrouillage du scroll (`overflow-hidden`) et maintien de la visibilité de la Navbar quand le menu est ouvert.
- [x] **Fix :** Synchronisation totale Navigation/Scroll via `IntersectionObserver` optimisé (`rootMargin` & `threshold`).
- [x] **Fix :** Mapping des sections (ex: 'Références' -> 'Réalisations') pour une cohérence totale des rubriques actives.

### Story 25 : Optimisation Performance & CLS (Vidéo Tennis Club)
- [x] **Vidéo :** Zero-Weight Lazy Loading (injection dynamique des sources au scroll).
- [x] **CLS :** Poster WebP 20px flouté pour réserver l'espace sans poids.
- [x] **Main Thread :** `requestIdleCallback` + `IntersectionObserver` pour différer l'exécution.
- [x] **Scripts :** Déporter les scripts non-critiques via `performance.ts`.
- [x] **Server (Amen) :** Configuration `.htaccess` optimisée (Expires 1 mois, Immutable).
- [x] **Preloads :** Ajout des preloads critiques (Fonts, Hero) dans `index.html`.

## 🚀 Story 28 : Optimisation Mobile & Safe Areas
- [x] Ajouter `viewport-fit=cover` dans `index.html`.
- [x] Gérer les `env(safe-area-inset-top)` dans la `Navbar`.
- [x] Ajuster les éléments flottants (`App.tsx`) avec `env(safe-area-inset-bottom)`.
- [x] Optimiser l'overlay du menu mobile pour les écrans avec encoche.

## ✅ Terminées

- [x] Analyse initiale du projet.
- [x] Création du PRD.
- [x] Création de ARCHITECTURE.md.
- [x] Textes Mentions Légales & Confidentialité (Privacy by design).
- [x] Redesign complet "Cahier Technique" (ProjectCard.tsx).
- [x] Passage en grille 3x3 pour les réalisations.
- [x] Nettoyage des références PROJECT_REF.
- [x] Alignement Titre/Localisation au-dessus des légendes.
- [x] Refactorisation complète des sections en composants isolés (Hero, Stats, Projets, Expertises, Approche, Témoignages, Communauté, ContactForm, Footer).
- [x] Nettoyer et optimisation de `App.tsx`.
- [x] Optimisation de la performance via Pre-fetching au survol dans la Navbar.
- [x] Extraction de la détection de section dans le hook `useActiveSection`.
- [x] Implémentation de `ErrorBoundary` pour sécuriser les sections lazy-loadées.
- [x] Transformation du `SectionLoader` en Skeleton Screen technique.
- [x] Optimisation de la navigation mobile (Menu plein écran & Indicateur Sticky).
- [x] Analyse stratégique CRO (Audit UX, Behavioral, Luxury, Copywriting).

## 🚀 Story 22 : Implémentation des optimisations CRO & UX Finition

- [x] **Mobile :** Ajouter un CTA "Contact" permanent (FAB ou Sticky dans la Navbar mobile).
- [x] **Social Proof :** ~~Intégrer un bandeau de logos "Partenaires & Labels de Qualité" (RGE, Architectes de France)~~ (Supprimé à la demande du client).
- [x] **Friction :** Simplifier le formulaire de contact avec des sélecteurs visuels (Visual Selectors).
- [x] **Engagement :** ~~Ajouter des liens "Étude de cas complète" sur les cartes du catalogue projets~~ (Supprimé à la demande du client).
- [x] **Trust :** Ajouter une baseline de réassurance sous le titre principal du Hero.
- [x] **Navigation Mobile :** Aligner l'indicateur de section à gauche pour éviter le chevauchement avec le bouton Contact (Fix 375px).
- [x] **Sticky CTA Mobile :** Masquer le bouton "Démarrer un projet" à l'arrivée sur la section Contact ou bas de Communauté.
- [x] **Spacing :** Réduire l'espace excessif entre les sections Références et Expertises.
- [x] **Footer :** Clarifier les réseaux sociaux (Ajout Instagram, suppression texte LinkedIn).
- [x] **Micro-interactions :** Ajouter `cursor-pointer` sur le bouton Scroll Top et les types de projet.
- [x] **Accessibilité :** Ajout des `aria-label` manquants sur les éléments interactifs.

## 🚀 Story 23 : Validation Qualité & SEO Final (Audit Outils)

- [x] Lancer un audit SEO (Meta, Hn, Sitemap).
- [x] Lancer un audit A11Y (Support clavier, Contrastes, Aria).
- [x] Lancer un audit Performance (Lighthouse/WebVitals).
- [x] Optimiser le Critical Rendering Path (Preload, Inline CSS).
- [x] Réduire le TBT en optimisant les animations Framer Motion.

## 🚀 Story 24 : Autohébergement des Polices & Refinement Hero

- [x] Télécharger et héberger localement les variantes Inter, Outfit, JetBrains Mono et Mrs Saint Delafield.
- [x] Configurer les règles `@font-face` dans `src/index.css` pour supprimer les dépendances Google Fonts.
- [x] Nettoyer `index.html` des preconnects et stylesheets externes.
- [x] Optimiser le preload pour la police principale (Inter-Variable).
- [x] Réintégrer l'image Hero statique prestigieuse et mettre à jour le PRD.

## 🚀 Story 26 : Cohérence & Nettoyage Post-Nav

- [x] Retirer le bouton "Contact" de la Navbar principale (demande client).
- [x] Retirer "Contact" de la liste des liens de navigation dans le Footer.
- [x] Désactiver la détection de la section "Contact" dans la Navbar mobile pour éviter l'affichage résiduel.
- [x] Maintenir les CTAs contextuels (Footer, Approche) et le Floating CTA mobile pour la conversion.

## 🚀 Story 27 : Finalisation & Déploiement (GitHub Pages)

- [x] Configurer le `base path` à `/eva/` dans `vite.config.ts`.
- [x] Implémenter `404.html` pour le support SPA.
- [x] Ajouter `.nojekyll` pour l'intégrité des dossiers.
- [x] Vérifier la résolution des chemins d'assets (relatifs).
- [x] Valider le build final (`npm run build`).

## 🚀 Story 29 : Finalisation Interactions Mobiles
- [x] **Expérience tactile :** Ajout de `touch-action: pan-y` sur tous les sliders (Approche, Projets, Témoignages) pour garantir le scroll vertical.
- [x] **Feedback :** Optimisation des états hover pour qu'ils ne se déclenchent pas accidentellement sur mobile.
- [x] **Cohérence :** Vérification des ancres de navigation et des offsets sur tous les devices.

## 🚀 Story 30 : SEO & Excellence Sémantique
- [x] **Sémantique :** Utilisation des balises `blockquote` pour les témoignages.
- [x] **Assets :** Génération et configuration d'une image OG (`og-image.jpg`) premium.
- [x] **Audit :** Validation finale de la structure Hn et des attributs Alt descriptifs.

## 🚀 Story 31 : Déploiement & Mise en Ligne
- [x] Configuration des scripts de déploiement dans `package.json`.
- [x] Build de production final validé.
- [x] Déploiement réussi sur GitHub Pages (mist3rth.github.io/eva/).
