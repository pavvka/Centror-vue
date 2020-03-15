<template>
  <div>
    <section class="studyBack">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mainStudy">
                        <h1 class="mainStudy__title">
                            Консалтинг
                        </h1>
                        <p class="mainStudy__text">
                            Краткая речь про то, почему консалтинг этой компании заслуживает особого внимания и так далее и тому подобное
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="studyMain">
        <div class="container">
            <div class="item">
                <div class="wrapper">
                    <img src="../images/study0.png" alt="">
                </div>
            </div>
            <div class="item">
                <div class="wrapper">
                    <img src="../images/study0.png" alt="">
                </div>
            </div>
            <div class="item">
                <div class="wrapper">
                    <img src="../images/study0.png" alt="">
                </div>
            </div>
            <div class="item">
                <div class="wrapper">
                    <img src="../images/study0.png" alt="">
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'study',
  async created() {
    //const respones = await fetch(this.url.AboutJSON)
    //const data = await respones.json() 
  }
}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    &:nth-child(2n) {
        justify-content: flex-end;

        .wrapper {
            justify-content: flex-end;
        }
    }
}
.item .wrapper{
    display: flex;

    width: 100%;
    height: 200px;
    max-width: 900px;

    margin-top: 50px;
    background: linear-gradient(90deg, #2C3846 0%, #417398 53.39%, rgba(97, 139, 170, 0.8) 100%, rgba(97, 139, 170, 0.8) 100%);

    img {
        width: 300px;
    }
}
.studyBack{
    background-image: url(../images/StudyBG.png);
    height: 600px;
}
.mainStudy{
    color: #fff;
    margin-top: 200px;
}
.mainStudy__title{
    font-size: 60px;
}
.mainStudy__text{
    width: 400px;
    font-size: 20px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
}
.studyMain{
    margin-top: 30px;
    margin-bottom: 80px;
}

</style>
