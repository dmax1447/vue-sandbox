import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const promises = {};

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
      console.log(promises, 'promises');

      if (promises.loadUsers && promises.loadUsers.status === 'fulfilled') {
        console.log('have fulfilled promise');
        return promises.loadUsers.promise;
      }

      if (promises.loadUsers && promises.loadUsers.status === 'pending') {
        console.log('have pending promise');
        return promises.loadUsers.promise;
      }

      dispatch('wait/start', 'userLoader', { root: true });

      const promiseItem = new Promise((resolve) => {
        setTimeout(() => {
          const promise = axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
              commit('setUsers', response.data);
              dispatch('wait/end', 'userLoader', { root: true });
            });
          promises.loadUsers.status = 'fulfilled';
          resolve(promise);
        }, 10000);
      });

      promises.loadUsers = {
        status: 'pending',
        promise: promiseItem,
      };

      return promiseItem;

      // return axios.get('https://jsonplaceholder.typicode.com/users')
      //   .then((response) => {
      //     commit('setUsers', response.data);
      //   });
    },
  },
  modules: {
  },
});
