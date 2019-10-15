import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from './routers/ljh_index.js';
// import router from './routers/tjfindex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.use(ElementUI);



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
