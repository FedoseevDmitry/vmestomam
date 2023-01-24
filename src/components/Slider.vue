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
        <div class="slider__image"></div>
      </div>

      <div class="slider__wrapper item">
        <div class="item__block item__block_black">
          <div class="item__block-text">
            <p class="item__text item__text_big">СТУДИЯ СЕМЕЙНОЙ КРАСОТЫ</p>

            <h2 class="item__title">VMESTOMAM</h2>

            <p class="item__text">с детской комнатой и няней</p>
          </div>

          <a class="item__btn item__btn_black" href="https://widget.sonline.su/ru/services/?placeid=6663" target="_blank">Записаться онлайн</a>
        </div>

        <div class="item__block">

          <div class="item__block-text">
            <p class="item__text item__text_big">ЗНАКОМСТВО С VMESTOMAM:</p>

            <div class="item__title-wrapper">
              <h2 class="item__title">ПОДАРОК 20%</h2>
              <h2 class="item__title item__title_second">НА ПЕРВОЕ ПОСЕЩЕНИЕ </h2>
            </div>
          </div>

          <a class="item__btn" href="http://wa.me/79119251310?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D1%83%20%D0%BF%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%D1%83%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5." target="_blank">Записаться</a>
        </div>
       
      </div>
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
  $mainColor: #694f38;
  $secondColor: #58b6ac;

  .slider {
    position: relative;
  }

  .slider__image-wrapper {
    position: relative;
    display: flex;
  }

  .slider__image-wrapper:after {
    content: '';
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    opacity: 0.4;

    @media (max-width: 560px) {
      width: 100%;
      height: 50%;
    }
  }

  .slider:after {
    content: '';
    position: absolute;
    background-color: #000;
    left: 50%;
    top: 0;
    width: 50%;
    height: 100%;
    opacity: 0.6;

    @media (max-width: 560px) {
      width: 100%;
      height: 50%;
      left: 0;
      top: 50%;
    }
  }

  .slider__wrapper {
    position: absolute;
    z-index: 100;
    top: 30%;
    left: 50%;
    color: #fff;
    transform: translate(-50%, 0);

    @media (max-width: 1400px) {
      top: 35%;
    }

    @media (max-width: 1100px) {
      top: 25%;
    }

    @media (max-width: 860px) {
      top: 25%;
    }

    @media (max-width: 560px) {
      top: 10%;
    }
  }

  .slider__image {
    background-image: url(..//assets/images/header-slider/slide-7.jpg);
    height: 470px;
    width: 100%;
    background-size: cover;
    background-position: 0% 35%;

    @media (max-width: 1400px) {
      background-position: 0% 30%;
      height: 340px;
    }

    @media (max-width: 1100px) {
      background-position: 0% 35%;
      height: 260px;
    }

    @media (max-width: 860px) {
      height: 240px;
      background-position: 0% 32%;
    }

    @media (max-width: 560px) {
      height: 300px;
      background-position: 0% 0%;
    }
  }

  .item {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 560px) {
      flex-direction: column;
      align-items: center;
      row-gap: 30px;
    }
  }

  .item__block {
    display: grid;
    grid-template-rows: 200px 40px;
    grid-template-areas: 
    "info"
    "btn";
    width: 50%;
    text-align: center;

    @media (max-width: 1400px) {
      grid-template-rows: 160px 40px;
    }

    @media (max-width: 1100px) {
      grid-template-rows: 130px 40px;
    }

    @media (max-width: 860px) {
      grid-template-rows: 110px 40px;
    }

    @media (max-width: 560px) {
      grid-template-rows: 80px 30px;
      width: 80%;
    }
  }

  .item__block_black {
    color: #000;
  }

  .item__block-text {
    grid-area: info;
  }

  .item__title,
  .item__text_big {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item__title {
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 10px;

    @media (max-width: 1400px) {
      font-size: 2rem;
      line-height: 2rem;
    }

    @media (max-width: 1100px) {
      font-size: 1.7rem;
      line-height: 1.7rem;
      margin-bottom: 0;
    }

    @media (max-width: 860px) {
      font-size: 1.4rem;
      line-height: 1.4rem;
    }

    @media (max-width: 660px) {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }

  .item__title:last-of-type {
    @media (max-width: 1100px) {
      margin-bottom: 5px;
    }
  }

  .item__text {
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: 600;

    @media (max-width: 1400px) {
      font-size: 1rem;
      line-height: 1rem;
    }

    @media (max-width: 1100px) {
      font-size: .9rem;
    }

    @media (max-width: 660px) {
      font-size: .7rem;
    }
  }

  .item__text_big {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-bottom: 10px;

    @media (max-width: 1400px) {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }

    @media (max-width: 1100px) {
      font-size: 1.1rem;
      line-height: 1.1rem;
    }

    @media (max-width: 860px) {
      font-size: 1rem;
      line-height: 1rem;
    }

    @media (max-width: 660px) {
      font-size: .8rem;
      line-height: 0.8rem;
    }
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
    font-weight: 600;

    @media (max-width: 1400px) {
      font-size: 1rem;
    }

    @media (max-width: 1100px) {
      font-size: 0.9rem;
    }
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