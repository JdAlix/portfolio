<script>
    export default {
        name: 'FooterComponent',
        data() {
            return {
                linkedin: 'https://linkedin.alix-jdlm.fr',
                git: 'https://codefirst.iut.uca.fr/git/alix.jeudi--lemoine',
                email: 'mailto:alix.jeudi--lemoine@etu.uca.fr'
            };
        }
    }
</script>

<template>
    <footer class="footer mt-auto bg-body-tertiary d-flex align-items-center justify-content-center">
        <div class="container text-center">
            <span class="text-muted">© 2025 Alix JEUDI--LEMOINE. Tous droits réservés.</span>
            
            <a :href="linkedin" rel="noopener" target="_blank">
                <em class="bi bi-linkedin"></em>
            </a>
            <a :href="git" rel="noopener" target="_blank">
                <em class="bi bi-git"></em>
            </a>
            <a :href="email">
                <em class="bi bi-envelope"></em>
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