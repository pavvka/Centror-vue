import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import vuetify from '@/plugins/vuetify'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueParallaxJs from 'vue-parallax-js'

// add vue-parallax-js to vue
Vue.use(VueParallaxJs)

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
