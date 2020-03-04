<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-7 centered">
          <div class="footerList">
            <div class="row">
              <div class="col-lg-4">
                <ul class="footerList">
                  <li class="footerList__item footerList__title">
                    <a href="#" class="footerList__item__link">Lorem Ipsum</a>
                  </li>
                  <li class="footerList__item">
                    <a href="#" class="footerList__item__link">Lorem Ipsum</a>
                  </li>
                  <li class="footerList__item">
                    <a href="#" class="footerList__item__link">Lorem Ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footerList">
            <div class="row">
              <div class="col-lg-4">
                <ul class="footerList">
                  <li class="footerList__item footerList__title">
                    <a href="#" class="footerList__item__link">Lorem Ipsum</a>
                  </li>
                  <li class="footerList__item">
                    <a href="#" class="footerList__item__link">Lorem Ipsum</a>
                  </li>
                  <li class="footerList__item">
                    <a href="#" class="footerList__item__link">Lorem Ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footerList">
            <div class="row">
              <div class="col-lg-4">
                <ul class="footerList">
                  <li class="footerList__item footerList__title">
                    <a href="#" class="footerList__item__link">Lorem Ipsum</a>
                  </li>
                  <li class="footerList__item">
                    <a href="#" class="footerList__item__link">Lorem Ipsum</a>
                  </li>
                  <li class="footerList__item">
                    <a href="#" class="footerList__item__link">Lorem Ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="footerContacts">
            <h3 class="footerContacts__header">Свяжитесь с нами:</h3>
            <div class="footerContacts__links">
                <a href="#" class="footerContacts__links__item">
                  <div class="iconContainer">
                    <img src="../images/facebook.png" class="footerIcon" alt="">
                  </div>
                </a>
                <a href="#" class="footerContacts__links__item">
                  <div class="iconContainer">
                    <img src="../images/instagram.png" class="footerIcon" alt="">
                  </div>
                </a>
                <a href="#" class="footerContacts__links__item">
                  <div class="iconContainer">
                    <img src="../images/MailIcon2.png" class="footerIconLetter" alt="">
                  </div>
                </a>
                <a href="#" class="footerContacts__links__item">
                  <div class="iconContainer">
                    <img src="../images/facebook.png" class="footerIcon" alt="">
                  </div>
                </a>
            </div>
            <div class="footerContacts__mail">abcdefg@centror.com</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss" scoped>
.footer {
  width: 95%;
  background: rgba(67, 90, 110, 0.4);
  border-radius: 15px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  padding-top: 20px;
  margin-bottom: 20px;
}

/* footer lists */
.footerList {
  display: inline-block;
}
.footerList__item {
  list-style-type: none;
  margin-bottom: 5px;
  width: 120px;
  text-align: center;
}
.footerList__item__link {
  color: #fff;
}
.footerList__item__link:hover {
  color: #fff;
  text-decoration: none;
}
/* titles in footer lists */
.footerList__title {
  border-bottom: 1px #fff solid;
  margin-bottom: 10px;
}
/* footer contacts */
.footerContacts{
  text-align: center;
}
.footerContacts__header {
  color: #fff;
  font-size: 18px;
}
.iconContainer{
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
}
.footerIcon{
  width: 40px;
  display: inline-block;
}
.footerIconLetter{
  width: 35px;
}
.footerContacts__links__item{
  margin-left: 15px;
}
.footerContacts__links__item:hover {
  color: #3b5598;
  text-decoration: none;
}
.footerContacts__mail {
  color: #fff;
}
@media (max-width: 991px) {
    .centered{
      text-align: center;
    }
}
@media (max-width: 403px) {
  .footerList{
    padding: 0;
  }
}
</style>
