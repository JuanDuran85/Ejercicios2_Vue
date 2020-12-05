Vue.component('click-counter', {
    template: '#component-click-template',
    data() {
        return {
            count: 0,
        }
    },
});

/* Vue.component('', {
    template: `
    
    `,
    data() {
        return {
            
        }
    },
});
 */

const vm = new Vue({
    el: '#app',
});