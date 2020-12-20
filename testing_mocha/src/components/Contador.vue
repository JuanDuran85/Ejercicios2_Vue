<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <p class="cuenta">Contador: {{contador}}</p>
      <button @click="contador++" id="incremento">Incrementar</button>
      <button @click="contador > 0 ? contador-- : 0" id="decremento" v-show="contador > 0">Decrementar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  props: {
    msg: String
  },
  data() {
    return {
      contador: 0
    }
  },
}
</script>

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
