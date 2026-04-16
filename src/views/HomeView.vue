<script setup>

import CarteProjet from '@/components/CarteProjet.vue';
import ModaleProjet from '@/components/ModaleProjet.vue';

import { ref } from 'vue';

// Librairie pour envoyer des emails sans serveur backend
import emailjs from '@emailjs/browser';


// CREATIONS - CARTE PROJET
const projets = ref([
    {
        titre: "Créer un CV en ligne",
        technologie: "HTML, CSS",
        annee: 2024,
        description: "Conception d'une page CV en HTML5 et CSS3 avec VS Code.",
        lien: "https://github.com/soendlesss/creer-un-cv-en-ligne-devoir-el",
        type: "github",
        image: "/img/cv-en-ligne.png"
    },
    {
        titre: "Cahier des charges",
        technologie: "Canva",
        annee: 2024,
        description: "Rédaction d'un cahier des charges complet pour La Socketterie, e-commerce de chaussettes dépareillées faites main.",
        lien: "/docs/cahier-des-charges-la-socketterie.pdf",
        type: "pdf",
        image: "/img/cahier-des-charges.png"
    },
    {
        titre: "Dynamiser un espace commentaire",
        technologie: "HTML, JavaScript",
        annee: 2025,
        description: "Intégration de scripts événementiels pour dynamiser un espace commentaire sans rechargement de page.",
        lien: "https://github.com/soendlesss/Dynamiser-avec-JS",
        type: "github",
        image: "/img/dynamiser-espace-commentaire.png"
    },
    {
        titre: "Quiz Arcane",
        technologie: "HTML, CSS, JavaScript",
        annee: 2025,
        description: "Création d'un quiz interactif autour de la série Arcane.",
        lien: "https://github.com/soendlesss/arcane_quiz",
        type: "github",
        image: "/img/quiz-arcane.png"
    },
    {
        titre: "Site web TIM Essonne",
        technologie: "CMS Wix",
        annee: 2024,
        description: "Site du tournoi international U14 en lien avec le circuit ITF Tennis Europe Junior Tour.",
        lien: "https://www.tim91.com/",
        type: "site",
        image: "/img/site-du-tim-essonne.png"
    },
    {
        titre: "Site web Comité Essonne Tennis",
        technologie: "CMS Prismic",
        annee: 2025,
        description: "Refonte totale du site officiel du Comité Essonne de Tennis, migration de WordPress vers Prismic.",
        lien: "https://essonne.fft.fr/",
        type: "site",
        image: "/img/site-du-comite.png"
    }
]);


// CREATIONS - MODALE PROJET

const projetSelectionne = ref(null);

const modaleVisible = ref(false);

const ouvrirModale = (projet) => {
    projetSelectionne.value = projet;
    modaleVisible.value = true;
};

const fermerModale = () => { modaleVisible.value = false; };


// CONTACT - FORMULAIRE

const nom = ref("");
const objet = ref("");
const message = ref("");

// Envoie le formulaire via emailjs et vide les champs en cas de succès
const envoyerMessage = async () => {
    try {
        const reponse = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            { nom: nom.value, objet: objet.value, message: message.value },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        console.log("Succés !", reponse);
        alert("Envoyé avec succès !");
        nom.value = "";
        objet.value = "";
        message.value = "";
    } catch (erreur) {
        console.log("Ça a échoué :", erreur);
        alert("L'envoi a echoué.");
    }
};

</script>

<template>
    <div>
        <section id="presentation">
            <div class="presentation-texte">
                <p class="bonjour">Bonjour je suis Ethan !</p>
                <h1>Développeur <br><span>WEB</span> Junior</h1>
                <p>Je suis un étudiant en développement web au Centre Européen de Formation.<br>Bienvenue sur mon Portfolio !</p>
                <div class="presentation-boutons">
                    <a href="#projets" class="btn-principal">Projets</a>
                    <a href="/404" class="btn-secondaire">404</a>
                </div>
            </div>
            <div class="presentation-photo">
                <img src="@/assets/img/sean.jpg" alt="Photo Ethan LANGLOIS">
            </div>
        </section>

        <div class="separateur"></div>

        <section id="projets">
            <div class="section-titre">
                <h2>Pr<span>o</span>jets</h2>
            </div>
            <div class="section-ligne"></div>

            <div class="grille-projets">
                <CarteProjet
                    v-for="projet in projets"
                    :key="projet.titre"
                    :project="projet"
                    @selectionner="ouvrirModale"
                />
            </div>

            <ModaleProjet
                :visible="modaleVisible"
                :project="projetSelectionne"
                @fermer="fermerModale"
            />
        </section>

        <div class="separateur"></div>

        <section id="apropos">
            <div class="section-titre">
                <h2>À Pr<span>o</span>pos</h2>
            </div>
            <div class="section-ligne"></div>

            <p>Je suis un étudiant en développement web au Centre Européen de Formation. J'ai d'abord effectué une mise à niveau en Arts Appliqués, pour ensuite faire une année de graphisme.</p>
            <p>J'ai enchainé sur un diplôme en web design intitulé "Graphiste multimédias".</p>
            <p>Ayant touché du doigt le développement web lors de ce diplôme j'ai voulu approfondir cette curiosité grandissante en passant un diplôme de développeur web.</p>
            <p>Mon objectif à l'obtention de ce diplôme est de trouver un poste de développeur web junior en Île-de-France.</p>
            <br>
            <p><a href="#">Liste de compétences :</a></p>
            <p class="competences">HTML • CSS • JavaScript • Vue.JS • GitHub</p>
        </section>

        <div class="separateur"></div>

        <section id="contact">
            <div class="section-titre">
                <h2>C<span>o</span>ntact</h2>
            </div>
            <div class="section-ligne"></div>

            <div class="contact-wrapper">
                <div class="formulaire-contact">
                    <div>
                        <label for="nom">Nom / Prénom :</label>
                        <input id="nom" type="text" v-model="nom" placeholder="">
                    </div>
                    <div>
                        <label for="objet">Objet :</label>
                        <input id="objet" type="text" v-model="objet" placeholder="">
                    </div>
                    <div>
                        <label for="message">Message :</label>
                        <textarea id="message" v-model="message" placeholder=""></textarea>
                    </div>
                    <button class="btn-envoyer" @click="envoyerMessage">Soumettre</button>
                </div>

                <div class="contact-illustration">
                    <img src="/contact-illustration.svg" alt="Illustration contact">
                </div>
            </div>
        </section>
    </div>
</template>