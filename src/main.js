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
<<<<<<< HEAD
    baseURL:"http://47.98.245.185:4399",
=======
    baseURL: "http://10.3.133.2:4399",
>>>>>>> 4a3c0fecd5a06917ba8f3782218fd6467c6b3281
})
Vue.prototype.$instance = instance;

Vue.use(ElementUI);


new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')