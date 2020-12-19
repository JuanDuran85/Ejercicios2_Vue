<template>
    <div class="demo-type">
        <el-container>
            <div class="contenedor">
                <el-slider v-model="value1"></el-slider>
                  <el-input placeholder="Type something" prefix-icon="el-icon-search" v-model="buscar"></el-input>
            </div>
        </el-container>
        <ul v-if="loading" class="margenes">
            <li v-for="(item, index) in filtrando" :key="index">
                <el-avatar :size="60" :src="item.picture.medium">
                    <img :src="item.picture.medium" :alt="item.id.value">
                </el-avatar>
                <div class="nombre__user">
                    <span>{{item.name.first}} {{item.name.last}}</span>
                    <slot> - {{otra(item)}}</slot>
                </div>
            </li>
        </ul>
        <slot v-else name="loading"></slot>
    </div>
</template>

<script>
export default {
    name: 'AppList',
    props: {
        otra: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            user: [],
            loading: false,
            value1: 0,
            buscar: ''
        }
    },
    computed: {
        filtrando(){
            return this.user.filter(result => result.registered.age > this.value1 && result.name.first.toLowerCase().includes(this.buscar.toLowerCase()))
        }
    },
    mounted() {
        this.load();
    },
    methods: {
        async load(){
            try {
                let result = await fetch('https://randomuser.me/api/?results=7');
                let data = await result.json();
                setTimeout(()=>{
                    this.loading = true
                    this.user = data.results;
                },2000);
            } catch (error) {
                console.error(error);
                this.loading = true
                this.$notify.error({
                    title: 'Error',
                    message: 'Error en la data...'
                });
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    ul {
        list-style-type: none;
    }
    .nombre__user{
        display: inline-block;
    }
    .contenedor{
        width: 50%;
        margin: 0 auto;
    }
    .margenes{
        margin: 50px 0;
    }
</style>