export const state = {
    user: {
        "id": "abc123",
        "name": "Constance"
      },
};

export const getters = {
    enviandoUser(state){
        return state.user;
    },
};