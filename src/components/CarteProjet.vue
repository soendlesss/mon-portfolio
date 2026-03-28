<template>
    <div>
        <img src="" alt="">
        <h2> {{ titre }} </h2>
        <button @click="seeMore">Voir plus</button>
    </div>
</template>

<script setup>

const props = defineProps({
    titre: String,
    technologie: String,
    annee: Number,
    description: String,
    lien: String,
    type: String,
});

const emit = defineEmits(["selectionner"]);

const seeMore = () => { emit("selectionner", props); };

</script>