<script>
    export default {
        name: 'FooterComponent',
        data() {
            return {
                linkedin: 'https://linkedin.alix-jdlm.fr',
                github: 'https://github.com/JdAlix',
                email: 'mailto:alix.jeudi--lemoine@etu.uca.fr'
            };
        }
    }
</script>

<template>
    <footer class="footer mt-auto bg-body-tertiary d-flex align-items-center justify-content-center">
        <div class="container text-center">
            <span class="text-muted">© 2024 Alix JEUDI--LEMOINE. Tous droits réservés.</span>
            
            <a :href="linkedin" rel="noopener" target="_blank">
                <i class="bi bi-linkedin"></i>
            </a>
            <a :href="github" rel="noopener" target="_blank">
                <i class="bi bi-github"></i>
            </a>
            <a :href="email">
                <i class="bi bi-envelope"></i>
            </a>
        </div>
    </footer>
</template>

<style>
.footer a {
    padding-left: 1%;
    color: inherit;
    text-decoration: none;
}
</style>