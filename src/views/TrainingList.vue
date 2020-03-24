<template>
  <div class="training-list">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="search__block">
            <input class="search" type="texts" placeholder="Поиск по названию или преподователю..." v-model="searchQuery">
            <select v-model="selectors" class="sdrop browser-default custom-select">
              <option value="" selected>По умолчанию</option>
              <option value="cheaper">Дешевле</option>
              <option value="expensive">Дороже</option>
            </select>
          </div>
          <div class="tags" v-for="(Tag, index) in Tags" :key="index" >
              <span v-bind:id="'tagNum'+index" class="tag closed" v-on:click="TagSorter(index, Tag.id)">{{Tag.tag}}</span>
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
      selectedTagsId: [],
      selectors:'',
      searchQuery:'',
      subcategorySelected: '',
      Programs: '',
      Tags: '',
      test: [],
      schet: 0,
      url: {
          ProgramApiLink: this.$store.getters.takeProgramm,
          SubcategoriesApilink: this.$store.getters,
          TagsProgrammsApiLink: this.$store.getters.takeTagsProgramms,
      },
    }
  },
  
  methods: {
    removeElement(array, elem) {
    var index = array.indexOf(elem);
      if (index > -1) {
          array.splice(index, 1);
      }
    },
    TagSorter(x, z){
      var elclassname = 'tagNum'+x;
      var element = document.getElementById(elclassname);

      if (element.classList.contains("closed")){
        element.classList.remove("closed");
        element.classList.add("tagSelected");
        this.selectedTagsId.push(z);
        console.log(this.selectedTagsId);
      
      } else {
      
        element.classList.remove("tagSelected");
        element.classList.add("closed");
        this.removeElement(this.selectedTagsId, z);
        console.log(this.selectedTagsId);
      }
    },
    getHashtags(){
        axios.get(this.url.ProgramApiLink).then((response) => {
            this.Programs = response.data;
            console.log(this.Programs);
        });
        axios.get(this.url.TagsProgrammsApiLink).then((response) => {
            this.Tags = response.data;
        });
    },

  },
    beforeMount(){
      this.getHashtags()
 },
  computed: {
    filteredResources (){
      if (typeof this.selectedTagsId != 'undefined' && this.selectedTagsId.length > 0){
        // console.log(this.Programs.tags_programs[0].indexOf(this.selectedTagsId));

      } else {
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
            console.log(result);
            return result
          }
        } else {
          if (this.selectors != ''){
              if (this.selectors == 'cheaper'){ 
                return this.Programs.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
              }
              if(this.selectors == 'expensive'){
                return this.Programs.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
              }
          } else {
            return this.Programs;
          }
        }
      }
    },
  }
 
}
</script>

<style scoped>
.tags{
    display: inline-block;
    margin-bottom: 20px;
}
.tag{
    display: inline-block;
    text-align: center;
    padding: 8px;
    font-size: 20px;
    /*background: #435A6E;   fallback for old browsers */
    border-radius: 30px;
    border: 3px solid #435A6E;
    color: #fff;
    transition-duration: .5s;
    margin-right: 10px;
    margin-bottom: 10px
}
.tagSelected{
  background: rgba(97, 139, 170, 0.78);
    -webkit-box-shadow: 0px 0px 29px 1px rgba(97, 139, 170, 0.78);
    -moz-box-shadow: 0px 0px 29px 1px rgba(97, 139, 170, 0.78);
    box-shadow: 0px 0px 29px 1px rgba(97, 139, 170, 0.78);
    text-decoration: none;
}
.tag:hover{
    background: rgba(97, 139, 170, 0.78);
    -webkit-box-shadow: 0px 0px 29px 1px rgba(97, 139, 170, 0.78);
    -moz-box-shadow: 0px 0px 29px 1px rgba(97, 139, 170, 0.78);
    box-shadow: 0px 0px 29px 1px rgba(97, 139, 170, 0.78);
    text-decoration: none;
}
.sdrop{
  color:#fff;
  width: 150px;
  margin-left: 10px;
  background-color: transparent;
  border-color: transparent;
}

.sdrop option{
  background-color: #435A6E;
}

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
