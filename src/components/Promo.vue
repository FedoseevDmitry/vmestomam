<template>
  <section class="promo" id="promo">
    <div class="container promo__container">
      <h2 class="promo__title">Наши акции</h2>

      <div class="promo__slider-wrapper">
        <swiper
          :speed="1000"
          :slides-per-view="3"
          :loop="true"
          :space-between="120"
          :allow-touch-move="false"
          :breakpoints="breakpoints"
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

                  <div class="info-block__text-wrapper" v-for="block in description.blocks" v-if="description.blocks">
                    {{ block.item }}

                    <span class="info-block__text_cross">{{ block.oldValue }}</span>

                    {{ block.newValue }}
                  </div>

                  <p class="info-block__text"></p>
                </div>
              </div>

              <div class="slide__btn-wrapper">
                <a class="slide__btn" :href="slide.link" target="_blank" v-if="slide.link"> {{  slide.linkText }}</a>
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
    name: 'Promo',
    components: {
      Swiper,
      SwiperSlide,
    },
    data () {
      return {
        breakpoints: {
          1620: {slidesPerView: 3, spaceBetween: 100},
          1264: {slidesPerView: 3, spaceBetween: 50},
          900: {slidesPerView: 2, spaceBetween: 50},
          600: {slidesPerView: 2, spaceBetween: 20},
        },
        slides: {
          firstSlide: {
            img: 'haircut.jpg',
            title: 'Стрижки',
            subtitle: 'Будний день с 9.00 до 12.00',
            descriptions: [
              {name: 'Женская', blocks: [
                {item: 'короткие', oldValue: '1000', newValue: '800 руб.'},
                {item: 'средние', oldValue: '1200', newValue: '1000 руб.'},
                {item: 'длинные', oldValue: '1400', newValue: '1200 руб.'},
              ]},
              {name: 'Мужская', blocks: [
                {item: '', oldValue: '800', newValue: '600 руб.'},
              ]},
              {name: 'Детская', blocks: [
                {item: '', oldValue: '600', newValue: '500 руб.'},
              ]},
            ],
            link: 'https://widget.sonline.su/ru/services/?placeid=6663',
            linkText: 'Записаться онлайн'
          },
          secondSlide: {
            img: 'manicure.jpg',
            title: 'Пакет маникюр + педикюр + гель/лак',
            subtitle: 'Будний день с 9.00 до 12.00',
            descriptions: [
              {title: '', name:'у одного мастера', blocks: [
                {item: '', oldValue: '3900', newValue: '3500 руб.'},
              ]},
              {title: '', name: 'в 4 руки', blocks: [
                {item: '', oldValue: '4300', newValue: '3900 руб.'},
              ]},
            ],
            link: 'http://wa.me/79119251310?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D1%83%20%D0%BF%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%D1%83%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5.',
            linkText: 'Подробнее'
          },
          thirdSlide: {
            img: 'monthpromo.jpg',
            title: 'Акции месяца',
            descriptions: [
              {title: 'Самые выгодные актуальные предложения на услуги', name: '', blocks: [
                {item: '', oldValue: '', newValue: ''},
              ]},
            ],
            link: 'http://wa.me/79119251310?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D1%83%20%D0%BF%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%D1%83%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5.',
            linkText: 'Подробнее'
          },
          fourthSlide: {
            img: 'happyb.jpg',
            title: '-20% на день рождения',
            descriptions: [
              {title: 'Действует однократно на услугу или комплекс услуг в любой день месяца', name: '', blocks: [
                {item: '', oldValue: '', newValue: ''},
              ]},
            ],
            link: 'http://wa.me/79119251310?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D1%83%20%D0%BF%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%D1%83%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5.',
            linkText: 'Подробнее'
          },
          fifthSlide: {
            img: 'brand.jpg',
            title: 'День бренда',
            descriptions: [
              {title: 'Скидки на услуги и товары бренда, консультации приглашенных технологов, подарки и угощения', name: '', blocks: [
                {item: '', oldValue: '', newValue: ''},
              ]},
            ],
            link: 'http://wa.me/79119251310?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D1%83%20%D0%BF%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%D1%83%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5.',
            linkText: 'Подробнее'
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

    @media (max-width: 1100px) {
      font-size: 1.7rem;
    }

    @media (max-width: 860px) {
      font-size: 1.5rem;
    }
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
    grid-template-rows: 300px 70px 200px 60px;
    row-gap: 10px;
    grid-template-areas: 
    "image"
    "header"
    "body"
    "btn";

    @media (max-width: 1400px) {
      grid-template-rows: 250px 70px 200px 50px;
    }

    @media (max-width: 860px) {
      grid-template-rows: 200px 70px 200px 35px;
    }
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
    margin: 0 auto;
    margin-bottom: 5px;
    color: $secondColor;
    max-width: 80%;
    font-size: 1.2rem;

    @media (max-width: 860px) {
      font-size: 1rem;
    }
  }

  .slide__subtitle {
    font-size: 1rem;
    text-transform: uppercase;

    @media (max-width: 860px) {
      font-size: .9rem;
    }
  }

  .slide__info-block {
    grid-area: body;
  }

  .info-block__text-wrapper {
    font-size: 1rem;
    margin-bottom: 5px;

    @media (max-width: 860px) {
      font-size: .9rem;
    }
  }

  .info-block__title {
    margin: 0 auto;
    margin-bottom: 5px;
    font-weight: 400;
    text-transform: uppercase;
    max-width: 70%;
  }

  .info-block__subtitle {
    text-transform: uppercase;
  }

  .info-block__text_cross {
    text-decoration: line-through;
  }

  .slide__btn-wrapper {
    grid-area: btn;
    display: flex;
  }

  .slide__btn {
    padding: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    max-width: 50%;
    max-height: 25%;
    background-color: $secondColor;
    margin: 0 auto;
    font-size: 1rem;

    @media (max-width: 860px) {
      font-size: .9rem;
      width: 60%;
      max-width: unset;
    }
  }

  .slide__btn:hover {
    background-color: $secondColor;
    transition: all ease-in-out .3s;
    box-shadow: none;
    color: #fff;
    transform: scale(1.1);
  }

  .swiper-button-prev {
    left: -100px;
    color: $secondColor;

    @media (max-width: 1400px) {
      left: -50px;
    }
  }

  .swiper-button-next {
    right: -100px;
    color: $secondColor;

    @media (max-width: 1400px) {
      right: -50px;
    }
  }
</style>