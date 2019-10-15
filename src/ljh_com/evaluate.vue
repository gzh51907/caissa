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
        <input class="fl" type="text" style="width:2.1333rem;border:0;" placeholder="姓名" v-model="username">
      </li>
      <li>
        <i class="fl el-icon-mobile-phone"></i>
        <input class="fl" type="text" style="width:2.1333rem;border:0;" placeholder="手机号" v-model="tellphone">
      </li>
      <li>
        <i class="fl el-icon-lock"></i>
        <input class="fl" type="text" style="width:2.1333rem;border:0;" placeholder="输入验证码" v-model="code">
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
        height: 0.5333rem;
        margin-top: 0.0667rem;
        font-size: 0.1867rem;
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
}
</style>

