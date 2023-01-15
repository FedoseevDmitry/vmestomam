<template>
  <section class="about" id="about">
    <div class="container about__container">
      <h2 class="about__title">Почему мы?</h2>

      <div class="about__advantages advantages">
        <div class="advantages__img"></div>

        <div class="advantages__wrapper">
          <div class="advantage">
          <img class="advantage__img" src="../assets/images/checked.png" alt="Иконка">

          <h3 class="advantage__title">Преимущество 1</h3>

          <p class="advantage__text">Описание преимущества</p>
        </div>

        <div class="advantage">
          <img class="advantage__img" src="../assets/images/checked.png" alt="Иконка">

          <h3 class="advantage__title">Преимущество 2</h3>

          <p class="advantage__text">Описание преимущества</p>
        </div>

        <div class="advantage">
          <img class="advantage__img" src="../assets/images/checked.png" alt="Иконка">

          <h3 class="advantage__title">Преимущество 3</h3>

          <p class="advantage__text">Описание преимущества</p>
        </div>

        <div class="advantage">
          <img class="advantage__img" src="../assets/images/checked.png" alt="Иконка">

          <h3 class="advantage__title">Преимущество 4</h3>

          <p class="advantage__text">Описание преимущества</p>
        </div>
        </div>
      </div>

      <h3 class="about__title about__title_small">Отзывы</h3>

      <div class="about__slider-wrapper">
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
          class="about__slider"
        >
          <swiper-slide class="slider__slide">
            <div class="slide__wrapper">
              <img class="slide__img" src="../assets/images/about-slider/woman.png" alt="Изображение человека">

              <h4 class="slide__title">Имя Фамилия 1</h4>

              <div class="slide__text-wrapper">
                <p class="slide__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, iure?</p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="slider__slide">
            <div class="slide__wrapper">
              <img class="slide__img" src="../assets/images/about-slider/man.png" alt="Изображение человека">

              <h4 class="slide__title">Имя Фамилия 2</h4>

              <div class="slide__text-wrapper">
                <p class="slide__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam sed beatae doloribus natus repellat!</p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="slider__slide">
            <div class="slide__wrapper">
              <img class="slide__img" src="../assets/images/about-slider/woman.png" alt="Изображение человека">

              <h4 class="slide__title">Имя Фамилия 3</h4>

              <div class="slide__text-wrapper">
                <p class="slide__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla veritatis impedit inventore.</p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="slider__slide">
            <div class="slide__wrapper">
              <img class="slide__img" src="../assets/images/about-slider/woman.png" alt="Изображение человека">

              <h4 class="slide__title">Имя Фамилия 4</h4>

              <div class="slide__text-wrapper">
                <p class="slide__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem laudantium quasi magni quod repellat ipsam!</p>
              </div>
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
    name: 'About',
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

<style scoped lang="scss">
  $mainColor: #694f38;
  $secondColor: #58b6ac;

  .about__title {
    margin-bottom: 25px;
    text-align: center;
    font-size: 2rem;
  }

  .about__title_small {
    font-size: 1.8rem;
  }

  .advantages {
    display: flex;
    margin-bottom: 50px;
    background-color: $mainColor;
    color: #fff;
  }

  .advantages__img {
    background-size: cover;
    width: 70%;
    border-radius: 5% 0 0 5%;
    background-position-x: center;
    background-position-y: center;
    background-image: url('../assets/images/header-slider/slide-1.jpg');
  }

  .advantages__wrapper {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    width: 30%;
    padding: 20px;
    gap: 30px;
  }

  .advantage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .advantage__img {
    max-width: 64px;
    margin-bottom: 25px;
  }

  .advantage__title {
    margin-bottom: 15px;
  }

  .about__slider {
    padding: 10px;
    padding-bottom: 15px;
  }

  .about__slider-wrapper {
    position: relative;
    margin: 0 auto;
    width: 80vw;
  }

  .slide {
    width: 20vw;
    box-shadow: none;
  }

  .slide__wrapper {
    display: grid;
    text-align: center;
    grid-template: 128px 50px 1fr/repeat(2, 1fr);
    grid-template-areas: 
    "image image"
    "title title"
    "desc desc";
  }

  .slide__img {
    grid-area: image;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .slide__title {
    grid-area: title;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide__text-wrapper {
    grid-area: desc;
    padding: 10px;
    position: relative;
    background-color: $mainColor;
    color: #fff;
    border-radius: 20px;
  }

  .slide__text-wrapper:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 2vh solid transparent;
    border-right: 2vh solid transparent;
    border-top: 3vh solid $mainColor;
    position: absolute;
    top: -2vh;
    left: 50%;
    transform: rotate(180deg) translate(50%, 0);
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