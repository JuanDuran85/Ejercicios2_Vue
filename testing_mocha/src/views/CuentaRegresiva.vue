<template>
    <div>
        <div v-if="!completo">
            <span>{{restante.days}} Days,</span>
            <span>{{restante.hours}} Hours,</span>
            <span>{{restante.minutes}} Minutes,</span>
            <span>{{restante.seconds}} Seconds,</span>
        </div>
        <div v-else>
            <p v-text="textoConteo"></p>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'CuentaRegresiva',
    props: {
        tiempoProps: null,
        textoConteo: {
            default: 'Finalizado...',
        }
    },
    data() {
        return {
            now: new Date()
        }
    },
    computed: {
        completo(){
            return this.restante.total <= 0
        },
        restante(){
            let restanteTotal = moment.duration(Date.parse(this.tiempoProps) - this.now);

            if(restanteTotal <= 0){
                this.$emit('finalizado','fin del tiempo');
            }

            return {
                total: restanteTotal,
                days: restanteTotal.days(),
                hours: restanteTotal.hours(),
                minutes: restanteTotal.minutes(),
                seconds: restanteTotal.seconds(),
            }
        }
    },
    created() {
        let intervalo = setInterval(()=>{
            this.now = new Date();
        },1000);
        this.$on('finalizado', () => clearInterval(intervalo));
    },
}
</script>

<style>

</style>