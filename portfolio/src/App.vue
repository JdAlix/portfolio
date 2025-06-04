<template>
  <div id="app">
    <navbar-component />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding-bottom: 50px;
}

nav {
  margin-bottom: 20px;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

[data-bs-theme=dark] {
  background-color: #111111;
  transition: background-color 0.5s ease;
  --bs-body-bg: #151515 !important;
  --bs-tertiary-bg-rgb: 12, 12, 12 !important;
  --bs-border-color: #0080ff !important;
  --bs-border-color-translucent: #0080ff !important;
}

[data-bs-theme=light] {
  background-color: #fff;
  transition: background-color 0.5s ease;
  --bs-border-color: #0055aa !important;
  --bs-border-color-translucent: #0055aa !important;
}
</style>
