<template>
  <div>
    <h1>Event Listing</h1>
    <event-card v-for="(item,index) in events" :key="index" :event="item"></event-card>
    <BaseIcon/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventServices.js';

export default {
  name: 'EventList',
  data() {
    return {
      events: []
    }
  },
  components: {
    EventCard
  },
  created() {
    EventService.getEvents()
      .then(resp => {
        this.events = resp.data;
      })
      .catch(error => console.error(error));
  },
}
</script>

<style lang="scss">
  
</style>
