<template>
    <!-- Carte représentant un projet, affichée depuis HomeView.vue -->
    <div class="carte">
        <img :src="image" :alt="titre">
        <h3>{{ titre }}</h3>
        <button @click="seeMore">Voir plus</button>
    </div>
</template>

<script setup>

// Données du projet transmises par HomeView.vue
const props = defineProps({
    titre: String,
    technologie: String,
    annee: Number,
    description: String,
    lien: String,
    type: String,
    image: String,
});

// Déclare l'événement "selectionner" émis vers HomeView.vue au clic sur "Voir plus"
const emit = defineEmits(["selectionner"]);

// Émet l'événement "selectionner" avec toutes les données du projet en cours
const seeMore = () => { emit("selectionner", props); };

</script>

<style scoped>

.carte {
    flex-basis: calc(33.333% - 14px);
    background-color: var(--couleur-fond);
    border-radius: var(--rayon-bordure);
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.carte:hover {
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.6);
}

.carte img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
}

.carte h3 {
    font-size: 0.95rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 10px 5px 10px;
    flex: 1;
}

.carte button {
    background-color: var(--couleur-contraste);
    color: var(--couleur-texte);
    border: none;
    padding: 4px 10px;
    margin: 0 10px 10px auto;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
}

</style>