<template>
  <div class="confirmorder">
    <h5>
      恭喜，您的订单已提交，余位我们将为您保留60min，您即可完成在线支付。后续我们将有专业的销售顾问与您联络提供服务。若您无法线上支付完成，您可以到门店持订单号码线下支付。
    </h5>
    <ul v-bind="confirmInf">
      <li>
        <span>订单编号</span>
        <em>{{confirmInf.orderNo}}</em>
      </li>
      <li>
        <span>联系人</span>
        <i>{{confirmInf.linkMan}}</i>
      </li>
      <li>
        <span>联系电话</span>
        <i>{{confirmInf.linkPhone}}</i>
      </li>
      <li>
        <span>联系邮箱</span>
        <i>{{confirmInf.linkEmail}}</i>
      </li>
      <li>
        <span>服务方式</span>
        <i>{{confirmInf.serve}}</i>
      </li>
    </ul>
    <bookshead></bookshead>
    <footer class="book">
      <span>订单总计:</span>
      <em>￥{{total}}</em>
      <i>费用明细</i>
      <b class="fr" @click="goto('/pay')">立即支付</b>
    </footer>
  </div>
</template>

<script>
import bookshead from "../ljh_com/bookshead.vue";
export default {
  name: "confirmorder",
  data() {
    return {
      total: "0",
      // 确认信息
      confirmInf: {}
    };
  },
  methods: {
    async goto(key) {
      await this.$instance.post("/order/pay", {
        name: this.confirmInf.linkMan,
        phonenumber: this.confirmInf.linkPhone,
        email: this.confirmInf.linkEmail,
        serveshop: this.confirmInf.serve,
        price: this.total
      });
      this.$router.push(key);
    }
  },
  created() {
    document.documentElement.style = "font-size:400%";
    this.total = this.$route.query.id;
    let datas = this.$route.query;
    this.total = this.$route.query.total;
    this.confirmInf = {
      orderNo: "11111111111", //订单号
      linkMan: datas.username, //联系人
      linkPhone: datas.tellphone, //联系电话
      linkEmail: datas.email, //联系邮箱
      serve: datas.shop //服务门店
    };
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
.confirmorder {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  h5 {
    padding: 10px;
    line-height: 16px;
    font-size: 12px;
    background-color: #fff;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  ul {
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 0 0.1333rem;
    margin-bottom: 10px;
    li {
      padding: 0.1333rem 0;
      height: 0.56rem;
      width: 100%;
      line-height: 0.2933rem;
      border-bottom: 0.0133rem solid #ccc;
      display: flex;
      span {
        height: 100%;
        width: 90px;
        line-height: 0.2933rem;
        font-size: 0.1867rem;
        margin-left: 0.1333rem;
        color: #999;
      }
      em {
        height: 100%;
        line-height: 0.2933rem;
        font-size: 0.1867rem;
        color: #ff6b01;
      }
      i {
        height: 100%;
        line-height: 0.2933rem;
        font-size: 0.1867rem;
        color: #333;
      }
    }
  }
  .book {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.6667rem;
    display: flex;
    justify-content: flex-end;
    background-color: #fff;
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
}
</style>
