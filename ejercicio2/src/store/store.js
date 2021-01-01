import Vue from 'vue';
import Vuex from 'vuex';
import EventServices from '../services/EventServices';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      "id": "abc123",
      "name": "Constance"
    },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: [],
    totalEvents: 0,
    event: {}
  },
  getters: {
    enviandoCategorias(state){
      return state.categories;
    },
    enviandoUser(state){
      return state.user;
    },
    enviandoEvents(state){
      return state.events;
    },
    enviandoTotalEvents(state){
      return state.totalEvents;
    },
    enviandoEventoId(state){
      return state.event;
    }
  },
  mutations: {
    mutandoEvento(state,event){
      state.events.push(event);
    },
    mutandoEventos(state,resp){
      state.events = resp.data;
      state.totalEvents = resp.headers['x-total-count'];
    },
    mutandoEventoIndividual(state,eventoMostrar){
      state.event = eventoMostrar
    }
  },
  actions: {
    createEvent({commit},event){
      return EventServices.postEvent(event).then(()=>{
        commit('mutandoEvento',event);
      })
    },
    fetchApi({commit}, page){
      EventServices.getEvents(2, page)
      .then(resp => {
        commit('mutandoEventos', resp);
      })
      .catch(error => console.error(error));
    },
    fetchApiEventoId({commit}, id){
      EventServices.getEvent(id)
      .then(resp => {
        commit('mutandoEventoIndividual',resp.data);
      })
      .catch(error => console.error(error));
    }
  },
})
