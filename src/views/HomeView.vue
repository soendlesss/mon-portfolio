<template>
    <div>
        <section id="presentation">
            <h1>Ethan LANGLOIS</h1>
            <p>Je suis un étudiant en développement web au Centre Européen de Formation. J'ai d'abord effectué une mise à niveau en Arts Appliqués, pour ensuite faire une année de graphisme. J'ai enchainé sur un diplôme en web design intitulé "Graphiste multimédias". Ayant touché du doigt le développement web lors de ce diplôme j'ai voulu approfondir cette curiosité grandissante en passant un diplôme de développeur web. Mon objectif à l'obtention de ce diplôme est de trouver un poste de développeur web junior en Île-de-France.</p>
        </section>

        <section id="creations">
            <CarteProjet v-for="projet in projets"
            :key="projet.titre"
            :titre="projet.titre"
            :technologie="projet.technologie"
            :annee="projet.annee"
            :description="projet.description"
            :lien="projet.lien"
            :type="projet.type"
            @selectionner="ouvrirModale"
            />

            <ModaleProjet
            :visible="modaleVisible"
            :titre="projetSelectionne?.titre"
            :technologie="projetSelectionne?.technologie"
            :annee="projetSelectionne?.annee"
            :description="projetSelectionne?.description"
            :lien="projetSelectionne?.lien"
            :type="projetSelectionne?.type"
            @fermer="fermerModale"
            />
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <input type="text" v-model="nom" placeholder="Nom">
            <input type="text" v-model="objet" placeholder="Objet">
            <textarea v-model="message" placeholder="Message"></textarea>
            <button @click="envoyerMessage">Envoyer</button>

        </section>
    </div>
</template>

<script setup>

import CarteProjet from '@/components/CarteProjet.vue';
import { ref } from 'vue';
import ModaleProjet from '@/components/ModaleProjet.vue';


// CREATIONS - carte projet
const projets = ref([
    {
        titre: "Créer un CV en ligne",
        technologie: "HTML, CSS",
        annee: 2024,
        description: "Conception d'une page CV en HTML5 et CSS3 avec VS Code.",
        lien: "https://github.com/soendlesss/creer-un-cv-en-ligne-devoir-el",
        type: "github"
    },
    {
        titre: "Dynamiser un espace commentaire",
        technologie: "HTML, JavaScript",
        annee: 2025,
        description: "Intégration de scripts événementiels pour dynamiser un espace commentaire sans rechargement de page.",
        lien: "https://github.com/soendlesss/Dynamiser-avec-JS",
        type: "github"
    },
    {
        titre: "Arcane Quiz",
        technologie: "HTML, CSS, JavaScript",
        annee: 2025,
        description: "Création d'un quiz interactif autour de la série Arcane.",
        lien: "https://github.com/soendlesss/arcane_quiz",
        type: "github"
    },
    {
        titre: "Site web TIM Essonne",
        technologie: "CMS Wix",
        annee: 2024,
        description: "Site du tournoi international U14 en lien avec le circuit ITF Tennis Europe Junior Tour.",
        lien: "https://www.tim91.com/",
        type: "site"
    },
    {
        titre: "Site web Comité Essonne Tennis",
        technologie: "CMS Prismic",
        annee: 2025,
        description: "Refonte totale du site officiel du Comité Essonne de Tennis, migration de WordPress vers Prismic.",
        lien: "https://essonne.fft.fr/",
        type: "site"
    }
]);


// CREATIONS - modale projet
const projetSelectionne = ref(null);

const modaleVisible = ref(false);

const ouvrirModale = (projet) => { 
    projetSelectionne.value = projet; 
    modaleVisible.value = true 
};

const fermerModale = () => { modaleVisible.value = false; };


// CONTACT - formulaire
const nom = ref("");
const objet = ref("");
const message = ref("");

const envoyerMessage = () => { 
    console.log(nom.value, objet.value, message.value);
    // vider les champs
    nom.value= "";
    objet.value= "";
    message.value= "";
};

</script>

<style>
</style>