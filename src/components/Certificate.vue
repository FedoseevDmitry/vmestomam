<template>
  <section class="cerificate" id="certificate">
    <div class="container">
      <div class="certificate__wrapper">
        <h2 class="certificate__title certificate__title_mobile">Подарочный сертификат</h2>

        <img class="certificate__img" src="../assets/images/cert.jpg" alt="Изображение подарочного сертификата" width="1796" height="1288">

        <div class="certificate__info">
          <h2 class="certificate__title certificate__title_desktop">Подарочный сертификат</h2>

          <p class="certificate__text">Подарите Вашим близким ЗАБОТУ и ВРЕМЯ на СЕБЯ. В нашей студии Вы можете приобрести сертификат на услуги любого номинала. Такой подарок станет идеальным решением по любому поводу.</p>

          <a class="certificate__btn" href="http://wa.me/79119251310" target="_blank">Узнать больше</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Certificate'
  }
</script>

<style scoped lang="scss">
  $mainColor: #694f38;
  $secondColor: #58b6ac;

  .certificate__title {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 25px;
    font-size: 2rem;
    line-height: 2rem;

    @media (max-width: 1100px) {
      font-size: 1.7rem;
      line-height: 1.7rem;
    }

    @media (max-width: 860px) {
      font-size: 1.5rem;
      line-height: 1.5rem;
      margin-bottom: 10px;
    }

    @media (max-width: 660px) {
      font-size: 1.3rem;
      line-height: 1.3rem;
      margin-bottom: 5px;
    }
  }

  .certificate__title_desktop {
    @media (max-width: 570px) {
      display: none;
    }
  }

  .certificate__title_mobile {
    display: none;

    @media (max-width: 570px) {
      display: block;
    }
  }

  .certificate__wrapper {
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    gap: 20px;

    @media (max-width: 1100px) {
      width: 100%;
    }

    @media (max-width: 570px) {
      flex-direction: column;
      gap: 5px;
    }
  }

  .certificate__info {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 50px;
    width: 50%;

    @media (max-width: 1400px) {
      padding-top: 10px;
      padding-left: 25px;
    }

    @media (max-width: 860px) {
      padding-left: 10px;
      width: 60%;
    }

    @media (max-width: 570px) {
      padding: 0;
      width: 100%;
    }
  }

  .certificate__img {
    width: 30%;
    object-fit: contain;
    border-radius: 20px;

    @media (max-width: 570px) {
      margin: 0 auto;
      width: 40%;
    }
  }

  .certificate__text {
    font-size: 1rem;
    text-align: justify;
    margin-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .certificate__btn {
    padding: 10px;
    grid-area: btn;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    margin: 0 auto;
    border-radius: 10px;
    background-color: $mainColor;
    color: #fff;
    font-size: 1.2rem;

    @media (max-width: 860px) {
      font-size: 1rem;
    }

    @media (max-width: 660px) {
      font-size: .9rem;
      line-height: 0.9rem;
    }
  }

  .certificate__btn:hover {
    background-color: $secondColor;
    transition: all ease-in-out .3s;
    box-shadow: none;
    transform: scale(1.1);
  }
</style>