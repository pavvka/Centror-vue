<template>
    <div class="content">
        <div id="app">
      <vue-particles color="#dedede"></vue-particles>
    </div>
      <div class="row">
        <div class="col-sm-4 col-xs-1">
            <div class="main-block1 text-al">
                <div class="row">
                    <div class="col-lg-3 col-md-2 col-xs-3">
                        <div class="icon-block1"></div>
                    </div>
                    <div class="col-lg-9 col-md-10 col-xs-9">
                        <p class="main-block1__text">
                            Российский консалтинг нового поколения
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 col-xs-10 centered"><img alt="Vue logo" src="../assets/logo.png"></div>
        <div class="col-sm-4 col-xs-1">
            <div class="main-block2">
                <div class="row">
                    <div class="col-lg-8 col-md-10 col-xs-9">
                        <p class="main-block2__text">
                            Авторские продукты
                        </p>
                    </div>
                    <div class="col-lg-4 col-md-2 col-xs-3">
                        <div class="icon-block2"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <!-- <div class="row">
          <div class="col-lg-12">
              <div class="contacts">
                  <span class=""><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></span>
                  <span class="phone">+99119998877</span>
                  <span class=""><a href="#" class="facebook"><i class="fa fa-facebook-square"></i></a></span>
              </div>
          </div>
      </div> -->
    </div>
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
.text-al{
    margin-left: auto;
}
.main-block1,.main-block2{
    font-family: 'Montserrat', sans-serif;
    background-color: rgba(97, 139, 170, 0.44);
    width: 335px;
    border-radius: 10px;
    padding: 10px;
    height: 100px;
    box-shadow:2px 4px 6px 0px rgba(50, 50, 50, 0.63);
    margin-top: 100px;
}
.icon-block1{
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: grey;
    margin-left: 10px;
}
.icon-block2{
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: grey;
}
.main-block1__text{
    color: #fff;
    margin-left: 10px;
    text-align: left;
    margin-top: 18px;
    width: 258px;
}
.main-block2__text{
    color: #fff;
    margin-left: 25px;
    text-align: left;
    margin-top: 25px;
}
.contacts{
    text-align: center;
    font-size: 20px;
    color: #fff;
    margin-top: 50px;
}
.instagram{
    font-size: 30px;
    color: #d6249f;
}
.instagram:hover{
    color: #d6249f;
    text-decoration: none;
}
.facebook{
    font-size: 30px;
    color: #3B5598;
}
.facebook:hover{
    color: #3B5598;
    text-decoration: none;
}
.phone{
    display: inline-block;
    padding-left: 8px;
    padding-right: 8px;
    font-family: 'Montserrat', sans-serif;
}
.centered{
    text-align: center;
}

/* MEDIA QWERTYS */
@media (min-width: 1200px) {
    .content{
        margin-top: 300px;
        max-width: 1390px !important;
    }
}
@media (max-width: 1200px) {
    .main-block2__text{
    margin-left: 5px;
    }
    .icon-block2,.icon-block1{
        margin: 0;
        padding: 0;
    }
    .col-lg-4{
        max-width: 33%;
        padding: 0;
    }
    .row{
        width: 100%;
    }
}
@media (max-width: 991px) {
    .main-block1,.main-block2{
        display: none;
    }
}

</style>
