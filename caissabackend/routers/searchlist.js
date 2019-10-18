const express = require('express');
const router = express.Router();
const{mongo} = require('../db');
const colName = "searchlist";//对searchlist集合进行操作
const{formatData,token} = require('../utils');
//请求searchlist信息
router.get('/',async(req,res)=>{
    let result;
    let num = req.query.num?req.query.num:0;//跳过的数量
    let item =req.query.item?req.query.item:'';
    let query= req.query.query?req.query.query:{};
    try{
      let sk = num;//跳过的数量
      result=  await mongo.find(colName,query,sk,item);
    }catch(err){
        result = formatData({code:0});
    }
    res.send(result);
})
module.exports = router;