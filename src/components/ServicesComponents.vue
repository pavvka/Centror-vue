<template>
    <div>
        <br>
    <br>
    <br>
    <br>
        <input type="texts" placeholder="Поиск" v-model="searchQuery">
        <div v-for="(item,index) in filteredResources" :key="index">
            <a style="color:white;">{{item.Program_Name}}</a>    
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
  .search__img{
    width: 30px;
  }
</style>