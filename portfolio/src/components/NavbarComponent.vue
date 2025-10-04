<template>
    <div class="modal modal-zoom fade" id="myModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="aboutModalLabel">
                        <i class="bi bi-info-circle-fill"></i>
                        À propos
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Ce portfolio a été réalisé dans le cadre de ma 2ème et 3ème année de BUT Informatique.</p>

                    <p>
                        Il a été développé en Vue.js, 
                        utilise VueRouter pour la navigation entre les différentes pages
                        et Bootstrap 5 pour l'habillage.
                    </p>

                    <p class="mb-1">
                        Le code source de celui-ci est disponible sur
                        <a href="https://github.com/JdAlix/portfolio" class="link-primary align-items-center ms-1" target="_blank" rel="noopener">
                            <img src="@/assets/logo_codefirst.png" class="img-fluid" alt="Logo CodeFirst">
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar navbar-expand-lg custom-navbar sticky-top shadow mt-4 mx-auto">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand d-flex align-items-center">
                <i class="bi bi-code-slash"></i>
                <span class="ms-2">Accueil</span>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item ps-2">
                        <router-link to="/about" class="nav-link" exact :class="{ 'active': $route.path === '/about' }">
                            À propos
                        </router-link>
                    </li>
                    <li class="nav-item ps-2">
                        <router-link to="/cv" class="nav-link" exact :class="{ 'active': $route.path === '/cv' }">
                            CV
                        </router-link>
                    </li>
                    <li class="nav-item ps-2">
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

    .modal.modal-zoom.fade:not(.show) .modal-dialog {
        transform: scale(.8);
    }

    .sticky-top {
        top: 1.5rem !important;
    }

    .custom-navbar {
        background: linear-gradient(90deg, #2d5399 0%, #6952cc 30%, #c081f3 100%) !important;
        border-radius: 1.5rem;
        width: 80vw;
        min-width: 320px;
        max-width: 700px;
    }
    .custom-navbar .navbar-brand {
        color: #fff !important;
        font-weight: bold;
        font-size: 1.2rem;
    }
    .custom-navbar .nav-link {
        color: #fff !important;
        transition: color 0.2s, background 0.2s;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
    }
    .custom-navbar .nav-link:hover {
        color: #ffb347 !important;
    }
    .custom-navbar .nav-link.active {
        color: #ffb347 !important;
        background: rgba(255,255,255,0.10);
        font-weight: bold;
    }
    .custom-navbar .navbar-brand img {
        background: #fff;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    }
    .custom-navbar .btn {
        color: #fff;
    }
    .custom-navbar .btn:hover {
        color: #ffb347;
    }
</style>
