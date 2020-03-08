import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api : {
      // refact this
      hosturl:'http://localhost:1337',
      about: 'http://localhost:1337/info-blocks',
      programlink: 'http://localhost:1337/programs',
      articlelink: 'http://localhost:1337/articles',
      subcategorieslink: 'http://localhost:1337/subcategories',
      caseslink: 'http://localhost:1337/cases',
      footherlink: 'http://localhost:1337/futers',
      foothersocialslink: 'http://localhost:1337/socials',
      contactslink: 'http://localhost:1337/contacts',
      homelink: 'http://localhost:1337/mains',
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
    },
    takeFooterLinks(state){
      return state.api.footherlink
    },
    takeFooterSocialLinks(state){
      return state.api.foothersocialslink
    },
    takeAbouts(state){
      return state.api.about
    },
    takeContacts(state){
      return state.api.contactslink
    },
    takeHome(state){
      return state.api.homelink
    }
  },
  modules: {
  }
})
