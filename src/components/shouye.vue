<template>
    <el-container>
  <el-header ref="head" class="" style="padding: .25rem .2rem">
      <div class="cityBox">广州市</div>
      <div class="inputBox"><input type="text" placeholder="搜索目的地国家/城市/关键词"></div>
      <div class="serveBox"><i :style="'background-image:'+serveimg"></i><p>在线客服</p></div>
      </el-header>
  <el-main style="padding:0;margin: 0 0 1.2rem">
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
  <div class="destinationBox">
      <h2><span>发现精彩目的地</span><a >更多</a></h2>
    <div class="tabsBox">
    <div class="tabTitleBox">
    <ul><li 
    v-for="(item,index) in data.destinationBox.tabsBox" 
    :key="item.tabtitle"
    @click="tabs(index)"
    class=""
    >{{item.tabtitle}}</li></ul>
    </div>
    <div class="tabsContent"
    v-for="item in data.destinationBox.tabsBox" 
    :key="item.tabtitle"
    @click="gosearchlist"
    >
    <div 
     v-for="item2 in item.tabscontent" 
    :key="item2.h3"
    :style="'background-image:'+item2.backimgurl">
     <a>
         <div class="textBox">
             <h3>{{item2.h3}}</h3>
             <p>{{item2.p}}</p>
         </div>
     </a>
    </div>
    </div>
  </div>
  </div>
  <div class="destinationBox lifeBox">
      <h2><span>旅行生活</span><a >更多</a></h2>
      <div class="proListBox">
          <div v-for="item in data.lifebox.content"
           :key="item.title"
           :style="'background-image:'+item.backimg"
           >
              <a>
                  <div class="textBox">
                      <h3>{{item.title}}</h3>
                  </div>
              </a>
          </div>
      </div>
  </div>
  <div class="hotProListBox">
      <div class="tabsBox">
          <div class="tabsTitleBox">
              <ul><li v-for="(item,index) in data.hotProListBox"
              :key="item.tabtitle" class="" @click="hottabs(index)">{{item.tabtitle}}</li></ul>
          </div>
          <div class="tabsContent" v-for="item in data.hotProListBox" :key="item.tabtitle">
              <a v-for="(item2,index) in item.tabscontent"
              :key="index">
              <dl>
                  <dt>
                    <div class="imgBox"><img :src="item2.imgurl"></div>
                    <span>{{item2.go}}</span>
                  </dt>
                  <dd>
                      <h2>{{item2.title}}</h2>
                      <div class="dateBox">{{item2.date}}</div>
                      <div class="priceBox"><em>￥<b>{{item2.price}}</b></em>起</div>
                  </dd>
                </dl></a>
          </div>
      </div>
  </div>
  <footer><img :src="footer" ></footer>
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
                 destinationBox:{},
                 lifebox:{},
                 hotProListBox:{}
             },
             activeName: '欧洲',
             serve:'url('+require('../assets/server.png')+')',
             serve1:'url('+require('../assets/server1.png')+')',
             serveimg:'',
             footer:require('../assets/bot_pic.jpg')
            }
          },
  components:{
      navjump
  },
  mounted(){
      window.addEventListener('scroll',this.scrollToTop);
      this.serveimg=this.serve;
  },
   beforeDestroy() {
    window.removeEventListener("scroll",this.scrollToTop);
    document.documentElement.style = "font-size:100%";
  },
  async created(){
          let {data}=await this.$axios.get('http://localhost:4399/home');
          this.data=data[0];
          document.documentElement.style = "font-size:400%";
  },
  updated(){
      document.querySelectorAll('.destinationBox ul li').forEach((item,index)=>{
          item.className='';
           document.querySelectorAll('.destinationBox .tabsContent')[index].style.display="none";
          if(item.innerHTML == '欧洲'){
               document.querySelectorAll('.destinationBox .tabsContent')[index].style.display = "flex";
              item.className = 'active';
          }
      });
      document.querySelectorAll('.hotProListBox .tabsTitleBox li').forEach((item,index)=>{
          item.className ='';
          document.querySelectorAll('.hotProListBox .tabsContent')[index].style.display='none';
          if(index == 0){
              item.className='active';
              document.querySelectorAll('.hotProListBox .tabsContent')[index].style.display='block';
          }
      })
  },
  methods:{
      gosearchlist(){
          this.$router.push('/searchlist');
      },
      tabs(idx){
       document.querySelectorAll('.destinationBox ul li').forEach((item,index)=>{
          item.className='';
           document.querySelectorAll('.destinationBox .tabsContent')[index].style.display="none";
          if(index == idx){
               document.querySelectorAll('.destinationBox .tabsContent')[index].style.display = "flex";
              item.className = 'active';
          }
      });
      },
      hottabs(idx){
          document.querySelectorAll('.hotProListBox .tabsTitleBox li').forEach((item,index)=>{
          item.className ='';
          document.querySelectorAll('.hotProListBox .tabsContent')[index].style.display='none';
          if(index == idx){
              item.className='active';
              document.querySelectorAll('.hotProListBox .tabsContent')[index].style.display='block';
          }
      })
      },
      scrollToTop(){
       var scrollTop = (window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop);
  　　 if(scrollTop > 0){
       this.$refs.head.$el.classList.add('indexFixedBox');
       this.serveimg = this.serve1;
       }else{
       this.$refs.head.$el.classList.remove('indexFixedBox');
       this.serveimg=this.serve
  }
      }
  }
}

</script>
<style lang="scss" scoped>
  html{
    font-size: 400%;
}
img{
    display: block;
    width: 100%;
}
.hotProListBox dl {
    font-size: .28rem;
    display: flex;
    margin: .3rem;
    dt{
        width: 2.5rem;
    position: relative;
    .imgBox {
    overflow: hidden;
    width: 2.5rem;
    height: 1.56rem;
    border-radius: .05rem .05rem 0 0;
    img{
        display: block;
        width: 100%;
    }
}
span {
    text-align: center;
    display: inline-block;
    width: 100%;
    font-size: .24rem;
    background: #f0efe8;
    line-height: .4rem;
    border-radius: 0px 0px .1rem .1rem;
}
    }
    dd{
        flex: 1;
    margin-left: .2rem;
    overflow: hidden;
     h2 {
    font-size: .32rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.dateBox {
    text-overflow: ellipsis;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    
}
.priceBox {
    text-align: right;
    color: #999;
    font-size: .26rem;
     em {
    font-style: normal;
    color: #ff6b01;
    font-size: .24rem;
        }
 b {
        font-size: .38rem;
    }
}
    }
}
.tabsTitleBox {
    overflow-x: auto;
    ul{
        width: 10.8rem;
        li{
            width: 1.8rem;
            float: left;
            line-height: 1.2rem;
            text-align: center;
            font-size: .28rem;
            position: relative;
        }
        li.active{
            font-size: .34rem;
        }
        li.active:after {
            content: '';
            height: .1rem;
            border-radius: .1rem;
            background: #ffaa00;
            display: block;
            position: absolute;
            left: .6rem;
            right: .6rem; 
            bottom: .1rem;
        }
    }
}
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
            background: no-repeat center;
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
        // width: 2.42rem;
        flex: 1;
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
                // width: 1.46rem;
                flex: 1;
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
.destinationBox{
     .tabsContent {
     margin: .2rem .1rem 0 .3rem;
    flex-wrap: wrap;
    display: flex;
    div:last-child {
    margin-right: 0px;
    }
     div:first-child {
    width: 4.53rem;
    }
    div{
        width: 2.17rem;
    margin-right: .2rem;
    margin-bottom: .2rem;
    border-radius: .1rem;
    height: 3.1rem;
    overflow: hidden;
    color: #fff;
    font-size: .32rem;
    position: relative;
    background-size: cover;
    background-position: center center;
    .textBox {
    width: auto;
    position: absolute;
    bottom: 0px;
    left: .2rem;
    right: .2rem;
    z-index: 1;
    height: auto;
    }  
     a:after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.7)));
    }
     p{
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    }
   
}
.tabTitleBox {
    margin: 0 .6rem;
    overflow-y: auto;
   
}
ul{
    width: 10rem;
    overflow: hidden;
    li{
        float: left;
    font-size: .28rem;
    width: 2.1rem;
    text-align: center;
    color: #666;
    position: relative;
    padding-bottom: .4rem;
    }
    li.active {
    color: #333;
    font-size: .34rem;
}
    li.active:after {
    content: '';
    height: .1rem;
    border-radius: .1rem;
    background: #ffaa00;
    display: block;
    position: absolute;
    left: .8rem;
    right: .8rem;
    bottom: .1rem;
}
}
}
.lifeBox .proListBox{
       div:first-child {
    width: 6.9rem;
    margin: 0 .3rem .2rem .3rem;
}
 div:last-child {
    margin-left: .2rem;
}
    div{
        width: 3.35rem;
    height: 2.4rem;
    float: left;
    margin-bottom: .2rem;
    border-radius: .1rem;
    overflow: hidden;
    color: #fff;
    font-size: .32rem;
    position: relative;
    margin-left: .3rem;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
        .textBox {
    width: auto;
    position: absolute;
    bottom: 0px;
    left: .2rem;
    right: .2rem;
    z-index: 1;
    height: auto;
}
h3{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
a:after{
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.7)));
}
    }
 
} 
.indexFixedBox {
    background: rgba(255,255,255,.9);
     .cityBox{
    color: #575758;
         }
    .serveBox{
     color: #575758;
    }
}
</style>