<template>
  <div>
    <div v-for="(Homeiter, index) in Home" :key="index">

      

      <div v-if="Homeiter.__component == 'block.vstupitelnyj-blok-glavnoj-straniczy'">
        <mainLogo></mainLogo>
      </div>

      <div v-if="Homeiter.__component == 'block.favorited-subcategories'">
        <mainPrograms></mainPrograms>
      </div>

      <div v-if="Homeiter.__component == 'block.parallax'">
        <mainParallax></mainParallax>
      </div>

      <div v-if="Homeiter.__component == 'block.advatages'">
        <mainAdvantages></mainAdvantages>
      </div>


    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import mainLogo from '../components/mainLogo'
import mainAdvantages from '../components/mainAdvantages'
import mainParallax from '../components/mainParallax'
import mainPrograms from '../components/mainPrograms'

export default {
  name: 'home',
  components: {
    mainLogo,
    mainAdvantages,
    mainParallax,
    mainPrograms,
  },
  data () {
    return {
      url: {
          HomeLinks: this.$store.getters.takeHome,
      },
      Home: {},
      
    }
  },
  async created () {
    const respones1 = await fetch(this.url.HomeLinks)
    const data1 = await respones1.json()

    this.Home = data1[0].Constructor


    console.log(this.Home.sort());
  },
  mounted () {
  }
}
</script>
