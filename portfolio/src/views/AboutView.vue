<template>
  <div class="container">
    <div class="row align-items-center mt-5">
      <div class="col-md-3 mb-3 d-flex justify-content-center">
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
              spécialisé en <u>informatique</u>, je me suis pleinement engagé à développer mes <strong>compétences</strong>
              et mon <em>expertise</em> dans le domaine des technologies de l'information.<br>
              Récemment <strong>diplômé</strong>, je suis <em>passionné</em> par les défis techniques
              et les solutions innovantes que ce domaine offre.
            </p>
            <p class="text-justify">
              Mon expérience en alternance à la 
              <a href="https://www.carsat-auvergne.fr" target="_blank" rel="noopener">CARSAT <em class="bi bi-box-arrow-up-right"></em></a>
              (Caisse d'Assurance Retraite et de Santé au Travail)
              m'a permis de développer des compétences pratiques en informatique, notamment en travaillant
              sur des <strong>serveurs internes</strong> et des <strong>applications critiques</strong>.<br>
              J'ai également eu l'opportunité d'explorer des technologies comme PowerShell,
              <a href="https://react.dev/" target="_blank" rel="noopener">React <em class="bi bi-box-arrow-up-right"></em></a>,
              <a href="https://laravel.com/" target="_blank" rel="noopener">Laravel <em class="bi bi-box-arrow-up-right"></em></a>,
              et l'environnement <strong>Microsoft 365</strong>,
              tout en apprenant l'importance de la <u>fiabilité</u> et de la <u>sécurité</u> dans les systèmes informatiques.
            </p>
            <p class="text-justify">
              Mon objectif est de poursuivre mes études en intégrant une 
              <a href="https://admission.umontreal.ca/programmes/maitrise-en-informatique/" target="_blank" rel="noopener">Maîtrise spécialisée en Apprentissage automatique <em class="bi bi-box-arrow-up-right"></em></a> au Québec.<br>
              Je souhaite approfondir mes connaissances dans ce domaine, en particulier sur les aspects liés 
              à l'<u>apprentissage automatique</u>, la <u>modélisation des données</u> et le <u>développement d'applications intelligentes</u>. 
              Je suis motivé par l'idée de contribuer à la <strong>mise en œuvre concrète de solutions basées sur l'intelligence artificielle</strong> 
              et de relever les défis techniques posés par l'analyse et l'exploitation de grandes quantités de données.
            </p>
            <p class="text-justify">
              Convaincu que cette spécialisation me permettra de renforcer mes <strong>compétences techniques</strong>
              et de mieux comprendre les enjeux de l'<u>intelligence artificielle appliquée</u>,
              je suis déterminé à continuer à apprendre et à évoluer dans ce domaine en pleine expansion,
              tout en collaborant avec des équipes passionnées pour développer des solutions
              <em>innovantes</em> et <strong>intelligentes</strong> répondant à des besoins concrets.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'AboutView',
    }
</script>