<template>
    <section class="ourAdvantages">
        <div class="container">
            <div class="row">
                <div class="col-lg-6" v-for="(item,index) in HomeContent" :key="index">
                    <div class="advantages">
                    <img :src="item.Img" alt="" class="advantage__img">
                    <span class="advantages__text">{{item.Text}}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
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
          this.HomeContent = response.data[0].Constructor[1].advantage;
      });
    },
  },
  beforeMount(){
    this.getHashtags()
  },
}
</script>

<style scoped>

.advantages{
    height: 100px;
}
.advantages__text{
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    vertical-align: text-bottom;
}
.advantages__icon{
    color: #fff;
    font-size: 50px;
}
.advantage__img{
    width: 30px;
    height: 30px;
}
 @media (max-width: 991px) {
    .posit{
      top: 100px;
    }
  }
</style>
