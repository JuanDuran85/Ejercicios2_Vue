<template>
  <section class="container mt-6">
        <b-message :title="'Success with '+ userName " type="is-success" has-icon aria-close-label="Close message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-message>
        <div class="has-text-centered">
            <b-button type="is-link is-light" tag="router-link" :to="{name: 'Invoices'}">Invoices</b-button>
        </div>
  </section>
</template>

<script>
import db from '@/db/db';

export default {
    name: 'AdminUser',
    data() {
        return {
            userName: db.userName,
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
}
</script>

<style scoped>
    .p-1 {
        padding: 1em;
    }
</style>