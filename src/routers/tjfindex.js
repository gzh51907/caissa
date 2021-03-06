import Vue from 'vue';

// 使用VueRouter步骤
// 1.引入vue-router
import VueRouter from 'vue-router';

// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);

// 引入页面组件
import home from '../components/shouye.vue';
import cate from '../components/cate.vue';
import more from '../components/more.vue';
import profiles from '../components/profiles.vue';
import logs from '../pages/log.vue';
import login from '../pages/login.vue';
import loading from '../pages/loading.vue';
import bookinf from "../pages/book_inf";
import commoninf from "../pages/common_inf";
import detailinf from "../pages/detail_inf";
import inquiryinf from "../pages/inquiry_inf";
import download from '../ljh_com/download.vue';
import about from '../ljh_com/about.vue';
import advice from '../ljh_com/advice.vue';
import evaluate from '../ljh_com/evaluate.vue';
import mapshop from '../ljh_com/mapshop.vue';
import sales from '../ljh_com/sales.vue';
import orderinf from '../ljh_com/orderinf.vue';
import confirmorder from '../ljh_com/confirmorder.vue';
import pay from '../ljh_com/pay.vue';
import result from '../ljh_com/result.vue';


let router = new VueRouter({
    routes: [{
            name: 'shouye',
            path: "/shouye",
            component: home
        },
        {
            path: "/",
            redirect: '/shouye'
        },
        {
            name: 'cate',
            path: "/cate",
            component: cate
        },
        {
            name: 'profiles',
            path: "/profiles",
            component: profiles,

        },
        {
            name: 'log',
            path: "/log",
            component: logs
        },
        {
            name: 'login',
            path: "/login",
            component: login
        },
        {
            name: 'loading',
            path: "/loading",
            component: loading
        },

        {
            name: 'bookinf',
            path: "/bookinf",
            component: bookinf
        },
        {
            name: 'commoninf',
            path: "/commoninf",
            component: commoninf
        },
        {
            name: 'detailinf',
            path: "/detailinf",
            component: detailinf
        },
        {
            name: 'inquiryinf',
            path: "/inquiryinf",
            component: inquiryinf
        },

        // 支付前确认页confirmorder
        {
            name: 'confirmorder',
            path: '/confirmorder',
            component: confirmorder
        },
        // 支付页pay
        {
            name: 'pay',
            path: '/pay',
            component: pay
        },
        // 管家more
        {
            name: 'more',
            path: '/more',
            component: more
        },
        // 评价evaluate
        {
            name: 'evaluate',
            path: '/more/evaluate',
            component: evaluate
        },
        // 门店地图mapshop
        {
            name: 'mapshop',
            path: '/more/mapshop',
            component: mapshop
        },
        // 下载凯撒download
        {
            name: 'download',
            path: '/more/download',
            component: download
        },
        // 关于凯撒about
        {
            name: 'about',
            path: '/more/about',
            component: about
        },
        // 建议反馈advice
        {
            name: 'advice',
            path: '/more/advice',
            component: advice
        },
        // 优惠券sales
        {
            name: 'sales',
            path: '/more/sales',
            component: sales
        },
        // 订单信息表orderinf
        {
            name: 'orderinf',
            path: '/orderinf',
            component: orderinf
        },
        // 反馈结果成页result
        {
            name: 'result',
            path: '/more/evaluate/result',
            component: result
        },
    ]
})
export default router;