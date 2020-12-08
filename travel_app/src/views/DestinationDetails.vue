<template>
    <div class="my-6">
        <div class="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-around is-align-content-stretch is-align-items-stretch">
            <div class="imagenFlex">
                <p class="image is-fullwidth">
                    <img :src="require(`@/assets/${destinationTravel.image}`)" :alt="destinationTravel.name">
                </p>
            </div>
            <div class="contenido is-flex-grow-2">
                <div class="content">
                    <p class="title"><strong>{{destinationTravel.name}}</strong></p>
                    <p class="has-text-justified">{{destinationTravel.description}}</p>
                </div>
                <nav class="level">
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
                <button class="button" @click="$router.push('/')"><span class="icon is-small"><b-icon pack="fas" icon="home" size="is-medium"></b-icon></span></button>
            </div>
        </div>
        <!-- Experiences -->
        <div>
            <h2 class="title my-6">Top experiences in {{destinationTravel.name}}</h2>
        </div>
        <div class="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-around is-align-content-stretch is-align-items-stretch" id="experience">
            <div v-for="(item, index) in destinationTravel.experiences" :key="index">
                <router-link :to="{name: 'ExperiencesDetails', params: {experienceSlug : item.slug}, hash: '#experience'}">
                    <img :src="require(`@/assets/${item.image}`)" :alt="item.name">
                    <span class="textoImg">{{item.name}}</span>
                </router-link>
            </div>
        </div>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
import db from '@/db/db.js';

export default {
    name: 'DestinationDetails',
    props: {
        slug: {
            type: String,
            required: true,
        }
    },
    computed: {
       destinationTravel(){
           return db.destinations.find(result => result.slug == this.slug);
       } 
    }
}
</script>

<style scoped>
.imagenFlex{
    margin: 10px;
    padding: 10px;
}
.contenido{
    margin: 10px;
    width: 100px;
    padding: 10px;
}
.textoImg{
    z-index: 1;
    position: absolute;
    font-weight: 900;
    font-size: 20px;
    color: rgb(255, 255, 255);
    transform: translate(-300px,150px);
}
</style>