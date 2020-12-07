<template>
    <el-container>
        <el-row :gutter="20">
            <el-col class="margenes" :xs="24" :sm="24" :md="12" :lg="6" :xl="6" v-for="(item,index) in user2" :key="index">
                <el-card>
                    <img :src="item.avatar" class="image" :alt="item.id">
                    <div>
                        <span>{{item.first_name}} {{item.last_name}}</span>
                        <div class="bottom clearfix">
                            <slot name="cards" :datos="item"></slot>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
export default {
    name: 'AppCard',
    data() {
        return {
            user2: [],
            loading: false
        }
    },
    mounted() {
        this.load2();
    },
    methods: {
        async load2(){
            try {
                let result = await fetch('https://reqres.in/api/users?per_page=12');
                let data = await result.json();
                setTimeout(()=>{
                    this.loading = true
                    this.user2 = data.data;
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
    .margenes{
        margin: 10px 0;
    }
    .time {
        font-size: 13px;
        color: #999;
    }
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }
    .button {
        padding: 0;
        float: right;
    }
    .image {
        width: 100%;
        display: block;
    }
    .clearfix:before, .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
</style>