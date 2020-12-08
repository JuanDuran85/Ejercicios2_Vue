<template>
    <section class="container mt-5">
        <b-field label="Username">
            <b-input v-model="userName" maxlength="30"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input type="password"
                v-model="password"
                password-reveal>
            </b-input>
        </b-field>
        <div class="buttons">
            <b-button type="is-primary" @click="loginUser">Login</b-button>
        </div>
    </section>
</template>

<script>
import db from '@/db/db';

export default {
    name: 'Login',
    data() {
        return {
            password: null,
            userName: null
        }
    },
    methods: {
        loginUser(){
            if (this.userName && this.password) {
                if (this.userName === 'Juan' && this.password === '123456') {
                    db.userName = this.userName;
                    db.password = this.password;
                    const redirectPath = this.$route.query.redirect || '/';
                    this.$router.replace(redirectPath);
                } else {
                    this.$buefy.dialog.alert({
                        title: 'Error',
                        message: 'Something\'s not good but I have a custom <b>icon</b> and <b>type</b>',
                        type: 'is-danger',
                        hasIcon: true,
                        icon: 'times-circle',
                        iconPack: 'fa',
                        ariaRole: 'alertdialog',
                        ariaModal: true
                    })
                }
            } else {
                this.$buefy.dialog.alert({
                    title: 'Error',
                    message: 'Something\'s not good in the user <b>icon</b> and <b>type</b>',
                    type: 'is-danger',
                    hasIcon: true,
                    icon: 'times-circle',
                    iconPack: 'fa',
                    ariaRole: 'alertdialog',
                    ariaModal: true
                })
            }
        }
    },
}
</script>

<style>

</style>