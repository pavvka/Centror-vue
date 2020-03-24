<template>
  <div>
    <section class="studyBack">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mainStudy">
                        <h1 class="mainStudy__title">
                            {{header.title}}
                        </h1>
                        <p class="mainStudy__text">
                            {{header.text}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="studyMain">
        <div class="container">
            <div v-for="(item, index) in items"
                :key="index"
                class="item">
                <div class="wrapper">
                    <img :src="item.Img.url" alt="">
                    <div class="content">
                        <h1 class="title">
                            {{item.Title}}
                        </h1>
                        <div class="text">
                            {{item.Text}}
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
  name: 'study',
  data() {
      return {
          header: {},
          items: [],
          url: {
              categories: this.$store.getters.takeCategories
          }
      }
  },
  async mounted() {
    const respones = await fetch(this.url.categories)
    let data = await respones.json()
    data = data[1]    
    
    this.header.title = data.Title
    this.header.text = data.Text
    this.header.img = data.Img.url
    
    this.items = data.subcategories
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

    .content {
        display: flex;
        flex-direction: column;
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
