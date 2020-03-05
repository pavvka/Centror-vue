<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Loop Mode / Infinite Loop</span>
        <span>（</span>
        <span>无限循环模式</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/20-infinite-loop.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
            <h2 class="class__title">Описание</h2>
            <img src="../images/StudyBG.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <h2 class="class__title">Описание</h2>
            <img src="../images/StudyBG.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <h2 class="class__title">Описание</h2>
            <img src="../images/StudyBG.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <h2 class="class__title">Описание</h2>
            <img src="../images/StudyBG.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <h2 class="class__title">Описание</h2>
            <img src="../images/StudyBG.png" alt="">
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'app',
    components: {
    swiper,
    swiperSlide
  },
  data () {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
  }
}
</script>

<style scoped>
.ourCases{
    background-image: url('../images/CasesBackground.png');
    min-height: 800px;
}
.goodCases{
    color:#fff;
    min-height: 400px;
    max-width: 800px;
    background-color: #39495B;
    padding: 25px;
    border-radius: 8px;
    margin-top: 30px;
}
.casesTitle{
    color: #fff;
    margin-top: 30px;
}
.goodCases_one{
    font-size: 18px;
    margin-top: 15px;
}
</style>