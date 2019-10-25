import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;
import router from './routers/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
//额外图标引入
import './assets/icon/iconfont.css';
import axios from 'axios';
const instance = axios.create({
    baseURL:"http://47.98.245.185:4399",
})
Vue.prototype.$instance = instance;

Vue.use(ElementUI);

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')