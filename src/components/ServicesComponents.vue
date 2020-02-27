<template>
    <div>
        <br>
    <br>
    <br>
    <br>
        <input type="texts" placeholder="Поиск" v-model="searchQuery">
        <div v-for="(item,index) in filteredResources" :key="index">
            <a style="color:white;">{{item.First_Name}}</a>    
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
      
      url: {
          ProgramApiLink: this.$store.getters.takeProgramm
      },
    }
  },
  
  methods: {
    getHashtags(){
        axios.get(this.url.ProgramApiLink).then((response) => {
            this.Programs = response.data;
            console.log(this.Programs);
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
            return item.First_Name.toLowerCase().match(this.searchQuery.toLowerCase());
        })
      } else {
        return '';
      }
    }
  }
 
}
</script>

<style scoped>
  .search__img{
    width: 30px;
  }
</style>
