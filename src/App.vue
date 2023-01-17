<template>
  <Header/>
  <main>
    <SignUp/>
    <Slider/>
    <Promo/>
    <Price/>
    <About/>
    <Contacts/>
    <Certificate/>
  </main>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import SignUp from './components/SignUp.vue'
import Slider from './components/Slider.vue'
import Promo from './components/Promo.vue'
import Price from './components/Price.vue'
import About from './components/About.vue'
import Contacts from './components/Contacts.vue'
import Certificate from './components/Certificate.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    SignUp,
    Slider,
    Promo,
    Price,
    About,
    Contacts,
    Certificate,
    Footer
  }
}
</script>

<style scoped lang="scss">

</style>
