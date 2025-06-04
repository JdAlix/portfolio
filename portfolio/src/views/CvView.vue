<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-12">
        <!-- Image du CV -->
        <div class="position-relative">
          <!-- Flèche à gauche -->
          <div class="arrow left-arrow">
            <img :src="arrowImage" alt="flèche" srcset="">
          </div>

          <!-- Image du CV -->
          <a :href="cv" download="CV_Alix_JEUDI.pdf">
            <img src="@/assets/CV.jpg" alt="CV de Alix JEUDI" class="w-100">
          </a>
          
          <p class="lead">Cliquez sur le CV pour le télécharger en PDF.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrowWhite from '@/assets/arrow_white.png';
import arrowDark from '@/assets/arrow.png';
import cv from '@/assets/CV.pdf';

export default {
  
  name: 'CvView',
  data() {
    return {
      arrowImage: '',
      cv: ''
    };
  },
  methods: {
    updateArrowImage() {
      this.arrowImage = document.body.dataset.bsTheme === 'dark' ? arrowWhite : arrowDark;
    }
  },
  mounted() {
    this.cv = cv;

    // Initialisation de l'image au chargement du composant
    this.updateArrowImage();

    const mutationObserver = new MutationObserver(() => {
      this.updateArrowImage();
    });
    mutationObserver.observe(document.body, { attributes: true });
  }
};
</script>

<style scoped>
  /* Style pour les flèches */
  .arrow {
    position: absolute;
    top: 20%;
    font-size: 2rem;
    color: #007bff; /* Couleur de la flèche */
  }

  .left-arrow {
    left: -20%;
  }

  /* En dessous de 1800px de large, ne pas afficher la flèche */
  @media (max-width: 1800px) {
    .arrow {
      display: none;
    }
  }
</style>
