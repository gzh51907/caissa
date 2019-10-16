<template>
    <div>
        <ul>
            <li v-for="item in datalist" :key='item.id' @click="gohome">
                <div>
                    <img :src="item.iconurl" alt="">
                    <span>{{item.text}}</span>

                </div>
                <i></i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            datalist:[
                {id:1,
                text:'会员中心',
                iconurl:'http://m.caissa.com.cn/static/images/percentre/vip_icon.png'
                },
                {id:2,
                text:'优惠券',
                iconurl:'http://m.caissa.com.cn/static/images/percentre/vip_icon.png'
                },
                {id:3,
                text:'常用出行人',
                iconurl:'http://m.caissa.com.cn/static/images/percentre/info.png'
                },
                {id:4,
                text:'我的收藏',
                iconurl:'http://m.caissa.com.cn/static/images/percentre/connect.png'
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
}
</script>
<style lang="scss">
    ul{
        border: none;
        padding: 0;
        margin: 0;
        list-style: none;
        li{
            border-bottom: 1px solid #e6e9ed;
            padding: .3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: .32rem;
            div{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: .32rem;
                color: #666;
                img{
                    width: .3rem;
                    margin-right: .15rem;
                    border: none;
                    vertical-align: middle;
                }
            }
            i{
                    background: url(http://m.caissa.com.cn/static/images/percentre/right.png
                            ) no-repeat;
                    width: .12rem;
                    height: .2rem;
                    display: block;
                    background-size: 100% 100%;
                
                }
        }
    }
</style>
