<template>
    <div>

        <!--Carte représentant un projet, affichée depuis HomeView.vue-->
        <img src="image" alt="titre">
        <h2> {{ titre }} </h2>
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