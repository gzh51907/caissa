<template>
  <div class="evaluate">
    <p>
      <i class="fl el-icon-arrow-left" @click="goto('/more')"></i>
      质量监督
    </p>
    <h6>
      尊敬的贵宾:<br>感谢您选择凯撒旅游的产品及服务，也非常感谢您在本次旅途中对我们工作的支持与配合。<br>现诚邀您点评本次旅行体验的真实感受，提出宝贵的意见和建议。（您的点评内容将直接反馈至凯撒旅游产品总部，过程严格保密。领队及团组其他成员不可见。）<br>欢迎您再次体验凯撒旅游，监督并帮助我们继续提升产品服务质量。
    </h6>
    <ul>
      <li>
        <i class="fl el-icon-s-custom"></i>
        <input class="fl" type="text" style="width:2.1333rem;border:0;" placeholder="姓名" v-model="username" v-on:blur="checkName()">
      </li>
      <li>
        <i class="fl el-icon-mobile-phone"></i>
        <input class="fl" type="text" style="width:2.1333rem;border:0;" placeholder="手机号" v-model="tellphone" v-on:blur="checkTellphone()">
      </li>
      <li>
        <i class="fl el-icon-lock"></i>
        <input class="fl" type="text" style="width:2.1333rem;border:0;" placeholder="输入验证码" v-model="code">
        <i class="fr ramdomcode" v-if="codeStatus===true" @click="refreshCode()">{{randomCode}}</i>
        <b class="fr code" @click="getCode()" v-else>获取验证码</b>
      </li>
    </ul>
    <div>
      <el-button class="starteval" type="primary" @click="checkAll('/result')">开始评价我的旅游</el-button>
    </div>
    <footer :class="tips===true?' show ':''">
      <div class="bg" @click="close()"></div>
      <div class="msg">{{msg}}</div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "evaluate",
  data() {
    return {
      username: "",
      tellphone: "",
      code: "",
      randomCode: "",
      tips: false,
      msg: "",
      userStatus: 0,
      phoneStatus: 0,
      codeStatus: false, //验证码开关
      newCode: false
    };
  },
  created() {},
  methods: {
    // 隐藏弹窗
    close() {
      this.tips = false;
    },
    goto(key) {
      return this.$router.push(key);
    },
    // 生产验证码
    createCode() {
      let newCode = "";
      let html =
        "0123465789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP";
      for (let i = 0; i < 4; i++) {
        let j = parseInt(Math.random() * html.length);
        newCode += html[j];
      }
      this.randomCode = newCode;
      newCode = null;
      return this.randomCode;
    },
    // 获得随机验证码
    getCode() {
      this.createCode();
      this.codeStatus = !this.codeStatus;
    },
    // 更新随机验证码
    refreshCode() {
      this.createCode();
    },
    // 验证名字
    checkName() {
      if (!this.username) {
        this.msg = "请输入联系人姓名";
        this.tips = !this.tips;
        this.userStatus = 0;
      } else {
        this.userStatus = 2;
      }
    },
    // 验证手机号码
    checkTellphone() {
      let reg = /^1[3-9]\d{9}$/;
      let result = reg.test(this.tellphone);
      //   console.log(result, this.tellphone);
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

    // 验证所有表单
    checkAll(key) {
      if (this.userStatus === 0) {
        this.msg = "请输入联系人姓名";
      } else if (this.phoneStatus === 0) {
        this.msg = "请输入联系电话";
      } else if (this.phoneStatus === 1) {
        this.msg = "请输入正确的电话号码格式！";
      } else if (!this.randomCode) {
        this.msg = "请输入验证码";
      } else if (this.randomCode.toLowerCase() != this.code.toLowerCase()) {
        this.msg = "验证码输入有误！";
      } else if (
        this.randomCode.toLowerCase() === this.code.toLowerCase() &&
        this.userStatus === 2 &&
        this.phoneStatus === 2
      ) {
        // this.msg = "yes";
        this.$router.push("/more/evaluate" + key);
      }
      this.tips = !this.tips;
    }
  },
  components: {
    alert
  }
};
</script>
<style lang="scss">
@import "../lib_base/base.css";
* {
  box-sizing: border-box;
}
.evaluate {
  > p {
    height: 0.6667rem;
    line-height: 0.6667rem;
    font-size: 0.2667rem;
    text-align: center;
    color: #fff;
    background-color: #00b0ec;
    position: relative;
    i {
      position: absolute;
      left: 0.0667rem;
      height: 100%;
      font-size: 0.4rem;
      line-height: 0.6667rem;
    }
  }
  h6 {
    padding: 0.2rem 0.2rem 0.1333rem;
    font-size: 0.1867rem;
    line-height: 0.32rem;
    background-color: #fff;
  }
  ul {
    margin-top: 0.2667rem;
    padding: 0 0.1333rem;
    box-shadow: 0 0.0267rem 0 #e9e7e9;
    li {
      height: 0.6667rem;
      border-bottom: 0.0133rem solid #ccc;
      padding: 0 0.1333rem;
      i {
        height: 100%;
        line-height: 0.6667rem;
        font-size: 0.2667rem;
        color: #e98426;
      }
      > input {
        height: 100%;
        line-height: 0.6667rem;
        width: 2.1333rem;
        margin-left: 0.2667rem;
      }
      .code {
        display: block;
        background-color: #00b0ec;
        color: #fff;
        border-radius: 0.0667rem;
        padding: 0 0.1333rem;
        height: 0.5333rem;
        line-height: 0.5333rem;
        margin-top: 0.0667rem;
        font-size: 0.1867rem;
      }
      .ramdomcode {
        font-size: 0.2667rem;
        width: 1.0667rem;
        text-align: center;
        height: 0.6667rem;
        line-height: 0.6667rem;
        background-color: #ccc;
        border-radius: 0.1067rem;
      }
    }
  }
  > div {
    text-align: center;
    margin-top: 0.2667rem;
    .starteval {
      width: 4.96rem;
      height: 0.6667rem;
      font-size: 0.1867rem;
      color: #fff;
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
  .show {
    display: block;
  }
}
</style>

