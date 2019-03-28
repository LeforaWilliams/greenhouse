import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// mutation-->
//action --> event name and token
export default new Vuex.Store({
  strict: true,
  state: {
    user: null,
    isUserLoggedIn: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    }
  },

  actions: {
    setToken({ commit }, token) {
      //this commit is the commad to call the mutations with the name setToken and passes the token value that the state should be changed to
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      //this commit is the commad to call the mutations with the name setToken and passes the token value that the state should be changed to
      commit("setUser", user);
    }
  }
});
