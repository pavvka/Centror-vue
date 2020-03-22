<template>
    <div class="content">
    <div id="kek">
      <vue-particles
      color="#dedede"
      class="back"
      style="width: 100%"
      :particlesNumber="60"
      :particleOpacity="0.7"
      shapeType="circle"
      :particleSize="7"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="200"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      ></vue-particles>
    </div>
    <div class="container-fluid">
      <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-5">
            <div class="clock">
              <AnalogClock
                backgroundImage="https://i.ibb.co/LhzMQ3j/Asset-2-1.png"
                borderImage="https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-o62bcwfxu7zofs36kb0sbh4wom52bbxxszhrx8zw4y.png"
                scaleType="none"
                handType="line"
                scaleColor="transparent"
                class="myClock"
              />
            </div>
          </div>
          <div class="col-md-6">
              <p class="mainText">
                {{this.HomeContent[0].Constructor[0].text}}
              </p>
          </div>
      </div>
    </div>
      <!-- <div class="row">
          <div class="col-lg-12">
              <div class="contacts">
                  <span class=""><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></span>
                  <span class="phone">+99119998877</span>
                  <span class=""><a href="#" class="facebook"><i class="fa fa-facebook-square"></i></a></span>
              </div>
          </div>
      </div> -->
    </div>
</template>

<script>
import axios from 'axios'
import {AnalogClock} from 'vue-analog-clock'
export default {
  name: 'app',
  components: {
    AnalogClock
  },
  data () {
    return {
      'HomeContent': '',
      url: {
          HomeApiLink: this.$store.getters.takeHome,
          SubcategoriesApilink: this.$store.getters
      },
    }
  },
  methods:{
    getHashtags(){
      axios.get(this.url.HomeApiLink).then((response) => {
          this.HomeContent = response.data;
      });
    },
  },
  beforeMount(){
    this.getHashtags()
  },
}
</script>

<style lang="scss" scoped>
.text-al{
    margin-left: auto;
}
#kek {
  min-height: 80vh;
}
.mainText{
  font-family: Montserrat;
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin-top: 230px;
}
.content {
  position: relative;
}
.container-fluid {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.col-md-6, .col-md-5 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.clock{
  margin-top: 230px;
}
</style>
