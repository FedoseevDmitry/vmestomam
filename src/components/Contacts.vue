<template>
  <section class="contacts" id="contacts">
    <div class="container contacts__container">
      <iframe class="contacts__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.9392795286494!2d30.504037716172817!3d59.91655507084187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962e7c0c2717f9%3A0xcf8cf85ecbd4646!2z0KHRgtGD0LTQuNGPINC60YDQsNGB0L7RgtGLICJ2TWVzdG9NYW0i!5e0!3m2!1sru!2sru!4v1673809557983!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div class="contacts__wrapper">
        <div class="contacts__block block block_left">
          <!-- <p class="contacts__text contacts__text_small">Ждем Вас в vMestoMam</p> -->

          <h2 class="block__title">Наши контакты</h2>

          <p class="block__text">Приходите в нашу студию или просто забронируйте нужное время любым удобным способом. Если у Вас есть вопросы, пожалуйста, не стесняйтесь обращаться к нам.</p>
        </div>

        <div class="contacts__block block block_right">
          <div class="block__item item">
            <img class="item__img" src="../assets/images/location.png" alt="Иконка локации" width="32" height="32">

            <div class="item__wrapper">
              <h3 class="item__title">Адрес</h3>

              <p class="item__text">Оккервиль,</p>
              <p class="item__text">Областная ул. д. 1</p>
            </div>
          </div>

          <div class="block__item item">
            <img class="item__img" src="../assets/images/reserve.png" alt="Иконка локации" width="32" height="32">

            <div class="item__wrapper">
              <h3 class="item__title">Записаться</h3>

              <a class="item__text item__link" href="tel:+78126035313">603-53-13</a>

              <a class="item__text item__link" href="https://widget.sonline.su/ru/services/?placeid=6663" target="_blank">Онлайн</a>
            </div>
          </div>

          <div class="block__item item">
            <img class="item__img" src="../assets/images/email.png" alt="Иконка локации" width="32" height="32">

            <div class="item__wrapper">
              <h3 class="item__title">Обратная связь</h3>

              <a class="item__text item__link" href="mailto:office@vmestomam.ru">office@vmestomam.ru</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    return: {
      name: 'Contacts',
    }
  }
</script>

<style scoped lang="scss">
  $mainColor: #694f38;
  $secondColor: #58b6ac;

  .contacts {
    margin-bottom: 50px;
  }

  .contacts__map {
    width: 100%;
    height: 60vh;
  }

  .contacts__wrapper {
    width: 80vw;
    position: absolute;
    bottom: -10vh;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: $mainColor;
    padding: 20px;
    color: #fff;
    display: flex;
    border-radius: 20px;
  }

  .block {
    display: flex;
    flex-direction: column;
  }

  .block_left {
    width: 30%;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding-right: 20px;
  }

  .block_right {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 70%;
    padding-top: 25px;
  }

  .block__title {
    margin-bottom: 20px;
    font-size: 1.8rem;
    text-align: center;
  }

  .block__text {
    font-size: 0.9rem;
  }

  .item {
    display: flex;
    // align-items: center;
    justify-content: space-around;
    gap: 10px;
  }

  .item__img {
    width: 32px;
    height: 32px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(113deg) brightness(103%) contrast(102%);
  }

  .item__title {
    margin-bottom: 10px;
    padding-top: 5px;
    font-size: 1rem;
  }

  .item__text {
    font-size: 0.9rem;
    display: block;
  }

  .item__text:not(:last-child) {
    margin-bottom: 5px;
  }

  .item__link:hover {
    color: $secondColor;
    transition: all ease-in-out .3s;
  }
</style>