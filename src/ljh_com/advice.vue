<template>
  <div class="advice">
    <el-input class="text" type="textarea" :rows="8" placeholder="感谢您宝贵的反馈信息,我们将不断努力改进" v-model="textarea">
    </el-input>
    <p>反馈内容类型</p>
    <!-- <div class="conClass"> -->
    <ol style="width:100%;">
      <li v-for="item in btnlist" :key="item.content" @click="item.checked = !item.checked" :class="item.checked===true?'active':''">
        {{item.content}}
        <!-- <el-checkbox class="input" v-model="item.checked" :label="item.content" border size="medium"></el-checkbox> -->
      </li>
    </ol>
    <!-- <el-row :gutter="10">
        <el-col :span="8" v-for="item in btnlist" :key="item.content" style="height:0.4267rem;">
          <el-checkbox class="input" v-model="item.checked" :label="item.content" border size="medium"></el-checkbox>
        </el-col>
      </el-row> -->
    <!-- </div> -->
    <ul>
      <li>
        <i class="fl el-icon-s-custom"></i>
        <input class="fl" type="text" style="width:2.1333rem;border:0;" placeholder="联系人姓名" v-model="username">
        <el-checkbox class="fr" v-model="check" style="height:0.6667rem;line-height:0.6667rem;">匿名反馈</el-checkbox>
      </li>
      <li>
        <i class="fl el-icon-mobile-phone"></i>
        <input class="fl" type="text" style="width:2.1333rem;border:0;" placeholder="手机号码" v-model="tellphone">
      </li>
      <li>
        <i class="fl el-icon-location-outline"></i>
        <input class="fl" type="text" style="width:2.1333rem;border:0;" placeholder="广州市" v-model="address">
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
    },
    light() {
      this.checked = !this.checked;
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
  background-color: #fff;
  // background-color: rgb(243, 243, 243);
  padding: 0.1333rem;
  > p {
    padding: 0.2rem 0;
    color: #838383;
    // color: #e98426;
    font-size: 0.2133rem;
    font-weight: bold;
  }
  ol {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 0.2rem;
    border-bottom: 0.0133rem solid #ccc;
    li {
      height: 0.4267rem;
      width: 1.7333rem;
      border: 1px solid #666;
      border-radius: 0.0667rem;
      box-sizing: border-box;
      margin: 0.0533rem;
      text-align: center;
      line-height: 0.4267rem;
      font-size: 0.1867rem;
      color: #666;
    }
  }
  ul {
    margin-top: 0.2667rem;
    padding: 0 0.1333rem;
    li {
      height: 0.6667rem;
      border-bottom: 0.0133rem solid #ccc;
      i {
        height: 100%;
        line-height: 0.6667rem;
        font-size: 0.2667rem;
        color: #e98426;
      }
      > input {
        height: 100%;
        width: 2.1333rem;
        margin-left: 0.2667rem;
      }
    }
  }
  .submit {
    width: 4.9333rem;
    height: 0.6667rem;
    text-align: center;
    margin: 0.2667rem 0;
  }
  .el-textarea__inner {
    background-color: #f9f9f9;
  }

  .active {
    border-color: #33c0f0;
    color: #33c0f0;
  }
}
</style>