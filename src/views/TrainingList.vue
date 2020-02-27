<template>
  <div class="training-list">
    <div class="container">
      <div v-for="(training, index) in trainingList"
        :key="index"
        class="item container">
        <div class="row">
          <div class="col col-12 col-md-6">
            <h3 class="text-center">{{training.title}}</h3>
          </div>
          <div class="col col-12 col-md-6">
            <p class="text-center">{{training.body}}</p>
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
export default {
  name: 'training-list',
  data () {
    return {
      trainingList: []
    }
  },
  async created () {
    const respones = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=5')
    const data = await respones.json()

    this.trainingList = data
  },
  mounted () {
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
