<template>
  <div>
    <h1>Event Listing</h1>
    <event-card v-for="(item,index) in events" :key="index" :event="item"></event-card>
    <BaseIcon/>
    <div class="pagination">
      <router-link id="page-prev" :to="{name: 'EventList', query: {page: page - 1}}" rel="prev" v-if="page != 1">
        Prev Page
      </router-link>
      <router-link id="page-next" :to="{name: 'EventList', query: {page: page + 1}}" rel="next" v-if="hasNextpage">
        Next Page
      </router-link>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventServices.js';

export default {
  name: 'EventList',
  props: ['page'],
  data() {
    return {
      events: [],
      totalEvents: 0,
    }
  },
  components: {
    EventCard
  },
  created() {
    EventService.getEvents(2, this.page)
      .then(resp => {
        this.events = resp.data;
        this.totalEvents = resp.headers['x-total-count'];
      })
      .catch(error => console.error(error));
  },
  computed: {
    hasNextpage(){
      let totalPages = Math.ceil(this.totalEvents / 2);
      return this.page < totalPages;
    }
  },
}
</script>

<style lang="scss">
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pagination {
    display: flex;
    width: auto;
  }
  .pagination a {
    flex: 1;
    text-decoration: none;
    color: #2c3e50;
  }

  #page-prev {
    text-align: left;
  }

  #page-next {
    text-align: right;
  }
</style>
