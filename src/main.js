import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import titleMixin from './utils/title';

Vue.mixin(titleMixin);

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
