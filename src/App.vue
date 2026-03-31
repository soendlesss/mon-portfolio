<template>
  <div>
    <!--Structure de mon site-->
    <AppHeader />
    <RouterView /> <!-- Affiche la vue correspondant à l'URL actuelle-->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style>
</style>