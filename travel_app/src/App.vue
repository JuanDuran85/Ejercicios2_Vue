<template>
  <div id="app">
    <div id="nav">
      <the-nav-bar></the-nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';
export default {
  name: 'App',
  components: {
    TheNavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
