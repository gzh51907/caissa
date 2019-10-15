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
        <input class="fl" type="text" style="width:160px;border:0px;" placeholder="姓名" v-model="username">
      </li>
      <li>
        <i class="fl el-icon-mobile-phone"></i>
        <input type="text" style="width:160px;border:0px;" placeholder="手机号" v-model="tellphone">
      </li>
      <li>
        <i class="fl el-icon-lock"></i>
        <input class="fl" type="text" style="width:160px;border:0px;" placeholder="输入验证码" v-model="code">
        <el-button class="fr code" type="primary" size="small">获取验证码</el-button>
      </li>
    </ul>
    <div>
      <el-button class="starteval" type="primary">开始评价我的旅游</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "evaluate",
  data() {
    return {
      username: "",
      tellphone: "",
      code: ""
    };
  },
  methods: {
    goto(key) {
      return this.$router.push(key);
    }
  }
};
</script>
<style lang="scss">
@import "../lib_base/base.css";
.evaluate {
  > p {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    color: #fff;
    background-color: #00b0ec;
    position: relative;
    i {
      position: absolute;
      left: 5px;
      height: 100%;
      font-size: 30px;
      line-height: 50px;
    }
  }
  h6 {
    padding: 15px 15px 10px;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
  }
  ul {
    margin-top: 20px;
    padding: 0 10px;
    box-shadow: 0px 2px 0px #e9e7e9;
    li {
      height: 50px;
      border-bottom: 1px solid #ccc;
      padding: 0 10px;
      i {
        height: 100%;
        line-height: 50px;
        font-size: 20px;
        color: #e98426;
      }
      > input {
        height: 100%;
        width: 160px;
        margin-left: 20px;
      }
      .code {
        height: 40px;
        margin-top: 5px;
        font-size: 14px;
      }
    }
  }
  > div {
    text-align: center;
    margin-top: 20px;
    .starteval {
      width: 372px;
      height: 50px;
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>

