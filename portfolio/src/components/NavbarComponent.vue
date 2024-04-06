<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <router-link to="/" class="navbar-brand">Accueil</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/about" class="nav-link" exact :class="{ 'active': $route.path === '/about' }">À propos</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/cv" class="nav-link" exact :class="{ 'active': $route.path === '/cv' }">CV</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/projects" class="nav-link" exact :class="{ 'active': $route.path === '/projects' }">Projets</router-link>
                </li>
                </ul>
                <div class="ml-auto">
                    <button @click="toggleDarkMode" class="btn">
                        <i class="bi bi-lightbulb-fill" id="light-logo"></i>
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
                // Toggle dark mode class on body element
                document.body.dataset.bsTheme = document.body.dataset.bsTheme === 'dark' ? 'light' : 'dark';
                document.querySelector('#light-logo').classList = document.body.dataset.bsTheme === 'dark' ? 'bi bi-lightbulb' : 'bi bi-lightbulb-fill';
            }
        },
        mounted() {
            // Set dark mode class on body element based on user preference
            document.body.dataset.bsTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.querySelector('#light-logo').classList = document.body.dataset.bsTheme === 'dark' ? 'bi bi-lightbulb' : 'bi bi-lightbulb-fill';

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                document.body.dataset.bsTheme = event.matches ? "dark" : "light";
                document.querySelector('#light-logo').classList = document.body.dataset.bsTheme === 'dark' ? 'bi bi-lightbulb' : 'bi bi-lightbulb-fill';
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
