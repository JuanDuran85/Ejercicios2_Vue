let planPickerItemComponent = {
    template: '#plan-picker-item-template',
    props: {
        name: {
            type: String,
            required: true,
            default: "The plans...",
        }
    },
    methods: {
        isSelected(){
            this.$emit('select', this.name);
        }
    },
};

let planPickerComponent = {
    template: '#plan-picker-template',
    components: {
        planPickerItemComponent,
    },
    data() {
        return {
            plans: [
                {name: 'The Single', selected: false},
                {name: 'The Curious', selected: false},
                {name: 'The Addict', selected: false},
            ],
        }
    },
    methods: {
        isSelectedPlan(planName){
            let changeSelected = this.plans.filter(result => result.name != planName);
            for (const key in changeSelected) {
                changeSelected[key].selected = false;
            }
            let selectedPlan = this.plans.find(result => result.name == planName);
            selectedPlan.selected = !selectedPlan.selected;
        }
    },
};

const vm = new Vue({
    el: '#app',
    components: {
        planPickerComponent
    }
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