<template>
    <div>
        <h3 class="title">Experiences</h3>
        <h2>{{experience.name}}</h2>
        <div class="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-around is-align-content-stretch is-align-items-stretch">
            <div>
                <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
            </div>
            <div>
                <p>{{experience.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/db/db';

export default {
    name: 'ExperiencesDetails',
    props: {
        slug: {
            type: String,
            required: true
        },
        experienceSlug: {
            type: String,
            required: true
        }
    },
    computed: {
        destination(){
            return db.destination.find(result => result.slug === this.slug)
        },
        experience(){
            return this.destination.find(result => result.slug == this.experienceSlug)
        }
    }
}
</script>

<style>

</style>