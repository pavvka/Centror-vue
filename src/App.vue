<template>
  <div id="app">
    <Navigation
      
      :isActive="isActive"
      v-bind:class="{ active: isActive }"
      nav-brand="Centor"
      :nav-list="{
        'Услуги': '/training',
        'Кейсы': '/cases',
        'Блог': '/article',
        'О нас': '/about',
        'Контакты': '/contacts'
      }" />
      <!-- 'Услуги': {'Консалтинг':'/consulting', 'Обучение': '/study', 'Бизнес туризм': '/'}, -->
    <div class="content">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Footer
  },
  data(){
    return{
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background-image: linear-gradient(269.77deg, #2A3341 0.3%, #2D3544 1.01%, #2E3746 4.83%, #303C4C 11.55%, #364252 28.98%, #384556 50.45%, #364252 75.79%, #303C4C 89.15%, #2C3846 94.92%, #2D3946 98.92%, #252D39 99.57%);
  color: #2c3e50;

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .content {
    display: flex;
    flex-direction: column;

    flex: 1 1 auto;

    margin: 2rem 0;
    min-height: 70vh;
  }
  //Change navbar posit
  .posit{
    margin: 0;
    width: 100%;
    
    // top: -10px;
  }
  @media (min-width: 990px) {
    // .posit{
    //   height: 43px;
    // }
  }
}
</style>
