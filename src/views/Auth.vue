<template>
  <div class="yandex-container">
      <div id="payment-form"></div>
  </div>
</template>

<script>
export default {
  name: 'auth',
    data(){
    return {
      url: {
      },
    }
  },
   methods: {
    yandexPay(){
        const checkout = new window.YandexCheckout({
        confirmation_token: 'confirmation-token', //Токен, который перед проведением оплаты нужно получить от Яндекс.Кассы
        return_url: 'https://merchant.site', //Ссылка на страницу завершения оплаты
        error_callback(error) {
            //Обработка ошибок инициализации
            }
        });
    },
  },
    beforeMount(){
      this.yandexPay()
    }
}
</script>

