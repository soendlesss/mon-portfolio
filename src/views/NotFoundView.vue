<template>
    <div class="page-404">

        <!-- Image à gauche -->
        <div class="img-404">
            <img src="/404.svg" alt="Page introuvable">
        </div>

        <!-- Texte à droite -->
        <div class="texte-404">
            <h1>Oups ! Page<br>introuvable.</h1>
            <p>Vous avez certainement frappé à la mauvaise porte, car je n'arrive pas à trouver la page que vous recherchez.</p>
            <a href="/" class="btn-accueil">Retour à l'accueil</a>
        </div>

    </div>
</template>

<style scoped>

.page-404 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    min-height: 100vh;
    padding: 0 10%;
}

.img-404 img {
    width: 500px;
    object-fit: contain;
}

.texte-404 {
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.texte-404 h1 {
    font-size: 3.8rem;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.1;
    color: var(--couleur-texte);
}

.texte-404 p {
    color: var(--couleur-secondaire);
    line-height: 1.6;
    font-size: 0.95rem;
}

.btn-accueil {
    display: inline-block;
    background-color: var(--couleur-contraste);
    color: var(--couleur-texte);
    text-decoration: none;
    padding: 12px 28px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.95rem;
    width: fit-content;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 40px;
}

.btn-accueil:hover {
    transform: scale(1.05);
}

</style>