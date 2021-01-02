<template>
    <div class="notification-container">
        <notification-bar v-for="item in sendNotifications" :key="item.id" :notification="item"></notification-bar>
    </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue';
import { mapGetters } from "vuex";

export default {
    name: 'NotificationContainer',
    components: {
        NotificationBar
    },
    computed: {
        ...mapGetters('notificationsModule',["sendNotifications"])
    }
}
</script>

<style scoped>
    .notification-container {
      position: fixed;
      bottom: 0;
      left: 80%;
      font-size: 20px;
    }
</style>