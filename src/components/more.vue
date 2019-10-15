<template>
    <div class="more">
        <div class="background">
            <h4>凯撒管家</h4>
            <el-row class="header" style="padding-bottom:20px;">
                <el-col :span="8" @click.native="goto('/evaluate')">
                    <div>
                        <p class="icon">
                            <i class="el-icon-edit-outline"></i>
                        </p>
                        <p>行程评价</p>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div>
                        <p class="icon">
                            <i class="el-icon-service"></i>
                        </p>
                        <p>联系我们</p>
                    </div>
                </el-col>
                <el-col :span="8" @click.native="goto('/mapshop')">
                    <div>
                        <p class="icon">
                            <i class="el-icon-map-location"></i>
                        </p>
                        <p>门店地图</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <p class="go">出行助手</p>
        <div class="main">
            <el-row>
                <el-col :span="6" class="cart" @click.native="linkNet('https://h5.133.cn/hangban/vue/dynamic/query?hlsource=kaisa&timestamp=1570788439003')">
                    <p>
                        <img src="../assets/cate_img/img1.png" alt="" style="width:33px">
                    </p>
                    <span class="text">航班动态</span>
                </el-col>
                <el-col :span="6" class="cart" @click.native="linkNet('https://www.yahoo.com/news/weather')">
                    <p>
                        <img src="../assets/cate_img/img2.png" alt="" style="width:33px">
                    </p>
                    <span class="text">世界天气</span>
                </el-col>
                <el-col :span="6" class="cart">
                    <p>
                        <img src="../assets/cate_img/img3.png" alt="" style="width:33px">
                    </p>
                    <span class="text">全球优惠券</span>
                </el-col>
                <el-col :span="6" class="cart">
                    <p>
                        <img src="../assets/cate_img/img4.png" alt="" style="width:33px">
                    </p>
                    <span class="text">银联刷卡返现</span>
                </el-col>
                <el-col :span="6" class="cart" @click.native="goto('/advice')">
                    <p>
                        <img src="../assets/cate_img/img5.png" alt="" style="width:33px">
                    </p>
                    <span class="text">建议反馈</span>
                </el-col>
                <el-col :span="6" class="cart" @click.native="goto('/about')">
                    <p style="font-size:25px;color:orange;">
                        <i class="el-icon-star-on"></i>
                    </p>
                    <span class="text">关于凯撒</span>
                </el-col>
                <el-col :span="6" class="cart" @click.native="goto('/download')">
                    <p style="font-size:25px;color:orange;">
                        <i class="el-icon-download"></i>
                    </p>
                    <span class="text">下载凯撒app</span>
                </el-col>
                <el-col :span="6" class="cart">
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import Bus from "../BUS.js";
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
  }
};
</script>
<style lang="scss" scoped>
//局部引入外部css文件
@import "../lib_base/base.css";
// body {
//   width: 100%;
//   background-color: #eee;
// }
.more {
  width: 100%;
  height: auto;
  //   background-color: #eee;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(243, 243, 243);
  .background {
    text-align: center;
    background-color: #409eff;
    color: #fff;
    h4 {
      padding: 20px 0;
      border-bottom: 1px solid #fff;
    }
    .icon {
      font-size: 40px;
    }
  }
  .go {
    padding: 10px;
    color: #999;
  }
  .main {
    text-align: center;
    .cart {
      height: 94px;
      padding: 12px 0;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      background-color: #fff;
      > p {
        margin-bottom: 10px;
      }
    }
  }
  .text {
    font-size: 14px;
  }
}
</style>

