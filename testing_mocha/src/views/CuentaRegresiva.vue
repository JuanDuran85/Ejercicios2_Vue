<template>
    <div>
        <span>{{restante.days}} Days,</span>
        <span>{{restante.hours}} Hours,</span>
        <span>{{restante.minutes}} Minutes,</span>
        <span>{{restante.seconds}} Seconds,</span>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'CuentaRegresiva',
    props: ['tiempoProps'],
    data() {
        return {
            now: new Date()
        }
    },
    computed: {
        restante(){
            let restanteTotal = moment.duration(Date.parse(this.tiempoProps) - this.now);
            return {
                days: restanteTotal.days(),
                hours: restanteTotal.hours(),
                minutes: restanteTotal.minutes(),
                seconds: restanteTotal.seconds(),
            }
        }
    },
    created() {
        setInterval(()=>{
            this.now = new Date();
        },1000);
    },
}
</script>

<style>

</style>