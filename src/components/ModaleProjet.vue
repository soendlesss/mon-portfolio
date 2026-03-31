<template>
    <!-- Clic sur le fond = fermer -->
    <div v-if="visible" class="overlay" @click="fermer">
        <!-- Clic sur la boîte = ne RIEN faire -->
        <div class="boite" @click.stop>
            <h2> {{ titre }} </h2>
            <p> {{ technologie }} </p>
            <p> Année : {{ annee }} </p>
            <p> {{ description }} </p>
            <a :href="lien" target="_blank" v-if="type === 'github'">Voir sur GitHub</a>
            <a :href="lien" target="_blank" v-if="type === 'site'">Visiter le site</a>
            <a :href="lien" target="_blank" v-if="type === 'pdf'">Voir le pdf</a>
            <button @click="fermer">✕</button>
        </div>
    </div>
</template>

<script setup>

// Déclare les props reçues depuis le composant parent
defineProps({
    titre: String,
    technologie: String,
    annee: Number,
    description: String,
    lien: String,
    type: String,
    visible: Boolean
});

// Déclare l'événement "fermer" émis vers HomeView.vue au clic sur "✕"
const emit = defineEmits(["fermer"]);

// Fonction qui émet l'événement "fermer" vers le composant parent
const fermer = () => { emit("fermer"); };

</script>