// Importe la fonction qui crée l'application Vue et le composant racine App.vue
import { createApp } from "vue";
import App from "./App.vue";

// Importe le router pour gérer la navigation entre les pages
import router from "./router";

// Crée l'instance de l'application Vue à partir du composant racine
const app = createApp(App);

// Branche le router sur l'application
app.use(router);

// Monte l'application dans la balise <div id="app"> du fichier index.html
app.mount("#app");
