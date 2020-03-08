<template>
  <div class="training">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <h1>{{article.Title}}</h1>
        </div>
      </div>
      <div class="row">
        <div class="description col col-12 col-md-6">
          <p>{{article.Text}}</p>
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
          ArticleApiLink: this.$store.getters.takeArticle
      },
      article: {},
      host: this.$store.getters.takeHost,
    }
  },
  async created () {
    const respones = await fetch(this.url.ArticleApiLink + '/' + this.$route.params.id)
    const data = await respones.json()

    this.article = data
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