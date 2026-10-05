# Move Xperience · Calculateur d’allure HYROX

Un petit outil gratuit en français pour préparer un plan de course : chrono estimé, répartition course/stations/Roxzone, allure nécessaire pour un objectif et temps de passage.

## Utilisation

Télécharge ce dépôt puis ouvre `index.html` dans un navigateur. Aucun compte, installation, serveur ou accès Internet n’est nécessaire. Sur mobile, utilise une version hébergée du fichier HTML.

1. Indique ton allure moyenne sur les 8 kilomètres, au format `m:ss`.
2. Indique ton objectif au format `h:mm:ss` ou `m:ss`.
3. Ajuste chacun des huit temps aux stations ainsi que le temps total en Roxzone.
4. Lis ton estimation, l’allure cible et les temps de passage. Le bouton Imprimer permet aussi de sauvegarder un PDF via ton navigateur.

Les valeurs initiales sont des exemples, pas des performances observées ni des recommandations personnalisées. Exemple initial : 8 × 5:00 + 30:00 de stations + 3:00 de transitions = **1:13:00**. Pour un objectif de 1:10:00 avec ces stations et transitions, l’allure exacte est 4:37,5/km, affichée 4:38/km.

## Méthode et limites

`chrono = allure (secondes/km) × 8 + somme des stations + Roxzone`

`allure cible = (objectif − somme des stations − Roxzone) / 8`

Si l’objectif est inférieur ou égal au temps des stations et transitions, l’outil le signale comme impossible avec ces paramètres. Les temps de passage cumulent chaque kilomètre et sa station ; les transitions sont ajoutées à l’arrivée, car leur répartition n’est pas saisie.

Le calcul ne modélise pas la fatigue, les pénalités, les charges, les conditions du sol ni les variations de distance en Roxzone. Les standards changent selon la division ; consulte le règlement de ton événement. L’ordre et le format sont basés sur [la présentation officielle HYROX](https://hyrox.com/the-fitness-race/). Outil indépendant, sans affiliation officielle avec HYROX.

## Confidentialité

Aucune collecte, aucun cookie, aucun suivi et aucune requête réseau de l’application. Les données restent dans la page et disparaissent lorsque celle-ci est fermée ou rechargée. Le lien vers HYROX ne s’ouvre que si tu cliques dessus.

## Structure et vérification

- `index.html` : interface autonome avec styles et calculs intégrés.
- `calculator.js` : calculs réutilisables et testables sans navigateur.
- `test.js` : vérification des formats, totaux, objectifs et erreurs.
- `LICENSE` : licence MIT pour le code original.
- `CONTRIBUTING.md` : comment proposer une amélioration.

Lance `node test.js` pour vérifier les calculs (Node.js requis uniquement pour les tests). Si tu modifies `calculator.js`, recopie son contenu dans le bloc `calculation-core` d’`index.html` afin de garder le fichier autonome à jour.

## Publier avec GitHub Pages

Après publication du dépôt public sur GitHub : ouvre **Settings → Pages**, choisis **Deploy from a branch**, puis la branche **main** et le dossier **/ (root)**. Enregistre. GitHub affichera l’adresse du calculateur quand la publication sera terminée.

## État du projet

Première version fonctionnelle, créée pour Move Xperience. Aucun chiffre d’adoption ou de téléchargements n’est revendiqué. La création de ce projet ne garantit aucune éligibilité à un programme de soutien open source.

## Licence

Le code original est distribué sous licence MIT. Les noms Move Xperience et HYROX restent ceux de leurs titulaires respectifs ; la licence du code ne donne aucun droit particulier sur leurs marques.
