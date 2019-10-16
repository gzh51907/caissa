import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import cate from '../components/cate.vue';
import more from '../components/more.vue';
import download from '../ljh_com/download.vue';
import about from '../ljh_com/about.vue';
import advice from '../ljh_com/advice.vue';
import evaluate from '../ljh_com/evaluate.vue';
import mapshop from '../ljh_com/mapshop.vue';
import sales from '../ljh_com/sales.vue';
import orderinf from '../ljh_com/orderinf.vue';
import confirmorder from '../ljh_com/confirmorder.vue';
import pay from '../ljh_com/pay.vue';

let router = new VueRouter({
    routes: [
        // 快速分类cate
        {
            name: 'cate',
            path: '/cate',
            component: cate
        },
        // 列表页searchlist




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

    ]
});

export default router;