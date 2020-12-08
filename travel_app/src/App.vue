<template>
  <div id="app">
    <div id="nav">
      <the-nav-bar></the-nav-bar>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view :key="$route.fullPath"/>
    </transition>
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
