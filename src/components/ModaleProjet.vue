<template>
    <div v-if="visible">
        <h2> {{ titre }} </h2>
        <p> {{ technologie }} - {{ annee }} </p>
        <p> {{ description }} </p>
        <button @click="fermer">✕</button>
    </div>
</template>

<script setup>

defineProps({
    titre: String,
    technologie: String,
    annee: Number,
    description: String,
    lien: String,
    type: String,
    visible: Boolean
});

const emit = defineEmits(["fermer"]);

const fermer = () => { emit("fermer"); };

</script>