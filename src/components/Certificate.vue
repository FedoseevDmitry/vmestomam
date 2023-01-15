<template>
  <section class="cerificate" id="certificate">
    <div class="container">
      <div class="certificate__wrapper">
        <img class="certificate__img" src="../assets/images/cert.jpg" alt="Изображение подарочного сертификата" width="1796" height="1288">

        <div class="certificate__info">
          <h2 class="certificate__title">Подарочный сертификат</h2>

          <p class="certificate__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, tempora expedita voluptatibus corporis ad magnam culpa necessitatibus quae nisi voluptatem, commodi neque odio perferendis impedit minima totam dolor aperiam porro omnis harum inventore fugit possimus provident. Nihil, dolor. Fugiat nam ullam quis. Deserunt harum accusantium doloremque rem aperiam esse aut.</p>

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
    margin-bottom: 25px;
  }

  .certificate__wrapper {
    display: flex;
    justify-content: center;
    max-width: 80vw;
    margin: 0 auto;
  }

  .certificate__info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 50px;
    padding-left: 50px;
    max-width: 30%;
  }

  .certificate__img {
    max-width: 40vw;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
  }

  .certificate__title {
    font-size: 1.8rem;
  }

  .certificate__text {
    font-size: 1.2rem;
    text-align: justify;
  }

  .certificate__btn {
    padding: 10px;
    grid-area: btn;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    margin: 0 auto;
    border-radius: 10px;
    background-color: $mainColor;
    color: #fff;
  }

  .certificate__btn:hover {
    background-color: $secondColor;
    transition: all ease-in-out .3s;
    box-shadow: none;
    transform: scale(1.1);
  }
</style>