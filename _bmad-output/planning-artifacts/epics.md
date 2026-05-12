---
stepsCompleted: [1]
inputDocuments: ["PRD.md", "ARCHITECTURE.md"]
---

# EVA Architecte - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for EVA Architecte, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Navigation fluide avec ancres internes (offset 80px).
FR2: Showcase des références via un marquee infini avec effets de survol.
FR3: Grille de réalisations structurée présentant les projets (ex: Tennis Club de Paris).
FR4: Formulaire de contact interactif avec labels flottants et validation client-side.
FR5: Centralisation des données (Services, Projets, Témoignages) pour une maintenance facilitée.

### NonFunctional Requirements

NFR1: Performance extrême avec un LCP < 1.2s.
NFR2: Accessibilité complète supportant la navigation au clavier et respectant WCAG AA.
NFR3: Politique "Zéro Cookie" pour la confidentialité et l'éthique.
NFR4: Design System "Premium Technique" (Fond #FBFBF9, Texte #1A1714, Accents #C9A96E).
NFR5: Optimisation agressive des assets (WebP/AVIF) et lazy loading.

### Additional Requirements

- Utilisation de `motion/react` pour toutes les animations et micro-interactions.
- Architecture modulaire basée sur Vite + React + CSS Vanille (Tailwind possible si configuré).
- Mise en place du SEO (Meta tags, JSON-LD, Hiérarchie Hn).

### UX Design Requirements

UX-DR1: Effet Glassmorphism sur les témoignages et formulaires (white/5 + backdrop-blur).
UX-DR2: Textures Blueprint en fond de section pour l'aspect technique.
UX-DR3: Filtres logos noir mat passant en couleur/or au survol.

### FR Coverage Map

{{requirements_coverage_map}}

## Epic List

{{epics_list}}
