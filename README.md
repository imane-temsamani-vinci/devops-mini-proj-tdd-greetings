# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 12
- Membres du groupe : TEMSAMANI Imane, OUFTALLAH Youssef, REKAYA Nour
- Lien dépot github : https://github.com/imane-temsamani-vinci/devops-mini-proj-tdd-greetings

## Installation

```bash
npm install
```

## Run the project

```bash
npm test
```

OR

```bash
npm test:watch
```

## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
Notre fichier YML définit une pipeline avec github actions. Cette pipeline est déclenchée lorsqu'une pull request sur la branche main est créée ou modifiée. 
Cette pipeline va éxecutée, dans l'ordre, ces actions: 
- Affiche l'heure de commencent de la pipeline
- Vérification du repository
- Installation de Node.js
- Installation des dépendances
- Vérifie que le code est bien "formatté" avec prettier
- Vérifie que le code est bien "linté" avec lint
- Vérifie les tests unitaires avec un coverage d'au moins 80% avec Jest
- Vérifie que le code est "buildé" correctement
- Affiche l'heure de fin de la pipeline
- Affiche un message indiquant que tout s'est déroulé sans erreurs
La pipeline n'éxecute pas l'action suivante si celle en cours ne réussit pas.
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
Il sert a préciser quand est-ce que l'intégration continue doit s'éxecuter, il peut y avoir plusieurs déclencheurs.
La différence entre "on push" et "on pull request", c'est que dans le premier cas l'intégration continue va s'éxecuter dès qu'il y a un push dans la branche précisé et dans le deuxième cas c'est lorsque une pull request est ouverte ou mise à jour sur la branche spécifié.
A un développeur junior nous conseillerions d'utiliser "on pull request", car cela permettra de vérifier le code avant de merge avec le main et ainsi d'éviter des erreurs.
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
runs-on précise dans quel environnement/VM/build cette pipeline s'éxecute, dans notre cas c'est ubuntu-latest et se situe juste avant les étapes de notre pipeline.
run lui éxecute des commandes spécifiques à notre code ou des commandes shell comme par exemple "echo" et il se situe dans les étapes de la pipeline.
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
Run exécute des commandes shell ou spécifiques à notre code, notamment les scripts que nous avons configuré dans le fichier package.json comme par exemple npm run prettier
Use sert à dire quelle action doit être réalisée, dans notre pipeline par exemple nous avons "uses: actions/setup-node@v3" qui est l'action de configuration de Node.js
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
Non, nous devons d'abord installer Node.js afin d'installer les dépendances. Nous ne pouvons pas run lint avant prettier et nous devons run build après que les tests aient réussi. Nous pourrions juste mettre le display start time au tout début car il ne dépend de rien.
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
Pour commencer, il faut l'installer dans mon projet et le configurer, comme Jest ou Prettier. Il faut ensuite intégrer dans ma pipeline la commande qui éxecutera le test de sécurité. Après sa, nous devons gérer les résultats renvoyés par ce test, en fonction de si tout est bon ou pas.
Nous devrions nous poser comme questions :
- Quel test de sécurité choisir en fonction de notre projet ?
- A quel position dans la pipeline la commande éxecutant ce test doit se situer ?
- Comment allons-nous gérer les résultats du test de sécurité ?
- Que propose comme test le programme secure_app ?
- Comment allons-nous configurer secure_app ?
```