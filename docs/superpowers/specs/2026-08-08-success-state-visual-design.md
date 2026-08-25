# Success State Visual Design

## Objectif

Aligner l’état `success` du Weather Dashboard sur la maquette `docs/Succes.png`, tout en conservant un HTML BEM exploitable par le futur rendu JavaScript.

## Illustration météo

- Générer une image panoramique photoréaliste sans texte, logo, icône d’interface ou donnée météo.
- Utiliser une composition bleu nuit avec un soleil chaud placé dans la moitié droite, partiellement masqué par de grands nuages volumétriques.
- Garder la moitié gauche sombre, calme et peu détaillée afin de préserver la lisibilité du résumé météo.
- Prévoir suffisamment de matière autour du sujet pour permettre un recadrage avec `object-fit: cover` sur écran étroit.
- Enregistrer l’asset final dans `assets/images/` avec un nom décrivant son rôle dans l’état `success`.

## Composition de l’interface

- Conserver le logo et la recherche dans la barre persistante supérieure.
- Utiliser une zone principale pleine largeur sous cette barre.
- Placer le résumé météo dans la partie gauche et l’illustration derrière la partie droite.
- Maintenir le nom de ville, le pays, la température, la description et la date dans une pile verticale.
- Présenter les trois détails météo sur une ligne avec séparateurs visuels.
- Ajouter un titre explicite aux prévisions, puis répartir cinq cartes quotidiennes sur toute la largeur inférieure.
- La maquette et le HTML affichent exactement cinq jours afin que la structure statique reste fidèle au libellé « Prévisions sur 5 jours ».

## Responsive

- Sur grand écran, conserver une composition asymétrique proche de la maquette, avec le texte à gauche et le point focal de l’image à droite.
- Sur tablette, réduire les tailles typographiques et permettre aux détails météo de se réorganiser.
- Sur mobile, empiler la barre supérieure et le contenu, conserver la température lisible et transformer les prévisions en grille ou en défilement horizontal sans débordement de page.

## Contraintes

- Ne pas modifier les états `idle`, `searching`, `choosing`, `loading`, `empty` et `error`.
- Ne pas ajouter de logique JavaScript ni de dépendance.
- Conserver les noms BEM existants dans la section `success`.
- L’illustration doit rester un asset remplaçable plus tard selon le code météo.

## Vérification

- Vérifier le rendu desktop face à `docs/Succes.png`.
- Vérifier un viewport mobile.
- Exécuter la compilation Vite, Prettier et `git diff --check`.
