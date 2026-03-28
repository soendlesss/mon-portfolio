<template>
    <div>
        <img src="" alt="">
        <h2> {{ titre }} </h2>
        <button @click="seeMore">Voir plus</button>
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
})

const seeMore = () => {};

</script>