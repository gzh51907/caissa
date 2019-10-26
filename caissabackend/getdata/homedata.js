// const fs = require('fs');
const {JSDOM} = require('jsdom');//引入节点模块
const {mongo} = require('../db');//引入mongo调节
// const {homedata} = require('../config.json');//存放数据的mongo集合名
// const txt = fs.readFileSync('./homein.txt');
// console.log(txt)
// var rs = fs.createReadStream('./homein.txt');
// rs.setEncoding('utf8');

// var data = '';

// rs.on('data',function(trunk){
//     data += trunk;
// });

// rs.on('end',function(){
//     // console.log(data)


// txt= eval('\''+encodeURI(txt).replace(/%/gm, '\\x')+'\'');

// const op = fs.readFileSync('./homeout.json');
// const {
//     window
// } = new JSDOM(data);
// const $ = require('jquery')(window);
// // let oput = [];
// /**多层 */
// let tabsBox = [];
// $('dl').each((index,ele)=>{
// let obj = {'tab':[]};
// obj.id = index;
// // console.log($('.tabsContent').eq(0).find('a'))
// $('dl dt img').eq(index).each((index,ele)=>{
//     //       let obj2 = {};
//     // obj2.imgurl = $(ele).find('img').prop('src');
//     // obj2.go = $(ele).find('dt span').html();
//     // obj2.title = $(ele).find('h2').html();
//     // obj2.date = $(ele).find('.dateBox').html();
//     // obj2.price = $(ele).find('t').html();
//     // console.log(obj2)
//     // obj3.tabscontent.push(obj2);
//     obj.img = $(ele).prop('src').trim();
    
//     })
//     $('dl dt span').eq(index).each((index,ele)=>{
//         obj.go = $(ele).html().trim();
//     })
//     $('dl dd ul li strong.title').eq(index).each((index,ele)=>{
//         obj.title =   $(ele).html().trim();
//     })
//     $('dl dd ul li strong.subtitle').eq(index).each((index,ele)=>{
//         obj.subtitle =   $(ele).html().trim();
//     })
//     $('dl dd ul li p.tab').eq(index).each((index,ele)=>{
//            $(ele).find('span').each((index,ele)=>{
//             obj.tab.push($(ele).html().trim());
//         })
//     })
//     $('dl dd ul li:nth-child(4) span').eq(index).each((index,ele)=>{
//         obj.date =   $(ele).html().trim();
//     })
//     $('dl dd ul li .price p strong').eq(index).each((index,ele)=>{
//         obj.price =   $(ele).html().trim();
//     })

// // tabsBox.push(obj3);
// // console.log(obj)
// // var url=ele.style.backgroundImage.split("(")[1].split(")")[0];
// mongo.create('searchlist',[obj]);
// });
// obj.tabsBox = tabsBox;
/**多层 */
// // fs.writeFileSync('./homeout.json',op+JSON.stringify(tabsBox));
// var fs = require('fs');
// var stream = fs.createReadStream('./homeout.json');
// var data = "";
// stream.on('data',function(chrunk){//将数据分为一块一块的传递
//     console.log(chrunk);
//     console.log(chrunk.toString());
//     data += chrunk;
// });
// stream.on('end',function(){
//     console.log(data);
//     console.log(data.toString());
  
//     console.log('finished!!!!');
// });
// var ct = JSON.parse(op);
// console.log()
var res = `[
    {"name":"郑文","Email":"mrzhenggbmd@163.com","psw":"zw20152162"},
    {"name":"罗剑锋","Email":"mrluo136@aliyun.com","psw":"ljf0910."},
    {"name":"李锦辉","Email":"ljh1455@163.com","psw":"ljh19951229."},
    {"name":"汪卫国","Email":" 18209515484@163.com","psw":"wwg123456"},
    {"name":"季子锐","Email":"upjizirui9@163.com","psw":"Jizirui9"},
    {"name":"刘海华","Email":"18370862119@163.com","psw":"sun123456"},
    {"name":"林坤锐","Email":"linkunrui@aliyun.com","psw":"qianfeng123"},
    {"name":"李海钦 ","Email":"13192323927@163.com","psw":"1000phone"},
    {"name":"高少强","Email":"bkstreet1024@163.com","psw":"gsq5480485..."},
    {"name":"杨明","Email":"kimmich233@163.com","psw":"Aa!12345"},
    {"name":"张伟豪","Email":"haowei403","psw":"qazwsx123"},
    {"name":"祁国庆","Email":"gaige_qgq@aliyun.com","psw":"qinqin521"},
    {"name":"周晓辉","Email":"zxh_grey@163.com","psw":"qianfeng123"},
    {"name":"罗宏鑫","Email":"kami126@aliyun.com","psw":"kami123"},
    {"name":"张晓旭","Email":"18504233415@163.com","psw":"123456zx."},
    {"name":"秦慧云","Email":"qinhuiyun666@163.com","psw":"qinhuiyun136"},
    {"name":"汪云飞","Email":"yj992526@163.com","psw":"wyf720"},
    {"name":"罗浩","Email":"luohaozzh@163.com","psw":"qwe123456"},
    {"name":"陈东涛","Email":"cdtwdg@163.com","psw":"qf123456"},
    {"name":"彭若鑫","Email":"prxml1098@163.com","psw":"prx123"},
    {"name":"陈秋燕","Email":"yanni_qy@163.com","psw":"715823yan"},
    {"name":"何如锐","Email":"herurui @163.com","psw":"herurui12345"},
    {"name":"罗晓芳","Email":"lxfyumingxuan@163.com","psw":"lxf5981731111"},
    {"name":"龙利成","Email":"llc0720@163.com","psw":"2324995141"},
    {"name":"钟国威","Email":" chinawei4396@aliyun.com","psw":"qfH51907!"},
    {"name":"吴汶峰","Email":"m13413684570@163.com","psw":"1000phone"},
    {"name":"钟金生","Email":"w13642309535@aliyun.com","psw":"w13642309535 "},
    {"name":"王昕","Email":"wangxin929814675@163.com","psw":"qq123456"},
    {"name":"郑伯桂","Email":" zbglaien666@163.com","psw":"qq1352630011"},
    {"name":"刘健","Email":"isjian.lau@foxmail.com","psw":"xiaoan1298"}]`
data=JSON.parse(res)
data.map(item=>{
    mongo.create("Email",[item]);
})
// mongo.create("Email",[data]);
// });