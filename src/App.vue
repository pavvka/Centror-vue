<template>
  <div id="app">
    <Navigation
      class="posit"
      nav-brand="Centor"
      :nav-list="{
        'Услуги': '/training',
        'Кейсы': '/about',
        'Клуб Centror': '/about',
        'Блог': '/training',
        'О нас': '/about',
        'Контакты': '/contacts'
      }" />

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
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background-color: #384455;
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
  .posit{
    position: absolute;
    margin: 0;
    width: 100%;
  }
  // @media (min-width: 1200px) {
  //   .posit{
  //     position: absolute;
  //     width: 90%;
  //     left: 3%;
  //   }
  // }
}
</style>
