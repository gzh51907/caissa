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
            name: 'more',
            path: "/more",
            component: more
        },
        {
            name: 'profiles',
            path: "/profiles",
            component: profiles
        }
    ]
})
export default router;