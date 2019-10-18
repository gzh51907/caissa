const express = require('express');
const router = express.Router();
const {
    mongo
} = require('../db');
const {
    formatData
} = require('../utils');
//登录,mdl为数字单位s，免登陆的时间
router.get('/login',async (req,res)=>{
    let{
        adname,
        password
    }=req.query;
    let result = await mongo.find(" Administrator",{
        adname,
        password
    },0,0,true);
    if(result.length>0){//用户信息匹配正确
      res.send(formatData());
    }else{//用户不匹配
        res.send(formatData({
            code:0
        }))
    }

})
module.exports = router;