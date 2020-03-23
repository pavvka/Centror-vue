<template>
    <section class="ourPrograms">
        <div class="container">
            <div class="card-carousel-wrapper">
    <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
          <div class="card-carousel--card" v-for="(item,index) in HomeContent" :key="index"><img src="https://placehold.it/330x180"/>
            <div class="card-carousel--card--footer">
              <p class="program__title">{{ item.Title }}</p>
              <p class="program__text">{{ item.Text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
  </div>
        </div>
    </section>


</template>

<script>
import Slick from 'vue-slick';
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
    currentOffset: 0,
      windowSize: 3,
      paginationFactor: 370,
      'HomeContent': '',
      url: {
          HomeApiLink: this.$store.getters.takeHome,
          SubcategoriesApilink: this.$store.getters
      }
    }
  },
    computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.HomeContent.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
        
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
    getHashtags(){
      axios.get(this.url.HomeApiLink).then((response) => {
          this.HomeContent = response.data[0].Constructor[3].favorited_subcategories;
      });
    },
    // vueSlickFuller(){
    //   for (let i = 0; i < this.HomeContent.length; i++) {
    //     this.items[i].name = this.HomeContent[i].Title
    //     this.items[i].text = this.HomeContent[i].Text
    //     console.log("kek")
    //   }
    // }
  },
  beforeMount(){
    this.getHashtags()
    // this.vueSlickFuller()
  },
}
</script>

<style scoped>


.program__text{
    width: 100%;
    font-size: 15px;
    display: inline-block;
    padding-bottom: 10px;
    padding-top: 10px;
}


.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 97%;
}
.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left, .card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 2px solid #42b883;
  border-right: 2px solid #42b883;
  cursor: pointer;
  margin: 0 20px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled], .card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel--nav__left {
  transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
  transform: rotate(45deg);
}
.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}
.card-carousel-cards .card-carousel--card {
  margin: 0 20px;
  max-width: 330px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
  font-family: 'Montserrat', sans-serif;
  background-color: rgba(97, 139, 170, 0.44);
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
}
.card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}
.card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}
.card-carousel-cards .card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
}
.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}
.card-carousel-cards .card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}
.card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  user-select: none;
}
.card-carousel-cards .card-carousel--card--footer p.tag {
  font-size: 11px;
  font-weight: 300;
  padding: 4px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
}
.card-carousel-cards .card-carousel--card--footer p.tag:before {
  content: "";
  float: left;
  position: absolute;
  top: 0;
  left: -12px;
  width: 0;
  height: 0;
  border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
  border-style: solid;
  border-width: 8px 12px 12px 0;
}
.card-carousel-cards .card-carousel--card--footer p.tag.secondary {
  margin-left: 0;
  border-left: 1.45px dashed white;
}
.card-carousel-cards .card-carousel--card--footer p.tag.secondary:before {
  display: none !important;
}
.card-carousel-cards .card-carousel--card--footer p.tag:after {
  content: "";
  position: absolute;
  top: 8px;
  left: -3px;
  float: left;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: white;
  box-shadow: -0px -0px 0px #004977;
}

@media screen and (max-width:1200px) {
  .card-carousel {
    width: 700px;
  }
}
@media screen and (max-width:830px) {
  .card-carousel {
    width: 350px;
  }
}


</style>
