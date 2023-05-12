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
        <img class="slider__image" src="@/assets/images/header-slider/slide.jpg" alt="Шапка">
      </div>
      <a class="item__btn" href="https://widget.sonline.su/ru/services/?placeid=6663" target="_blank">Записаться онлайн</a>
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
  $mainColor: #825A37;
  $secondColor: #789191;

  .slider {
    position: relative;
  }

  .slider__image-wrapper {
    position: relative;
    display: flex;
  }

  .slider__image {
    width: 100%;
  }

  .item__btn {
    position: absolute;
    z-index: 100;
    bottom: 40px;
    left: 150px;
    padding: 30px 80px;
    grid-area: btn;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    margin: 0 auto;
    background-color: #fff;
    font-size: 2.2rem;
    font-weight: 600;
    text-transform: uppercase;

    @media (max-width: 1800px) {
      font-size: 1.8rem;
      bottom: 50px;
      left: 120px;
      padding: 20px 50px;
    }

    @media (max-width: 1440px) {
      font-size: 1.8rem;
      bottom: 35px;
      left: 120px;
      padding: 20px 50px;
    }

    @media (max-width: 1100px) {
      font-size: 1.5rem;
      bottom: 25px;
      left: 90px;
      padding: 15px 30px;
    }

    @media (max-width: 912px) {
      font-size: 1rem;
      bottom: 20px;
      left: 70px;
      padding: 10px 25px;
    }

    @media (max-width: 860px) {
      font-size: 1rem;
      bottom: 20px;
      left: 70px;
      padding: 10px 25px;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      bottom: 15px;
      left: 65px;
      padding: 10px 25px;
    }

    @media (max-width: 560px) {
      font-size: 0.7rem;
      bottom: 15px;
      left: 45px;
      padding: 2px 15px;
    }

    @media (max-width: 500px) {
      font-size: 0.5rem;
      bottom: 8%;
      left: 8%;
      padding: 0px 5px;
    }
  }

  .item__btn:hover {
    background-color: $secondColor;
    transition: all ease-in-out .3s;
    box-shadow: none;
    transform: scale(1.1);
    border: none;
    color: #fff;
    border: 1px solid #fff;
  }
</style>