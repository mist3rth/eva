# PRD - Eva Architecte (Maître d'œuvre)

## 1. Vision du Produit
Le site Eva Architecte est la vitrine numérique de Réda Lahlou, maître d'œuvre d'exception avec 30 ans d'expérience. L'objectif est de projeter une image de prestige, de rigueur technique et d'excellence opérationnelle pour attirer une clientèle haut de gamme (luxe, institutionnel, résidentiel d'exception).

**Positionnement :** Luxe, Technique, Rigueur, Sérénité.

## 2. Personas
- **Le Promoteur Luxe :** Recherche un partenaire fiable capable de gérer des budgets de plusieurs millions d'euros avec une précision millimétrée.
- **Le Particulier Fortuné :** Souhaite rénover ou construire une demeure d'exception et cherche une figure d'autorité capable de rassurer sur les délais et la qualité.
- **Le Responsable Immobilier Corporate :** A besoin d'un maître d'œuvre pour des sièges sociaux ou des espaces retail de luxe, exigeant une conformité technique totale.

## 3. Fonctionnalités Clés
- **Hero Immersion :** Image plein écran majestueuse (buildings) projetant immédiatement l'autorité et le prestige technique.
- **Étude de Cas Vidéo :** Intégration d'un reportage vidéo immersif (Tennis Club de Paris) pour démontrer la réalité terrain et la complexité des chantiers.
- **Portfolio "Cahier Technique" :** Présentation des 6 projets phares avec une esthétique inspirée des plans d'architecte (viseurs, lignes de côtes, typographie monospace).
- **Vue Détallée des Projets (Modal) :** Affichage immersif des détails techniques, métriques et galeries d'images pour chaque réalisation au clic.

- **Approche & Expertise :** Section détaillée sur la méthodologie de Réda Lahlou et ses 3 piliers (Vision, Rigueur, Sur-mesure).
- **Social Proof :** Témoignages clients premium et marquee des références prestigieuses (600+ chantiers).
- **Atelier (Communauté) :** Aperçu des coulisses et de l'actualité de l'agence pour humaniser l'expertise.
- **Conversion Haute Performance :** Formulaire de contact qualifiant avec validation en temps réel.

## 4. Exigences Techniques (BMAD Enforced)
- **Framework :** React + TypeScript (Strict Mode).
- **Styling :** Tailwind CSS (V4) avec design tokens personnalisés.
- **Animations :** Framer Motion pour des transitions fluides et luxueuses.
- **Performance :** 
  - LCP < 2.5s
  - CLS < 0.1
  - Optimisation des images (WebP/AVIF)
  - Lazy loading agressif
  - **LCP Optimization :** Utilisation de `fetchpriority="high"` sur l'image Hero critique. 
  - **Zero-Weight Media :** Chargement dynamique de la vidéo TCP (Below-the-fold) via `IntersectionObserver` pour préserver le FCP/LCP.
  - **CLS Mastery :** Respect des `aspect-ratio` sur tous les conteneurs media pour un CLS de 0.
  - **Main Thread Hygiene :** Déclenchement des processus non-critiques via `requestIdleCallback`.
- **Accessibilité (A11Y) :** WCAG 2.2 AA, navigation clavier intégrale, sémantique HTML5.
- **SEO :** 
  - Hiérarchie Hn stricte.
  - Meta-tags dynamiques.
  - JSON-LD pour les services et l'organisation.

## 5. Design System (Tokens)
- **Couleurs :**
  - Text : `#1A1714` (Noir architectural)
  - Gold : `#C5A572` (Or sobre)
  - Muted : `#7A746E` (Gris chaud)
  - Background : `#FBFBF9` (Papier crème)
- **Typographie :**
  - Display : Font à empattement élégante ou sans-serif géométrique très légère.
  - Sans : Inter/Outfit pour la lisibilité technique.
  - Mono : Fira Code ou JetBrains Mono pour les métriques techniques.

## 6. Spécifications du "Cahier Technique" (Cartes Projets)
- **Viseurs & Cotes :** Micro-bordures en "crosshair" aux 4 coins. Lignes de cotes dorées (`--color-brand-gold`) de 0.5px apparaissant au survol.
- **Blueprint Effect :** Grille millimétrée subtile en overlay sur l'image au hover avec un léger filtre bleu technique.
- **Duality :** Titres en Serif/Display, métriques techniques en Monospace avec tracking large.
- **Performance :** Composant `ProjectCard.tsx` isolé avec optimisation du rendu Framer Motion.

## 7. Roadmap
- **Phase 1 :** Finalisation de la structure sémantique et du design system (Index.css).
- **Phase 2 :** Redesign du Portfolio (Cahier Technique) et extraction du composant ProjectCard.
- **Phase 3 :** Optimisation des composants interactifs (Carousels, Formulaire).
- **Phase 4 :** Audit A11Y & SEO complet.
- **Phase 5 :** Déploiement et tests de performance. [OK]
- Phase 6 : Optimisation de la Conversion (CRO) & Psychologie comportementale.
