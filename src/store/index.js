import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api : {
      // refact this
      programlink: 'http://localhost:1337/lecturers',
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
    }
  },
  modules: {
  }
})
