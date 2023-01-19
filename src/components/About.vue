<template>
  <section class="about" id="about">
    <div class="container about__container">
      <h2 class="about__title">Почему мы?</h2>

      <div class="about__advantages advantages">
        <div class="advantages__img"></div>

        <div class="advantages__wrapper">
          <div class="advantage" v-for="advantage in advantages">
            <div class="advantage__img-wrapper">
             <img class="advantage__img" :src="getImgUrl(advantage.img)" alt="Иконка">
            </div>

            <h3 class="advantage__title">{{ advantage.title }}</h3>

            <p class="advantage__text">{{ advantage.desc }}</p>
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
          :allow-touch-move="false"
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
              <img class="slide__img" :src="getImgUrl(review.img)" alt="Изображение человека">

              <h4 class="slide__title">{{ review.fullname }}</h4>

              <div class="slide__text-wrapper">
                <p class="slide__text">{{ review.desc }}</p>

                <collapse-transition>
                  <p class="slide__text_full" v-show="review.show">{{ review.showMore }}</p>
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
      CollapseTransition
    },
    data () {
      return {
        advantages: {
          kidsRoom: {
            img: 'kids.png',
            title: 'Детская комната',
            desc: 'Ваш ребёнок с удовольствием проведёт время в нашей детской, при необходимости можно заказать няню.',
          },
          masters: {
            img: 'masters.png',
            title: 'Мастера',
            desc: 'Наши мастера имеют опыт работы от 3х лет и регулярно повышают свою квалификацию.',
          },
          sterilize: {
            img: 'sterilize.png',
            title: 'Стерильность',
            desc: 'Мы обеспечиваем безопасность Вашего здоровья выполняя все требования и нормы СЭС и СанПин.',
          },
          guarantee: {
            img: 'guarantee.png',
            title: 'Гарантия',
            desc: 'У нас действует гарантийный срок на покрытие 5 дней со дня оказания услуги.',
          },
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
  $mainColor: #694f38;
  $secondColor: #58b6ac;
  $newBgColor: #e2e2e2;

  .about__title {
    margin-bottom: 25px;
    text-align: center;
    font-size: 2rem;
  }

  .about__title_small {
    font-size: 1.8rem;
  }

  // ADVANTAGES
  .advantages {
    display: flex;
    margin-bottom: 50px;
    background-color: $newBgColor;
    color: #000;
  }

  .advantages__img {
    background-size: cover;
    width: 60%;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-image: url('../assets/images/about.jpg');
  }

  .advantages__wrapper {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    width: 40%;
    padding: 0 20px;
  }

  .advantage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .advantage:nth-child(odd) {
    border-right: 1px solid rgba(1, 1, 1, 0.1);
  }

  .advantage:nth-child(-n+2) {
    border-bottom: 1px solid rgba(1, 1, 1, 0.1);
  }

  .advantage__img-wrapper {
    margin-bottom: 5px;
    background-color: $secondColor;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .advantage__img {
    max-width: 64px;
  }

  .advantage__title {
    margin-bottom: 5px;
    font-size: 1.2rem;
  }

  .advantage__text {
    font-size: 1rem;
    text-align: center;
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
    color: #000;
  }

  .slide__text-wrapper {
    grid-area: desc;
    position: relative;
    background-color: $newBgColor;
    color: #000;
    border-radius: 20px;
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
  }

  .slide__text_full {
    font-size: 1rem;
    overflow: unset;
    max-height: none;
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
  }

  .slide__btn:hover {
    background-color: $secondColor;
    border-color: transparent;
    box-shadow: none;
    transform: none;
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