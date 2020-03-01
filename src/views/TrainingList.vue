<template>
  <div class="training-list">
    <div class="container">
      <input type="texts" placeholder="Поиск" v-model="searchQuery">
      <div v-for="(training, index) in filteredResources"
        :key="index"
        class="item container">
        <div class="row">
          <div class="col col-12 col-md-6">
            <h3 class="text-center">{{training.Program_Name}}</h3>
          </div>
          <div class="col col-12 col-md-6">
            <p class="text-center">{{training.Program_Describe}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col justify-content-md-end">
            <router-link :to="`/training/${training.id}`">Подробнее</router-link>
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

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: 2rem;
  min-height: 200px;
  border-radius: 15px;
  background-color: #435A6E;
  color: whitesmoke;

  a, a:active {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: gray;
    }
  }

  p, h3 {
    padding: 0px;
    margin: 0px;
  }

  .row {
    &:nth-child(1) {
      flex: 1 1 auto;
    }

    .col {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
