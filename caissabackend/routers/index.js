const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-Width");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");
    if (req.method == "OPTIONS") {
        res.sendStatus(200);
    } else {
        next();
    }
})
const userrouter = require('./user');//引入用户管理路由
const homerouter = require('./home');//首页信息
const caterouter = require('./cate');//快速分类信息
const searchlistrouter = require('./searchlist');//列表页信息
const order = require('./order');//订单信息管理
const adrouter = require('./ad');//管理员信息
const adtour = require('./tour');//增加旅游searchlist信息
const proxy = require('http-proxy-middleware');//引入服务器代理第三方模块
//服务器代理
// let kadMiddleware = proxy({
//     target: 'http://m.buka.cn', //目标网址的根目录
//     changeOrigin: true,
//     pathRewrite: {
//         "^/buka": '/'
//     }
// });
// router.get('/buka/*', kadMiddleware, (req, res) => {
//     res.send('data')
// })
//允许请求数据格式兼容urlencode和json
router.use(express.urlencoded({
    extended: true
}), express.json());
router.use('/user',userrouter);//使用用户管理路由
router.use('/home',homerouter);//首页信息
router.use('/cate',caterouter);//快速分类
router.use('/searchlist',searchlistrouter);//列表页信息
router.use('/order',order);//订单信息路由
router.use('/ad',adrouter);//管理员登录路由
router.use('/tour',adtour);//旅游信息添加
router.get('/verify',(req,res)=>{//校验token是否有效
    let Authorization = req.get('Authorization');
    let result = token.verify(Authorization);
    res.send(formatData({code:result?1:0}));
})
module.exports = router;

