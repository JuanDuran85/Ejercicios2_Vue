<template>
  <div class="home">
    <Contador :msg="mensaje"/>
  </div>
</template>

<script>
import Contador from '@/components/Contador.vue'

export default {
  name: 'Home',
  data() {
    return {
      mensaje: "Utilizando Mocha - Chai para testing"
    }
  },
  components: {
    Contador
  }
}
</script>
