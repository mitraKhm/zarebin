import Vue from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const options = {
  position: 'top-right',
  timeout: 4000,
  closeOnClick: false,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
};

Vue.use(Toast, options);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
