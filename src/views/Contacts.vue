<template>
    <section class="ourContacts">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contacts__block">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="contact__peace">
                                    <span class="icon">
                                        <i class="person__icon fa fa-phone-square"></i>
                                    </span>
                                    <h2 class="title">Позвоните нам</h2>
                                    <div class="firstPhrase">Есть вопросы?</div>
                                    <div class="secondPhrase">Мы поможем!</div>
                                    <h3 class="number">{{Contacts[0].Contact_Phone}}</h3>
                                    <a href="#" class="siteCall">Позвонить с сайта</a>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="contact__peace">
                                    <span class="icon">
                                        <img class="Mail__icon" src="../images/MailIcon.png" alt="">
                                    </span>
                                    <h2 class="title">Напишите нам</h2>
                                    <div class="firstPhrase">Идеи? Предложения?</div>
                                    <div class="secondPhrase">Мы открыты для любых вопросов!</div>
                                    <a href="#" class="siteCall">Написать на {{Contacts[0].Contact_Email}}</a>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="contact__peace">
                                    <span class="icon">
                                        <img class="feedBack__icon" src="../images/FeedBackIcon.png" alt="">
                                    </span>
                                    <h2 class="title">Обратная связь</h2>
                                    <div class="firstPhrase">Поделитесь мнением о нашей работе и помогите нам стать лучше!</div>
                                    <a href="#"  class="siteCall">Написать на {{Contacts[0].Feedback_Email}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="bottomContacts">
                        <h2 class="bottomContacts__title">
                            Контакты для сотрудничества
                        </h2>
                        <div class="bottomContacts__email">
                            Email: {{Contacts[0].Collaboration_Email}}
                        </div>
                        <div class="bottomContacts__number">
                            Тел.: {{Contacts[0].Collaboration_Phone}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
    Contacts: '',
    url: {
          ContactsApiLink: this.$store.getters.takeContacts
      },
    }
  },
  beforeMount(){
      this.getHashtags()
  },
    methods: {
    getHashtags(){
        axios.get(this.url.ContactsApiLink).then((response) => {
            this.Contacts = response.data;
        });
    },
    
  },
}
</script>

<style scoped>
.contacts__block{
    min-height: 400px;
    background: linear-gradient(0deg, #2C3846, #2C3846), linear-gradient(179.82deg, rgba(97, 139, 170, 0.44) 7.58%, rgba(58, 71, 90, 0) 99.54%);
    border-radius: 10px;
    margin-top: 50px;
}
.contact__peace{
    margin-top: 60px;
    max-width: 280px;
    text-align: center;
    color: #fff;
}
.icon{
    font-size: 60px;
}
.title{
    font-size: 25px;
}
.firstPhrase, .secondPhrase{
    font-size: 18px;
    font-family: Montserrat
}
.secondPhrase{
    margin-bottom: 10px;
}
.number{
    margin-bottom: 30px;
    font-family: Teko;
}
.siteCall{
    color: #fff;
    text-decoration: underline;
}
.siteCall:hover{
    color: #fff;
}
.feedBack__icon{
    width: 55px;
}
.Mail__icon{
    width: 60px;
}
/* bottom contacts */
.bottomContacts{
    color: #fff;
}
.bottomContacts__title{
    font-size: 25px;
    margin-top: 30px;
}
.bottomContacts__email, .bottomContacts__number{
    font-family: Teko;
    margin-left: 30px;
    font-size: 23px;
}
@media (max-width: 991px) {
    .contact__peace{
      margin-right: 20px;
    }
}
@media (max-width: 766px) {
    .contact__peace{
      margin-right:auto;
      margin-left: auto;
      margin-bottom: 20px;
    }
}
</style>