<template>
  <AppLayout>
    <template v-slot:header><h1>Titulo de Header con Slot</h1></template>
    <template #default>
      <AppButton @click="log">
        <AppIcon class="iconCenter"/>
        texto boton
      </AppButton>
    <AppList :otra="(user) => user.registered.age">
      <template #loading>          
        <div v-loading="true"></div>
      </template>
    </AppList>
    <hr>
    <AppCard>
      <template #cards="{datos}">
        <p class="time">{{datos.email}}</p>
        <el-button type="text" class="button">Usuario {{datos.id}}</el-button>
      </template>
    </AppCard>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/AppLayout.vue';
import AppButton from '@/components/AppButton.vue';
import AppIcon from '@/components/AppIcon.vue';
import AppList from '@/components/AppList.vue';
import AppCard from '@/components/AppCard.vue';

export default {
  name: 'app',
  components: {
    AppButton,
    AppIcon,
    AppLayout,
    AppList,
    AppCard,
  },
  methods: {
    log(){
      console.log("en el metodo"); 
    }
  },
}
</script>

<style>
.iconCenter{
  vertical-align: middle;
}
</style>
