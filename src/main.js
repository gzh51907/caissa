import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from './routers/lhxindex';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
