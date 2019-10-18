import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './routers/index';
import axios from 'axios';
Vue.prototype.$axios = axios;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import $ from "jquery"
Vue.use(ElementUI)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')