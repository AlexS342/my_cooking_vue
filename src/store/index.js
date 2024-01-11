import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth:false,
  },

  // let isAuth = this.$store.getters.GET_IS_AUTH;
  getters: {
    GET_IS_AUTH: state => {
      return state.isAuth;
    }
  },

  // this.$store.commit('SET_NAME', your_name);
  mutations: {
    SET_IS_AUTH_M: (state, payload) => {
      state.isAuth = payload;
    }
  },

  // this.$store.dispatch('SET_IS_AUTH_A', isAuth);
  actions: {
    SET_IS_AUTH_A: (context, payload) => {
      context.commit('SET_IS_AUTH_M', payload);
    },
  },

  modules: {

  }
})
