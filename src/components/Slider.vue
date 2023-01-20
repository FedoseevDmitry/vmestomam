<template>
  <swiper
    :speed="1000"
    :slides-per-view="1"
    :loop="true"
    :no-swiping="true"
    :allow-touch-move="false"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="slider"
  >
    <swiper-slide class="slider">
      <div class="slider__image-wrapper">
        <img class="slider__image" src="../assets/images/header-slider/slide-0.jpg" alt="Изображение" width="1920" height="1080">
      </div>

      <div class="slider__wrapper item">
        <div class="item__block item__block_black">
          <p class="item__text item__text_big">СТУДИЯ СЕМЕЙНОЙ КРАСОТЫ</p>

          <h2 class="item__title">VMESTOMAM</h2>

          <p class="item__text">с детской комнатой и няней</p>

          <a class="item__btn item__btn_black" href="https://widget.sonline.su/ru/services/?placeid=6663" target="_blank">Записаться онлайн</a>
        </div>

        <div class="item__block">
          <p class="item__text item__text_big">ЗНАКОМСТВО С VMESTOMAM:</p>

          <div class="item__title-wrapper">
            <h2 class="item__title">ПОДАРОК 20%</h2>
            <h2 class="item__title">НА ПЕРВОЕ ПОСЕЩЕНИЕ </h2>
          </div>

          <a class="item__btn" href="http://wa.me/79119251310?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D1%83%20%D0%BF%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%D1%83%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5." target="_blank">Записаться</a>
        </div>
       
      </div>
    </swiper-slide>

    <!-- <swiper-slide>
      <img class="slide__img" src="../assets/images/header-slider/slide-2.jpg" alt="Изображение" width="1920" height="1080">
    </swiper-slide>

    <swiper-slide>
      <img class="slide__img" src="../assets/images/header-slider/slide-3.jpg" alt="Изображение" width="1920" height="1080">
    </swiper-slide> -->
  </swiper>
</template>

<script>
  import SwiperCore, { Autoplay } from "swiper"
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  SwiperCore.use([Autoplay]);

  export default {
    name: 'Slider',
    components: {
      Swiper,
      SwiperSlide,
    },
    data () {
      return {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      }
    },
    setup() {
      const onSwiper = (swiper) => {
      };
      const onSlideChange = () => {
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>

<style scoped lang="scss">
  $mainColor: #694f38;
  $secondColor: #58b6ac;

  .slider {
    position: relative;
  }

  .slider__image-wrapper {
    position: relative;
    display: flex;
  }

  .slider:after {
    content: '';
    position: absolute;
    background-color: #000;
    left: 50%;
    top: 0;
    width: 50vw;
    height: 100%;
    opacity: 0.6;
  }

  .slider__wrapper {
    position: absolute;
    z-index: 100;
    top: 30%;
    left: 50%;
    color: #fff;
    transform: translate(-50%, 0);
  }

  .slider__image {
    height: 70vh;
    object-fit: cover;
  }

  .item {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .item__block {
    display: grid;
    grid-template-rows: 50px 100px 70px 40px;
    grid-template-areas: 
    "subtitle"
    "title"
    "desc"
    "btn";
    width: 50%;
    text-align: center;
  }

  .item__block_black {
    color: #000;
  }

  .item__title,
  .item__text_big {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item__title-wrapper {
    grid-area: title;
  }

  .item__title {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  .item__text {
    font-size: 1.2rem;
    line-height: 1.2rem;
    grid-area: desc;
  }

  .item__text_big {
    font-size: 1.5rem;
    line-height: 1.5rem;
    grid-area: subtitle;
  }

  .item__btn {
    padding: 10px;
    grid-area: btn;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    margin: 0 auto;
    border-radius: 10px;
    background-color: transparent;
    color: #fff;
    font-size: 1.2rem;
    border: 1px solid #fff;
  }

  .item__btn_black {
    color: #000;
    border-color: #000;
  }

  .item__btn:hover {
    background-color: $secondColor;
    transition: all ease-in-out .3s;
    box-shadow: none;
    transform: scale(1.1);
    border: none;
    color: #fff;
  }
</style>