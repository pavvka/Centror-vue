<template>
  <div class="training-list">
    <div style="margin-top:30px;" class="container">
      <div v-for="(training, index) in Tags.programs"
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
              <!-- <div class="col-lg-6">
                <h3 class="teacher__title">Преподавательский состав:</h3>
                <div v-for="(lector, index) in training.lectors" :key="index" >
                  {{lector.First_Name}} {{lector.Last_Name}}
                </div>
              </div> 
              -->
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
      selectors:'',
      searchQuery:'',
      subcategorySelected: '',
      Programs: '',
      Tags: '',
      test: [],
      schet: 0,
      url: {
          TagsProgrammsApiLink: this.$store.getters.takeTagsProgramms,
      },
    }
  },
  
  methods: {
    getHashtags(){
        axios.get(this.url.TagsProgrammsApiLink + '/' + this.$route.params.id).then((response) => {
            this.Tags = response.data;
            console.log(this.Tags);
        });
    },

  },
    beforeMount(){
      this.getHashtags()
 },
 
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
