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
        <p v-if="actualizadaPre" id="actualizadaPregunta">Pregunta actualizada en la Base de Datos</p>
    </div>
</template>

<script>
import axios from 'axios';

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
            },
            actualizadaPre: false,
        }
    },
    methods: {
        cancelando(){
           this.editar = false;
        },
        actualizar(){
            this.preguntasTotal.title = this.formulario.title;
            this.preguntasTotal.body = this.formulario.body;

            axios.post('/pregunta/1', this.formulario)
                .then(({data}) => {
                    console.log(data.title);
                    this.actualizadaPre = true;
                })
                .catch(error => console.log(error));

            this.editar = false;
        }
    },
}
</script>

<style>

</style>