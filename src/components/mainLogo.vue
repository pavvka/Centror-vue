<template>
    <div class="content">
    <div id="kek">
      <vue-particles 
      style="width: 100%;" 
      color="#dedede" 
      class="back" 
      :particlesNumber="150"
      :particleOpacity="0.7"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      ></vue-particles>
    </div>
    <div class="container">
      <div class="row posit">
          <div class="col-lg-1"></div>
          <div class="col-sm-4">
            <AnalogClock
              backgroundImage="https://i.ibb.co/LhzMQ3j/Asset-2-1.png"
              borderImage="https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-o62bcwfxu7zofs36kb0sbh4wom52bbxxszhrx8zw4y.png"
              borderWidth="8"
              scaleType="none"
              handType="line"
              scaleColor="transparent"
            />
          </div>
          <div class="col-sm-7">
              <p class="mainText">
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
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
import {AnalogClock} from 'vue-analog-clock'
export default {
  name: 'app',
  components: {
    AnalogClock
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.text-al{
    margin-left: auto;
}
.mainText{
    color: #fff;
}
.posit{
    position: absolute;
    top: 400px;
    max-width: 1000px;
}


/* MEDIA QWERTYS */
@media (min-width: 1200px) {

}
@media (max-width: 1200px) {
    .posit{
      top: 300px;
    }
}
 @media (max-width: 991px) {
    .posit{
      top: 100px;
    }
  }

</style>
