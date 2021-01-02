import Vue from 'vue';
import Vuex from 'vuex';
import * as userModule from './modules/user';
import eventModule from './modules/event.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule,
    eventModule
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
