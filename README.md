# Mon Portfolio

Portfolio personnel développé dans le cadre de ma formation en développement web au CEF. Construit avec Vue 3 (Composition API), il présente mes projets via des cartes interactives avec modale, une section à propos qui me présente, un formulaire de contact fonctionnel (EmailJS) et une navigation gérée par Vue Router.

## Technologies utilisées

- [Vue3](https://vuejs.org/) (Composition API)
- HTML5
- CSS3
- JavaScript
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [EmailJS](https://www.emailjs.com/)
- [Git](https://git-scm.com/) et [Github](https://github.com/)

## Prérequis

Avant de commencer, assure-toi d'avoir installé :

- [Node.js](https://nodejs.org/) v22.12.0 ou supérieur
- [npm](https://www.npmjs.com/) (inclus avec Node.js)
- [Git](https://git-scm.com/)

## Installation

### Clone le repository
```sh
git clone https://github.com/soendlesss/mon-portfolio.git
```

### Accède au dossier du projet
```sh
cd mon-portfolio
```

### Installe les dépendances 
```sh
npm install
```

## Variables d'environnement

Le formulaire de contact utilise EmailJS. Crée un fichier .env à la racine du projet et renseigne les variables suivantes :

```sh
VITE_EMAILJS_SERVICE_ID=ton_service_id
VITE_EMAILJS_TEMPLATE_ID=ton_template_id
VITE_EMAILJS_PUBLIC_KEY=ta_public_key
VITE_CONTACT_EMAIL=ton_email
```
Ces informations sont disponibles dans le tableau de bord EmailJS.

## Lancement

### Lance le serveur de développement
```sh
npm run dev
```
L'application sera accessible sur http://localhost:5173.

## Build

### Pour générer une version de production : 
```sh
npm run build
```
Les fichiers générés se trouveront dans le dossier dist/.