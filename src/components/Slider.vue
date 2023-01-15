<template>
  <swiper
    :speed="1000"
    :slides-per-view="1"
    :autoplay="autoplay"
    :loop="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="slider"
  >
    <swiper-slide class="slider__slide slide">
      <img class="slide__img" src="../assets/images/header-slider/slide-1.jpg" alt="Изображение" width="1920" height="1080">

      <!-- <div class="slide__wrapper">
        <h2 class="slide__title">Заголовок</h2>

        <p class="slide__text">Тут можно разместить какой-нибудь текст, например </p>

        <button class="slide__btn">И кнопку</button>
      </div> -->
    </swiper-slide>

    <swiper-slide>
      <img class="slide__img" src="../assets/images/header-slider/slide-2.jpg" alt="Изображение" width="1920" height="1080">
    </swiper-slide>

    <swiper-slide>
      <img class="slide__img" src="../assets/images/header-slider/slide-3.jpg" alt="Изображение" width="1920" height="1080">
    </swiper-slide>
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
  .slide {
    position: relative;
  }

  .slide__wrapper {
    position: absolute;
    z-index: 100;
    top: 40%;
    right: 30%;
    color: #fff;
  }
</style>