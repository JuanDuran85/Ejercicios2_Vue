<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <b-icon pack="fas" icon="plane-departure" size="is-medium"></b-icon> 
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                <router-link to="/">Home</router-link>
            </b-navbar-item>
            <b-navbar-item v-for="(item, index) in destinations" :key="index">
                <router-link :to="{name: 'DestinationDetails', params: {slug: item.slug}}">{{item.name}}</router-link>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import db from '@/db/db';

export default {
  name: 'TheNavBar',
  computed: {
      destinations(){
          return db.destinations;
      }
  }
}
</script>

<style scoped>
#nav a.travel-active-class {
  color: #42b983;
}
</style>
