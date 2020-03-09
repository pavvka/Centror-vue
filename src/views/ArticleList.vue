<template>
  <div class="training-list">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="search__block">
            <input class="search" type="texts" placeholder="Поиск по заголовку" v-model="searchQuery">
          </div>
        </div>
      </div>
      <div v-for="(article, index) in filteredResources"
        :key="index"
        class="item">
        <div class="row marg">
          <router-link class="trainingLink" :to="`/article-detail/${article.id}`">
            <div class="training">
            <div class="col-lg-6">
              
                <h3 class="training__title">{{article.Title}}</h3>
                <p class="training__text">{{article.Text.slice(0, 150)}}...</p>

              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
    data(){
    return {
      searchQuery:'',
      subcategorySelected: '',
      test: [],
      Article: '',
      schet: 0,
      url: {
          ArticleApiLink: this.$store.getters.takeArticle 
      },
    }
  },
  
  methods: {
    getHashtags(){
        axios.get(this.url.ArticleApiLink).then((response) => {
            this.Article = response.data;
        });
    },
    
  },
    beforeMount(){
      this.getHashtags()
 },
  computed: {
    filteredResources() {
      if (this.searchQuery && this.searchQuery.length >= 0) {
        return this.Article.filter((item)=>{
            return item.Title.toLowerCase().match(this.searchQuery.toLowerCase());
        })
      
      } else {

        console.log(this.Article);
        return this.Article;
      }
    }

  }
 
}
</script>

<style scoped>
.training{
  color: #fff;
  text-align: left;
  background: #435A6E;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
}
.trainingLink:hover{

  text-decoration: none;
}
.training__title{
  font-size: 25px;
}
.marg{
  margin-bottom: 30px;
}
.search__block{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
}
.search{
  border: 1px solid #618BAA;
  background: rgba(0, 0, 0, 0);
  width: 500px;
  border-radius: 8px;
  padding-left: 5px;
  font-family: Montserrat;
  color: #CCCCCC;
}
</style>