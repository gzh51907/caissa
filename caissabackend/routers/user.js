const express = require('express');
const router = express.Router();
const {
    mongo
} = require('../db');
const colName = "users"; //对user集合进行操作的
const {
    formatData,
    token
} = require('../utils');
//注册
router.post('/reg', async (req, res) => {
    let {
        username,
        password
    } = req.body;
    let result;
    try {
       await mongo.create(colName, [{
            username,
            password,
            regtime: new Date()
        }]);
        result = formatData();
    } catch (err){
        result = formatData({
            code: 0
        })
    }
    res.send(result);
})
//查询用户名是否存在
router.get('/check',async (req,res)=>{
    let {
        username
    }=req.query;
    let result = await mongo.find(colName,{username});
    if(result.length){//若存在则返回错误
        res.send(formatData({code:0}))
    }else{
        res.send(formatData());
    }
})

//登录,mdl为数字单位s，免登陆的时间
router.get('/login',async (req,res)=>{
    let{
        username,
        password,
        mdl
    }=req.query;
    let result = await mongo.find(colName,{
        username,
        password
    });
    if(result.length>0){//用户信息匹配正确
      if(mdl){//如果要免登陆
     Authorization = token.create(username,mdl);
      }
      res.send(formatData({data:Authorization}));
    }else{//用户不匹配
        res.send(formatData({
            code:0
        }))
    }

})
module.exports = router;