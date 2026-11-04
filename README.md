# Console matricielle — Shadowrun

Console interactive pour les parties de Shadowrun (dossiers verrouillés, pavé de codes, terminal, forum, zoom d'images).

## Organisation

- `index.html` — le **moteur** : interface, logique, sons, zoom. Il ne contient aucun texte de campagne.
- `content.js` — le **contenu de la campagne** : `CONFIG` (titres, textes d'interface, voix), `IMAGES`, `CODES`, `LEVEL_NAMES`, `FILES` (dossiers), `HANDLES` et `THREADS` (forum), `CATS` (catégories), `DIRS` (terminal).
- `*.jpg` — les images référencées dans `IMAGES`.

Pour changer de campagne, on remplace `content.js` et les images : le moteur ne bouge pas.

## Liens directs

`?f=<id>` ouvre un dossier (`geo`, `news`, `meteo`, `medpub`, `janus`, `ghost`, `marshall`) ou `?f=feed` pour le forum ; `?reset` remet tout à zéro (MJ). Les anciennes formes `#f=…` et `#reset` fonctionnent toujours.
