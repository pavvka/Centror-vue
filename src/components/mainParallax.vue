<template>
    <section class="ourParallax">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <img src="../images/parallax.jpg" alt="" class="bigImg">
        </div>
      </div>
      </div>
        <parallax>
           <img src="../images/parallax.jpg" alt="" class="bigImg">
        </parallax>
    </section>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
  name: 'app',
  components: {
    Parallax
  },
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
