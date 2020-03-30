import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//let baseurl='https://api.centror.ru/';
// let baseurl='http://localhost:1337/'
let baseurl='http://45.136.247.192:1488/'
export default new Vuex.Store({
  state: {
    search: '',
    api : {
      hosturl: baseurl,
      about: baseurl + 'info-blocks',
      programlink: baseurl + 'programs',
      articlelink: baseurl + 'articles',
      subcategorieslink: baseurl + 'subcategories',
      caseslink: baseurl + 'cases',
      footherlink: baseurl + 'futers',
      foothersocialslink: baseurl + 'socials',
      contactslink: baseurl + 'contacts',
      homelink: baseurl + 'mains',
      categorieslink: baseurl + 'categories',
      tagsprogramslink: baseurl + 'tags-programs',
    }
  },
  mutations: {
    SET_SEARCH(state,search){
      state.search = search
    },
    SET_API(state,api){
      state.api = api
    }
  },
  actions: {
    writeSearch(context, newSearch){
      context.commit('SET_SEARCH', newSearch)
    },
    writeApi(context, newApi){
      context.commit('SET_API', newApi)
    }
  },
  getters: {
    takeTagsProgramms(state){
      return state.api.tagsprogramslink
    }, 
    takeSearch(state){
      return state.search
    },
    takeProgramm(state){
      return state.api.programlink
    },
    takeArticle(state){
      return state.api.articlelink
    },
    takeSubcategories(state){
      return state.api.subcategorieslink
    },
    takeCategories(state){
      return state.api.categorieslink
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
