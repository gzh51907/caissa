<template>
  <div class="orderinf">
    <bookshead></bookshead>
    <h5>可选服务</h5>
    <ul>
      <li style="border-bottom:0.0133rem solid #ccc;" @click="change1()">
        <p>
          <i :class="checked1===true?'active':''"></i>
          <span>单房差</span>
          <em>说明</em>
        </p>
      </li>
      <li @click="change2()">
        <p>
          <i :class="checked2===true?'active':''"></i>
          <span>机票升舱</span>
          <em>说明</em>
        </p>
      </li>
    </ul>
    <h5>订单联系人信息</h5>
    <ol ref="orderForm">
      <li>
        <i class="fl el-icon-user"></i>
        <span class="fl">姓名</span>
        <input class="fr" type="text" placeholder="请输入联系人姓名" v-model="username" v-on:blur.stop="checkName()">
      </li>
      <li>
        <i class="fl el-icon-phone"></i>
        <span class="fl">联系电话</span>
        <input class="fr" type="text" placeholder="请输入联系电话" v-model="tellphone" v-on:blur.stop="checkTellphone()">
      </li>
      <li>
        <i class="fl el-icon-s-comment"></i>
        <span class="fl">联系邮箱</span>
        <input class="fr" type="text" placeholder="请输入邮箱地址" v-model="email" v-on:blur.stop="checkEmail()">
      </li>
      <li>
        <i class="fl el-icon-s-home"></i>
        <span class="fl">服务门店</span>
        <input class="fr" type="text" placeholder="请选择服务门店 >" v-model="shop">
      </li>
      <li>
        <i class="fl el-icon-s-shop"></i>
        <span class="fl">选择专属顾问</span>
        <input class="fr" type="text" placeholder="可指定该店专属顾问 >" v-model="counselor">
      </li>
      <li>
        <i class="fl el-icon-s-ticket"></i>
        <span class="fl">优惠券</span>
        <input class="fr" type="text" placeholder="使用优惠券 >">
      </li>
    </ol>
    <div class="agree">
      <i @click="change3()" :class="checked3===true?'active':''"></i>
      <u>我已认真阅读并同意《凯撒旅游预订产品退改签协议》</u>
    </div>
    <img style="width:100%;margin-bottom:1rem;" src="../assets/cate_img/tips.png">
    <div class="book">
      <span>订单总计:</span>
      <em>￥{{total}}</em>
      <i>费用明细</i>
      <b class="fr" @click="checkAll('/confirmorder')">立即预订</b>
    </div>

    <!-- 弹窗 -->
    <footer :class="tips===true?' show ':''">
      <div class="bg" @click="close()"></div>
      <div class="msg">{{msg}}</div>
    </footer>
  </div>
</template>

<script>
import bookshead from "../ljh_com/bookshead.vue";
export default {
  name: "orederinf",
  data() {
    return {
      shop: "广州分店",
      counselor: "静静",
      total: "0",
      msg: "", //提示信息
      checked1: false, //单房差
      checked2: false, //机票升舱
      checked3: false, //同意协议
      tips: false,
      username: null,
      tellphone: null,
      email: null,
      userStatus: 0, //用户名状态
      phoneStatus: 0, //手机号状态
      emailStatus: 0 //邮件状态
    };
  },
  methods: {
    change1() {
      this.checked1 = !this.checked1;
    },
    change2() {
      this.checked2 = !this.checked2;
    },
    change3() {
      this.checked3 = !this.checked3;
    },
    // 隐藏弹窗
    close() {
      this.tips = false;
    },
    // 验证名字
    checkName() {
      let reg = /^[\u0391-\uFFE5]+$/;
      let result = reg.test(this.username);
      //   console.log(result, this.username);
      if (!this.username) {
        this.msg = "请输入联系人姓名";
        this.tips = !this.tips;
        this.userStatus = 0;
      } else if (!result) {
        this.msg = "请输入正确的姓名！";
        this.tips = !this.tips;
        this.userStatus = 1;
      } else {
        this.userStatus = 2;
      }
    },
    // 验证手机号码
    checkTellphone() {
      let reg = /^1[3-9]\d{9}$/;
      let result = reg.test(this.tellphone);
      if (!this.tellphone) {
        this.msg = "请输入联系电话";
        this.tips = !this.tips;
        this.phoneStatus = 0;
      } else if (!result) {
        this.msg = "请输入正确的电话号码格式！";
        this.tips = !this.tips;
        this.phoneStatus = 1;
      } else {
        this.phoneStatus = 2;
      }
    },
    // 验证邮箱地址
    checkEmail() {
      let reg = /^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/;
      let result = reg.test(this.email);
      //   console.log(result, this.email);
      if (!this.email) {
        this.msg = "请输入邮箱地址";
        this.tips = !this.tips;
        this.emailStatus = 0;
      } else if (!result) {
        this.msg = "请输入正确的邮箱格式！";
        this.tips = !this.tips;
        this.emailStatus = 1;
      } else {
        this.emailStatus = 2;
      }
    },
    // 提交检验所有信息
    checkAll(key) {
      if (this.userStatus === 0) {
        this.msg = "请输入联系人姓名";
      } else if (this.userStatus === 1) {
        this.msg = "请输入正确的姓名！";
      } else if (this.phoneStatus === 0) {
        this.msg = "请输入联系电话";
      } else if (this.phoneStatus === 1) {
        this.msg = "请输入正确的电话号码格式！";
      } else if (this.emailStatus === 0) {
        this.msg = "请输入邮箱地址";
      } else if (this.emailStatus === 1) {
        this.msg = "请输入正确的邮箱格式！";
      } else if (this.checked3 === false) {
        this.msg = "请仔细阅读并勾选协议！";
      } else if (
        this.userStatus === 2 &&
        this.phoneStatus === 2 &&
        this.emailStatus === 2 &&
        this.checked3 === true
      ) {
        // 跳转
        this.$router.push({
          path: key,
          query: {
            username: this.username,
            tellphone: this.tellphone,
            email: this.email,
            shop: this.shop,
            id: this.id,
            godate: this.godate,
            total: this.total
          }
        });
        // this.$route.query;
      }
      // 显示弹窗
      this.tips = !this.tips;
    }
  },
  async created() {
    let { data } = await this.$axios.get("http://10.3.133.2:4399/searchlist", {
      params: {
        query: { id: this.id }
      }
    });
    this.total = data[0].price;
    // console.log(data);
  },
  components: {
    bookshead
  }
};
</script>

<style lang="scss" scoped>
@import "../lib_base/base.css";
* {
  box-sizing: border-box;
}
.orderinf {
  width: 100%;
  background-color: #eee;
  h5 {
    height: 0.2667rem;
    line-height: 0.2667rem;
    margin-bottom: 0.1333rem;
    padding: 0 0.1333rem;
    font-size: 0.1867rem;
    color: #666;
  }

  > ul {
    width: 100%;
    height: 1.3333rem;
    padding: 0 0.1333rem;
    margin-bottom: 0.2667rem;
    background-color: #fff;
    li {
      width: 100%;
      height: 0.6667rem;
      padding: 0.1867rem 0;
      p {
        width: 100%;
        height: 0.2933rem;
        display: flex;
        > i {
          width: 0.2933rem;
          height: 100%;
          background-color: #fff;
          border: 0.0133rem solid #ccc;
          border-radius: 50%;
        }
        > span {
          height: 100%;
          line-height: 0.2933rem;
          font-size: 0.1867rem;
          margin: 0 0.1333rem;
        }
        > em {
          height: 100%;
          line-height: 0.2933rem;
          font-size: 0.16rem;
          color: #10327f;
        }
      }
    }
  }

  > ol {
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 0 0.1333rem;
    li {
      padding: 0.1333rem 0;
      height: 0.56rem;
      width: 100%;
      line-height: 0.2933rem;
      border-bottom: 0.0133rem solid #ccc;
      > i {
        display: block;
        height: 100%;
        line-height: 0.2933rem;
        font-size: 0.2667rem;
        color: #ff6b01;
      }
      > span {
        display: block;
        height: 100%;
        line-height: 0.2933rem;
        font-size: 0.1867rem;
        margin-left: 0.1333rem;
      }
      > input {
        display: block;
        height: 100%;
        line-height: 0.2933rem;
        font-size: 0.1867rem;
        text-align: right;
        margin-right: 0.1333rem;
      }
    }
  }

  .agree {
    height: 0.56rem;
    line-height: 0.56rem;
    padding: 0.1333rem;
    display: flex;
    > i {
      // display: block;
      height: 0.2933rem;
      width: 0.2933rem;
      border: 0.0133rem solid #ccc;
      border-radius: 50%;
    }
    u {
      height: 0.2933rem;
      line-height: 0.2933rem;
      color: #10327f;
      font-size: 0.16rem;
      margin-left: 0.1333rem;
    }
  }

  .book {
    width: 100%;
    height: 0.6667rem;
    display: flex;
    justify-content: flex-end;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    span {
      color: #666;
      font-size: 0.2133rem;
      height: 100%;
      line-height: 0.6667rem;
    }
    em {
      height: 100%;
      line-height: 0.6667rem;
      color: #ff6b01;
      font-size: 0.2667rem;
      margin: 0 0.1333rem;
    }
    i {
      height: 100%;
      line-height: 0.6667rem;
      font-size: 0.16rem;
      color: #10327f;
      margin-right: 0.0667rem;
    }
    b {
      width: 2rem;
      background-color: #ff6b01;
      color: #fff;
      font-size: 0.2667rem;
      height: 100%;
      line-height: 0.6667rem;
      text-align: center;
    }
  }

  footer {
    display: none;
    width: 100%;
    .bg {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      background-color: #333;
      opacity: 0.3;
      z-index: 100;
    }
    .msg {
      width: 70%;
      height: 1.4rem;
      background-color: #fff;
      position: fixed;
      left: 15%;
      top: calc(50% - 0.7rem);
      border-radius: 0.2rem;
      z-index: 200;
      font-size: 16px;
      line-height: 1.4rem;
      text-align: center;
      opacity: 1;
      color: #666;
    }
  }

  .active {
    background: #ff6b01;
  }
  .show {
    display: block;
  }
}
</style>
