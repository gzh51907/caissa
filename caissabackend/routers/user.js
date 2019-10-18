const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;
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
        let date = new Date()
       await mongo.create(colName, [{
            username,
            password,
            regtime: date.toLocaleDateString()+" "+date.toLocaleTimeString()
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
    } = req.query;
    let result = await mongo.find(colName, { username });
    if (result.length) { //若存在则返回错误
        res.send(formatData({ code: 0 }))
    } else {
        res.send(formatData());
    }
})

//登录,mdl为数字单位s，免登陆的时间
router.get('/login', async(req, res) => {
    let {
        username,
        password,
        mdl
    } = req.query;
    let result = await mongo.find(colName, {
        username,
        password
    });
    let Authorization
    if(result.length>0){//用户信息匹配正确
      if(mdl){//如果要免登陆
     Authorization = token.create(username,mdl);
      }
      res.send(formatData({data:Authorization}));
    }else{//用户不匹配
        res.send(formatData({
            code: 0
        }))
    }

})
//获取对应页数的用户信息
router.get('/users',async (req,res)=>{
    let{
        pagenum,
        pages
    }=req.query;
    pages = pages?true:false
    pagenum = pagenum?pagenum:0;
    try{
        let result = await mongo.find(colName,{},(pagenum-1)*10,null,pages);
        res.send(formatData({data:result}));
    }catch{
        res.send(formatData({code:0}))
    }
   
})
//删除用户,传过来的username为一个数组
router.get('/delete',async (req,res)=>{
    let{
        username
    }=req.query;
    username = JSON.parse(username);
    let array = [];
    username.forEach(ele => {
        array.push({"username":ele+''})
    });
    try{
        mongo.remove(colName,{$or:array});
        res.send(formatData())
    } catch{
        res.send(formatData({code:0}));
    }
})
//根据_id修改用户信息,updatedata为修改信息对象
router.post('/update',async (req,res)=>{
    let{
        id,
        updatedata,
    }=req.body;
    try{
   mongo.update(colName,{_id:ObjectId(id)},updatedata);
   res.send(formatData())
    }catch{
      res.send(formatData({code:0}))
    }
})
module.exports = router;