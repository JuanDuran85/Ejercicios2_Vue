<template>
    <div class="container my-6">
        <article class="media">
            <figure class="media-left">
                <p class="image is-fullwidth">
                    <img :src="require(`@/assets/${destinationTravel.image}`)" :alt="destinationTravel.name">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p class="title"><strong>{{destinationTravel.name}}</strong></p>
                    <p class="has-text-justified">{{destinationTravel.description}}</p>
                </div>
                <nav class="level is-mobile">
                <div class="level-left">
                    <a class="level-item" @click="$router.go(-1)">
                        <span class="icon is-small"><b-icon pack="fas" icon="reply" size="is-medium"></b-icon></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-small"><b-icon pack="fas" icon="retweet" size="is-medium"></b-icon></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-small"><b-icon pack="fas" icon="heart" size="is-medium"></b-icon></span>
                    </a>
                </div>
                </nav>
            </div>
            <div class="media-right">
                <button class="button" @click="$router.push('/')"><span class="icon is-small"><b-icon pack="fas" icon="home" size="is-medium"></b-icon></span></button>
            </div>
        </article>
    </div>
</template>

<script>
import db from '@/db/db.js';

export default {
    name: 'DestinationDetails',
    data() {
        return {
            destinationId: this.$route.params.id
        }
    },
    computed: {
       destinationTravel(){
           return db.destinations.find(result => result.id == this.destinationId);
       } 
    }
}
</script>

<style scoped>

</style>