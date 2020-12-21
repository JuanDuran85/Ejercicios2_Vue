<template>
    <div>
        <h2>Cupones a Ingresar</h2>
        <input type="text" id="cupon" v-model="codigoCupon" @keyup.enter="validando">
        <button id="botonAgregar" type="button" @click="validando">Agregar</button>
        <p v-if="valido">Cupon Aplicado {{mensajeCupon}}</p>
        <p v-else>Cupon Aplicado no valido</p>   
    </div>
</template>

<script>
export default {
    name: 'Cupon',
    data() {
        return {
            codigoCupon: '',
            valido: false,
            cupones: []
        }
    },
    computed: {
        cuponSeleccionado(){
            return this.cupones.find(result => result.codigo === this.codigoCupon)
        },
        mensajeCupon(){
            return this.cuponSeleccionado.mensaje;
        }
    },
    methods: {
        validando(){
            if (this.codigoCupon) {
                
                //this.valido = !! this.cuponSeleccionado;

                let resultado = this.cupones.map(cupon => cupon.codigo).includes(this.codigoCupon);

                if (resultado) {
                    this.valido = resultado;
                    console.log("cupon aplicado");
                    let descuento = this.cuponSeleccionado.descuento;
                    this.$emit('aplicado',descuento, "descontado");
                } else {
                    this.valido = false;
                }
            } else {
                console.log("No se puede");
                this.valido = false;
            }
        }
    },
}
</script>

<style>

</style>