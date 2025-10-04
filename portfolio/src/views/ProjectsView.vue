<template>
    <div class="container pt-5">
      <!-- Sélecteur d'année -->
      <div class="text-center mb-5">
        <button 
          v-for="year in years" 
          :key="year" 
          :class="['btn', 'mx-2', selectedYear === year ? 'btn-primary' : 'btn-outline-primary']" 
          @click="selectedYear = year">
          {{ year }}<sup>{{ year === '1' ? 'ère' : 'ème' }}</sup> année
        </button>
      </div>

      <transition name="fade-slide" mode="out-in">
        <div :key="selectedYear">
          <div v-if="selectedYear === '3'">
            <!-- Projets 3ème année -->
            <div class="card mb-5">
              <div class="card-header text-center">
                <h3>Projet principal</h3>
              </div>

              <!-- Projet 1 -->
              <div class="card-body">
                <div class="row mb-2">
                  <div class="col-md-8">
                    <h2 class="mb-4 text-center" style="cursor: pointer;" @click="redirectToMemoryMap">
                      <img src="@/assets/projets/memorymap/logo.png" id="memorymap_logo">
                      <strong>MemoryMap (carte de souvenirs en ligne)</strong>
                    </h2>

                    <h4 class="mb-3">
                      <u>Objectif :</u>
                      développer une plateforme en ligne permettant de stocker et de partager des souvenirs marquants
                      sur une carte interactive mondiale.
                    </h4>

                    <p>
                      Cette année, nos encadrants nous ont laissé libre champ, la seule consigne était de trouver
                      un encadrant approuvant notre idée et acceptant de nous tutorer. Avec mon groupe, nous avons
                      imaginés MemoryMap, une plateforme en ligne permettant de stocker et de partager des souvenirs
                      avec nos proches, le tout sur la carte du monde afin de les retrouver facilement.
                    </p>
                    <p>
                      Ce projet a été établi tout au long de ma 3ème année au sein du BUT Informatique de
                      Clermont-Ferrand, afin de mettre en place une simulation d'entreprise gérée par les étudiants.
                      Pour ce projet, nous avons l'honneur d'être encadrés par <a href="https://limos.fr/detailperson/310" target="_blank" rel="noopener">
                        <em>M. François Delobel </em>
                        <em class="bi bi-box-arrow-up-right"></em>
                      </a>
                      dans le rôle du Product Owner, avec le suivi de notre tutrice de projet
                      <em>Mme Neddra Chatti</em> (professeure de gestion).
                    </p>
                    <p>
                      J'ai principalement été en charge de la partie développement de l'API REST,
                      en utilisant le bibliothèque Python FastAPI, qui permet notamment la bonne tenue d'une documentation OpenAPI. 
                      J'ai également assuré le déploiement de l'API, la base de données (+ses outils de gestion en ligne) et
                      le site web sur un serveur de l'Université, en utilisant l'outil de CI/CD Drone.
                    </p>

                    <img src="@/assets/projets/memorymap/map.png"
                        alt="Visuel de la carte MemoryMap"
                        class="w-100"
                        id="map">
                    <label for="map" class="mb-4">
                      Visuel de la carte MemoryMap
                      <a href="https://memorymap.fr" target="_blank" rel="noopener">
                        <em class="bi bi-box-arrow-up-right"></em>
                      </a>
                    </label>
                  </div>
                  
                  <div class="col-md-4">
                    <img src="@/assets/projets/memorymap/automatic_loc.gif"
                        alt="Visuel fenêtre ajout de souvenir avec détection localisation de la photo"
                        class="w-100 mb-4">
                    <img src="@/assets/projets/memorymap/friends.png"
                        alt="Visuel fenêtre liste d'amis"
                        class="w-100 mb-4">
                    <img src="@/assets/projets/memorymap/api.png"
                        alt="Visuel d'un bout de la documentation de l'API"
                        class="w-100"
                        id="api-doc">
                    <label for="api-doc">
                      Documentation de l'API 
                      <a href="https://api.memorymap.fr/docs" target="_blank" rel="noopener">
                        <em class="bi bi-box-arrow-up-right"></em>
                      </a>
                    </label>
                  </div>
                  
                </div>
              </div>

              <div class="card-footer text-center">
                <a href="https://github.com/JdAlix/MemoryMap-api"
                  rel="noopener"
                  target="_blank" 
                  class="btn btn-primary">
                  Voir le projet API
                </a>
                <a href="https://github.com/JdAlix/MemoryMap-front"
                  rel="noopener"
                  target="_blank" 
                  class="btn btn-primary ms-2">
                  Voir le projet Front
                </a>
              </div>
            </div>

            <div class="card mb-5">
              <!-- Projet 2 -->
              <div class="card-header text-center">
                <h3>Projet entreprise</h3>
              </div>

              <div class="card-body mt-4">
                <div class="row mb-4">
                  <div class="col-md-4">
                    <img src="@/assets/projets/webpart_sharepoint/logo_carsat.png"
                      alt="Logo de la CARSAT Auvergne"
                      class="w-100 mb-4">

                    <div class="row">
                      <img src="@/assets/projets/webpart_sharepoint/final.png"
                        alt="Visuel d'un bout de la documentation de l'API"
                        class="mt-2"
                        id="api-doc">
                      <label for="api-doc" class="text-center mb-4 mt-1">
                        <i>Rendu final du tableau</i>
                      </label>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <img src="@/assets/projets/webpart_sharepoint/list_selector.png"
                          alt="Visuel fenêtre ajout de souvenir avec détection localisation de la photo"
                          class="w-100 mb-1">
                      </div>
                      <div class="col-md-6">
                        <img src="@/assets/projets/webpart_sharepoint/list_selector_filled.png"
                          alt="Visuel fenêtre liste d'amis"
                          class="w-100 mb-1">
                      </div>
                      <label class="text-center">
                        <i>Configuration de la WebPart (2<sup>ème</sup> page) avec détection automatique des listes du site</i>
                      </label>
                    </div>
            
                  </div>

                  <div class="col-md-8">
                    <h2 class="mb-4 text-center">
                      <strong>Création et développement d'une WebPart</strong>
                    </h2>

                    <h4 class="mb-3">
                      <u>Objectif :</u>
                      développer une extension "WebPart" pour un site SharePoint Online utilisant les données d'une liste SharePoint à travers une API REST.
                    </h4>

                    <p>
                      Dans le cadre de la migration du système d'information de la CARSAT Auvergne de SharePoint 2010 à SharePoint Online,
                      un des sites utilisés par le département retraite comportait une fonctionnalité "Tableau" non portée vers la nouvelle version,
                      sauf en utilisant des outils comme
                      <a href="https://www.sharegate.com/fr" target="_blank" rel="noopener">
                        ShareGate
                        <em class="bi bi-box-arrow-up-right"></em>
                      </a>,
                      qui permettent de migrer les données d'un site à un autre tout en conservant les fonctionnalités, mais aussi...
                      le look et le ressenti old-school.
                    </p>

                    <p>
                      J'ai donc été missionné pour développer une WebPart permettant de reproduire cette fonctionnalité,
                      tout en ajoutant des options supplémentaires, comme la possibilité de filtrer les données,
                      visionner les documents sans avoir à les télécharger, et puiser les données de l'API REST SharePoint.
                    </p>

                    <p>
                      Ce projet m'a permis de découvrir le développement SPFX (SharePoint Framework) et l'environnement de développement
                      propre à Microsoft. Pour ce projet, j'ai utilisé le framework React, ainsi que la bibliothèque Material UI
                      pour le visuel du tableau.
                    </p>

                    <p>
                      Aujourd'hui, la WebPart est utilisée par le département retraite de la CARSAT Auvergne, mais aussi par une autre
                      caisse séduite par le projet et par le côté "clé en main" de la WebPart, pensée pour être facilement
                      intégrée dans n'importe quel site SharePoint Online avec très peu de configuration, comme vous pouvez le voir
                      sur les captures d'écran du menu de configuration.
                    </p>

                    <img src="@/assets/projets/webpart_sharepoint/workbench.png"
                        alt="Visuel d'un bout de la documentation de l'API"
                        class="mt-2 w-100"
                        id="api-doc">
                      <label for="api-doc" class="text-center mb-4 mt-1">
                        <i>Configuration (1<sup>ère</sup> page) lors de l'insertion dans une page SharePoint</i>
                      </label>
                  </div>
                </div>
              </div>

              <div class="card-footer text-center">
                <a href="#"
                  rel="noopener"
                  target="_blank" 
                  class="btn btn-danger disabled">
                  Impossible de voir le projet (confidentiel)
                </a>
              </div>
            </div>
          </div>

          <div v-else-if="selectedYear === '2'">
            <!-- Projets 2ème année -->
            <div class="card mb-5">
              <div class="card-header text-center">
                <h3>Projet principal</h3>
              </div>

              <!-- Projet 1 -->
              <div class="card-body">
                <div class="row mb-4">
                  <div class="col-md-8">
                    <h2 class="mb-4 text-center"><strong>ScienceQuest : mini-jeux en ligne</strong></h2>
                    <h4 class="mb-3">
                      <u>Objectif :</u>
                      développer un site web et une application Android ludiques avec un système de Quizz
                      contenant une personnalité scientifique.
                    </h4>

                    <p>
                      Le projet repose sur la création d'un site internet et d'une application Android ayant pour
                      but premier de faire découvrir des personnalités scientifiques féminines peu connues à travers
                      des activités ludiques sous forme de mini-jeux, seul ou à plusieurs, destinées aux étudiants.
                    </p>
                    <p>
                      Ce projet a été établi tout au long de ma 2ème année au sein du BUT Informatique de
                      Clermont-Ferrand, afin de mettre en place une simulation d'entreprise gérée par les étudiants.
                      Il répond à un besoin établi par un client, un professeur de l'IUT, en l'occurence 
                      <a href="https://sancy.iut.uca.fr/~durand/fr/" target="_blank" rel="noopener"><em>Mme Anaïs Durand</em></a>
                      dans le rôle du Product Owner, tout cela encadré par notre tutrice de projet
                      <a href="https://fr.linkedin.com/in/audrey-pouclet-29645a43" target="_blank" rel="noopener"><em>Mme Audrey Pouclet</em></a> (professeure de gestion).
                    </p>
                    <p>
                      J'ai principalement été en charge de la partie développement de l'API REST (respectant HATEOAS),
                      en utilisant le framework Springboot. 
                      J'ai également assuré le déploiement de l'API, la base de données,
                      le site web sur un serveur de l'Université, en utilisant l'outil de CI/CD Drone.
                    </p>

                    <img src="@/assets/projets/sae_34/1.jpeg"
                        alt="Schéma de la conception du projet"
                        class="w-100">
                  </div>
                  
                  <div class="col-md-4">
                    <img src="@/assets/projets/sae_34/2.png"
                        alt="Visuel accueil du site web du projet"
                        class="w-100 mb-4">
                    <img src="@/assets/projets/sae_34/3.png"
                        alt="Visuel du jeu Pendu sur sur le site web du projet "
                        class="w-100 mb-4">

                    <div class="row mb-4">
                      <div class="col-md-6">
                        <img src="@/assets/projets/sae_34/4.png" 
                            alt="Visuel du jeu Pendu sur sur l'application Android du projet" 
                            class="w-100">
                      </div>
                      <div class="col-md-6">
                        <img src="@/assets/projets/sae_34/5.png" 
                            alt="Visuel du jeu Kahoot sur sur l'application Android du projet"
                            class="w-100">
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div class="card-footer text-center">
                <a href="https://github.com/JdAlix/ScienceQuest"
                  rel="noopener"
                  target="_blank" 
                  class="btn btn-primary">
                  Voir le projet
                </a>
              </div>
            </div>

            <div class="card mb-5">
              <!-- Projet 2 -->
              <div class="card-header text-center">
                <h3>Projet secondaire</h3>
              </div>

              <div class="card-body">
                <div class="row mb-4">
                  <div class="col-md-12 align-items-center">
                    <h2 class="mb-4 text-center">
                      <strong>Composition de services</strong>
                    </h2>

                    <h4 class="mb-3">
                      <u>Objectif :</u>
                      développer une composition de services web (gestion de prêts) avec contrôle d'erreurs.
                    </h4>

                    <p>
                      Avec une camarade nous avons créés un projet de composition de services web pour
                      gérer les demandes de prêt. Pour ce faire, nous avons utilisés Maven, Springboot et PHP Slim.
                      Ma camarade a implémentée les services AccManager et AppManager en Java avec Springboot,
                      de mon côté j'ai créé le service LoanApproval en PHP Slim (+ Guzzle).
                    </p>
                    <p>
                      J'ai testé chaque service avec Postman, en m'assurant qu'ils fonctionnent et qu'ils
                      ont bien le comportement attendu. J'ai également créé un client Guzzle au sein du service LoanApproval
                      qui permet de communiquer avec les services AccManager et AppManager, 
                      auquel j'ai intégré l'utilisation du proxy de l'université, nécéssaire pour la communication entre machines.
                      J'ai contrôlé la gestion des erreurs en transmettant les exceptions ou réponses avec des statuts >= 400
                      entre services jusqu'au client final.
                    </p>

                    <div class="text-center">
                      <figure>
                        <a :href="composition_service" target="_blank">
                          <img src="@/assets/projets/composition_services/1.png" alt="IUT" class="w-50">
                        </a>
                        <figcaption>Cliquez sur l'image pour l'agrandir</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-footer text-center">
                <a href="https://github.com/JdAlix/CompositionServicesSalva"
                  rel="noopener"
                  target="_blank" 
                  class="btn btn-primary">
                  Voir le projet
                </a>
              </div>

            </div>
          </div>

          <div v-else-if="selectedYear === '1'">
            <!-- Projets 1ère année -->
            <div class="card mb-5">
              <div class="card-header text-center">
                <h3>Projet n°1</h3>
              </div>

              <!-- Projet 1 -->
              <div class="card-body">
                <div class="row mb-4">
                  <div class="col-md-8">
                    <h2 class="mb-4 text-center">
                      <strong>Gestionnaire des admissions pour les IUT</strong>
                    </h2>

                    <h4 class="mb-3">
                      <u>Objectif :</u>
                      créer une application permettant le recrutement d'élèves pour les IUT de France,
                      en collaborant à deux sur le projet.
                    </h4>

                    <p>
                      Lors de ce projet, il nous a fallu établir les bases pour travailler ensemble de manière indépendante.
                      L'objectif était de collaborer sur un projet commun tout en gérant les éventuels conflits qui
                      pouvaient survenir lors de la modification des fichiers.
                    </p>
                    <p>
                      J'ai dû effectuer des recherches et me former de manière autonome pour créer un programme
                      à la fois fonctionnel et esthétique respectant un cahier des charges précis.
                      Cette expérience m'a permis d'en apprendre beaucoup sur le
                      langage de programmation C et d'apprendre à travailler en équipe.
                    </p>
                  </div>
                  
                  <div class="col-md-4">
                    <img src="@/assets/projets/admissions_iut/3.jpeg" alt="IUT" class="w-100">
                  </div>
                  
                  <img src="@/assets/projets/admissions_iut/2.jpeg" alt="IUT" class="w-100">
                </div>
              </div>

              <div class="card-footer text-center">
                <a href="https://github.com/JdAlix/SAE102_2022_GOIGOUX_JEUDI"
                  rel="noopener"
                  target="_blank"
                  class="btn btn-primary">
                  Voir le projet
                </a>
              </div>
            </div>

            <div class="card mb-5">
              <!-- Projet 2 -->
              <div class="card-header text-center">
                <h3>Projet n°2</h3>
              </div>
              
              <div class="card-body">
                <div class="row mb-4">
                  <div class="col-md-8 align-items-center">
                    <h2 class="mb-4 text-center"><strong>Analyser et répondre à un besoin client</strong></h2>
                    <h4 class="mb-3"><u>Objectif :</u> recueillir un besoin et y répondre, groupe de 3</h4>

                    <p>
                      Au cours de ce projet, nous avons été assignés à un professeur, qui a joué le rôle de notre client.
                      Pour comprendre ses besoins, nous avons organisé une réunion initiale avec lui. 
                      Il a exprimé le besoin d'une application qui centraliserait ses communications avec des entrepreneurs,
                      incluant les conversations SMS, les e-mails et même des rappels pour ses rendez-vous quotidiens
                      ou pour le suivi avec des fournisseurs.
                    </p>
                    <p>
                      Après avoir analysé ses besoins, nous avons élaboré un devis détaillé,
                      comprenant des esquisses préliminaires de l'application (images ci-contre).
                      Lors de notre deuxième rendez-vous, le client a accepté notre proposition,
                      ce qui nous a permis de poursuivre le projet selon les spécifications convenues.
                      Grâce à nos efforts continus et à la documentation complète que nous avons produite,
                      nous avons pu satisfaire pleinement les exigences de notre client.
                    </p>

                    
                    <img src="@/assets/projets/recueil_besoins/2.png" alt="IUT" class="w-100">
                  </div>
                  
                  <div class="col-md-4">
                    <img src="@/assets/projets/recueil_besoins/1.png" alt="IUT" class="w-100" id="recueil_besoins">
                  </div>
                </div>
              </div>

              <div class="card-footer text-center">
                <a href="https://github.com/JdAlix/SAE105_2022_JOURDAIN_PACZKOWSKI_JEUDI"
                  rel="noopener"
                  target="_blank"
                  class="btn btn-primary">
                  Voir le projet
                </a>
              </div>

            </div>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
  import composition_service from '@/assets/projets/composition_services/1.png';

  export default {
      name: 'ProjectsView',
      data() {
          return {
              composition_service: '',
              years: ['3', '2', '1'],
              selectedYear: '3'
          };
      },
      mounted() {
          this.composition_service = composition_service;
      },
      methods: {
          redirectToMemoryMap() {
              window.open('https://memorymap.fr', '_blank');
          }
      }
  }
</script>

<style>
  figcaption {
      font-style: italic;
  }

  sup {
    top: -.75em !important;
    left: 0.1em;
    font-size: .55em !important;
  }

  .card {
    border-radius: 10px !important;
  }

  .card-footer {
    border-radius: 10px !important;
  }

  #memorymap_logo {
      width: 15%;
      height: auto;
  }

  #recueil_besoins {
    border-radius: 35px;
  }

  /* Transitions */
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.3s ease;
  }

  .fade-slide-enter-from {
    opacity: 0;
    transform: translateX(30px);
  }

  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
</style>