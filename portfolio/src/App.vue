<template>
  <div id="app">
    <navbar-component />
    <router-view></router-view>
    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

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
}

nav {
  margin-bottom: 20px;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
