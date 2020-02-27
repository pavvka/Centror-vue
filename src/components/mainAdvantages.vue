<template>
    <section class="ourAdvantages">
        <div class="container" v-for="(item,index) in 3" :key="index">
            <div class="row">
                <div class="col-lg-6">
                    <div class="advantages">
                    <div class="advantages__icon"></div>
                    <p class="advantages__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="advantages">
                    <div class="advantages__icon">{{item.message}}</div>
                    <p class="advantages__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
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
    max-width: 400px;
    display: inline-block;
    text-align: left;
    vertical-align: text-bottom;
}
.advantages__icon{
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: grey;
    display: inline-block;
    margin-right: 20px;
}

</style>
