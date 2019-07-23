import Vue from 'vue';
import Vuex from 'vuex';
import menu from '@/config/menu.config';
import user from '@/store/modules/user';
import progress from '@/store/modules/progress';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: menu
  },
  getters: {
    menu: state => state.menu
  },
  modules: {
    user,
    progress
  }
});
