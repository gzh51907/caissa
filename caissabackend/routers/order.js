const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId
const {
    mongo
} = require('../db');
const colName = "orders";//对订单集合进行操作
const{
    formatData,
    token
} = require('../utils');
//增加订单
router.post('/pay',async (req,res)=>{
    let{
    name,
    phonenumber,
    email,
    serveshop
    } = req.body;
    let result;
    try{
        let date = new Date()
        await mongo.create(colName,[
            {
                name,
                phonenumber,
                email,
                serveshop,
                ordertime:date.toLocaleDateString()+" "+date.toLocaleTimeString()
            }
        ])
        result = formatData();
    }catch(err){
        result = formatData({
            code:0
        })
    }
    res.send(result)
})
//删除订单,前端传id数组,根据id删除对应订单
router.get('/delete',async (req,res)=>{
    let{
        id //数字id
    }=req.query;
   let arr=[];
//    id=JSON.parse(id);
//    id.forEach(ele => {
//        arr.push({_id:ObjectId(ele)});
//    });
   try{
       mongo.remove(colName,{_id:ObjectId(id)});
       res.send(formatData())
   }catch{
       res.send(formatData({code:0}));
   }
})

//根据_id修改订单信息
router.post('/update',async (req,res)=>{
    let{
        id,//订单id 数字
        updatedata,//修改的信息 对象
    }=req.body;
    updatedata= JSON.parse(updatedata);
    try{
        mongo.update(colName,{_id:ObjectId(id)},updatedata);
        res.send(formatData())
    }catch{
        res.send(formatData({code:0}))
    }
})
//获取对应页数的订单信息
router.get('/orders',async(req,res)=>{
    let{
        pagenum,
        pages
    } = req.query;
    pagenum = pagenum?pagenum:0;
    pages = pages ? true : false;
    try{
        let result = await mongo.find(colName,{},pagenum*10,null,pages);
        res.send(formatData({data:result}));
    }catch{
        res.send(formatData({code:0}))
    }
})

module.exports = router;