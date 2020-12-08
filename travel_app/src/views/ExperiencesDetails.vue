<template>
    <div>
        <h3 class="title mt-6">Experiences</h3>
        <h2 class="title is-size-4">{{experience.name}}</h2>
        <div class="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-around is-align-content-stretch is-align-items-stretch">
            <div>
                <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
            </div>
            <div>
                <p class="has-text-justified m-5">{{experience.description}}</p>
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
            return db.destinations.find(result => result.slug === this.slug)
        },
        experience(){
            return this.destination.experiences.find(result => result.slug == this.experienceSlug)
        }
    }
}
</script>

<style>

</style>