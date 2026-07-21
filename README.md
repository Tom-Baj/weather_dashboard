# Weather Dashboard

## Parcours utilisateur

L'utilisateur arrive sur une page avec un champ de recherche vide. Il commence à taper le nom d'une ville. Pendant qu'il tape, l'appli va chercher des suggestions de villes correspondantes (par exemple via une API de géocodage) et les affiche sous forme de liste déroulante, chaque suggestion précisant la région et le pays pour lever toute ambiguïté entre villes homonymes. L'utilisateur clique sur une des suggestions (ou valide s'il n'y en a qu'une pertinente). À ce moment-là, l'appli lance une requête vers l'API météo pour cette ville précise, pendant que l'utilisateur voit un indicateur de chargement. Une fois la réponse reçue, la météo s'affiche (température, conditions, etc.). Si la ville tapée ne correspond à rien, l'utilisateur voit un message clair lui indiquant qu'aucun résultat n'a été trouvé. Si une erreur technique survient (API indisponible, pas de réseau...), un message d'erreur différent s'affiche, accompagné d'un bouton « Réessayer » qui doit toujours être présent dans ce cas.

## Contenu du MVP

- Un champ de recherche pour saisir le nom d'une ville
- Un système de suggestions/autocomplétion pendant la frappe
- La possibilité de sélectionner une ville parmi les suggestions
- L'appel à une API météo pour récupérer les données de la ville choisie
- La distinction claire entre villes homonymes grâce à la région et au pays (dans les suggestions)
- L'affichage des conditions actuelles et des prévisions sur cinq jours
- La gestion visuelle des différents états (chargement, erreur, absence de résultat), avec un bouton « Réessayer » obligatoire dans l'état `error`

## Les états de l'application

- `idle` : état initial, aucune recherche n'a encore été lancée
- `searching` : l'utilisateur tape dans le champ, une requête de suggestions est en cours
- `choosing` : des suggestions sont affichées, l'utilisateur doit en choisir une
- `loading` : une ville a été choisie, la requête météo est en cours
- `success` : les données météo ont été récupérées et sont affichées
- `empty` : la recherche n'a donné aucun résultat
- `error` : une erreur technique a empêché de récupérer les données

## `empty` vs `error`

`empty` signifie que la requête a fonctionné mais qu'il n'y a simplement rien à afficher (par exemple aucune ville ne correspond à la recherche), tandis que `error` signifie que quelque chose s'est mal passé techniquement (API en panne, pas de connexion, réponse invalide) et qu'on ne sait pas s'il y avait un résultat ou non.
