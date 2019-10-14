<template>
    <el-container>
  <el-header>
      <div class="cityBox">广州市</div>
      <div class="inputBox"><input type="text" placeholder="搜索目的地国家/城市/关键词"></div>
      <div class="serveBox"><i></i><p>在线客服</p></div>
      </el-header>
  <el-main style="padding:0">
      <div class="block">
    <el-carousel height="4rem">
      <el-carousel-item v-for="(item,index) in data.lunbo " :key="index" >
       <img :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="linkBox">
    <div v-for="(item,index) in data.linkbox" :key="index" :class="index" >
         <ul><li v-for="item2 in item" :key="item2.title">
             <div :style="'background-image:url('+item2.backurl+')'">
                 <a >{{item2.title}}</a>
                 </div></li></ul>
    </div>
  </div>
  <div class="entranceBox">
      <ul><li  v-for="item in data.entranceBox.ul" :key="item[0].title">
          <a v-for="item2 in item" :key="item2.title">
                 <img :src="item2.img">
                 <p>{{item2.title}}</p>
          </a>
          </li></ul>
          <div class="moreLinkBox">
              <a v-for="item in data.entranceBox.moreLinkBox" :key="item.h2">
                  <div><h2>{{item.h2}}</h2><p>{{item.p}}</p></div>
                  <div class="imgBox"><img :src="item.img"></div>
              </a>
          </div>
  </div>
  <div class="lineBox">
      <dl><dd><a v-for="(item,index) in data.linkbox2" :key="index"><img :src="item" alt=""></a></dd></dl>
  </div>
  <div class="destinationBox"><h2><span>发现精彩目的地</span><a >更多</a></h2>
  <div class="tabsBox">
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane
     v-for="item in data.destinationBox.tabsBox"
    :key="item.tabtitle"
     :label="item.tabtitle" 
     :name="item.tabtitle" >
     <div class="tabsContent" v-for="item2 in item.tabscontent" 
         :key="item2.h3">
         <div 
         :style="'background-image:url('+item2.backimgurl+')'">
         <div class="textBox">
             <h3>{{item2.h3}}</h3>
             <p>{{item2.p}}</p>
         </div>
         </div>
     </div>
     </el-tab-pane>
  </el-tabs>
  </div>
  </div>
  </el-main>
 <navjump></navjump>
</el-container>
</template>
<script>
import navjump from "../pages/navjump.vue";
export default {
    data(){
     return {
             data:{
                 entranceBox:{},
                 destinationBox:{}
             },
             activeName: '欧洲'
            }
          },
  components:{
      navjump
  },
  async created(){
          let {data} =await this.$axios.get('http://localhost:4399/home');
          this.data = data[0];
  },
  methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>
<style lang="scss" scoped>
ul,li{
    list-style: none;
}
.el-header{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    padding: .25rem .2rem;
    z-index: 99;
    .cityBox {
    color: #fff;
    font-size: .26rem;
    cursor: pointer;
    line-height: .6rem;
}
    .inputBox{
        flex: 1;
        margin: 0 .2rem;
        input{
            display: block;
            width: 100%;
            border: none;
            border-radius: .05rem;
            box-sizing: border-box;
            padding-left: .8rem;
            color: #333;
            background: #fff url(../assets/search.png) no-repeat .2rem center;
            background-size: .28rem;
            font-size: .26rem;
            line-height: .6rem;
            height: .6rem;

        }
    }
    .serveBox{
            font-size: .2rem;
            color: #fff;
            cursor: pointer;
        i{
            content: '';
            display: block;
            width: .27rem;
            height: .3rem;
            background: url(../assets/server.png) no-repeat center;
            background-size: 100%;
            margin: 0 auto;
        }
    }
}
.block{//轮播图
height: 4rem;
margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    img{
        display: block;
    width: 100%;
    }
}
.linkBox {
    position: relative;
    margin: 0 .2rem;
    z-index: 9;
      ul{
          display: -webkit-flex;
    flex-direction: row;
    background: #fff;
    overflow: hidden;
    border-bottom: .02rem solid #fff;
    li{
        width: 2.42rem;
    text-align: center;
    height: .9rem;
    margin-left: .02rem;
    background-size: 100%;
    background-color: #439efe;
    div{
        background-size: 100% 100%;
    height: .9rem;
    margin-top: 1px;
    background-repeat: no-repeat;
    background-color: #439efe;
    display: flex;
    }
    a{
        color: #fff;
    font-size: .32rem;
    text-decoration: none;
    line-height: .9rem;
    display: block;
    flex: 1;
    min-height: .9rem;
    }
    }
      }
}
.lineBox{
       dl{
            display: flex;
            border-style: solid;
            border-width: .2rem 0;
            border-color: #f5f5f5;
                img{
                    display: block;
                    width: 50%;
                    float: left;
                    border-top: 1px solid #f5f5f5;
                    margin-top: -1px;
                    border-left: 1px solid #f5f5f5;
                    box-sizing: border-box;
                }
      }
}
.linkBox .firstbox ul:first-child li:first-child div {
    height: 1.8rem;
}
.linkBox ul li div:first-child {
    margin-top: 0;
}
.linkBox .firstbox ul:first-child {
    border-radius: .1rem .1rem 0 0;
    margin-top: -.2rem;
}
.linkBox .secondbox ul, .linkBox .threebox ul, .linkbox .fourBox ul {
    margin-top: .04rem;
}
.linkBox .fourbox ul {
    border-radius: 0px 0px .1rem .1rem;
    overflow: hidden;
    border: none;
}
 a, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, img, input, legend, li, ol, p, pre, td, textarea, th, ul {
    padding: 0;
    margin: 0;
    list-style: none;
    }
.entranceBox {
    overflow: hidden;
    padding: 0 .2rem;
    ul{
        margin-bottom: .3rem;
        li{
            padding: 0;
            margin: 0;
            display: flex;
            a{
                display: block;
                width: 1.46rem;
                text-align: center;
                text-decoration: none;
                font-size: .22rem;
                padding-top: .3rem;
                img{
                    display: inline-block;
                    width: .5rem;
                    font-size: .22rem;
                    padding:0;
                    margin: 0;
                }
            }
        }
    }
   
  .moreLinkBox {
    display: flex;
    border-top: 1px solid #eee;
    a{
        display: flex;
    color: #666;
    font-size: .24rem;
    align-content: center;
    align-items: center;
    margin: .15rem 0 .15rem 0;
    padding: 0 .3rem 0 .2rem;
    justify-content: space-between;
    flex: 1;
    h2{
        font-size: .28rem;
    font-weight: normal;
    color: #333;
    }
    }
    a:first-child{
        border-right: 1px solid #eee;
    }
    .imgBox{
       width: .9rem;
       img{
           display: block;
           width: 100%
       }
    }
}
}
.destinationBox {
    border-style: solid;
    border-width: 0 0 .2rem 0;
    border-color: #f5f5f5;
    overflow: hidden;
    h2{
        text-align: center;
        font-size: .34rem;
        color: #333;
        position: relative;
        line-height: 1.2rem;
        a:after{
            content: '';
            display: inline-block;
            width: .1rem;
            height: .2rem;
            background: url(../assets/aright.png);
            background-size: 100%;
            margin-left: .1rem;
        }
        a{
            position: absolute;
            right: 0;
            text-decoration: none;
            padding-right: .25rem;
            background-size: .12rem;
            color: #00b0ec;
            font-size: .26rem;
            font-weight: normal;
        }
    }
    h2:before,h2:after{
            content: '';
            height: 1px;
            width: .4rem;
            background: #333;
            display: inline-block;
            margin-right: .15rem;
            vertical-align: middle;
        }
}
.destinationBox .tabsContent {
    margin: .2rem .1rem 0 .3rem;
    flex-wrap: wrap;
    display: flex;
}
</style>