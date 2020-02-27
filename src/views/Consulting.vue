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
            <div class="row">
                <div class="col-lg-10">
                    <div class="studyBLockLeft">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src="../images/study0.png" alt="" class="studyBLockLeft__img">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2"></div>
            </div>
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-10">
                    <div class="studyBLockRight">
                        <div class="row">
                            <div class="col-lg-8"></div>
                            <div class="col-lg-4">
                                <img src="../images/study1.png" alt="" class="studyBLockLeft__img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-10">
                    <div class="studyBLockLeft">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src="../images/study2.png" alt="" class="studyBLockLeft__img">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2"></div>
            </div>
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-10">
                    <div class="studyBLockRight">
                        <div class="row">
                            <div class="col-lg-8"></div>
                            <div class="col-lg-4">
                                <img src="../images/study1.png" alt="" class="studyBLockLeft__img">
                            </div>
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
.studyBLockLeft{
    background: linear-gradient(90deg, #2C3846 0%, #417398 53.39%, rgba(97, 139, 170, 0.8) 100%, rgba(97, 139, 170, 0.8) 100%);
    max-width: 800px;
    height: 200px;
    margin-top: 50px;
}
.studyBLockRight{
    background: linear-gradient(0deg, rgba(44, 56, 70, 0.44), rgba(44, 56, 70, 0.44)), linear-gradient(90deg, #618BAA 0%, #618BAA 53.39%, #2C3846 100%);
    max-width: 800px;
    height: 200px;
    margin-top: 50px;
}
.studyBLockLeft__img{
    width: 300px;
}
</style>
