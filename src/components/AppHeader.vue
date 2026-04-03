<template>
    <header>
        <!-- Logo cliquable qui ramène en haut de la page d'accueil -->
        <a href="/" class="header-logo">Ethan<span>LGS</span></a>

        <!-- Navigation principale avec liens d'ancrage -->
        <nav>
            <a href="#presentation" :class="{ actif: false }">Accueil</a>
            <a href="#projets">Projets</a>
            <a href="#apropos">À propos</a>
        </nav>

        <!-- Icône contact -->
        <div class="header-contact">
            <a href="#contact" aria-label="Contact">
                <!-- Icône message/bulle -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </a>
        </div>
    </header>
</template>

<style scoped>
/* Les styles du header sont dans style.css global */
</style>