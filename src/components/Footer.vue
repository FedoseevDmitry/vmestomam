<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <p class="footer__copyrights">vMestoMam © 2023</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="scss">
  $mainColor: #694f38;
  $secondColor: #247d7b;

  .footer {
    padding-top: 25px;
  }

  .footer__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: $mainColor;
    font-size: 1rem;
    padding-bottom: 5px;
    padding-top: 5px;
  }
</style>