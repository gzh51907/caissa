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
    console.log(333);
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
    let result = await col.updateMany(query, data);
    client.close(); //关闭数据库
    return result;
}
/**
 * 查找数据
 * colName string 执行操作的集合名称
 * query {} 要查找的数据特征
 */
async function find(colName, query = {}) { //补传query就是查找
    let {
        db,
        client
    } = await connect(); //连接数据库
    let col = db.collection(colName); //获取集合
    let result = await col.find(query).toArray(); //查询的结果，最后转为数组
    client.close(); //关闭数据库的连接
    return result;
}
module.exports = {
    create,
    remove,
    update,
    find
}