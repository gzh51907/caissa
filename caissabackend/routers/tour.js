const express = require('express');
const router = express.Router();
const { mongo } = require('../db');
const colName = "searchlist";//对homedata集合进行操作
const { formatData, token } = require('../utils');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

router.get('/addtour', async function (req, res, next) {
    let tour = JSON.parse(req.query.sizeForm);
    let all = await mongo.find(colName, {}, 0, '', true);
    tour.id = all.length;//长度加1作为id
    try {
        mongo.create(colName, [tour]);
        res.send(formatData());
    } catch{
        res.send(formatData({ code: 0 }))
    }

})
router.post('/', multer({
    //设置文件存储路径
    dest: 'static'   //upload文件如果不存在则会自己创建一个。
}).single('file'), function (req, res, next) {
    if (req.file.length === 0) {  //判断一下文件是否存在，也可以在前端代码中进行判断。
        res.render("error", { message: "上传文件不能为空！" });
        return
    } else {
        let file = req.file;
        let fileInfo = {};
        fs.renameSync('./static/' + file.filename, './static/' + file.originalname);//这里修改文件名字，比较随意。
        // 获取文件信息
        fileInfo.mimetype = file.mimetype;
        fileInfo.originalname = file.originalname;
        fileInfo.size = file.size;
        fileInfo.path = file.path;
        // 设置响应类型及编码
        res.set({
            'content-type': 'application/json; charset=utf-8'
        });
        res.send('http://47.98.245.185:4399/static/' + fileInfo.originalname);
    }
})
module.exports = router;
