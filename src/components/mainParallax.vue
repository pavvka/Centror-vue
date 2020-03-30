<template>
    <section class="ourParallax">
    <div class="container-fluid">
      <div  v-parallax.modifier="0.3" class="parralax">
        <img src="../images/parallax.jpg" alt="" class="image">
      </div>
      <div class="parallax-content">
        <div class="row">
        <div class="col-lg-4">
          <div class="parallaxTitle">
            {{HomeContent.Title}}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="parallaxBody">
            {{HomeContent.Text}}
          </div>
        </div>
      </div>
      </div>
    </div>
    </section>
</template>

<script>
import Parallax from 'vue-parallaxy'
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
          // this.HomeContent = response.data[0].Constructor[1];
          for (let i = 0; i < response.data[0].Constructor.length; i++) {
            console.log(response.data[0].Constructor[i]["__component"])
            if(response.data[0].Constructor[i]["__component"] === "block.parallax"){
                this.HomeContent = response.data[0].Constructor[i]
                break
            }
          }
      });
    },
  },
  beforeMount(){
    this.getHashtags()
  },
}
</script>

<style lang="scss" scoped>
.parallax-content {
  top: 0;
  position: absolute;
  z-index: 5;
}
.container-fluid {
  position: relative;
  padding: 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
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
.parralax{
  min-height: 660px;
}
.image{
  min-height: 660px;
  width: 100%;
  object-fit: cover;
  position: absolute;
}
.parallaxTitle{
  display: inline-block;
  background: rgba(97, 139, 170, 0.7);
  color: #fff;
  font-size: 18px;
  margin-top: 300px;
  margin-left: 30px;
  min-height: 40px;
  min-width: 250px;
  text-align: center;
}
.parallaxBody{
  background: rgba(48, 60, 76, 0.7);
  color: #fff;
  margin: 30px;
  padding: 10px;
}

</style>
