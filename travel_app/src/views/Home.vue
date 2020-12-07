<template>
  <div class="container">
    <div class="columns">
      <div v-for="(item,index) in destinations" :key="index" class="column">
        <router-link :to="{name: item.name}"><h2>{{item.name}}</h2></router-link>
        <figure>
          <router-link :to="{name: item.name}">
            <img :src="require(`@/assets/${item.image}`)" :alt="item.id">
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/db/db.js'
export default {
  name: 'Home',
  data() {
    return {
      destinations: db.destinations,
    }
  },
  components: {
  }
}
</script>
