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

              <a class="header__text header__link" href="tel:+78126035313">603-53-13</a>
            </div>
          </div>

          <div class="header__module-wrapper">
            <img class="header__img" src="../assets/images/location.png" alt="Иконка местоположения" width="512" height="512">

            <div class="header__item-wrapper">
              <p class="header__text">Ждем Вас</p>
                
              <p class="header__text header__text_big">СПб., м. Дыбенко,</p>
              <p class="header__text header__text_big">Кудрово, Областная ул. д.1, арка 10</p>
            </div>
          </div>
        </div>
      </div>

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
                <a class="nav__link" href="#contacts">Контакты</a>
              </li>

              <li class="nav__item">
                <a class="nav__link" href="#certificate">Сертификат</a>
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
export default {
  name: 'Header',
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
  }

  .header__logo {
    max-width: 280px;
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
  }

  .header__img {
    width: 32px;
    height: 32px;
  }

  .header__item-wrapper {
    display: flex;
    flex-direction: column;
  }

  .header__text {
    font-size: .9rem;
  }

  .header__link,
  .header__text_big {
    font-size: 1.2rem;
    font-weight: 700;
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
  }

  .header__wrapper_no-margin {
    margin-bottom: 0;
  }

  .nav {
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .nav__list {
    display: flex;
    justify-content: space-between;
    width: 50vw;
  }

  .nav__item {
    position: relative;
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
  }

  .nav__link {
    color: #fff;
  }

  //SOCIAL
  .social {
    display: flex;
    align-items: center;
  }

  .social__list {
    display: flex;
    column-gap: 20px;
  }

  .social__img {
    width: 32px;
    height: 32px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(113deg) brightness(103%) contrast(102%);
  }

  .social__img:hover {
    transition: all ease-in-out .3s;
    filter: invert(70%) sepia(34%) saturate(525%) hue-rotate(124deg) brightness(87%) contrast(87%);
    transform: scale(1.1);
  }
</style>
