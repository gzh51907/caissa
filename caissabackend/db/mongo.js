const {
    MongoClient
} = require('mongodb');
const {
    mongourl,
    mongoname
} = require('../config.json');
//连接mongodb
async function connect() {
    let result;
    try {
        let client = await MongoClient.connect(mongourl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }); //连接mongo
        let db = client.db(mongoname); //连接mongo对应的数据库
        result = {
            client,
            db
        }
    } catch (err) {
        result = err
    }
    return result;
}
/*
 * 增
 * colName string,要执行操作的集合（表）名字
 * data [{}]， 要添加的数据
 */
async function create(colName, data) {
    let {
        db,
        client
    } = await connect(); //开启mongo连接
    let col = db.collection(colName); //获取集合
    let result = await col.insertMany(data); //对集合进行数据插入
    client.close(); //关闭数据库的连接
    return result;
}
/**
 * 删
 * colName string，要执行操作的集合名字
 * query {},在对象里写要删除的数据特征
 */
async function remove(colName, query) {
    let {
        db,
        client
    } = await connect(); //连接数据库
    let col = db.collection(colName); //获取集合
    let result = await col.deleteMany(query); //执行删除操作
    client.close(); //关闭与数据库的连接
    return result;
}
/**
 *修改数据
 * colName string,执行操作的集合名字
 * query {},要修改的数据特征
 * data {},修改的内容
 */
async function update(colName, query, data) {
    let {
        db,
        client
    } = await connect(); //连接数据库
    let col = db.collection(colName); //获取集合
    let result = await col.updateMany(query, {$set:data});
    client.close(); //关闭数据库
    return result;
}
/**
 * 查找数据
 * colName string 执行操作的集合名称
 * query {} 要查找的数据特征
 * sk number 跳过的数量
 */
async function find(colName, query = {},sk,item,pages) { //补传query就是查找
    let {
        db,
        client
    } = await connect(); //连接数据库
    let col = db.collection(colName); //获取集合
    let result;
    if(colName=='searchlist'){
        // console.log(33);
        // if(Object.keys(query).length!=0 ){
        //     let keyname = Object.keys(query);//获取键名
        //     let or ="$or"
        //     let value = query[or]//获取内容（数组）
        //     let value2 =[]//空数组装新内容
        //     value.forEach(ele => {
        //       let obj;
        //       let keyname2 = `\"${Object.keys(ele)}\"`;//给内容的键名加上引号
        //     //    obj[keyname2]= ele[Object.keys(ele)];
        //        console.log(ele[Object.keys(ele)])
        //        console.log(keyname2)
        //       obj = {keyname2:ele[Object.keys(ele)]}
        //        value2.push(obj);
        //     });
        //     query={'$or':value2};
        //   }
        // let tab = item
        // query={$or:[{"tab":'/'+item+'/'},{"title":'/'+item+'/'},{"subtitle":'/'+item+'/'}]}
        if(item){
            item = new RegExp(item)
            query={$or:[{tab:item},{title:item},{subtitle:item}]}
        }else if(Object.keys(query).length!=0){
            if(JSON.parse(query).id){
            query={id:JSON.parse(query).id-0}
        }
        }
      result = await col.find(query).skip(sk-0).limit(30).toArray();
    }else if(!pages){
        sk=sk?sk:0;
        result = await col.find(query).skip(sk-0).limit(10).toArray();
    }
    else{
      result = await col.find(query).toArray(); //查询的结果，最后转为数组
    }
    client.close(); //关闭数据库的连接
    return result;
}
module.exports = {
    create,
    remove,
    update,
    find
}