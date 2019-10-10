import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './routers/ljhindex.js';
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
