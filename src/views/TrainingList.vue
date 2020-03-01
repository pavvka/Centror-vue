<template>
  <div class="training-list">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="search__block">
            <input class="search" type="texts" placeholder="Поиск по названию или преподователю..." v-model="searchQuery">
          </div>
        </div>
      </div>
      <div v-for="(training, index) in filteredResources"
        :key="index"
        class="item">
        <div class="row marg">
          <router-link class="trainingLink" :to="`/training/${training.id}`">
            <div class="training">
            <div class="col-lg-6">
              
                <h3 class="training__title">{{training.Program_Name}}</h3>
                <p class="training__text">{{training.Program_Describe.slice(0, 150)}}...</p>
                <p class="training__price">Стоимость программы: {{training.Price}} рублей</p>

              </div>
            </div>
          </router-link>
          <!-- <div class="col col-12 col-md-6">
            <p class="text-center">{{training.Program_Describe.slice(0, 150)}}...</p>
          </div>
          <div class="col col-12 col-md-6">
            <p class="text-center">{{training.Price}}рублей</p>
          </div>
          <div class="col col-12 col-md-6">
            <p class="text-center"> {{training.lectors.Last_Name}} {{training.lectors.First_Name}}</p>
          </div> -->
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
      Programs: '',
      url: {
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
    },
    
  },
    beforeMount(){
      this.getHashtags()
 },
  computed: {
    filteredResources (){
      if (this.searchQuery && this.searchQuery.length >= 0) {
        return this.Programs.filter((item)=>{
            return item.Program_Name.toLowerCase().match(this.searchQuery.toLowerCase());
        })
      } else {
        return this.Programs;
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
