<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-7 centered">


          <div class="footerList">
            <div class="row">
              <div v-for="(Fo, index) in FooterLinks.Footer" :key="index" class="col-lg-4">
                
                <ul class="footerList">
                  <li class="footerList__item">
                    <a :href="Fo.Link" class="footerList__item__link">{{Fo.Name}}</a>
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
                <a  v-for="(FooterSocialLinksiter, index) in FooterSocial" :key="index" 
                    :href="FooterSocialLinksiter.Link" class="footerContacts__links__item">
                  <div class="iconContainer">
                    <img :src="host + FooterSocialLinksiter.Logo.url" class="footerIcon" alt="">
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      url: {
          FooterLinks: this.$store.getters.takeFooterLinks,
          FooterSocialLinks: this.$store.getters.takeFooterSocialLinks
      },
      FooterSocial: {},
      FooterLinks: {},
      host: this.$store.getters.takeHost,
      
    }
  },
  async created () {
    const respones1 = await fetch(this.url.FooterLinks)
    const data1 = await respones1.json()

    this.FooterLinks = data1[0]

    const respones2 = await fetch(this.url.FooterSocialLinks)
    const data2 = await respones2.json()

    this.FooterSocial = data2

    //console.log(this.FooterLinks);
  },
  mounted () {
  }
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
  width: 35px;
  padding-top: 2px;
  vertical-align: middle;
  display: inline-block;
}
.footerIconLetter{
  width: 26px;
  padding-top: 12px;
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
