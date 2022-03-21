import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { initializeApp } from "firebase/app";
import vuetify from './plugins/vuetify'

// Asigna aquí el objeto de configuración de tu proyecto de Firebase
const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
