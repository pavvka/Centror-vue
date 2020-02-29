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
                    <div class="Stories">
                        <div class="row">
                            <div class="col-lg-4">
                                <h2 class="Stories__title">
                                    Блок истории
                                </h2>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-lg-8">
                              <p class="story">
                                Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст 
                                Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                                 Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                                  Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                                   Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                                    Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                                     Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                                      Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                                       Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                                        Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                                         Текст Текст Текст Текст
                              </p>
                            </div>
                            <div class="col-lg-4">
                                <div class="Stories__person">
                                    <img src="../images/member2.png" alt="" class="Stories__person__img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="teamMembers__title__block">
                  <h2 class="teamMembers__title">Наша Команда</h2>
                </div>
              </div>
              
            </div>
            <div class="row">
              <div class="col-lg-4" v-for="(member,index) in 6" :key="index">
                <div class="member">
                    <div class="member__img">
                      <img src="../images/member2.png" alt="" class="member__pict">
                    </div>
                    <h1 class="member__fio">ФИО</h1>
                    <p class="member__status">
                      Должность
                    </p>
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
.Stories{
    color: #fff;
    min-height: 500px;
    background: linear-gradient(0deg, #2C3846, #2C3846), linear-gradient(179.72deg, rgba(97, 139, 170, 0.44) 7.58%, rgba(58, 71, 90, 0) 99.54%);
    border-radius: 10px;
    margin-top: 100px;
    padding: 10px;
}
.Stories__title{
  color: #fff;
    font-size: 50px;
    margin-top: 30px;
}
.Stories__person{
    margin-top: 30px;
}
.Stories__person__img{
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

/* Members */
.teamMembers__title__block{
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
}
.teamMembers__title{
  color: #fff;
}
.member{
  max-width: 350px;
  color: #fff;
  border-radius: 10px;
  background: #618BAA;
  text-align: center;
  min-height: 200px;
  padding: 10px;
  margin-bottom: 30px;
}
.member__pict{
  border-radius: 170px;
  width: 130px;
}
.member__fio{
  display: inline-block;
  width: 200px;
  border-bottom: 1px #fff solid;
  padding-bottom: 8px;
}
</style>

