import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/styles/normalize.css'
import './assets/styles/global.css'

createApp(App).use(store).mount('#app')
