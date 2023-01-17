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
          <swiper-slide class="slider__slide slide" v-for="slide in slides">
            <div class="slide__wrapper">
              <img class="slide__img slide__img_first-slide" :src="getImgUrl(slide.img)" alt="Изображение акции">

              <div class="slide__header-block">
                <h3 class="slide__title">{{ slide.title }}</h3>

                <p class="slide__subtitle">{{ slide.subtitle }}</p>
              </div>

              <div class="slide__info-block info-block">
                <div class="info-block__text-wrapper" v-for="description in slide.descriptions">
                  <h4 class="info-block__title"> {{ description.title  }}</h4>

                  <h4 class="info-block__subtitle">{{ description.name }}</h4>

                  <p class="info-block__text info-block__text_cross">{{ description.oldValue }}</p>

                  <p class="info-block__text">{{ description.newValue }}</p>
                </div>
              </div>

              <a class="slide__btn" :href="slide.link" target="_blank" v-if="slide.link">Записаться</a>
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
        slides: {
          firstSlide: {
            img: 'slide.jpg',
            title: 'Стрижки',
            subtitle: 'Будний день с 9.00 до 12.00',
            descriptions: [
              {name: 'Женская', oldValue: '1000р./1200р./1400р.', newValue: '800р./1000р./1200р.'},
              {name: 'Мужская', oldValue: '800р.', newValue: '600р.'},
              {name: 'Детская', oldValue: '600р.', newValue: '500р.'},
            ],
            link: 'http://wa.me/79119251310',
          },
          secondSlide: {
            img: 'slide.jpg',
            title: 'Ногти',
            subtitle: 'Будний день с 9.00 до 12.00',
            descriptions: [
              {title: 'ПАКЕТ МАНИКЮР + ПЕДИКЮР + покрытие гель/лак', name: 'у одного мастера', oldValue: '3900р.', newValue: '3500р.'},
              {title: '', name: 'в 4 руки', oldValue: '4300р.', newValue: '3900р.'},
            ],
            link: 'http://wa.me/79119251310',
          },
          thirdSlide: {
            img: 'slide.jpg',
            title: '-20% на день рождения',
            descriptions: [
              {name: 'Действует однократно на услугу или комплекс услуг в любой день месяца', oldValue: '', newValue: ''},
            ],
            link: '',
          },
        },
      }
    },
    methods: {
      getImgUrl(picture) {
        return require('../assets/images/promoSlider/' + picture);
      },
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
    border-radius: 20px;
  }

  .slide__wrapper {
    display: grid;
    text-align: center;
    grid-template-rows: 300px 50px 200px 50px;
    row-gap: 10px;
    grid-template-areas: 
    "image"
    "header"
    "body"
    "btn";
  }

  .slide__img {
    grid-area: image;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  .slide__header-block {
    grid: header;
  }

  .slide__title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .slide__info-block {
    grid-area: body;
  }

  .info-block__text-wrapper {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  .info-block__title {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 5px;
  }

  .info-block__text_cross {
    text-decoration: line-through;
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
    border-radius: 0 0 20px 20px;
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