import Vue from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.config.productionTip = false

const options = {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: false,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  type: 'success'
};

Vue.use(Toast, options);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
