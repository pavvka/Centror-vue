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
          <div class="instagram__container"><img class="instagram" src="../images/instagram.png" alt=""></div>
          <div class="facebook__container"><img class="facebook" src="../images/facebook.png" alt=""></div>
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
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background: rgba(97, 139, 170, 0.78);
  margin: 8px;
  border-radius: 10px;
  padding-top: 0;
  padding-bottom: 0;

  .navbar-brand {
    font-size: 30px;
  }

  .dropdown-menu{
    background: rgba(97, 139, 170, 0.78);
    margin-top: 0.45rem;
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
    font-size: 20px;
  }
  .instagram, .facebook{
    width: 25px;
  }
}
</style>
