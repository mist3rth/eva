# Projet EVA - Maitrise d’œuvre : Rapport de Contexte Technique & Design

Ce document récapitule l'état actuel du développement du site EVA Maitrise d’œuvre pour assurer une continuité parfaite avec les prochaines itérations d'IA ou de développeurs.

## 1. Identité Visuelle & Design System (Actuel)
Le site adopte une esthétique **"Premium Technique"** inspirée de l'architecture de luxe et de l'ingénierie de précision.

- **Palette de Couleurs :**
  - Fond Principal : `#FBFBF9` (L'ivoire/crème pour un aspect papier à grain).
  - Texte & Accents : `#1A1714` (Noir mat profond).
  - Accentuation : `#C9A96E` (Doré "Maître d'œuvre").
  - Bordures : Gray-100 / Alpha-white pour le Glassmorphism.
- **Typographie :**
  - **Display :** Serif sophistiquée (utilisée pour les titres et "EVA").
  - **Sans :** Inter / Sans-serif technique pour les contenus et labels (approche "blueprint").
- **Effets Clés :**
  - **Glassmorphism :** Utilisé sur les témoignages et le formulaire de contact (fond `white/5` avec `backdrop-blur-2xl`).
  - **Textures :** Filigranes techniques (plans d'architecte, lignes de cotes) intégrés en fond de section.
  - **Masquage Radial :** Appliqué sur le bandeau logos pour un fondu en douceur.

## 2. Structures de Données Établies
Les données sont centralisées dans `src/App.tsx` pour une gestion facilitée :

- `LOGOS` : Liste des références clients (L'Oréal, Stade Français, etc.).
- `SERVICES` : Objets { id, title, description, icon, number }.
- `TESTIMONIALS` : Objets { name, role, content, rating }.
- `NAV_LINKS` : Objets { name, id } pour la navigation fluide (offset de 80px pour le header).

## 3. Dépendances Installées
- `motion/react` (anciennement framer-motion) : Utilisé pour toutes les animations de défilement, transitions et micro-interactions.
- `lucide-react` : Bibliothèque d'icônes standard.
- `clsx` & `tailwind-merge` : Utilitaires pour la fusion de classes Tailwind.

## 4. Modifications Récentes & Optimisations
- **Section Références :** Passage des logos en noir mat avec passage en couleur/doré au survol. Ajout d'un défilement infini ultra-fluide avec texte technique en filigrane ("MAITRISE D'OEUVRE • COORDINATION").
- **Espace Contact :** Refonte avec biais d'engagement ("Lancer mon projet"), labels flottants, et background Blueprint. Contrastes des placeholders corrigés (opacity 40%).
- **Footer Technique :** Structure 40/30/30 optimisée. Grille technique de fond (blueprint), padding de sécurité de 120px à droite pour éviter le bouton de retour en haut, et zone de réassurance (Décennale).
- **Étude de Cas (TCP) :** Narration segmentée (Défi / Intervention / Impact). Mise en avant du bénéfice "-40% d'énergie" et intégration vidéo propre.

## 5. Bugs Résolus
- **Collision Footer/Scroll-to-top :** Corrigé via un padding spécifique.
- **Vitesse Marquee :** Ajustée à 60s pour une lisibilité optimale (anti-anxiété visuelle).
- **Visibilité Formulaire :** Correction des contrastes de saisie sur support sombre.

## 6. Assets Manquants (Priorités Prochaines)
- **Logos Clients :** Remplacer les chaînes de caractères par des SVG optimisés (actuellement en texte).
- **Images Projets :** Remplacer les images Unsplash par les vraies photos de réalisations (notamment pour le Tennis Club de Paris).
- **Vidéo :** Le lien YouTube actuel est un placeholder.
- **Backend :** Le formulaire de contact est une interface visuelle, le branchement API (type Formspree ou backend Node) reste à faire.

## 7. Prochaines Étapes Cruciales
1. **Détails Projets :** Implémenter des modales ou des pages dédiées pour chaque projet de la grille "Realisations".
2. **SEO & Performance :** Optimiser le chargement des images (Lazy load déjà présent sur certains mais à systématiser).
3. **Responsive Mobile :** Vérifier les hauteurs de sections sur les très petits écrans (iPhone SE).
4. **Interactivité :** Ajouter un "Pause on Touch" plus robuste pour le marquee sur mobile.

---
*Document généré le 09/05/2026 pour le transfert de contexte.*
