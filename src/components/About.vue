<template>
  <section class="about" id="about">
    <div class="container about__container">
      <h2 class="about__title">Почему мы?</h2>

      <div class="about__advantages advantages">
        <picture class="advantages__img">
          <source media="(max-width: 560px)" srcset="@/assets/images/why-560.jpg">
          <img src="@/assets/images/why.jpg" alt="Наши преимущества">
        </picture>
      </div>

      <h3 class="about__title about__title_small">Отзывы</h3>

      <div class="about__slider-wrapper">
        <swiper
          :speed="1000"
          :slides-per-view="3"
          :loop="true"
          :space-between="150"
          :allow-touch-move="false"
          :breakpoints="breakpoints"
          :navigation="{
            prevEl: prev,
            nextEl: next,
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="about__slider"
        >
          <swiper-slide class="slider__slide" v-for="review in reviews">
            <div class="slide__wrapper">
              <h4 class="slide__title">{{ review.fullname }}</h4>

                <div class="slide__text-wrapper">
                  <p class="slide__text" :class="{ slide__text_expanded: review.show }">{{ review.desc }}</p>

                  <collapse-transition>
                    <p class="slide__text slide__text_expanded slide__text_full" v-show="review.show">{{ review.showMore }}</p>
                  </collapse-transition>

                  <button class="slide__btn" @click="review.show = !review.show" v-if="!review.show">Показать полностью</button>
                  <button class="slide__btn" @click="review.show = !review.show" v-if="review.show">Скрыть</button>
                </div>
            </div>
          </swiper-slide>
        </swiper>

        <div ref="prev" class="swiper-button-prev"></div>

        <div ref="next" class="swiper-button-next"></div>
      </div>

      <a class="advantages__btn" href="https://yandex.ru/maps/org/vmestomam/1501364459/reviews" target="_blank">Смотреть все отзывы</a>
    </div>
  </section>
</template>

<script>
  import SwiperCore, { Navigation } from "swiper"
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { ref } from "vue";
  import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'

  SwiperCore.use([Navigation]);

  export default {
    name: 'About',
    components: {
    Swiper,
    SwiperSlide,
    CollapseTransition,
},
    data () {
      return {
        breakpoints: {
          1620: {slidesPerView: 3, spaceBetween: 100},
          1264: {slidesPerView: 3, spaceBetween: 50},
          900: {slidesPerView: 2, spaceBetween: 50},
          600: {slidesPerView: 1, spaceBetween: 20},
          100: {slidesPerView: 1, spaceBetween: 20},
        },
        reviews: {
          first: {
            img: 'woman.png',
            fullname: 'Ольга К.',
            desc: 'Наш любимый салон! Все мастера, к которым мы попадали, профессиональные, вежливые, внимательные и аккуратные. Любимый мастер-парикмахер - Мария Рензина - очень ',
            show: false,
            showMore: 'приятная, мягкая, с ней комфортно, настоящий профессионал. В итоге - у нас всегда хорошая стрижка, красивое окрашивание и прекрасное настроение после визита к ней)). Отдельную благодарность хочется выразить администратору Елене - это Душа салона, вежливая, внимательная, всегда подберет максимально удобное время посещения, угостит вкусным капучино, проконсультирует по всем услугам салона. В салоне есть прекрасная детская комната с няней (няни тоже замечательные), благодаря чему посещение салона с детьми проходит с удовольствием и с комфортом для всех. Мы всей семьёй очень любим этот салон и всем искренне его рекомендуем! Посещаем его уже несколько лет.'
          },
          second: {
            img: 'woman.png',
            fullname: 'Анастасия П.',
            desc: 'Самое теплое и уютное место в Оккервиле. Гуманный ценник, всегда вежливый персонал. Администратор- богиня, знает все женские желания))) Очень нравится мастер',
            show: false,
            showMore: ' Мария, ручки золотые,всегда сдедает так, как мне хочется))) и все время попадает в точку)) чудесные окрашивания❤'
          },
          third: {
            img: 'woman.png',
            fullname: 'Юля Л.',
            desc: 'Очень нравится салон! Ходим всей семьей с открытия. Мастера маникюра Татьяна и Сима - самые лучшие! Качественный маникюр и делают именно то, что надо и хочется. ',
            show: false,
            showMore: 'Парикмахеры Настя и Нуне тоже самые лучшие! В целом в салоне нравится сервис и хорошее отношение к клиенту! Большое спасибо! Развивайтесь дальше и радуйте нас своим высоким качеством!'
          },
          fourth: {
            img: 'woman.png',
            fullname: 'Анастасия Б.',
            desc: 'Хожу в салон Вместомам на маникюр, педикюр давно, всегда довольна, мастера прекрасные. Часто делаю процедуры в 4 руки, очень экономит время. Большой плюс,',
            show: false,
            showMore: ' что в салоне есть детская комната, прихожу иногда с детьми, они с няней играют, я навожу красоту.'
          },
        }
      }
    },
    methods: {
      getImgUrl(picture) {
        return require('../assets/images/' + picture);
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

<style scoped lang="scss">
  $mainColor: #825A37;
  $secondColor: #789191;
  $newBgColor: #e2e2e2;

  .about__title {
    margin-bottom: 25px;
    text-align: center;
    font-size: 2rem;

    @media (max-width: 1100px) {
      font-size: 1.7rem;
    }

    @media (max-width: 860px) {
      font-size: 1.5rem;
    }

    @media (max-width: 660px) {
      font-size: 1.3rem;
      margin-bottom: 15px;
    }
  }

  .about__title_small {
    font-size: 1.8rem;

    @media (max-width: 1100px) {
      font-size: 1.5rem;
    }

    @media (max-width: 860px) {
      font-size: 1.3em;
    }

    @media (max-width: 660px) {
      font-size: 1.1rem;
    }
  }

  // ADVANTAGES
  .advantages {
    display: flex;
    margin-bottom: 50px;
    color: #000;

    @media (max-width: 560px) {
      flex-direction: column;
    }
  }

  .advantages__img {
    background-size: cover;
    width: 100%;

    @media (max-width: 560px) {
      width: 100%;
    }
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
    grid-template-rows: 50px 1fr;
    grid-template-areas: 
    "title"
    "desc";

    @media (max-width: 860px) {
      grid-template-rows: 30px 1fr;
    }
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
    color: #000;
    font-size: 1rem;

    @media (max-width: 560px) {
      font-size: .9rem;
    }
  }

  .slide__text-wrapper {
    grid-area: desc;
    position: relative;
    background-color: $newBgColor;
    color: #000;
    border-radius: 20px;
    margin-bottom: 20px;
  }

  .slide__text-wrapper:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 2vh solid transparent;
    border-right: 2vh solid transparent;
    border-top: 3vh solid $newBgColor;
    position: absolute;
    top: -2vh;
    left: 50%;
    transform: rotate(180deg) translate(50%, 0);
    z-index: -1;
  }

  .slide__text {
    font-size: 1rem;
    padding: 10px;
    padding-bottom: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    @media (max-width: 1100px) {
      padding: 5px;
      padding-bottom: 0;
    }

    @media (max-width: 860px) {
      font-size: .9rem;
    }

    @media (max-width: 560px) {
      font-size: 0.8rem;
      line-height: 0.9rem;
    }
  }

  .slide__text_expanded {
    font-size: 1rem;
    overflow: unset;
    -webkit-line-clamp: unset;

    @media (max-width: 860px) {
      font-size: .9rem;
      padding: 5px 5px 0;
    }

    @media (max-width: 560px) {
      font-size: 0.8rem;
      line-height: 0.9rem;
    }
  }

  .slide__text_full {
    padding-top: 0;
  }

  .slide__btn {
    background-color: $mainColor;
    border-radius: 0 0 20px 20px;
    border: none;
    color: #fff;
    margin-top: 5px;
    max-width: 100%;
    width: 100%;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6);
    font-size: 1rem;
    margin-bottom: 0;

    @media (max-width: 860px) {
      font-size: .9rem;
    }

    @media (max-width: 660px) {
      font-size: .8rem;
      line-height: 0.8rem;
    }
  }

  .slide__btn:hover {
    background-color: $secondColor;
    border-color: transparent;
    box-shadow: none;
    transform: none;
  }

  .advantages__btn {
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

    @media (max-width: 660px) {
      font-size: .9rem;
      line-height: 0.9rem;
    }
  }

  .advantages__btn:hover {
    background-color: $secondColor;
    transition: all ease-in-out .3s;
    box-shadow: none;
    transform: scale(1.1);
  }
</style>