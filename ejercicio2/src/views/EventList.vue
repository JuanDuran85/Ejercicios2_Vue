<template>
  <div>
    <h1>Event Listing</h1>
    <event-card></event-card>
    <BaseIcon/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'EventList',
  components: {
    EventCard
  },

}
</script>

<style lang="scss">
  
</style>
