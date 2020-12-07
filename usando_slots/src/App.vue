<template>
  <AppLayout>
    <template v-slot:header><h1>Titulo de Header con Slot</h1></template>
    <template #default>
      <AppButton @click="log">
        <AppIcon class="iconCenter"/>
        texto boton
      </AppButton>
    <AppList :otra="(user) => user.cell">
      <template #loading>          
        <div v-loading="true"></div>
      </template>
    </AppList>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/AppLayout.vue';
import AppButton from '@/components/AppButton.vue';
import AppIcon from '@/components/AppIcon.vue';
import AppList from '@/components/AppList.vue';

export default {
  name: 'app',
  components: {
    AppButton,
    AppIcon,
    AppLayout,
    AppList,
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
