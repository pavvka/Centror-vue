<template>
  <div>
    <section class="teamBack">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <div class="mainTeam">
                        <h1 class="mainTeam__title">
                            Centror
                        </h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <p class="mainTeam__text">
                        Макромолекула, обеспечивающая хранение, передачу из поколения в поколение и реализацию генетической программы развития и функционирования живых организмов.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="teamMain">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="teamMembers">
                        <div class="row">
                            <div class="col-lg-4">
                                <h2 class="teamMembers__title">
                                    Наша команда
                                </h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="teamMembers__person">
                                    <img src="../images/member1.png" alt="" class="teamMembers__person__img">
                                    <h3 class="teamMembers__person__name">Петя</h3>
                                    <p class="teamMembers__person__text">Fullstack deweloper</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="teamMembers__person">
                                    <img src="../images/member2.png" alt="" class="teamMembers__person__img">
                                    <h3 class="teamMembers__person__name">Оля</h3>
                                    <p class="teamMembers__person__text">Просто красивая</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="teamMembers__person">
                                    <img src="../images/member1.png" alt="" class="teamMembers__person__img">
                                    <h3 class="teamMembers__person__name">Петя Клон</h3>
                                    <p class="teamMembers__person__text">Fullstack deweloper</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="Portfolio">
                        <div class="row">
                            <div class="col-lg-4">
                                <h2 class="Portfolio__title">
                                    Портфолио
                                </h2>
                            </div>
                        </div>
                        <div class="row company" v-for="(index,i) in 3" :key="i">
                            <div class="col-lg-1"></div>
                            <div class="col-lg-4">
                                <h3 class="company__title">
                                    Company
                                </h3>
                                <div class="company__text">
                                    description omg description omg description omg description omg
                                    description omg description omg description omg description omg
                                </div>
                            </div>
                            <div class="col-lg-2"></div>
                            <div class="col-lg-4">
                                <img src="../images/study1.png" alt="" class="company__img">
                            </div>
                            <div class="col-lg-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'study'
}
</script>

<style scoped>
.teamBack{
    background-image: url(../images/TeamBackground.png);
    height: 600px;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
}
.mainTeam{
    color: #fff;
    margin-top: 100px;
}
.mainTeam__title{
    font-family: 'Teko', sans-serif;
    font-size: 90px;
}
.mainTeam__text{
    width: 400px;
    font-size: 20px;
    margin-top: 20px;
    text-align: left;
    color: #000;
}
.teamMain{
    margin-top: 30px;
    margin-bottom: 80px;
}
.teamMembers{
    color: #fff;
    min-height: 500px;
    background: linear-gradient(0deg, #2C3846, #2C3846), linear-gradient(179.72deg, rgba(97, 139, 170, 0.44) 7.58%, rgba(58, 71, 90, 0) 99.54%);
    border-radius: 10px;
    margin-top: 100px;
    padding: 10px;
}
.teamMembers__title{
    font-size: 50px;
    margin-top: 30px;
}
.teamMembers__person{
    margin-top: 30px;
}
.teamMembers__person__img{
    width: 250px;
    margin-bottom: 20px;
}
.Portfolio{
    background: linear-gradient(0deg, rgba(97, 139, 170, 0.44), rgba(97, 139, 170, 0.44)), #3D4A5B;
    min-height: 500px;
    color: #fff;
    border-radius: 10px;
    margin-top: 100px;
    padding: 10px;
}
.Portfolio__title{
    font-size: 50px;
    margin-top: 30px;
}
.company{
    margin-top: 30px;
}
.company__title{
    font-family: 'Teko', sans-serif;
    font-size: 45px;
    text-align: left;
}
.company__text{
    text-align: left;
    font-size: 15px;
}
.company__img{
    width: 250px;
}
</style>
