<template>
    <div>
        <ul>
            <li><nuxt-link :to="{name: 'index'}" class="active">Home</nuxt-link></li>
            <li><nuxt-link :to="{name: 'post-id', params: {id: '1'}}" class="active">Post 1</nuxt-link></li>
            <li><nuxt-link :to="{name: 'post-id', params: {id: '2'}}" class="active">Post 2</nuxt-link></li>
            <li><nuxt-link :to="{name: 'post-id', params: {id: '3'}}" class="active">Post 3</nuxt-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TheNavBar',
    computed: {
        traerPost(){
            return this.$store.getters.enviarPost;
        },
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color: #111;
    }
</style>