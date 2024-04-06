<template>
    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">A propos</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Ce portfolio a été réalisé dans le cadre de ma fin de 2ème année de BUT Informatique.</p>

                    <p>
                        Il a entièrement été développé en Vue.js, 
                        utilise VueRouter pour la navigation entre les différentes pages
                        et Bootstrap 5 pour le style.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <router-link to="/" class="navbar-brand">Accueil</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" 
                    aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link" exact :class="{ 'active': $route.path === '/about' }">
                            À propos
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cv" class="nav-link" exact :class="{ 'active': $route.path === '/cv' }">
                            CV
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/projects"
                                    class="nav-link" exact :class="{ 'active': $route.path === '/projects' }">
                            Projets
                        </router-link>
                    </li>
                </ul>
                
                <div class="ml-auto">
                    <button @click="toggleDarkMode" class="btn">
                        <em class="bi bi-lightbulb-fill" id="light-logo"></em>
                    </button>

                    <button class="btn" data-bs-toggle="modal" data-bs-target="#myModal">
                        <em class="bi bi-patch-question"></em>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavbarComponent',
        methods: {
            toggleDarkMode() {
                // Active ou désactive le mode sombre en changeant la valeur de l'attribut bsTheme
                document.body.dataset.bsTheme = document.body.dataset.bsTheme === 'dark' ? 'light' : 'dark';
                document.querySelector('#light-logo').classList = document.body.dataset.bsTheme === 'dark' 
                                                                    ? 'bi bi-lightbulb' : 'bi bi-lightbulb-fill';
            }
        },
        mounted() {
            // Initialise le mode sombre en fonction des préférences de l'utilisateur (système ou navigateur)
            document.body.dataset.bsTheme=window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.querySelector('#light-logo').classList = document.body.dataset.bsTheme === 'dark' 
                                                                ? 'bi bi-lightbulb' : 'bi bi-lightbulb-fill';

            // Surveille le changement du mode sombre en fonction des préférences de l'utilisateur (système ou navigateur)
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                document.body.dataset.bsTheme = event.matches ? "dark" : "light";
                document.querySelector('#light-logo').classList = document.body.dataset.bsTheme === 'dark' 
                                                                    ? 'bi bi-lightbulb' : 'bi bi-lightbulb-fill';
            });
        }
    }
</script>

<style>
.bi-lightbulb::before {
  content: "\f46b"; /* Code Unicode pour l'icône de la lampe */
  font-family: "bootstrap-icons"; /* Police d'icônes Bootstrap */
}
.nav-link.active {
  font-weight: bold; /* Style de la police pour indiquer la page active */
}
</style>
