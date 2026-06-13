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
              Mon objectif est de poursuivre mes études en intégrant la <a href="https://www.efrei.fr/formation/filieres-en-apprentissage/" target="_blank" rel="noopener">filière apprentissage de l'EFREI</a> à Villejuif, en région parisienne, avec la majeure <strong>Logiciels et Systèmes d'information</strong>.
              Cette formation d’ingénieur en alternance forme des professionnels capables de concevoir, développer et piloter des solutions numériques innovantes,
              en associant compétences techniques et expérience en entreprise.
              Je veux approfondir mes connaissances en développement logiciel, en systèmes d'information, en intégration cloud et en méthodes DevOps,
              tout en travaillant sur des projets concrets qui soutiennent la transformation digitale des organisations.
            </p>
            <p class="text-justify">
              Convaincu que cette filière me permettra de renforcer mes <strong>compétences techniques</strong>
              et ma maturité professionnelle, je suis déterminé à continuer à apprendre et à évoluer dans le domaine des systèmes d'information,
              tout en collaborant avec des équipes passionnées pour développer des solutions
              <em>robustes</em> et <strong>adaptées</strong> aux besoins réels des entreprises.
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