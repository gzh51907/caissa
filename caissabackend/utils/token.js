const jwt = require('jsonwebtoken');
/**
 * data string 需要加密的数据
 * expiresIn 数字 token的有效期（单位：s）
 */
let {secret} = require('../config.json');//加密钥匙
//创建加密信息
function create(data,expiresIn){
    let token = jwt.sign({data},secret,{//返回加密的token指令
        expiresIn
    });
    return token;
}
//验证加密信息
function verfiy(token){
    let res;
    try{
      let result = jwt.verfiy(token,secret);//加密信息和加密钥匙是否符合
      res = true;//验证成功
    }catch(err){
    res = false;
    }
    return res;
}
module.exports = {
    create,
    verfiy
}