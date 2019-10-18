const fs = require('fs');
const {JSDOM} = require('jsdom');//引入节点模块
const {mongo} = require('../db');//引入mongo调节
// const {homedata} = require('../config.json');//存放数据的mongo集合名
// const txt = fs.readFileSync('./homein.txt');
// console.log(txt)
var rs = fs.createReadStream('./homein.txt');
rs.setEncoding('utf8');

var data = '';

rs.on('data',function(trunk){
    data += trunk;
});

rs.on('end',function(){
    // console.log(data)


// txt= eval('\''+encodeURI(txt).replace(/%/gm, '\\x')+'\'');

const op = fs.readFileSync('./homeout.json');
const {
    window
} = new JSDOM(data);
const $ = require('jquery')(window);
// let oput = [];
/**多层 */
let tabsBox = [];
$('dl').each((index,ele)=>{
let obj = {'tab':[]};
obj.id = index;
// console.log($('.tabsContent').eq(0).find('a'))
$('dl dt img').eq(index).each((index,ele)=>{
    //       let obj2 = {};
    // obj2.imgurl = $(ele).find('img').prop('src');
    // obj2.go = $(ele).find('dt span').html();
    // obj2.title = $(ele).find('h2').html();
    // obj2.date = $(ele).find('.dateBox').html();
    // obj2.price = $(ele).find('t').html();
    // console.log(obj2)
    // obj3.tabscontent.push(obj2);
    obj.img = $(ele).prop('src').trim();
    
    })
    $('dl dt span').eq(index).each((index,ele)=>{
        obj.go = $(ele).html().trim();
    })
    $('dl dd ul li strong.title').eq(index).each((index,ele)=>{
        obj.title =   $(ele).html().trim();
    })
    $('dl dd ul li strong.subtitle').eq(index).each((index,ele)=>{
        obj.subtitle =   $(ele).html().trim();
    })
    $('dl dd ul li p.tab').eq(index).each((index,ele)=>{
           $(ele).find('span').each((index,ele)=>{
            obj.tab.push($(ele).html().trim());
        })
    })
    $('dl dd ul li:nth-child(4) span').eq(index).each((index,ele)=>{
        obj.date =   $(ele).html().trim();
    })
    $('dl dd ul li .price p strong').eq(index).each((index,ele)=>{
        obj.price =   $(ele).html().trim();
    })

// tabsBox.push(obj3);
// console.log(obj)
// var url=ele.style.backgroundImage.split("(")[1].split(")")[0];
mongo.create('searchlist',[obj]);
});
// obj.tabsBox = tabsBox;
/**多层 */
fs.writeFileSync('./homeout.json',op+JSON.stringify(tabsBox));
// mongo.create(homedata,[op]);
});