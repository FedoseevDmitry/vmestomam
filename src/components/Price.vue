<template>
  <section class="price" id="price">
    <div class="container price__container">
      <h2 class="price__title">Цены и услуги</h2>

      <div class="price__wrapper">
        <div class="price__header-wrapper">
          <div class="price__header header">
            <p class="header__title">Услуга</p>

            <p class="header__text">Стоимость</p>
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
            title: 'Стрижки',
            showCategory: true,
            position: [
              {name: 'Женская стрижка короткие волосы', price: '1000 руб.'},
              {name: 'Женская стрижка среднюю длину', price: '1200 руб.'},
              {name: 'Женская стрижка длинные волосы', price: '1400 руб.'},
              {name: 'Мужская стрижка', price: '800 руб.'},
              {name: 'Детская стрижка', price: '1400 руб.'},
            ]
          },
          coloring: {
            title: 'Простое окрашивание',
            showCategory: false,
            position: [
              {name: 'Короткие волосы', price: 'от 2500 руб.'},
              {name: 'Средняя длина', price: 'от 3000 руб.'},
              {name: 'Длинные волосы', price: 'от 4000 руб.'},
            ]
          },
          makeup: {
            title: 'Сложное окрашивание',
            showCategory: false,
            position: [
              {name: 'Короткие волосы', price: 'от 5500 руб.'},
              {name: 'Средняя длина', price: 'от 7000 руб.'},
              {name: 'Длинные волосы', price: 'от 8500 руб.'},
            ]
          },
          manicure: {
            title: 'Маникюр',
            showCategory: false,
            position: [
              {name: 'Маникюр без покрытия', price: '750 руб.'},
              {name: 'Маникюр + гель/лак + снятие', price: '1600 руб.'},
              {name: 'Мужской маникюр без покрытия', price: '850 руб.'},
            ]
          },
          pedicure: {
            title: 'Педикюр',
            showCategory: false,
            position: [
              {name: 'Педикюр без покрытия', price: '2100 руб.'},
              {name: 'Педикюр + гель/лак + снятие', price: '2500 руб.'},
              {name: 'Мужской педикюр без покрытия', price: '2300 руб.'},
            ]
          },
          eyebrows: {
            title: 'Брови',
            showCategory: false,
            position: [
              {name: 'Коррекция', price: '500 руб.'},
              {name: 'Коррекция + окрашивание краской', price: '800 руб.'},
              {name: 'Коррекция + окрашивание хной', price: '1000 руб.'},
              {name: 'Ламинирование', price: '2000 руб.'},
            ]
          },
          eyelashes: {
            title: 'Ресницы',
            showCategory: false,
            position: [
              {name: 'Окрашивание', price: '300 руб.'},
              {name: 'Ламинирование', price: '2000 руб.'},
              {name: 'Наращивание', price: 'от 2200 руб.'},
            ]
          },
          shugaring: {
            title: 'Шугаринг',
            showCategory: false,
            position: [
              {name: 'Зона подмышки', price: '400 руб.'},
              {name: 'Ноги выше или до колена', price: '900 руб.'},
              {name: 'Ноги полностью', price: '1700 руб.'},
              {name: 'Бикини по линии трусиков', price: '800 руб.'},
              {name: 'Бикини глубокое', price: '1500 руб.'},
            ]
          },
          nanny: {
            title: 'Няня',
            showCategory: false,
            position: [
              {name: 'Бесплатно при услугах от', price: '3000 руб.'},
              {name: 'В остальных случаях', price: '200 руб/час'}
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
    width: max-content;
    margin: 0 auto;
    border-radius: 10px;
    background-color: $mainColor;
    color: #fff;
    font-size: 1.2rem;
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
    text-transform: uppercase;
  }

  .header__title {
    font-weight: 400;
    text-align: start;
    padding-left: 10%;
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
    grid-template-columns: 3fr 1fr;
    text-align: start;
    border-bottom: 1px solid #e6e6e6;
    font-weight: 400;
    position: relative;
    text-transform: uppercase;
  }

  .category__title:hover {
    color: $secondColor;
    transition: all ease-in-out .3s;
  }

  .item,
  .header {
    display: grid;
    grid-template-columns: 3fr 1fr;
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