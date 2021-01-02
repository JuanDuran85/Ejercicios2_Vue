export const namespaced = true;

export const state = {
    notifications: []
}
export const getters = {
    sendNotifications(state){
        return state.notifications;
    }
}

let idNot = 0;
export const mutations = {
    mutandoNotificationsAdd(state,notification){
        state.notifications.push({...notification, id: idNot++});
    },
    mutandoNotificationsRemove(state, notificationRomeve){
        state.notifications = state.notifications.filter(res => res.id !== notificationRomeve.id);
    }
}
export const actions = {
    addNotifications({commit},notification){
        commit('mutandoNotificationsAdd',notification);
    },
    removeNotifications({commit}, notificationRemove){
        commit('mutandoNotificationsRemove',notificationRemove);
    }
}