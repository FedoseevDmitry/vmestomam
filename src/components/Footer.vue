<template>
  <footer class="footer" id="contacts">
    <div class="container">
      <div class="contacts">
        <iframe class="contacts__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.9392795286494!2d30.504037716172817!3d59.91655507084187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962e7c0c2717f9%3A0xcf8cf85ecbd4646!2z0KHRgtGD0LTQuNGPINC60YDQsNGB0L7RgtGLICJ2TWVzdG9NYW0i!5e0!3m2!1sru!2sru!4v1673809557983!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div class="contacts__wrapper">
          <div class="contacts__block block">
            <h2 class="block__title">Наши контакты</h2>
          </div>

          <div class="contacts__block block">
            <div class="block__item item">
              <img class="item__img" src="../assets/images/location.png" alt="Иконка локации" width="32" height="32">

              <div class="item__wrapper">
                <h3 class="item__title">Адрес</h3>

                <a class="item__text item__link" href="https://yandex.ru/maps/org/vmestomam/1501364459/" target="_blank">СПб., м. ул. Дыбенко,</a>
                <a class="item__text item__link" href="https://yandex.ru/maps/org/vmestomam/1501364459/" target="_blank">Кудрово, Областная ул. д.1, арка 10</a>
                <p class="item__text">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>

            <div class="block__item item">
              <img class="item__img" src="../assets/images/reserve.png" alt="Иконка локации" width="32" height="32">

              <div class="item__wrapper">
                <h3 class="item__title">Записаться</h3>

                <a class="item__text item__link" href="tel:+78126035313">+7 (812) 603-53-13</a>

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

      <div class="footer__wrapper">
        <p class="footer__copyrights">vMestoMam © 2023</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="scss">
  $mainColor: #694f38;
  $secondColor: #58b6ac;

  .footer {
    padding-top: 25px;
    background-color: $mainColor;
  }

  .contacts {
    display: flex;
    max-width: 80vw;
    margin: 0 auto;
    margin-bottom: 10px;

    @media (max-width: 1100px) {
      max-width: 90%;
    }

    @media (max-width: 660px) {
      max-width: 95%;
    }

    @media (max-width: 560px) {
      flex-direction: column;
    }
  }

  .footer__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: $mainColor;
    font-size: 1rem;
    padding-bottom: 5px;
    padding-top: 5px;
  }

  .contacts__map {
    width: 50%;
    height: 400px;
    border-radius: 20px;

    @media (max-width: 1400px) {
      height: 350px;
    }

    @media (max-width: 1100px) {
      height: 330px;
    }

    @media (max-width: 860px) {
      height: 290px;
    }

    @media (max-width: 560px) {
      order: 1;
      width: 100%;
    }
  }

  .contacts__block:first-child {
    margin-bottom: 20px;
    padding-top: 20px;

    @media (max-width: 1100px) {
      margin-bottom: 0;
    }

    @media (max-width: 560px) {
      padding-top: 0;
    }
  }

  .contacts__wrapper {
    width: 50%;
    background-color: $mainColor;
    display: flex;
    flex-direction: column;
    color: #fff;

    @media (max-width: 560px) {
      width: 100%;
    }
  }

  .block {
    display: flex;
    flex-direction: column;
  }

  .block__title {
    margin-bottom: 20px;
    font-size: 1.8rem;
    text-align: center;

    @media (max-width: 1100px) {
      font-size: 1.7rem;
    }

    @media (max-width: 860px) {
      font-size: 1.5rem;
    }

    @media (max-width: 660px) {
      font-size: 1.3rem;
      margin-bottom: 15px;
    }
  }

  .block__text {
    font-size: 0.9rem;
  }

  .item {
    display: flex;
    gap: 10px;
    margin: 0 auto;
    width: 50%;
    margin-bottom: 10px;

    @media (max-width: 1400px) {
      width: 70%;
    }

    @media (max-width: 860px) {
      width: 90%;
      margin-right: 0;
      gap: 5px;
    }

    @media (max-width: 560px) {
      padding-left: 25px;
    }
  }

  .item__img {
    width: 32px;
    height: 32px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(113deg) brightness(103%) contrast(102%);

    @media (max-width: 860px) {
      width: 24px;
      height: 24px;
    }
  }

  .item__title {
    margin-bottom: 10px;
    font-size: 1rem;
    line-height: 1rem;

    @media (max-width: 860px) {
      font-size: .9rem;
      margin-bottom: 5px;
    }
  }

  .item__text {
    font-size: 0.9rem;
    display: block;
    line-height: 1rem;

    @media (max-width: 860px) {
      font-size: .8rem;
    }
  }

  .item__text:not(:last-child) {
    margin-bottom: 5px;

    @media (max-width: 860px) {
      margin-bottom: 0;
    }
  }

  .item__link:hover {
    color: $secondColor;
    transition: all ease-in-out .3s;
  }

  .badge__big-width {
    max-width: 80vw;
    width: 80vw;
  }
</style>