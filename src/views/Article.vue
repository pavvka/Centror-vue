<template>
  <div class="training">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <router-link class="articleLink" :to="`/article`">
            ← Вернуться к статьям
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col col-12">
          <h1 class="articleTitle">{{article.Title}}</h1>
          <div class="info">
            <span class="autor">Автор: 
              <span v-if="article.author != null">{{article.author.First_Name}}</span>
              <span v-else>Centror</span>
            </span>
            <span class="date">Дата публикации: {{article.created_at}}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="mainText">
            <p>{{article.Text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'training',
  data () {
    return {
      url: {
          ArticleApiLink: this.$store.getters.takeArticle
      },
      article: {},
      host: this.$store.getters.takeHost,
    }
  },
  async created () {
    const respones = await fetch(this.url.ArticleApiLink + '/' + this.$route.params.id)
    const data = await respones.json()

    this.article = data
  },
  mounted () {
  }
}
</script>

<style scoped>
.articleLink{
  color: #fff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300; 
}
.articleLink:hover{
  text-decoration: none;
}
.articleTitle{
  color: #fff;
  font-size: 60px;
}.info{
  color: #fff;
  border-top: 1px #fff solid;
  width: 460px;
}
.autor{
  margin-right: 20px;
}
.mainText{
  color: #fff;
  padding: 35px;
  font-family: Montserrat;
}
</style>