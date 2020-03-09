<template>
    <section class="ourParallax">
    <div class="container">
      <img v-parallax.modifier="0.3" src="../images/parallax.jpg" alt="" class="image">
    </div>
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
.container {
  overflow: hidden;
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
.image{
  width: 100%;
  object-fit: cover;
}

</style>
