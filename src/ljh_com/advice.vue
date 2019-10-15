<template>
  <div class="advice">
    <el-input class="text" type="textarea" :rows="8" placeholder="感谢您宝贵的反馈信息,我们将不断努力改进" v-model="textarea">
    </el-input>
    <p>反馈内容类型</p>
    <div style="padding-bottom:15px;border-bottom:1px solid #ccc;">
      <el-row :gutter="10">
        <el-col :span="8" v-for="item in btnlist" :key="item.content">
          <el-checkbox class="input" v-model="item.checked" :label="item.content" border size="medium"></el-checkbox>
        </el-col>
      </el-row>
    </div>
    <ul>
      <li>
        <i class="fl el-icon-s-custom"></i>
        <input class="fl" type="text" style="width:160px;border:0px;" placeholder="联系人姓名" v-model="username">
        <el-checkbox class="fr" v-model="check" style="height:50px;line-height:50px;">匿名反馈</el-checkbox>
      </li>
      <li>
        <i class="fl el-icon-mobile-phone"></i>
        <input type="text" style="width:160px;border:0px;" placeholder="手机号码" v-model="tellphone">
      </li>
      <li>
        <i class="fl el-icon-location-outline"></i>
        <input type="text" style="width:160px;border:0px;" placeholder="广州市" v-model="address">
      </li>
    </ul>
    <div style="text-align: center;">
      <el-button class="submit" type="primary" @click="checkout(textarea)">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "advice",
  data() {
    return {
      textarea: "",
      username: "",
      tellphone: "",
      address: "",
      check: "",
      //   反馈内容类型
      btnlist: [
        {
          content: "团组安排",
          checked: false
        },
        {
          content: "门店服务",
          checked: false
        },
        {
          content: "领队服务",
          checked: false
        },
        {
          content: "新需求",
          checked: false
        },
        {
          content: "其他",
          checked: false
        }
      ]
    };
  },
  methods: {
    checkout(obj) {
      // let
      if (!obj) {
        alert("请填写反馈信息！");
      } else {
        alert("ok");
      }
    }
  }
};
</script>
<style lang="scss">
@import "../lib_base/base.css";
.advice {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(243, 243, 243);
  padding: 10px;
  //   .text {
  //     // padding: 5px 0px;
  //   }
  > p {
    padding: 20px 0;
    color: #838383;
    // color: #e98426;
    font-size: 16px;
    font-weight: bold;
  }
  .input {
    margin: 5px 0;
    width: 128px;
    text-align: center;
  }
  ul {
    margin-top: 20px;
    padding: 0 10px;
    li {
      height: 50px;
      border-bottom: 1px solid #ccc;
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
    }
  }
  .submit {
    width: 370px;
    height: 50px;
    text-align: center;
    margin: 20px 0;
  }
}
</style>