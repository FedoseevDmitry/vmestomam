<template>
  <section class="price" id="price">
    <div class="container price__container">
      <h2 class="price__title">Цены и услуги</h2>

      <div class="price__wrapper">
        <div class="price__header-wrapper">
          <div class="price__header header">
            <p class="header__title">Услуга</p>

            <p class="header__text">Стоимость</p>

            <p class="header__text">Длительность</p>
          </div>
        </div>

        <div class="price__category-wrapper">
          <div class="price__category category" v-for="category in categories">
            <h3 class="category__title" @click="category.showCategory = !category.showCategory">
              {{ category.title }}

              <span class="category__title-span title-span">
                <img class="title-span__img" v-if="category.showCategory" src="../assets/images/arrowUp.png" alt="Иконка стрелочки">
                <img class="title-span__img" v-else src="../assets/images/arrowDown.png" alt="Иконка стрелочки">
              </span>
            </h3>
            
            <collapse-transition>
              <ul class="category__list" v-show="category.showCategory">
                <li class="category__item item" v-for="position in category.position">
                  <h4 class="item__title">{{ position.name }}</h4> 
                  <p class="item__text">{{ position.price }}</p>
                  <p class="item__text">{{ position.duration }}</p>
                </li>
              </ul>
            </collapse-transition>
          </div>
        </div>
      </div>

      <a class="price__btn" href="https://widget.sonline.su/ru/services/?placeid=6663" target="_blank">Онлайн запись</a>

    </div>
  </section>
</template>

<script>
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'

  export default {
    name: 'Price',
    components: {
      CollapseTransition,
    },
    data() {
      return {
        categories: {
          haircuts: {
            title: 'Стрижка',
            showCategory: false,
            position: [
              {name: 'Женская на короткие волосы', price: '1000 р.', duration: '1 час'},
              {name: 'Женская на среднюю длину', price: '1200 р.', duration: '1 час'},
              {name: 'Женская на длинные волосы', price: '1400 р.', duration: '1 час'},
              {name: 'Мужская модельная', price: '800 р.', duration: '1 час'},
              {name: 'Мужская с двумя насадками', price: '500 р.', duration: '1 час'},
              {name: 'Детская модельная', price: '600 р.', duration: '1 час'},
              {name: 'Детская выстриг', price: 'от 50 р.', duration: '1 час'},
            ]
          },
          coloring: {
            title: 'Окрашивание волос',
            showCategory: false,
            position: [
              {name: 'test12', price: '300 р.', duration: '1 час'},
              {name: 'test13', price: '400 р.', duration: '1 час'}
            ]
          },
          makeup: {
            title: 'Макияж и укладка',
            showCategory: false,
            position: [
              {name: 'test12', price: '300 р.', duration: '1 час'},
              {name: 'test13', price: '400 р.', duration: '1 час'}
            ]
          },
          manicure: {
            title: 'Маникюр',
            showCategory: false,
            position: [
              {name: 'test12', price: '300 р.', duration: '1 час'},
              {name: 'test13', price: '400 р.', duration: '1 час'}
            ]
          },
          pedicure: {
            title: 'Педикюр',
            showCategory: false,
            position: [
              {name: 'test12', price: '300 р.', duration: '1 час'},
              {name: 'test13', price: '400 р.', duration: '1 час'}
            ]
          },
          eyebrows: {
            title: 'Брови',
            showCategory: false,
            position: [
              {name: 'test12', price: '300 р.', duration: '1 час'},
              {name: 'test13', price: '400 р.', duration: '1 час'}
            ]
          },
          eyelashes: {
            title: 'Ресницы',
            showCategory: false,
            position: [
              {name: 'test12', price: '300 р.', duration: '1 час'},
              {name: 'test13', price: '400 р.', duration: '1 час'}
            ]
          },
          shugaring: {
            title: 'Шугаринг',
            showCategory: false,
            position: [
              {name: 'test12', price: '300 р.', duration: '1 час'},
              {name: 'test13', price: '400 р.', duration: '1 час'}
            ]
          },
          nanny: {
            title: 'Няня',
            showCategory: false,
            position: [
              {name: 'test12', price: '300 р.', duration: '1 час'},
              {name: 'test13', price: '400 р.', duration: '1 час'}
            ]
          },
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $mainColor: #694f38;
  $secondColor: #58b6ac;
  .price {
    padding-top: 10px;
  }

  .price__title {
    text-align: center;
    margin-bottom: 25px;
  }

  .price__wrapper {
    // border-radius: 20px;
    // box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    display: grid;
    margin-bottom: 25px;
    // padding: 20px;
  }

  .price__header-wrapper {
    background-color: $mainColor;
  }

  .price__btn {
    padding: 10px;
    grid-area: btn;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    margin: 0 auto;
    border-radius: 10px;
    background-color: $mainColor;
    color: #fff;
  }

  .price__btn:hover {
    background-color: $secondColor;
    transition: all ease-in-out .3s;
    box-shadow: none;
    transform: scale(1.1);
  }

  .header {
    // background-color: $mainColor;
    // border-radius: 20px 20px 0 0;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    width: 60vw;
    margin: 0 auto;
    font-size: 1.2rem;
  }

  .header__title {
    font-weight: 400;
  }

  .price__category-wrapper {
    width: 60vw;
    margin: 0 auto;
  }

  .category {
    padding-left: 10px;
    padding-top: 5px;
    padding-right: 10px;
    margin-bottom: 5px;
  }

  .category:last-child {
    padding-bottom: 5px;
  }

  .category__title {
    // margin-bottom: 10px;
    display: grid;
    cursor: pointer;
    grid-template-columns: repeat(3, 1fr);
    text-align: start;
    border-bottom: 1px solid #e6e6e6;
    font-weight: 400;
    position: relative;
  }

  .category__title:hover {
    color: $secondColor;
    transition: all ease-in-out .3s;
  }

  .item,
  .header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
  }

  .item {
    padding-top: 5px;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 5px;
  }

  .item:first-child {
    margin-top: 5px;
  }

  .item:hover {
    background-color: #f0f0f0;
  }

  .item__title {
    text-align: start;
    padding-left: 10px;
    font-weight: 400;
  }

  .title-span {
    position: absolute;
    left: -2%;
  }
</style>