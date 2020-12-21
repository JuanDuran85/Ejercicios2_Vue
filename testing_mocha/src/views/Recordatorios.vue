<template>
  <div class="about">
    <h1>Recordatorios</h1>
    <input type="text" class="nuevoRecordatorio" v-model="recordatorio">
    <button id="agregar" @click="agregando">Agregar</button>
    
    <ul v-if="listaRecordatorio.length > 0">
      <li v-for="(item,index) in listaRecordatorio" :key="index">{{item}} <button @click="borrando(index)" :id="'borrar'+index">Borrar</button></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Recordatorio",
  data() {
    return {
      recordatorio: '',
      listaRecordatorio: []  
    }
  },
  methods: {
    agregando(){
      if (this.recordatorio.length > 2) {
        this.listaRecordatorio.push(this.recordatorio);
        this.recordatorio = "";
      } else {
        console.log("no se puede");
      }
    },
    borrando(index){
      this.listaRecordatorio.splice(index,1);
    }
  },
}
</script>
