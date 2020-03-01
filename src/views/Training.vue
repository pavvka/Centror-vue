<template>
  <div class="training">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <h1>{{training.Program_Name}}</h1>
          <h3>Никогда не поздно научиться. Сделай это сегодня.</h3>
        </div>
      </div>
      <div class="row">
        <div class="description col col-12 col-md-6">
          <p>{{training.Program_Describe}}</p>
        </div>
        <div 
          v-for="(trainingTeacher, index) in training.lectors"
          :key="index"
          class="description col col-12 col-md-6">
          <h4 class="text-center">Преподавательский состав</h4>
          <div class="row teachers">
            <div class="teacher col col-12">
              <div class="avatar">
                <img
                    class="avatar"
                    :src="host + trainingTeacher.Photo.url"
                >
              </div>
              <h4>{{trainingTeacher.First_Name}} {{trainingTeacher.Last_Name}}</h4>
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
      url: {
          ProgramApiLink: this.$store.getters.takeProgramm,
          SubcategoriesApilink: this.$store.getters
      },
      training: {},
      host: this.$store.getters.takeHost,
    }
  },
  async created () {
    const respones = await fetch(this.url.ProgramApiLink + '/' + this.$route.params.id)
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
