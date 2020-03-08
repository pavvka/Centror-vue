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

<style lang="scss" scoped>
.text-al{
    margin-left: auto;
}
#kek {
  min-height: 80vh;
}
.mainText{
    color: #fff;
    text-align: center;
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
</style>
