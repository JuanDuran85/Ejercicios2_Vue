<template>
  <div id="app">
    <Portada />
  </div>
</template>

<script>
import Portada from './components/Portada.vue'

export default {
  name: 'App',
  components: {
    Portada
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
  margin-top: 60px;
}
</style>
