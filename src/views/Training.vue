<template>
  <div class="training">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <h1>Тренинг №1</h1>
          <h3>Никогда не поздно научиться. Сделай это сегодня.</h3>
        </div>
      </div>
      <div class="row">
        <div class="description col col-12 col-md-6">
          <h4 class="text-center">Четотам программа</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, fugit. Itaque facilis sequi odit facere ducimus. Neque delectus ullam vitae eos, nostrum consectetur provident dignissimos exercitationem maxime, dolorum ex! Dolorem.</p>
        </div>
        <div class="description col col-12 col-md-6">
          <h4 class="text-center">Преподавательский состав</h4>
          <div class="row teachers">
            <div class="teacher col col-12">
              <div class="avatar"></div>
              <h4>Петров Иван Говнин</h4>
            </div>
            <div class="teacher col col-12">
              <div class="avatar"></div>
              <h4>Петров Иван Говнин</h4>
            </div>
            <div class="teacher col col-12">
              <div class="avatar"></div>
              <h4>Петров Иван Говнsdfsdин</h4>
            </div>
          </div>
          <div class="row">
            <div class="order col col-12">
              <h5>Стоимость программы</h5>
              <h5>140 000р.</h5>
              <button class="btn btn-light">
                Записаться на обучение
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'training',
  data () {
    return {
      training: {}
    }
  },
  async created () {
    const id = this.$route.params.id
    const respones = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await respones.json()

    this.training = data
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.training {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  color: whitesmoke;

  .container {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;

    .row:nth-child(2) {
      flex: 1 1 auto;

      .description:nth-child(1) {
        padding: 1rem 1.5rem;
        border-radius: 15px;
        background-color: #435A6E;
      }

      .description:nth-child(2) {
        padding: 1rem 1.5rem;

        .teachers .teacher{
          display: flex;
          align-items: center;
          margin: 1rem 0;

          h4 {
            margin: 0;
          }

          .avatar {
            width: 50px;
            height: 50px;
            background-color: grey;
            margin-right: 1rem;
          }
        }

        .order {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-top: 3rem;
        }
      }
    }
  }
}
</style>
