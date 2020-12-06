Vue.component('todo-item', {
    template: '#todo-item-component',
    data() {
        return {
            completed: false
        }
    },
});


const vm = new Vue({
    el: '#app',
});


//--------------------------------------------------------------------
/* Vue.component('', {
    template: `
    
    `,
    data() {
        return {
            
        }
    },
});
 */