<template>
  <section class="cerificate" id="certificate">
    <div class="container">
      <div class="certificate__wrapper">
        <img class="certificate__img" src="../assets/images/cert.jpg" alt="Изображение подарочного сертификата" width="1796" height="1288">

        <div class="certificate__info">
          <h2 class="certificate__title">Подарочный сертификат</h2>

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
    }

    @media (max-width: 860px) {
      font-size: 1.5rem;
      margin-bottom: 10px;
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
  }

  .certificate__img {
    width: 30%;
    object-fit: contain;
    border-radius: 20px;

    @media (max-width: 860px) {
    }
  }

  .certificate__text {
    font-size: 1rem;
    text-align: justify;
    margin-bottom: 10px;
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
  }

  .certificate__btn:hover {
    background-color: $secondColor;
    transition: all ease-in-out .3s;
    box-shadow: none;
    transform: scale(1.1);
  }
</style>