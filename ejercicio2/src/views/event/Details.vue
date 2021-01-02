<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ enviandoEventoId.time }} on {{ enviandoEventoId.date }}</span>
      <h1 class="title">{{ enviandoEventoId.title }}</h1>
      <h5>Organized by {{ enviandoEventoId.organizer }}</h5>
      <h5>Category: {{ enviandoEventoId.category }}</h5>
    </div>
    <BaseIcon name="map"><h2>Location</h2></BaseIcon>
    <address>{{ enviandoEventoId.location }}</address>
    <h2>Event details</h2>
    <p>{{ enviandoEventoId.description }}</p>
    <h2>Attendees
      <span class="badge -fill-gradient">{{ enviandoEventoId.attendees ? enviandoEventoId.attendees.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(attendee, index) in enviandoEventoId.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'Details',
  props: ['id'],
  created() {
   this.$store.dispatch('eventModule/fetchApiEventoId',this.id);
  },
  computed: {
    ...mapGetters({'enviandoEventoId': 'eventModule/enviandoEventoId'})
  }
}
</script>

<style lang="scss" scoped>
    .location {
      margin-bottom: 0;
    }
    .location > .icon {
      margin-left: 10px;
    }
    .event-header > .title {
      margin: 0;
    }
    .list-group {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .list-group > .list-item {
      padding: 1em 0;
      border-bottom: solid 1px #e5e5e5;
    }
</style>
