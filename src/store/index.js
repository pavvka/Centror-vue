import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api : {
      // refact this
      programlink: 'http://centror.ru:1337/programs',
      subcategorieslink: 'http://centror.ru:1337/subcategories',
    }
  },
  mutations: {
    SET_API(state,api){
      state.api = api
    }
  },
  actions: {
    writeApi(context, newApi){
      context.commit('SET_API', newApi)
    }
  },
  getters: {
    takeProgramm(state){
      return state.api.programlink
    },
    takeSubcategories(state){
      return state.api.subcategorieslink
    }
  },
  modules: {
  }
})
