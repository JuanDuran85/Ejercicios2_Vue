<template>
  <div>
      <el-button round class="textoBoton" v-on="$listeners">
        <slot>Boton</slot>
      </el-button>
  </div>
</template>

<script>

export default {
  name: 'AppButton',
}
</script>

<style scoped>
  .textoBoton{
    text-transform: uppercase;
  }
</style>
