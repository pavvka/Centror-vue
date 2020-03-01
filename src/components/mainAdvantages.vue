<template>
    <section class="ourAdvantages">
        <div class="container" v-for="(item,index) in 3" :key="index">
            <div class="row">
                <div class="col-lg-6">
                    <div class="advantages">
                    <span class="advantages__icon"><i class="fa fa-thumbs-up"></i></span>
                    <span class="advantages__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="advantages">
                    <div class="row">
                      <div class="col-xs-2">
                        <span class="advantages__icon"><i class="fa fa-thumbs-up"></i></span>
                      </div>
                      <div class="col-xs-10">
                        <span class="advantages__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
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
 @media (max-width: 991px) {
    .posit{
      top: 100px;
    }
  }
  @media (max-width: 900px) {
    .ourAdvantages{
      margin-top: 30%;
    }
  }
  @media (max-width: 600px) {
    .ourAdvantages{
      margin-top: 60%;
    }
  }
  @media (max-width: 460px) {
    .ourAdvantages{
      margin-top: 400px;
    }
  }
</style>
