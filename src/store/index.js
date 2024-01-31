import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth:false,
    responseErr:'',
    recipe:{},
  },

  // let isAuth = this.$store.getters.GET_IS_AUTH;
  getters: {
    GET_IS_AUTH: state => {
      return state.isAuth;
    },
    GET_RECIPE: state => {
      return state.recipe;
    },
    GET_RESPONSE_ERR: state => {
      return state.responseErr;
    },
  },

  // this.$store.commit('SET_NAME', your_name);
  mutations: {
    SET_IS_AUTH_M: (state, payload) => {
      state.isAuth = payload;
    },
    SET_RECIPE_M: (state, payload) => {
      state.recipe = payload;
    },
    SET_RESPONSE_ERR_M: (state, payload) => {
      state.responseErr = payload;
    },
  },

  // this.$store.dispatch('SET_IS_AUTH_A', isAuth);
  actions: {
    SET_IS_AUTH_A: (context, payload) => {
      context.commit('SET_IS_AUTH_M', payload);
    },
    SET_RECIPE_A: (context, payload) => {
      context.commit('SET_RECIPE_M', payload);
    },
    SET_RESPONSE_ERR_A: (context, payload) => {
      context.commit('SET_RESPONSE_ERR_M', payload);
    },
  },

  modules: {

  }
})
