<template>
  <div class="training-list">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="search__block">
            <input class="search" type="texts" placeholder="Поиск по названию..." v-model="searchQuery">
          </div>
        </div>
      </div>
      <div v-for="(training, index) in filteredResources"
        :key="index"
        class="item">
        <div class="row marg">
            <div v-if="training.Program_Name != undefined" >
                <a :href="`/training/${training.id}`" class="trainingLink">
                    <div class="training">
                    <div class="col-lg-6">
                    
                        <h3 class="training__title">{{training.Program_Name}}</h3>
                        <p class="training__text">{{training.Program_Short_Description}}</p>

                    </div>
                    </div>
                </a>
          </div>
          <div v-if="training.Title != undefined" >
                <a :href="`/article-detail/${training.id}`" class="trainingLink">
                    <div class="training">
                    <div class="col-lg-6">

                        <h3 class="training__title">{{training.Title}}</h3>
                        <p class="training__text">{{training.Text}}</p>

                    </div>
                    </div>
                </a>
          </div>
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
      searchQuery: this.$store.getters.takeSearch,
      subcategorySelected: '',
      Programs: '',
      Article: '',
      Combine: '',
      test: [],
      schet: 0,
      url: {
          ArticleApiLink: this.$store.getters.takeArticle,
          ProgramApiLink: this.$store.getters.takeProgramm,
          SubcategoriesApilink: this.$store.getters
      },
    }
  },
  
  methods: {
    getHashtags(){
        axios.get(this.url.ProgramApiLink).then((response) => {
            this.Programs = response.data;
        });
        axios.get(this.url.ArticleApiLink).then((response) => {
            this.Article = response.data;
        });
    },
    
  },
    beforeMount(){
      this.getHashtags()
 },
  computed: {
    filteredResources (){
    this.Combine = this.Programs.concat(this.Article);
      if (this.searchQuery && this.searchQuery.length >= 0) {
        return this.Combine.filter((item)=>{
            if (item.Title != undefined){
                return item.Title.toLowerCase().match(this.searchQuery.toLowerCase());
            } else if(item.Program_Name != undefined) {
                return item.Program_Name.toLowerCase().match(this.searchQuery.toLowerCase());
            }
        })
      } else {
        return this.Combine;
      }
    },
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
.teacher__title{
  font-size: 25px;
}
</style>
