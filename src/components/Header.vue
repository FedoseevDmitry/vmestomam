<template>
  <header class="header" id="header">
    <div class="container">
      <div class="header__wrapper">
        <img class="header__logo" src="../assets/images/logo.png" alt="Логотип студии vMestoMam">

        <div class="header__info-wrapper">
          <div class="header__module-wrapper">
            <h1 class="header__title visually-hidden">Студия красоты vMestoMam</h1>
            <img class="header__img" src="../assets/images/telephone.png" alt="Иконка телефона" width="512" height="512">

            <div class="header__item-wrapper">
              <p class="header__text">Записаться</p>

              <a class="header__text header__link" href="tel:+78126035313">+7 (812) 603-53-13</a>
            </div>
          </div>

          <div class="header__module-wrapper header__module-wrapper">
            <img class="header__img" src="../assets/images/location.png" alt="Иконка местоположения" width="512" height="512">

            <div class="header__item-wrapper">
              <p class="header__text">Ждем Вас</p>
                
              <a class="header__text header__link header__text_big" href="https://yandex.ru/maps/org/vmestomam/1501364459/" target="_blank">СПб., м. ул. Дыбенко,</a>
              <a class="header__text header__link header__text_big" href="https://yandex.ru/maps/org/vmestomam/1501364459/" target="_blank">Кудрово, Областная ул. д.1, арка 10</a>
            </div>
          </div>
        </div>
      </div>

      <Slide right noOverlay class="header__burger burger">
        <ul class="burger__list nav__list">
          <li class="burger__item nav__item">
            <a class="burger__link nav__link" href="#promo">Акции</a>
          </li>

          <li class="burger__item nav__item">
            <a class="burger__link nav__link" href="#price">Цены и услуги</a>
          </li>

          <li class="burger__item nav__item">
            <a class="burger__link nav__link" href="#about">Почему мы?</a>
          </li>

          <li class="burger__item nav__item">
            <a class="burger__link nav__link" href="#certificate">Сертификат</a>
          </li>

          <li class="burger__item nav__item">
            <a class="burger__link nav__link" href="#contacts">Контакты</a>
          </li>
        </ul>

        <div class="burger__footer-wrapper">
          <ul class="burger__list social__list">
            <li class="burger__item social__item">
              <a class="burger__link social__link" href="http://vk.com/vmestomam">
                <img class="burger__img social__img" src="../assets/images/vk.svg" alt="Иконка ВКонтакте">
              </a>
            </li>

            <li class="burger__item social__item">
              <a class="burger__link social__link" href="https://t.me/s/vmestomam">
                <img class="burger__img social__img" src="../assets/images/telegram.svg" alt="Иконка Телеграма">
              </a>
            </li>

            <li class="burger__item social__item">
              <a class="burger__link social__link" href="http://wa.me/79119251310">
                <img class="burger__img social__img" src="../assets/images/whatsapp.svg" alt="Иконка Ватсапа">
              </a>
            </li>
          </ul>

          <a class="header__text header__link" href="tel:+78126035313">+7 (812) 603-53-13</a>
        </div>
      </Slide>

      <div class="header__wrapper header__wrapper_colored">
        <div class="header__wrapper header__wrapper_no-margin">
          <nav class="header__nav nav">
            <ul class="nav__list">
              <li class="nav__item">
                <a class="nav__link" href="#promo">Акции</a>
              </li>

              <li class="nav__item">
                <a class="nav__link" href="#price">Цены и услуги</a>
              </li>

              <li class="nav__item">
                <a class="nav__link" href="#about">Почему мы?</a>
              </li>

              <li class="nav__item">
                <a class="nav__link" href="#certificate">Сертификат</a>
              </li>

              <li class="nav__item">
                <a class="nav__link" href="#contacts">Контакты</a>
              </li>
            </ul>
          </nav>

          <div class="header__social-wrapper social">
            <ul class="social__list">
              <!-- <li class="social__item">
                <a class="social__link" href="https://www.instagram.com/vmestomam/">
                  <img class="social__img" src="../assets/images/instagram.svg" alt="Иконка Инстаграма">
                </a>
              </li> -->

              <li class="social__item">
                <a class="social__link" href="http://vk.com/vmestomam" target="_blank">
                  <img class="social__img" src="../assets/images/vk.svg" alt="Иконка ВКонтакте">
                </a>
              </li>

              <li class="social__item">
                <a class="social__link" href="https://t.me/s/vmestomam" target="_blank">
                  <img class="social__img" src="../assets/images/telegram.svg" alt="Иконка Телеграма">
                </a>
              </li>

              <li class="social__item">
                <a class="social__link" href="http://wa.me/79119251310" target="_blank">
                  <img class="social__img" src="../assets/images/whatsapp.svg" alt="Иконка Ватсапа">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Slide } from 'vue3-burger-menu'

export default {
  name: 'Header',
  components: {
    Slide
  }
}
</script>

<style scoped lang="scss">
  $mainColor: #694f38;
  $secondColor: #58b6ac;

  .header {
    padding-top: 10px;
    background-color: #fff;
    width: 100%;
  }

  .header__wrapper {
    display: flex;
    width: 80vw;
    margin: 0 auto;
    margin-bottom: 10px;
    justify-content: space-between;

    @media (max-width: 1400px) {
      width: 95vw;
    }
  }

  .header__logo {
    max-width: 280px;
    object-fit: contain;

    @media (max-width: 860px) {
      max-width: 220px;
    }

    @media (max-width: 660px) {
      max-width: 200px;
    }
  }

  .header__info-wrapper {
    display: flex;
    column-gap: 10px;
    padding-top: 10px;
  }

  .header__module-wrapper {
    display: flex;
    align-items: flex-start;
    column-gap: 10px;

    @media (max-width: 860px) {
      column-gap: 5px;
      display: none;
    }
  }

  // .header__module-wrapper_address {
  //   @media (max-width: 680px) {
  //     display: none;
  //   }
  // }

  .header__img {
    width: 32px;

    @media (max-width: 1100px) {
      width: 24px;
    }

    @media (max-width: 860px) {
      width: 16px;
    }
  }

  .header__item-wrapper {
    display: flex;
    flex-direction: column;
  }

  .header__text {
    font-size: .9rem;

    @media (max-width: 1100px) {
      font-size: .8rem;
    }
  }

  .header__link,
  .header__text_big {
    font-size: 1.2rem;
    font-weight: 700;

    @media (max-width: 1400px) {
      font-size: 1rem;
    }

    @media (max-width: 1100px) {
      font-size: .9rem;
    }

    @media (max-width: 860px) {
      font-size: .8rem;
    }

    @media (max-width: 660px) {
      margin: 0 auto;
      font-size: 1.1rem;
      color: #fff;
    }
  }

  .header__link:hover,
  .nav__link:hover {
    color: $secondColor;
    transition: color ease-in-out .3s;
  }

  // NAVIGATION
  .header__wrapper_colored {
    background-color: $mainColor;
    width: 100%;
    margin-bottom: 0;

    @media (max-width: 660px) {
      display: none;
    }
  }

  .header__wrapper_no-margin {
    margin-bottom: 0;
  }

  .nav {
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 60%;
    justify-content: space-between;

    @media (max-width: 1100px) {
      width: 70%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .nav__list {
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 660px) {
      flex-direction: column;
      justify-content: center;
      padding: 0;
      row-gap: 10px;
      margin-bottom: 50px;
    }
  }

  .nav__item {
    position: relative;

    @media (max-width: 660px) {
      display: flex;
      justify-content: center;
    }
  }

  .nav__item:after {
    position: absolute;
    content: "";
    width: 0%;
    height: 4px;
    background-color: $secondColor;
    left: 50%;
    bottom: -10px;
    transition: all .3s ease-in-out;
  }

  .nav__item:hover:after {
    width: 100%;
    left: 0;

    @media (max-width: 660px) {
      width: 0;
    }
  }

  .nav__link {
    color: #fff;

    @media (max-width: 1400px) {
      font-size: 1.1rem;
    }

    @media (max-width: 1100px) {
      font-size: 1rem;
    }

    @media (max-width: 860px) {
      font-size: .9rem;
    }

    @media (max-width: 660px) {
      font-size: 1rem;
    }
  }

  //SOCIAL
  .social {
    display: flex;
    align-items: center;
  }

  .social__list {
    display: flex;
    column-gap: 20px;
    align-items: center;

    @media (max-width: 660px) {
      padding: 0;
      justify-content: center;
      column-gap: 20px;
      margin-bottom: 20px;
    }
  }

  .social__item {
    display: flex;
  }

  .social__link {
    display: flex;
    align-items: center;
  }

  .social__img {
    width: 32px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(113deg) brightness(103%) contrast(102%);

    @media (max-width: 1100px) {
      width: 24px;
    }
  }

  .social__img:hover {
    transition: all ease-in-out .3s;
    filter: invert(70%) sepia(34%) saturate(525%) hue-rotate(124deg) brightness(87%) contrast(87%);
    transform: scale(1.1);
  }
</style>

<style lang="scss">
  $mainColor: #694f38;
  $secondColor: #58b6ac;

  .bm-burger-button {
    right: 16px !important;
    left: unset !important;
    top: 24px !important;
    z-index: 100 !important;
    position: fixed !important;
    display: none !important;

    @media (max-width: 660px) {
      display: block !important;
    }
  }

  .bm-burger-bars {
    background-color: $secondColor !important;
  }

  .bm-item-list {
    margin: 0 !important;
    height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-around !important;
  }

  .burger__footer-wrapper {
    display: flex !important;
    flex-direction: column !important;
    padding: 0 !important;
  }
</style>