<template>
    <div>
        <h1>Event Create</h1>
        <form @submit.prevent="creandoEvento">
          <label>Select a category</label>
          <select v-model="event.category">
            <option v-for="cat in enviandoCategorias" :key="cat">{{ cat }}</option>
          </select>
          <h3>Name & describe your event</h3>
          <div class="field">
            <label>Title</label>
            <input v-model="event.title" type="text" placeholder="Add an event title"/>
          </div>
          <div class="field">
            <label>Description</label>
            <input v-model="event.description" type="text" placeholder="Add a description"/>
          </div>
          <h3>Where is your event?</h3>
          <div class="field">
            <label>Location</label>
            <input v-model="event.location" type="text" placeholder="Add a location"/>
          </div>
          <h3>Who is the organizer?</h3>
          <div class="field">
            <label>Organizer</label>
            <input v-model="event.organizer" type="text" placeholder="Add a organizer's name"/>
          </div>
          <h3>When is your event?</h3>
          <div class="field">
            <label>Date</label>
            <datepicker v-model="event.date" placeholder="Select a date"/>
          </div>
          <div class="field">
            <label>Select a time</label>
            <select v-model="event.time">
              <option v-for="time in times" :key="time">{{ time }}</option>
            </select>
          </div>
          <input type="submit" class="button -fill-gradient" value="Submit"/>
        </form>
    </div>
</template>

<script>
import datepicker from 'vuejs-datepicker';
import { mapGetters } from "vuex";
export default {
    name: "EventCreate",
    components: {
        datepicker,
    },
    data() {
        const times = [];
        for (let i = 0; i <= 24; i++) {
            times.push(i +':00');
        }
        return {
            times,
            event: this.createFreshEventObject()
        }
    },
    computed: {
        ...mapGetters(['enviandoCategorias', 'enviandoUser'])
    },
    methods: {
        creandoEvento(){
            this.event.user = this.enviandoUser;
            this.$store.dispatch('eventModule/createEvent',this.event).then(()=>{
              this.$router.push({name: 'EventShow', params: {id : this.event.id}});
              this.event = this.createFreshEventObject();
            }).catch(error => console.error(`Hubo un error: ${error}`));
        },
        createFreshEventObject(){
            return {
                id: Math.floor(Math.random() * 1000000),
                title: '',
                date: '',
                location: '',
                description: '',
                category: '',
                organizer: '',
                attendees: [
                    {
                        "id": "abc123",
                        "name": "Deven Jahr"
                    },
                    {
                        "id": "ghi789",
                        "name": "Beth Swanson"
                    },
                    {
                        "id": "jkl101",
                        "name": "Mary Gordon"
                    }
                ]
            }
        } 
    },
}
</script>

<style lang="scss" scoped>
    .field{
        margin-bottom: 24px;
    }
</style>