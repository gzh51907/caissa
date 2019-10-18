<template>
    <div class="more">
        <div class="background">
            <h4>凯撒管家</h4>
            <el-row class="header" style="height:1.3333rem;padding-bottom:0.2667rem;">
                <el-col :span="8" @click.native="goto('/evaluate')">
                    <div>
                        <p class="icon">
                            <i class="el-icon-edit-outline"></i>
                        </p>
                        <p style="font-size:0.1867rem">行程评价</p>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div>
                        <p class="icon">
                            <i class="el-icon-service"></i>
                        </p>
                        <p style="font-size:0.1867rem">联系我们</p>
                    </div>
                </el-col>
                <el-col :span="8" @click.native="goto('/mapshop')">
                    <div>
                        <p class="icon">
                            <i class="el-icon-map-location"></i>
                        </p>
                        <p style="font-size:0.1867rem">门店地图</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <p class="go" style="font-size:0.2133rem">出行助手</p>
        <div class="main">
            <el-row>
                <el-col :span="6" class="cart" @click.native="linkNet('https://h5.133.cn/hangban/vue/dynamic/query?hlsource=kaisa&timestamp=1570788439003')">
                    <p>
                        <img src="../assets/cate_img/img1.png" alt="" style="width:0.44rem">
                    </p>
                    <span class="text">航班动态</span>
                </el-col>
                <el-col :span="6" class="cart" @click.native="linkNet('https://www.yahoo.com/news/weather')">
                    <p>
                        <img src="../assets/cate_img/img2.png" alt="" style="width:0.44rem">
                    </p>
                    <span class="text">世界天气</span>
                </el-col>
                <el-col :span="6" class="cart" @click.native="goto('/sales')">
                    <p>
                        <img src="../assets/cate_img/img3.png" alt="" style="width:0.44rem">
                    </p>
                    <span class="text">全球优惠券</span>
                </el-col>
                <el-col :span="6" class="cart">
                    <p>
                        <img src="../assets/cate_img/img4.png" alt="" style="width:0.44rem">
                    </p>
                    <span class="text">银联刷卡返现</span>
                </el-col>
                <el-col :span="6" class="cart" @click.native="goto('/advice')">
                    <p>
                        <img src="../assets/cate_img/img5.png" alt="" style="width:0.44rem">
                    </p>
                    <span class="text">建议反馈</span>
                </el-col>
                <el-col :span="6" class="cart" @click.native="goto('/about')">
                    <p style="font-size:0.3333rem;color:orange;">
                        <i class="el-icon-star-on"></i>
                    </p>
                    <span class="text">关于凯撒</span>
                </el-col>
                <el-col :span="6" class="cart" @click.native="goto('/download')">
                    <p style="font-size:0.3333rem;color:orange;">
                        <i class="el-icon-download"></i>
                    </p>
                    <span class="text">下载凯撒app</span>
                </el-col>
                <el-col :span="6" class="cart">
                </el-col>
            </el-row>
        </div>
        <navjump></navjump>
    </div>
</template>
<script>
import Bus from "../BUS.js";
import navjump from "../pages/navjump.vue";
export default {
  components: {},
  name: "more_main",
  data() {
    return {};
  },
  methods: {
    // 发送方，触发Bus自定义事件
    goto(key) {
      //   this.$router.push({ path: "/morecopy", query: { id: key } });
      this.$router.push("/more" + key);
    },
    linkNet(path) {
      window.location.href = path;
    }
  },
  components: {
    navjump
  },
  created(){
    document.documentElement.style = "font-size:400%";
  }
};
</script>
<style lang="scss" scoped>
//局部引入外部css文件
@import "../lib_base/base.css";
.more {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(243, 243, 243);
  box-sizing: border-box;
  .background {
    text-align: center;
    background-color: #409eff;
    color: #fff;
    > h4 {
      height: 0.6133rem;
      line-height: 0.6133rem;
      font-size: 0.2133rem;
      //   padding: 0.2667rem 0;
      border-bottom: 0.0133rem solid #fff;
    }
    .icon {
      font-size: 0.5333rem;
    }
  }
  .go {
    padding: 0.1333rem;
    color: #999;
  }
  .main {
    text-align: center;
    .cart {
      height: 1.2533rem;
      padding: 0.16rem 0;
      border-bottom: 0.0133rem solid #ccc;
      border-right: 0.0133rem solid #ccc;
      background-color: #fff;
      > p {
        margin-bottom: 0.1333rem;
        img {
          display: block;
          margin: auto;
          //   text-align: center;
        }
      }
      > span {
        display: block;
      }
    }
  }
  .text {
    font-size: 0.1867rem;
  }
}
</style>

