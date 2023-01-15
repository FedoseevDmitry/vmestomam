<template>
  <section class="promo" id="promo">
    <div class="container promo__container">
      <h2 class="promo__title">Наши акции</h2>

      <div class="promo__slider-wrapper">
        <swiper
          :speed="1000"
          :slides-per-view="3"
          :loop="true"
          :space-between="150"
          :navigation="{
            prevEl: prev,
            nextEl: next,
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="promo__slider"
        >
          <swiper-slide class="slider__slide slide">
            <div class="slide__wrapper">
              <img class="slide__img slide__img_first-slide" src="../assets/images/promo-slider/slide.jpg" alt="Изображение акции">

              <h3 class="slide__title">Название акции 1</h3>

              <p class="slide__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, iure?</p>

              <a class="slide__btn" href="https://widget.sonline.su/ru/services/?placeid=6663" target="_blank">Онлайн запись</a>
            </div>
          </swiper-slide>

          <swiper-slide class="slider__slide slide">
            <div class="slide__wrapper">
              <img class="slide__img slide__img_second-slide" src="../assets/images/promo-slider/slide.jpg" alt="Изображение акции">

              <h3 class="slide__title">Название акции 2</h3>

              <p class="slide__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dolorum.</p>

              <a class="slide__btn" href="https://widget.sonline.su/ru/services/?placeid=6663" target="_blank">Онлайн запись</a>
            </div>
          </swiper-slide>

          <swiper-slide class="slider__slide slide">
            <div class="slide__wrapper">
              <img class="slide__img slide__img_third-slide" src="../assets/images/promo-slider/slide.jpg" alt="Изображение акции">

              <h3 class="slide__title">Название акции 3</h3>

              <p class="slide__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsum?</p>

              <a class="slide__btn" href="https://widget.sonline.su/ru/services/?placeid=6663" target="_blank">Онлайн запись</a>
            </div>
          </swiper-slide>

          <swiper-slide class="slider__slide slide">
            <div class="slide__wrapper">
              <img class="slide__img slide__img_fourth-slide" src="../assets/images/promo-slider/slide.jpg" alt="Изображение акции">

              <h3 class="slide__title">Название акции 4</h3>

              <p class="slide__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quos libero eveniet modi dolores fuga molestiae possimus ex error ea?</p>

              <a class="slide__btn" href="https://widget.sonline.su/ru/services/?placeid=6663" target="_blank">Онлайн запись</a>
            </div>
          </swiper-slide>
        </swiper>

        <div ref="prev" class="swiper-button-prev"></div>

        <div ref="next" class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script>
  import SwiperCore, { Navigation } from "swiper"
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { ref } from "vue";

  SwiperCore.use([Navigation]);

  export default {
    name: 'Promo',
    components: {
      Swiper,
      SwiperSlide,
    },
    data () {
      return {
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false
        // }
      }
    },
    setup() {
      const next = ref(null);
      const prev = ref(null);
      const onSwiper = (swiper) => {
      };
      const onSlideChange = () => {
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation],
        next,
        prev
      };
    },
  }
</script>

<style lang="scss">
  $mainColor: #694f38;
  $secondColor: #58b6ac;

  .promo__title {
    margin-bottom: 25px;
    text-align: center;
    font-size: 2rem;
  }

  .promo__slider {
    padding: 10px;
    padding-bottom: 15px;
  }

  .promo__slider-wrapper {
    position: relative;
    margin: 0 auto;
    width: 80vw;
  }

  .slide {
    width: 20vw;
    box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
  }

  .slide__wrapper {
    display: grid;
    text-align: center;
    grid-template: 400px 50px 80px 50px/repeat(2, 1fr);
    grid-template-areas: 
    "image image"
    "title title"
    "desc desc"
    "btn btn";
  }

  .slide__img {
    grid-area: image;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slide__title {
    grid-area: title;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide__text {
    grid-area: desc;
  }

  .slide__btn {
    padding: 10px;
    position: relative;
    grid-area: btn;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6);
  }

  .slide__btn:hover {
    background-color: $secondColor;
    transition: all ease-in-out .3s;
    box-shadow: none;
  }

  .swiper-button-prev {
    left: -100px;
    color: $secondColor;
  }

  .swiper-button-next {
    right: -100px;
    color: $secondColor;
  }
</style>