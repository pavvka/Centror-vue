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
          <a :href="`/training/${training.id}`" class="trainingLink">
            <div class="training">
              <div class="row">
            <div class="col-lg-6">
              
                <h3 class="training__title">{{training.Program_Name}}</h3>
                <p class="training__text">{{training.Program_Short_Description}}</p>
                <p class="training__price">Стоимость программы: {{training.Price}} рублей</p>

              </div>
              <div class="col-lg-6">
                <h3 class="teacher__title">Преподавательский состав:</h3>
                <div v-for="(lector, index) in training.lectors" :key="index" >
                  {{lector.First_Name}} {{lector.Last_Name}}
                </div>
              </div>
              </div>
            </div>
          </a>
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
      Programs: '',
      test: [],
      schet: 0,
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
        //Program names finding
        var result = this.Programs.filter((item,i)=>{
            return item.Program_Name.toLowerCase().match(this.searchQuery.toLowerCase())      
        })
        //if we didnt found programs:
        if (result[0] == undefined){
          console.log("Found nothing in program names")
          //try fo find lesctors names
            return this.Programs.filter((item,i)=>{
            for (let j = 0; j < this.Programs[i].lectors.length; j++) {
              if(this.Programs[i].lectors[j].First_Name.toLowerCase().match(this.searchQuery.toLowerCase()) != null){
                  return this.Programs[i].lectors[j].First_Name.toLowerCase().match(this.searchQuery.toLowerCase())
              }
            }
          })
        }
        // if we found program names, return it)
        else{
          return result
        }
      } else {
        return this.Programs;
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
  padding: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
}
.training:hover{
  background: rgba(97, 139, 170, 0.7);
  transition: 300ms;
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
