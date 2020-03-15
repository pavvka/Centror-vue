<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand" to="/">{{navBrand}}</router-link>
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
</template>

<script>
export default {
  name: 'navigation',
  props: {
    navList: Object,
    navBrand: String
  },
  methods: {
    // route(){
    //   this.$router.push('/training');
    // }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
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
