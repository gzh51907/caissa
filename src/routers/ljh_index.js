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

let router = new VueRouter({
    routes: [
        // 快速分类cate
        {
            name: 'cate',
            path: '/cate',
            component: cate
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

    ]
});

export default router;