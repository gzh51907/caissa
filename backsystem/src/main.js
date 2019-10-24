import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './routers/index';
import axios from 'axios';
const instance = axios.create({
    baseURL: "http://localhost:4399",
})
Vue.prototype.$instance = instance;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import $ from "jquery"
Vue.use(ElementUI)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')