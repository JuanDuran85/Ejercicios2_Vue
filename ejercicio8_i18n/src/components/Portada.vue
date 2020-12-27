<template>
  <div class="hello">
    <h1>Usando vue-i18n</h1>
    <h2>{{localised('hola')}}</h2>
    <h2>{{localised('adios')}}</h2>
    <h2>{{localised('agua')}}</h2>
    <button @click="activeLocale='es'">Castellano</button>
    <button @click="activeLocale='ca'">Català</button>
  </div>
</template>

<script>
export default {
  name: 'Portada',
  data() {
    return {
      activeLocale: 'es',
      mensaje: {
        es: {
          hola: 'Hola',
          adios: 'Adiós',
          agua: 'Agua'
        },
        ca: {
          hola: 'Hola',
          adios: 'Adéu',
          agua: 'aigua'
        }
      }
    }
  },
  methods: {
    localised(key){
      return this.mensaje[this.activeLocale][key];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
