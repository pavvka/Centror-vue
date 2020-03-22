<template>
    <section class="ourCases">
        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="goodCases">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h2>Примеры успешных кейсов</h2>
                                </div>
                            </div>
                            <div class="row" v-for="(caseone, index) in Cases" :key="index">
                                <div class="col-lg-12">
                                    <div class="goodCases_one">
                                      <router-link class="caseLink" :to="`/case/${caseone.id}`">
                                        {{caseone.Title}}
                                      </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-5">
                        <h2 class="casesTitle">Текст про успешный опыт?</h2>
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
    Cases: '',
    url: {
          CasesApiLink: this.$store.getters.takeCases
      },
    }
  },
  beforeMount(){
      this.getHashtags()
  },
    methods: {
    getHashtags(){
        axios.get(this.url.CasesApiLink).then((response) => {
            this.Cases = response.data;
        });
    },
    
  },
}
</script>

<style scoped>
.ourCases{
    background-image: url('../images/CasesBackground.png');
    min-height: 650px;
}
.goodCases{
    color:#fff;
    min-height: 400px;
    max-width: 800px;
    background-color: #39495B;
    padding: 25px;
    border-radius: 8px;
    margin-top: 30px;
}
.casesTitle{
    color: #fff;
    margin-top: 30px;
}
.goodCases_one{
    font-size: 18px;
    margin-top: 15px;
}
.caseLink{
    color: #fff;
}
.caseLink:hover{
    text-decoration: none;
}
</style>