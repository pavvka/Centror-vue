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
          <p>{{training.Program_Full_Description}}</p>
        </div>
        <div class="description col col-12 col-md-6">
          <h4 class="text-center">Преподавательский состав</h4>
          <div v-for="(trainingTeacher, index) in training.lectors"
          :key="index" class="row teachers">
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
              <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-light">
                Записаться на обучение
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content modalWindow">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Контактная информация</h5>
          </div>
            <div class="modal-body">
              <div class="input-group" style="margin-top:20px;">
                <p class="inputBlock">
                  <label for="SecondName">Фамилия:</label>
                  <input id="SecondName" type="text" class="form-control" style="margin-right:20px">
                </p>
                <p class="inputBlock">
                  <label for="email">Адрес электронной почты:</label>
                  <input id="email" type="text" class="form-control">
                </p>
            </div>
              <div class="input-group" style="margin-top:20px;">
                <p class="inputBlock">
                  <label for="name">Имя:</label>
                  <input id="name" type="text" class="form-control" style="margin-right:20px">
                </p>
                <p class="inputBlock">
                  <label for="number">Контактный телефон:</label>
                  <input id="number" type="text" class="form-control">
                </p>
            </div>
          </div>
          <div class="modal-footer">
            <datepicker :value="state.date" :wrapper-class="{background:kek}" name="uniquename" :language="ru"></datepicker>
            <button type="button" class="submitButton">Перейти к оплате</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import {ru} from 'vuejs-datepicker/dist/locale'
export default {
  name: 'training',
  components: {
    Datepicker
  },
  data () {
    return {
      ru: ru,
      kek: 'red',
      url: {
          ProgramApiLink: this.$store.getters.takeProgramm,
          SubcategoriesApilink: this.$store.getters
      },
      state: {
        date: new Date(2016, 9,  16)
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
.modalWindow{
  background: linear-gradient(0deg, rgba(97, 139, 170, 0.44), rgba(97, 139, 170, 0.44)), #3D4A5B;
  font-family: Montserrat;
}
.modal-header, .modal-body, .modal-footer{
  border: none;
}
.inputBlock{
  width: 220px;
  margin-left: 10px;
}
label{
  font-size: 15px;
}
.modal-header{
  font-size: 18px;
  padding: 10px;
}
.modal-body{
  padding-top: 0;
}
.form-control{
  background: #595C61;
  color: #fff;
  border:#595C61;
  height: 25px;
}
.submitButton{
  background: #495A67;
  border-radius: 5px;
  color: #fff;
  border: #495A67;
}
.datePicker{
  background: #495A67;
}
</style>
