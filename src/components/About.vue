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

                <input class="slide__btn" type="checkbox">
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
      SwiperSlide
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
            desc: 'Наш любимый салон! Все мастера, к которым мы попадали, профессиональные, вежливые, внимательные и аккуратные. Любимый мастер-парикмахер - Мария Рензина - очень приятная, мягкая, с ней комфортно, настоящий профессионал. В итоге - у нас всегда хорошая стрижка, красивое окрашивание и прекрасное настроение после визита к ней)). Отдельную благодарность хочется выразить администратору Елене - это Душа салона, вежливая, внимательная, всегда подберет максимально удобное время посещения, угостит вкусным капучино, проконсультирует по всем услугам салона. В салоне есть прекрасная детская комната с няней (няни тоже замечательные), благодаря чему посещение салона с детьми проходит с удовольствием и с комфортом для всех. Мы всей семьёй очень любим этот салон и всем искренне его рекомендуем! Посещаем его уже несколько лет. ',
          },
          second: {
            img: 'woman.png',
            fullname: 'Анастасия П.',
            desc: 'Самое теплое и уютное место в Оккервиле. Гуманный ценник, всегда вежливый персонал. Администратор- богиня, знает все женские желания))) Очень нравится мастер Мария, ручки золотые,всегда сдедает так, как мне хочется))) и все время попадает в точку)) чудесные окрашивания❤',
          },
          third: {
            img: 'woman.png',
            fullname: 'Юля Л.',
            desc: 'Очень нравится салон! Ходим всей семьей с открытия. Мастера маникюра Татьяна и Сима - самые лучшие! Качественный маникюр и делают именно то, что надо и хочется. Парикмахеры Настя и Нуне тоже самые лучшие! В целом в салоне нравится сервис и хорошее отношение к клиенту! Большое спасибо! Развивайтесь дальше и радуйте нас своим высоким качеством!',
          },
          fourth: {
            img: 'woman.png',
            fullname: 'Анастасия Б.',
            desc: 'Хожу в салон Вместомам на маникюр, педикюр давно, всегда довольна, мастера прекрасные. Часто делаю процедуры в 4 руки, очень экономит время. Большой плюс, что в салоне есть детская комната, прихожу иногда с детьми, они с няней играют, я навожу красоту.',
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
    background-color: $mainColor;
    color: #fff;
  }

  .advantages__img {
    background-size: cover;
    width: 60%;
    border-radius: 5% 0 0 5%;
    background-position-x: center;
    background-position-y: center;
    background-image: url('../assets/images/header-slider/slide-1.jpg');
  }

  .advantages__wrapper {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    width: 40%;
    padding: 20px;
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
    background-color: $secondColor;
    margin-bottom: 20px;
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
    margin-bottom: 15px;
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
  }

  .slide__text-wrapper {
    grid-area: desc;
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
    z-index: -1;
  }

  .slide__text {
    font-size: 1rem;
    line-height: 1.4rem;
    overflow: hidden;
    padding: 10px;
    --max-lines: 4;
    --line-height: 1.4;
    max-height: calc(var(--max-lines) * 1em * var(--line-height));
    margin-bottom: 10px;
  }

  .slide__text:has(+ .slide__btn:checked) {
    max-height: none;
    transition: all ease-in-out .3s;
  }

  .slide__btn {
    appearance: none;
    padding: 10px;
    background-color: transparent;
    border-radius: 0 0 20px 20px;
    cursor: pointer;
    margin: 0 auto;
    color: #fff;
    font-size: 1rem;
    width: 100%;
  }

  .slide__btn:before {
    content: 'Развернуть полностью';
  }

  .slide__btn:checked:before {
    content: 'Свернуть';
  }

  .slide__btn:hover {
    background-color: $secondColor;
    border-color: transparent;
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