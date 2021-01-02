import EventServices from '@/services/EventServices';

export default {
    namespaced: true,
    state: {
        events: [],
        totalEvents: 0,
        event: {}
    },
    getters: {
        enviandoEvents(state){
            return state.events;
        },
        enviandoTotalEvents(state){
            return state.totalEvents;
        },
        enviandoEventoId(state){
            return state.event;
        },
        getEventById: (state) => (id) => {
            return state.events.find(result => result.id === id);
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
        createEvent({commit, dispatch},event){
            return EventServices.postEvent(event).then(()=>{
                commit('mutandoEvento',event);
                const notification = {
                    type: 'success',
                    message: `The event was added`
                };
                dispatch('notificationsModule/addNotifications', notification, {root: true});
            }).catch(error =>{
                console.error(error);
                const notification = {
                    type: 'error',
                    message: `There was problem creating an Event: ${error.message}`
                };
                dispatch('notificationsModule/addNotifications', notification, {root: true});
                throw error;
            })
        },
        fetchApi({commit, dispatch}, page){
            EventServices.getEvents(2, page).then(resp => {
                commit('mutandoEventos', resp);
            }).catch(error => {
                console.error(error);
                const notification = {
                    type: 'error',
                    message: `There was problem fetching events: ${error.message}`
                };
                dispatch('notificationsModule/addNotifications', notification, {root: true});
            });
        },
        fetchApiEventoId({commit,getters,dispatch}, id){
            let evento = getters.getEventById(id);
            if (evento) {
                commit('mutandoEventoIndividual',evento);
            } else {
                EventServices.getEvent(id).then(resp => {
                    commit('mutandoEventoIndividual',resp.data);
                }).catch(error => {
                    console.error(error);
                    const notification = {
                        type: 'error',
                        message: `There was problem fetching event: ${error.message}`
                    };
                    dispatch('notificationsModule/addNotifications', notification, {root: true});
                });
            }
        }
    }
}