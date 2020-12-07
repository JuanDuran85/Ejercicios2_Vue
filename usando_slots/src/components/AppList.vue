<template>
    <div class="demo-type">
        <ul v-if="loading">
            <li v-for="(item, index) in user" :key="index">
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
            loading: false
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

<style>
    ul {
        list-style-type: none;
    }
    .nombre__user{
        display: inline-block;
    }
</style>