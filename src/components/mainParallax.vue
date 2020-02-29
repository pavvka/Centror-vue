<template>
    <section class="ourParallax">
      <div id="app">
  <v-app id="inspire">
    <v-parallax
      dark
      src="../images/parallax.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
          <h4 class="subheading">Build your application today!</h4>
        </v-col>
      </v-row>
    </v-parallax>
  </v-app>
</div>
    </section>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.headerwrap{
  display: block;
  text-align: center;
  height: 500px;
  width: 100%;
  background-size: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.bigImg{
  width: 100%;
  margin-bottom: 50px;
  margin-top: 50px;
}
</style>
