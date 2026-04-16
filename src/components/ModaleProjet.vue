<script setup>

defineProps({
    project: Object,
    visible: Boolean,
});

const emit = defineEmits(["fermer"]);

const fermer = () => { emit("fermer"); };

</script>

<template>
    <div v-if="visible" class="overlay" @click="fermer">
        <div class="boite" @click.stop>

            <button class="btn-fermer" @click="fermer">✕</button>

            <div class="boite-image">
                <img :src="project.image" :alt="project.titre">
            </div>

            <div class="boite-infos">
                <h2>{{ project.titre }}</h2>

                <p><span class="label">Technologie</span> : {{ project.technologie }}</p>
                <p><span class="label">Année</span> : {{ project.annee }}</p>
                <p><span class="label">Description</span> : {{ project.description }}</p>

                <a :href="project.lien" target="_blank" v-if="project.type === 'github'" class="btn-lien">GitHub</a>
                <a :href="project.lien" target="_blank" v-if="project.type === 'site'" class="btn-lien">Site</a>
                <a :href="project.lien" target="_blank" v-if="project.type === 'pdf'" class="btn-lien">PDF</a>
            </div>

        </div>
    </div>
</template>

<style scoped>

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
}
.boite {
    background-color: var(--couleur-fond);
    border-radius: var(--rayon-bordure);
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding: 40px;
    max-width: 860px;
    width: 90%;
    position: relative;
}

.btn-fermer {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: var(--couleur-fond-projets);
    color: var(--couleur-texte);
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.boite-image {
    flex-shrink: 0;
    width: 380px;
}

.boite-image img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: var(--rayon-bordure);
}

.boite-infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    flex: 1;
}

.boite-infos h2 {
    font-size: 1.6rem;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.2;
}

.boite-infos p {
    font-size: 1rem;
    color: var(--couleur-texte);
    line-height: 1.6;
    text-align: justify;
}

.label {
    text-decoration: underline;
    font-weight: 600;
}

.btn-lien {
    display: inline-block;
    align-self: flex-end;
    background-color: var(--couleur-contraste);
    color: var(--couleur-texte);
    text-decoration: none;
    padding: 12px 30px;
    border-radius: var(--rayon-bordure);
    font-weight: 700;
    font-size: 1rem;
    margin-top: auto;
    align-self: flex-end;
}

@media (max-width: 768px) {
    .boite {
        flex-direction: column;
        padding: 50px 20px 20px 20px;
        gap: 20px;
        overflow-y: auto;
        max-height: 90vh;
    }

    .boite-image {
        width: 100%;
    }

    .boite-infos {
        justify-content: flex-start;
    }

    .btn-lien {
        align-self: flex-end;
        margin-top: 0;
    }
}

</style>