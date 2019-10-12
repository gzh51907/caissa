const express = require('express');
const router = express.Router();
const{mongo} = require('../db');
const colName = "homedata";//对homedata集合进行操作
const{formatData,token} = require('../utils');
//请求首页信息
router.get('/',async(req,res)=>{
    let result;
    try{
      result=  await mongo.find(colName);
    }catch(err){
        result = formatData({code:0});
    }
    res.send(result);
})
module.exports = router;