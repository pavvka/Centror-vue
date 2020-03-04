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
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="goodCases_one">
                                        Пример №2
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="goodCases_one">
                                        Пример №3
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="goodCases_one">
                                        Пример №4
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
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.ourCases{
    background-image: url('../images/CasesBackground.png');
    min-height: 800px;
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
</style>