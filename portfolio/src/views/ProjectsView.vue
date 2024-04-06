<template>
    <div class="container">
      <h1 class="mb-4">Mes Projets</h1>

      <!-- Projets 2ème année -->
      <div class="card mb-5">
        <div class="card-header text-center">
          <h3><em>2ème année</em></h3>
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
                Il répond à un besoin établi par un client, un professeur de l'IUT, ici <em>Mme Anaïs Durand</em>
                dans le rôle du Product Owner, tout cela encadré par notre tutrice de projet
                <em>Mme Audrey Pouclet</em> (professeure de gestion).
              </p>

              <!-- /!\ Dépassement des 15 lignes autorisées /!\
              <p>
                Les mini-jeux retenus sont les suivants:

                <ul>
                  <li>
                    Quizz (style Kahoot) : des questions sont posées aux participants et ceux-ci doivent
                    choisir une des 4 réponses proposées dans le temps imparti. Si la réponse est bonne
                    le joueur gagne des points, le joueur ayant le plus de points gagne la partie !
                  </li>

                  <li>
                    Pendu (jeu solo) : le système tire un scientifique au hasard selon les paramètres de la partie.
                    Le joueur voit alors une photo du scientifique en plus de plusieurs indices
                    (tel que sa nationalité ou encore sa date de naissance). A partir de ces informations
                    le joueur devra retrouver le nom du scientifique sous la forme d'un pendu.
                  </li>
                </ul>
              </p>
              -->

              <p>
                J'ai principalement été en charge de la partie développement de l'API REST (respectant HATEOAS),
                en utilisant le framework Springboot. 
                J'ai également assuré le déploiement de l'API, la base de données,
                le site web sur un serveur de l'Université, en utilisant l'outil de CI/CD Drone.
              </p>

              <img src="@/assets/projets/sae_34/1.png"
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

              <!-- /!\ Dépassement /!\
              <img src="@/assets/projets/sae_34/6.png"
                   alt="Visuel d'un résultat affiché par l'API REST"
                   class="w-100 mb-4">
              -->
            </div>
            
          </div>
        </div>

        <div class="card-footer mb-4 text-center">
          <a href="https://codefirst.iut.uca.fr/git/tom.biard/ScienceQuest"
             rel="noopener"
             target="_blank" 
             class="btn btn-primary">
             Voir le projet
          </a>
        </div>

        <!-- Projet 2 -->
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
                de mon côté j'ai créé le service LoanApproval en PHP Slim. 
              </p>
              <p>
                J'ai veillé à associer chaque entité avec un ID et à les lier ensemble. 
                J'ai testé chaque service avec Postman, en m'assurant qu'ils fonctionnent sur des ports différents.
                J'ai intégré un proxy si nécessaire. J'ai contrôlé la gestion des erreurs en transmettant
                les exceptions ou réponses avec des statuts >= 400 entre services jusqu'au client final.
                Enfin, j'ai créé un client Guzzle pour utiliser la composition.
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
          <a href="https://codefirst.iut.uca.fr/git/alix.jeudi--lemoine/SAE105_2022_JOURDAIN_PACZKOWSKI_JEUDI"
             rel="noopener"
             target="_blank" 
             class="btn btn-primary">
            Voir le projet
          </a>
        </div>

      </div>
      
      <!-- Projets 1ère année -->
      <div class="card mb-5">
        <div class="card-header text-center">
          <h3><em>1ère année</em></h3>
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
              <img src="@/assets/projets/admissions_iut/3.png" alt="IUT" class="w-100">
            </div>
            
            <img src="@/assets/projets/admissions_iut/2.png" alt="IUT" class="w-100">
          </div>
        </div>

        <div class="card-footer mb-4 text-center">
          <a href="https://codefirst.iut.uca.fr/git/alix.jeudi--lemoine/SAE102_2022_GOIGOUX_JEUDI"
             rel="noopener"
             target="_blank"
             class="btn btn-primary">
            Voir le projet
          </a>
        </div>

        <!-- Projet 2 -->
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
              <img src="@/assets/projets/recueil_besoins/1.png" alt="IUT" class="w-100">
            </div>
          </div>
        </div>

        <div class="card-footer text-center">
          <a href="https://codefirst.iut.uca.fr/git/alix.jeudi--lemoine/SAE105_2022_JOURDAIN_PACZKOWSKI_JEUDI"
             rel="noopener"
             target="_blank"
             class="btn btn-primary">
            Voir le projet
          </a>
        </div>

      </div>

    </div>
</template>

<script>
    import composition_service from '@/assets/projets/composition_services/1.png';

    export default {
        name: 'ProjectsView',
        data() {
            return {
                composition_service: ''
            };
        },
        mounted() {
            this.composition_service = composition_service;
        }
    }
</script>

<style>
    figcaption {
        font-style: italic;
    }
</style>