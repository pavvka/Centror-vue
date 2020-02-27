<template>
    <section class="ourPrograms">
        <div class="container">
            <div class="row">
                <div class="col-lg-4" v-for="(item,index) in 3" :key="index">
                    <div class="program">
                        <h1 class="program__title">Избранная программа</h1>
                        <div class="program__imgBlock"></div>
                        <div class="program__text">
                            Краткая аннотация Краткая аннотация Краткая аннотация Краткая аннотация
                            Краткая аннотация Краткая аннотация Краткая аннотация Краткая аннотация
                            Краткая аннотация
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
.program{
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background-color: rgba(97, 139, 170, 0.44);
    width: 350px;
    text-align: center;
    margin-bottom: 30px;
    border-radius: 8px;
    padding: 8px;
}
.program__imgBlock{
    width: 310px;
    height: 150px;
    background: grey;
    display: inline-block;
}
.program__title{
    font-size: 15px;
    padding: 5px;
    padding-top: 10px;
}
.program__text{
    width: 280px;
    font-size: 15px;
    display: inline-block;
    padding-bottom: 10px;
    padding-top: 10px;
}
</style>
