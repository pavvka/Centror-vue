import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api : {
      // refact this
      hosturl:'http://localhost:1337',
      programlink: 'http://localhost:1337/programs',
      articlelink: 'http://localhost:1337/articles',
      subcategorieslink: 'http://localhost:1337/subcategories',
      caseslink: 'http://localhost:1337/cases'
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
    takeArticle(state){
      return state.api.articlelink
    },
    takeSubcategories(state){
      return state.api.subcategorieslink
    },
    takeHost(state){
      return state.api.hosturl
    },
    takeCases(state){
      return state.api.caseslink
    }
  },
  modules: {
  }
})
