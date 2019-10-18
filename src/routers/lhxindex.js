import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//引入各个组件
import shouye from '../components/shouye.vue';
import more from '../components/more.vue';
import cate from '../components/cate.vue';
import profiles from '../components/profiles.vue';
import searchlist from '../pages/searchlist.vue';
import detail from '../pages/detail.vue';
//实例化router并配置参数
let router = new VueRouter({
    routes:[
        {
            name:'detail',
            path:'/detail',
            component:detail
        },
        {
            name:'shouye',
            path:'/',
            component:shouye
        },
        {
            name:'more',
            path:'/more',
            component:more
        },
        {
            name:'cate',
            path:'/cate',
            component:cate
        },
        {
            name:'profiles',
            path:'/profiles',
            component:profiles
        },
        {
            name:'searchlist',
            path:'/searchlist',
            component:searchlist
        }
    ]
})
export default router;
