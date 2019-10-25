import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//引入各个组件
import regpage from '../components/regpage.vue';
import system from '../components/system.vue';
import userinf from '../pages/userinf.vue';
import listinf from '../pages/listinf.vue';
import adduser from '../pages/adduser.vue';
import addtour from '../pages/addtour.vue';

//实例化router并配置参数
let router = new VueRouter({
    routes: [{
            name: 'regpage',
            path: '/regpage',
            component: regpage
        },
        {
            path: '/',
            redirect: '/regpage'
        },
        {
            name: 'system',
            path: '/system',
            component: system,
            children: [{
                    name: 'userinf',
                    path: '/userinf',
                    component: userinf
                },
                {
                    name: 'adduser',
                    path: '/adduser',
                    component: adduser
                },
                {
                    path: '/',
                    redirect: "/userinf"
                },
                {
                    name: 'listinf',
                    path: '/listinf',
                    component: listinf
                },
                {
                    name: 'addtour',
                    path: '/addtour',
                    component: addtour
                },
            ]
        },
    ]
})
export default router;