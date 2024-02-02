import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth:false,
    user:{},
    responseErr:false,
    errorMessage:'',
    recipe:{},
  },

  // let isAuth = this.$store.getters.GET_IS_AUTH;
  getters: {
    GET_IS_AUTH: state => {
      return state.isAuth;
    },
    GET_USER: state => {
      return state.user;
    },
    GET_RECIPE: state => {
      return state.recipe;
    },
    GET_RESPONSE_ERR: state => {
      return state.responseErr;
    },
    GET_ERR_MESSAGE: state => {
      return state.errorMessage;
    },
  },

  // this.$store.commit('SET_NAME', your_name);
  mutations: {
    SET_IS_AUTH_M: (state, payload) => {
      state.isAuth = payload;
    },
    SET_USER_M: (state, payload) => {
      state.user = payload;
    },
    SET_RECIPE_M: (state, payload) => {
      state.recipe = payload;
    },
    SET_RESPONSE_ERR_M: (state, payload) => {
      state.responseErr = payload;
    },
    SET_ERR_MESSAGE_M: (state, payload) => {
      state.errorMessage = payload;
    },
  },

  // this.$store.dispatch('SET_IS_AUTH_A', isAuth);
  actions: {
    SET_IS_AUTH_A: (context, payload) => {
      context.commit('SET_IS_AUTH_M', payload);
    },
    SET_USER_A: (context, payload) => {
      context.commit('SET_USER_M', payload);
    },
    // payload = [bool]
    SET_RECIPE_A: (context, payload) => {
      context.commit('SET_RECIPE_M', payload);
    },
    // payload = [bool, string]
    SET_RESPONSE_ERR_A: (context, payload) => {
      context.commit('SET_RESPONSE_ERR_M', payload[0]);
      context.commit('SET_ERR_MESSAGE_M', payload[1]);
    },
  },

  modules: {

  }
})
