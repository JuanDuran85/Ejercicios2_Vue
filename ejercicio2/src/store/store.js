import Vue from 'vue';
import Vuex from 'vuex';
import * as userModule from './modules/user';
import * as notificationsModule from './modules/notifications';
import eventModule from './modules/event';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule,
    eventModule,
    notificationsModule
  },
  state: {
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
  },
  getters: {
    enviandoCategorias(state){
      return state.categories;
    },
  }
})
