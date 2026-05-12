# ARCHITECTURE - Eva Architecte

## 1. Stack Technique
- **Frontend :** React 18+ (Vite)
- **Langage :** TypeScript (Strict)
- **Styling :** Tailwind CSS v4
- **Animations :** Framer Motion
- **Icônes :** Lucide React

## 2. Structure du Projet
- `public/` : Favicon, manifest, sitemap, llm.txt, vidéos (Hero).
- `public/assets/fonts/` : Polices autohébergées (Inter, Outfit, JetBrains Mono).
- `public/images/` : Images au format WebP optimisé.
- `src/components/` : Composants UI isolés :
  - **Layout :** `Navbar.tsx`, `Footer.tsx`, `LegalOverlay.tsx`.
  - **Sections :** `Hero.tsx`, `Stats.tsx`, `Projets.tsx`, `References.tsx`, `Expertises.tsx`, `Approche.tsx`, `Testimonials.tsx`, `Communaute.tsx`.
  - **Modals/Pages :** `ConfirmationPage.tsx`, `NotFound.tsx`.
  - **Unitaires :** `ProjectCard.tsx`.
- `src/hooks/` : Logique métier isolée.
- `src/App.tsx` : Point d'entrée léger orchestrant les composants.
- `index.css` : Design system, tokens (Cahier Technique) et utilitaires globaux.

## 3. Design System (Cahier Technique)
L'architecture repose sur un design system "architectural" :
- **Variables :** `--color-brand-text`, `--color-brand-gold`, `--color-brand-muted`.
- **Typographie :** Dualité entre *Outfit* (titres élégants) et *Inter/Monospace* (données techniques).
- **Viseurs & Cotes :** Utilisation de micro-bordures dynamiques et de lignes de cotes avec ticks à 30°.
- **Blueprint Mode :** Grille millimétrée (`blueprint-grid-mm`) et filtres bleus techniques activés au survol.

## 4. Stratégie de Performance
- **Media :** Utilisation systématique du format WebP. Attributs `loading="lazy"` et `decoding="async"` sur toutes les images hors-ligne de flottaison.
- **Modularité :** Extraction de toutes les sections en composants indépendants pour limiter les re-renders et faciliter le Lazy Loading.
- **Animations :** Utilisation de `framer-motion` avec `whileInView` pour ne déclencher les calculs qu'au scroll.

## 5. Performance Budget & Resource Prioritization
- **LCP Budget :** < 2.5s sur 4G (Fast).
- **TBT Budget :** < 200ms.
- **Priorisation :**
  1. **High :** `Inter`, `Outfit`, `index.css`, `Hero` assets.
  2. **Medium :** `Projets` cards images (lazy-loaded).
  3. **Low :** `video-tennis.mp4` (delayed by `requestIdleCallback`), third-party scripts (delayed by `performance.ts`).
- **Media Strategy :** WebP pour les images, WebM/MP4 pour les vidéos. Preload sélectif dans `index.html`.
- **Server Optimization (Amen) :** Configuration `.htaccess` incluant Brotli/Gzip, cache long-terme (1 mois pour les vidéos, 1 an pour les polices/images) et headers `immutable`.

## 6. Accessibilité & SEO
- **A11Y :** Utilisation des rôles ARIA, `aria-label` sur les icônes, et gestion du focus sur le formulaire. Navigation clavier supportée sur les carrousels et boutons.
- **SEO :** Hiérarchie Hn stricte. Meta-tags et JSON-LD pour l'agence.
- **Sémantique :** Utilisation de `header`, `main`, `section`, `footer` pour une structure HTML5 pure.

## 7. Stratégie de Déploiement (GitHub Pages)
- **Base URL :** `/eva/` (configuré dans `vite.config.ts`).
- **Support SPA :** Utilisation de `public/404.html` pour rediriger les erreurs 404 vers `index.html` avec encodage du chemin.
- **Chemins :** Conversion de tous les liens critiques en chemins relatifs dans `index.html` et `manifest.json`.
- **Intégrité :** Fichier `public/.nojekyll` présent pour empêcher Jekyll de filtrer les assets.
