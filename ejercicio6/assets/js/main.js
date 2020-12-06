Vue.component('github-user-card', {
    template: '#github-user-card-component',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
});


const vm = new Vue({
    el: '#app',
    data: {
        name: '',
        user: {},
        ocultar: false,
        buscando: false,
        error: false
    },
    methods: {
        async search(){
            this.ocultar = false;
            this.buscando = true;
            this.error = false;
            if(this.name){
                try {
                    let result = await fetch(`https://api.github.com/users/${this.name}`);
                    let data = await result.json();
                    console.log(data);
                    if (data.message == "Not Found") {
                        console.error(error);
                        this.buscando = false;
                        this.error = true;
                        this.name = "";
                    } else {
                        setTimeout(()=>{
                            this.user = data;
                            this.buscando = false;
                            this.ocultar = true;
                        },1500);
                    }
                } catch (error) {
                    console.error(error);
                    this.buscando = false;
                    this.error = true;
                }
            } else {
                console.error("No se puede mostrar");
                this.buscando = false;
                this.error = true;
            }
        }
    },
});