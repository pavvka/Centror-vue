<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand" to="/">{{navBrand}}</router-link>
    <button 
          v-on:click="search__open"
          class="search__button">
        <img class="search__image" src="../images/Search_Icon.png" >
    </button>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li
          v-for="(path, label, index) in navList" :key="index"
          class="nav-item dropdown">
          <router-link
            v-if="typeof(path) == 'string'"
            class="nav-link" :to="path">
            {{ label }}
          </router-link>
          <template v-else-if="typeof(path) == 'object'">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              {{ label }}
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink">
              <router-link
                v-for="(path, label, index) in path" :key="index"
                class="dropdown-item"
                :to="path">
                {{ label }}
              </router-link>
            </div>
          </template>
        </li>
      </ul>
        <div class="nav-item nav-link number">+99119998877</div>
        <div class="links">
          <span class="instagram__container"><a href=""><img class="instagram" src="../images/instagram.png" alt=""></a></span>
          <span class="facebook__container"><a href=""><img class="facebook" src="../images/facebook.png" alt=""></a></span>
        </div>
        <div class="languages">
          <a href="#" class="russian">Ru</a>
          <span> | </span>
          <a href="#" class="english">En</a>
        </div>
    </div>
  </nav>
    <div id="div_searcher" class="seach_container search__container_disable">
      <input v-model="searchF" id="search_inDiv" type="text" class="form-control" placeholder="Поиск по сайту...">
      <button 
            v-on:click="search__reload"
            class="search__image_incontainer">
          <img class="search__image" src="../images/Search_Icon.png" >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      searchF: ''
    }
  },
  props: {
    navList: Object,
    navBrand: String
  },
  methods: {
    search__open: function (event){
      var element = document.getElementById("div_searcher");
      element.classList.remove("search__container_disable");
      element.classList.add("slide-in-top");

    },
    search__reload: function (event){
      this.createLocalStorage();
      this.$router.push('/search');
    },
    takeSearch(){
          return this.$store.getters.takeSearch;
    },
    rewriteTokens(){
      if(this.searchF){
          this.$store.dispatch('writeSearch', this.searchF)
        }
    },
    createLocalStorage(){
        this.rewriteTokens()
        window.localStorage.setItem('search',this.takeSearch())
    },
  },
}
</script>

<style>
.search__container_disable{
  display: none;
}
.slide-in-top {
	-webkit-animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}


.seach_container{
  z-index: 1;
  margin-left:40px;
  margin-top: -8px;
  background: rgba(97, 139, 170, 0.78);
  border:#595C61;
  border-radius: 0px 0px 10px 10px;
  height: 35px;
  width: 290px;
}
.form-control{
  position: relative;
  top: 5px;
  width: 240px;
  left: 10px;
  height: 25px;
  background: #4D677E;
  border-radius: 2px 0px 0px 2px;
  border-color:#4D677E;
  color: #000000;
}
.search__button{
  background: transparent;
  border: none !important;
  font-size:0;
}
.search__image {
  width: 20px;
}
.search__image_incontainer {
  position: relative;
  background: transparent;
  border: none !important;
  font-size:0;
  left: 250px;
  top:-25px;
}
</style>

<style lang="scss" scoped>
.navbar {
  z-index: 2;
  background: rgba(97, 139, 170, 0.78);
  font-size: 18px;
  margin: 8px;
  border-radius: 10px;
  padding-top: 0;
  padding-bottom: 0;
  margin-left: 30px;
  margin-right: 30px;

  .navbar-brand {
    font-size: 35px;
    font-family: Sedan;
    display: inline-block;
    margin-bottom: 0;
  }

  .dropdown-menu{
    background: rgba(97, 139, 170, 0.78);
    margin: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border: none;
  }

  .dropdown-item {
    color: #fff;
  }

  .dropdown-item:hover{
    background: rgba(255, 255, 255, 0);
    color: #fff;
  }
  .number{
    margin-left: auto;
    color: #fff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
  }
  .instagram, .facebook{
    width: 25px;
  }
  .russian, .english{
    color:#fff;
    text-decoration: none;
  }
  .languages{
    color: #fff;
    margin-left: 10px;
    font-family: Sedan;
  }
  .russian, .english:hover{
      color: #fff;
  }
  .dropdown:hover .dropdown-menu {
  display: block;
  }
  .dropdown-menu:hover {
  display: block;
  }
  @media (min-width: 991px) {
    .navbar-brand {
      margin-bottom: 8px;
    }
  }
  @media (max-width: 991px) {
    .languages{
      margin: 0;
    }
    .number{
      padding: 0;
    }
    .instagram__container, .facebook__container{
      display: inline;
    }
  }
}
</style>
