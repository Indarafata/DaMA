export default {
    namespaced: true,
    state: {
        authenticated: false,
        user: [],
    },
    getters: {
        checkAuth(state) {
            return state.authenticated;
        },
        checkUser(state) {
            return state.user;
        },
    },
    mutations: {
        SET_AUTHENTICATED(state, value){
            state.authenticated = value
        },
        SET_USER(state, value){
            state.user = value
        },
    },
    actions: {

    },
}