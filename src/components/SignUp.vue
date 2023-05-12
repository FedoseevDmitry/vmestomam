<template>
  <aside class="sign-up">
    <a class="sign-up__btn" href="https://widget.sonline.su/ru/services/?placeid=6663" target="_blank">Онлайн запись</a>
  </aside>
</template>

<script>
  export default {
    name: 'SignUp',
  }
</script>

<style scoped lang="scss">
  $mainColor: #825A37;
  $secondColor: #789191;

  .sign-up {
    position: fixed;
    z-index: 101;
    bottom: 2%;
    right: 1%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .sign-up__btn {
    padding: 10px;
    position: relative;
    animation: pulse 2s infinite;
    background-color: $secondColor;
    font-size: 1rem;
    display: flex;
    flex-wrap: wrap;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;

    @media (max-width: 660px) {
      width: 70px;
      height: 70px;
      font-size: 0.8rem;
      line-height: 0.8rem;
    }
  }

  .sign-up__btn:after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  .sign-up__btn:hover {
    animation: stop;
    transform: scale(1.1);
    &:after {
      left: 200px;
      transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 2px $secondColor;
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
</style>