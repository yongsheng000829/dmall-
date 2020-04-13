import Vue from 'vue';
import Vuex from 'vuex';
import user from "./modules/user"
import showdata from "./modules/showdata";
import bannerlist from "./modules/bannerlist";
import shoplist from "./modules/shoplist";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,showdata,bannerlist,shoplist
  },
});
