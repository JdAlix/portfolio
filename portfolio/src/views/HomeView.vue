<template>
  <div class="container">
    <div class="row align-items-center mt-5">
      <div class="col-md-3 mb-3">
        <!-- Div pour la photo -->
        <div class="rounded-circle overflow-hidden">
          <img src="@/assets/me.jpg" alt="Alix JEUDI" class="w-100">
        </div>
      </div>
      <div class="col-md-9">
        <!-- Contenu du texte -->
        <div>
          <h1>Alix JEUDI</h1>
          <h4 class="mb-3">Étudiant en 2ème année de BUT Informatique et alternant à la CARSAT Auvergne</h4>
          <p>
            Bienvenue sur mon portfolio ! Je suis passionné par le développement web et les technologies de l'information.
            
            Dans ce portfolio, vous trouverez des informations sur mes compétences, mon parcours académique et professionnel, ainsi que mes projets réalisés.
          </p>
          <p>
            N'hésitez pas à explorer les différentes sections pour en savoir plus sur moi et mes réalisations. Si vous avez des questions ou des opportunités de collaboration, n'hésitez pas à me contacter. Merci de visiter mon site !
          </p>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-4 mt-5 mx-auto">
        <div class="rounded p-4 border text-center">
          <h3>À propos</h3>
          <p>En savoir plus sur moi</p>
          <router-link to="/about" class="btn btn-primary">Découvrir</router-link>
        </div>
      </div>
      <div class="col-md-4 mt-5 mx-auto">
        <div class="rounded p-4 border text-center">
          <h3>CV</h3>
          <p>Consultez et téléchargez mon CV</p>
          <router-link to="/cv" class="btn btn-light">Voir</router-link>
        </div>
      </div>
      <div class="col-md-4 mt-5 mx-auto">
        <div class="rounded p-4 border text-center">
          <h3>Projets</h3>
          <p>Découvrez mes projets universitaires</p>
          <router-link to="/projects" class="btn btn-danger">Explorer</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Style pour arrondir les coins de l'image */
.rounded-circle {
  border-radius: 50%;
  overflow: hidden;
  width: 150px;
  height: 150px;
}
</style>

<script>
export default {
  name: 'HomeView'
}
</script>
