<template>
    <div>
        <div v-if="!editar">
            <h1 v-text="preguntasTotal.title"></h1>
            <div class="cuerpo" v-text="preguntasTotal.body"></div>
            <button id="editando" @click="editar = true">Editar</button>
        </div>
        <div v-if="editar">
            <input type="text" name="titulo" v-model="formulario.title">
            <textarea name="cuerpo" cols="30" rows="10" v-model="formulario.body"></textarea>
            <button id="cancelar" @click="cancelando">Cancelar</button>
            <button id="guardando" @click="actualizar">Guardando</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Preguntas',
    props: {
        pregunta: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            editar: false,
            preguntasTotal: {
                title: this.pregunta.title,
                body: this.pregunta.body
            },
            formulario: {
                title: this.pregunta.title,
                body: this.pregunta.body
            }
        }
    },
    methods: {
        cancelando(){
           this.editar = false;
        },
        actualizar(){
            this.preguntasTotal.title = this.formulario.title;
            this.preguntasTotal.body = this.formulario.body;
            this.editar = false;
        }
    },
}
</script>

<style>

</style>