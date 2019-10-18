<template>
    <div class="big-box">

        <div class="wrap-title">
            <img :src="datalist[0].imgurl">
            <span>{{datalist[0].text}}</span>
        </div>

        <ul class="form-list" >
            <li v-for="item in data2" :key='item.id' @click="gohome">
            <img :src="item.imgurl">
            <span>{{item.text}}</span>
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    data() {
        return {
            data2:[],
            datalist:[
                {
                    id:1,
                    text:'订单中心',
                    imgurl:'http://m.caissa.com.cn/static/images/percentre/dingdan.png',
                    icon:'cs-dingdan1'
                },
                {
                    id:2,
                    text:'旅游团订单',
                    imgurl:'http://m.caissa.com.cn/static/images/percentre/cantuanyu.png',
                    icon:'cs-tuanduiguanli'
                },
                {
                    id:3,
                    text:'度假订单',
                    imgurl:'http://m.caissa.com.cn/static/images/percentre/dujia.png',
                    icon:'cs-lvyouye'
                },
                {
                    id:4,
                    text:'邮轮订单',
                    imgurl:'http://m.caissa.com.cn/static/images/percentre/youlun.png',
                    icon:'cs-Steeringwheel'
                },  
                {
                    id:5,
                    text:'酒店订单',
                    imgurl:'http://m.caissa.com.cn/static/images/percentre/jiudian.png',
                    icon:'cs-APPhome-Hotel'
                },
                {
                    id:6,
                    text:'签证订单',
                    imgurl:'http://m.caissa.com.cn/static/images/percentre/qianzheng.png',
                    icon:'cs-qianzheng'
                },
                {
                    id:7,
                    text:'定制订单',
                    imgurl:'http://m.caissa.com.cn/static/images/percentre/dingdan.png',
                    icon:'cs-dingdan1'
                },
                {
                    id:8,
                    text:'机票订单',
                    imgurl:'http://m.caissa.com.cn/static/images/percentre/huiji.png',
                    icon:'cs-tubiaozhizuomoban_feijipiao'
                },                          
                {
                    id:9,
                    text:'保险订单',
                    imgurl:'http://m.caissa.com.cn/static/images/ins.png',
                    icon:'cs-baoxian'
                },                          
                {
                    id:10,
                    text:'其他订单',
                    imgurl:'http://m.caissa.com.cn/static/images/percentre/other.png',
                    icon:'cs-dingdan'
                },                          
            ]
        }
    },
    methods: {
        gohome(){
                if(localStorage.getItem("Authorization")){
                    this.$router.push("/loading")
                }else{
                    this.$router.push("/log")
                }
            }
        },
    created(){
        this.data2=this.datalist.splice(1);
        // console.log(this.data2)
    }
}
</script>
<style lang="scss" scoped>
.big-box{
    list-style:none !important;
    margin-top: 10px;
    background: #fff;
    margin-bottom: .2rem;
    .wrap-title{
            display: flex;
            padding: .3rem;
            align-items: center;

        img{
            width: .27rem;
            height: .3rem;
            margin-right: .15rem;
        }

        span{
            font-family: "microsoft yahei","宋体";
            font-size: 14px;
            font-family: "宋体";
            line-height: 1.5;
            color: #666;

        }
    }
    .form-list{
        overflow: hidden;
        width: 100%;
        border-top: 1px solid #e6e9ed;
        li{
            list-style: none;
            width: 25%;
            height: 1.8rem;
            text-align: center;
            float: left;
            position: relative;
            border-right: 1px solid #e6e9ed;
            border-bottom: 1px solid #e6e9ed;
            box-sizing: border-box;
            img{
                width: .5rem;
                position: absolute;
                top: .35rem;
                left: 50%;
                transform: translateX(-50%);
                border: none;
                vertical-align: middle
            }

            span{
                display: block;
                font-size: .26rem;
                text-align: center;
                width: 100%;
                position: absolute;
                bottom: .35rem;
                left: 50%;
                transform: translateX(-50%);
                font-family: "microsoft yahei","宋体";
            }
        }
    }
}
</style>
