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
                  <p class="item__title">{{ position.name }}</p> 
                  <p class="item__text">{{ position.price }}</p>
                </li>
              </ul>
            </collapse-transition>
          </div>
        </div>
      </div>

      <p class="price__description">* окончательная стоимость рассчитывается мастером при Вашем визите.</p>
      <p class="price__description">** в комплексе со стрижкой или окрашиванием будет дешевле.</p>

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
              {name: 'Женская стрижка, короткие', price: '1200 руб.'},
              {name: 'Женская стрижка, средние', price: '1400 руб.'},
              {name: 'Женская стрижка, длинные', price: '1600 руб.'},
              {name: 'Мужская стрижка', price: '950 руб.'},
              {name: 'Детская стрижка', price: '750 руб.'},
            ]
          },
          coloring: {
            title: 'Окрашивание в 1 тон*',
            showCategory: false,
            position: [
              {name: 'Короткие волосы', price: '2500 руб.'},
              {name: 'Средняя длина', price: '3000 руб.'},
              {name: 'Длинные волосы', price: '4000 руб.'},
            ]
          },
          hardColoring: {
            title: 'Сложное окрашивание*',
            showCategory: false,
            position: [
              {name: 'Короткие волосы', price: '6000 руб.'},
              {name: 'Средняя длина', price: '7500 руб.'},
              {name: 'Длинные волосы', price: '10000 руб.'},
            ]
          },
          hairCare: {
            title: 'Уходы для волос**',
            showCategory: false,
            position: [
              {name: 'Восстановление К18 + маска для домашнего ухода', price: '3000 руб.'},
              {name: 'Восстановление BOND FUSION, средние', price: '1200 руб.'},
              {name: 'Восстановление BOND FUSION, длинные', price: '1500 руб.'},
              {name: 'Ламинирование SHOT, средние', price: '1200 руб.'},
              {name: 'Ламинирование SHOT, длинные', price: '1500 руб.'},
              {name: 'Ботокс HONMA TOKIO, средние', price: '3500 руб.'},
              {name: 'Ботокс HONMA TOKIO, длинные', price: '4500 руб.'},
            ]
          },
          manicure: {
            title: 'Маникюр',
            showCategory: false,
            position: [
              {name: 'Маникюр без покрытия', price: '950 руб.'},
              {name: 'Маникюр + гель/лак + снятие', price: '1800 руб.'},
              {name: 'Мужской маникюр без покрытия', price: '1100 руб.'},
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
              {name: 'Коррекция', price: '600 руб.'},
              {name: 'Коррекция + окрашивание краской', price: '1000 руб.'},
              {name: 'Коррекция + окрашивание хной', price: '1200 руб.'},
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
  $mainColor: #825A37;
  $secondColor: #789191;
  .price {
    padding-top: 10px;
  }

  .price__title {
    text-align: center;
    margin-bottom: 25px;

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

  .price__wrapper {
    display: grid;
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

    @media (max-width: 860px) {
      font-size: 1rem;
    }

    @media (max-width: 660px) {
      font-size: 0.9rem;
      line-height: 0.9rem;
    }
  }

  .price__btn:hover {
    background-color: $secondColor;
    transition: all ease-in-out .3s;
    box-shadow: none;
    transform: scale(1.1);
  }

  .header {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    width: 70%;
    margin: 0 auto;
    font-size: 1.2rem;
    text-transform: uppercase;

    @media (max-width: 860px) {
      width: 90%;
    }
  }

  .header__title {
    font-weight: 400;
    text-align: start;
    padding-left: 10%;
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  .header__text {
    font-size: 1.2rem;
  }

  .header__title,
  .header__text {
    @media (max-width: 660px) {
      font-size: 1rem;
      line-height: 1rem;
    }
  }

  .price__category-wrapper {
    width: 70%;
    margin: 0 auto;

    @media (max-width: 860px) {
      width: 90%;
    }
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
    display: grid;
    cursor: pointer;
    grid-template-columns: 3fr 1fr;
    text-align: start;
    border-bottom: 1px solid #e6e6e6;
    font-weight: 400;
    position: relative;
    text-transform: uppercase;
    font-size: 1.2rem;
    line-height: 1.2rem;

    @media (max-width: 660px) {
      font-size: 1rem;
      line-height: 1rem;
    }
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

    @media (max-width: 1100px) {
      margin-top: 0;
    }
  }

  .item:hover {
    background-color: #f0f0f0;
  }

  .item__title {
    text-align: start;
    padding-left: 10px;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.1rem;
  }

  .title-span {
    position: absolute;
    left: -2%;

    @media (max-width: 1400px) {
      left: -3%;
    }

    @media (max-width: 860px) {
      left: -4%;
    }

    @media (max-width: 560px) {
      left: -5%;
    }

    @media (max-width: 400px) {
      left: -6%;
    }
  }

  .item__text {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.1rem;
    white-space: nowrap;
  }

  .item__title,
  .item__text {
    @media (max-width: 660px) {
      font-size: .9rem;
      line-height: 0.9rem;
    }
  }

  .price__description {
    width: 70%;
    margin: 0 auto;
    opacity: 0.7;
    font-size: 0.9rem;
    line-height: 0.9rem;

    @media (max-width: 860px) {
      width: 90%;
    }

    @media (max-width: 660px) {
      font-size: .8rem;
      line-height: 0.8rem;
    }
  }

  .price__description:last-of-type {
    margin-bottom: 25px;
  }
</style>