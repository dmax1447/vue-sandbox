import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: [],
  },
  getters: {
    userList: (state) => state.userList,
  },
  mutations: {
    setUsers(state, payload) {
      state.userList = payload;
    },
  },
  actions: {
    loadUsers({ commit, dispatch }) {
      dispatch('wait/start', 'userLoader', { root: true });
      console.log('start load users...');
      return new Promise((resolve) => {
        setTimeout(() => {
          const promise = axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
              commit('setUsers', response.data);
              dispatch('wait/end', 'userLoader', { root: true });
            });
          resolve(promise);
        }, 10000);
      });

      // return axios.get('https://jsonplaceholder.typicode.com/users')
      //   .then((response) => {
      //     commit('setUsers', response.data);
      //   });
    },
  },
  modules: {
  },
});
