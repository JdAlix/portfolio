<template>
  <div class="container">
    <div class="row align-items-center mt-5">
      <div class="col-md-3 mb-3">
        <!-- Div pour la photo -->
        <div class="rounded-circle overflow-hidden w-75">
          <img src="@/assets/me.jpg" alt="Alix JEUDI" class="w-100">
        </div>
      </div>
      <div class="col-md-9 mt-4">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title mb-4">À propos de moi</h1>
            <p class="text-justify">
              Dans le cadre de mon parcours universitaire en <strong>Bachelor universitaire de technologie</strong>,
              spécialisé en <u>informatique</u>, je m'engage pleinement à développer mes <strong>compétences</strong>
              et mon <em>expertise</em> dans le domaine des technologies de l'information.<br>
              Actuellement en <strong>dernière année</strong> de formation, je suis <em>passionné</em> par les défis techniques
              et les solutions innovantes que ce domaine offre.
            </p>
            <p class="text-justify">
              Mon expérience en alternance à la 
              <a href="https://www.carsat-auvergne.fr" target="_blank">CARSAT <em class="bi bi-box-arrow-up-right"></em></a>
              (Caisse d'Assurance Retraite et de Santé au Travail)
              m'a permis de développer des compétences pratiques en informatique, notamment en travaillant
              sur des <strong>serveurs internes</strong> et des <strong>applications critiques</strong>.<br>
              J'ai également eu l'opportunité d'explorer des technologies comme PowerShell,
              <a href="https://react.dev/" target="_blank">React <em class="bi bi-box-arrow-up-right"></em></a>,
              et l'environnement <strong>Microsoft 365</strong>,
              tout en apprenant l'importance de la <u>fiabilité</u> et de la <u>sécurité</u> dans les systèmes informatiques.
            </p>
            <p class="text-justify">
              Mon objectif est de poursuivre mes études en intégrant un 
              <a href="https://formation.cnam.fr/rechercher-par-discipline/master-securite-informatique-cybersecurite-et-cybermenaces-1338264.kjsp" target="_blank">Master spécialisé en sécurité informatique <em class="bi bi-box-arrow-up-right"></em></a>.<br>
              Je souhaite approfondir mes connaissances dans ce domaine, en particulier sur les aspects liés
              à la <u>protection des systèmes</u>, la <u>gestion des risques</u> et la <u>cybersécurité</u>.
              Je suis motivé par l'idée de contribuer à la <strong>sécurisation des infrastructures numériques</strong>
              et de relever les défis posés par les menaces actuelles.
            </p>
            <p class="text-justify">
              Convaincu que cette spécialisation me permettra de renforcer mes <strong>compétences techniques</strong>
              et de mieux comprendre les enjeux de la <u>sécurité informatique</u>.
              Je suis déterminé à continuer à apprendre et à évoluer dans ce domaine, tout en collaborant avec des équipes passionnées
              pour développer des solutions <em>innovantes</em> et <strong>sécurisées</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-justify {
  text-align: justify;
}
</style>

<script>
    export default {
        name: 'AboutView',
    }
</script>