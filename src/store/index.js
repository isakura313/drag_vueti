import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    myList: [
      {
        id: 1,
        name: 'name1',
        src:
          'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 2,
        name: 'name2',
        src:
          'https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 3,
        name: 'name3',
        src:
          'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 4,
        name: 'name4',
        src:
          'https://images.pexels.com/photos/2082949/pexels-photo-2082949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
    ],
  },
  mutations: {
    updateList(state, value) {
      state.myList = value;
    },
  },
  actions: {},
  modules: {},
});
