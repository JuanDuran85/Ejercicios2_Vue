<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <b-icon
                    pack="fas"
                    icon="plane-departure"
                    size="is-medium">
                </b-icon> 
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                <router-link to="/">Home</router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link to="/brazil">Brazil</router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link to="/panama">Panama</router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link to="/jamaica">Jamaica</router-link> 
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
export default {
  name: 'HelloWorld',
}
</script>

<style scoped>

</style>
