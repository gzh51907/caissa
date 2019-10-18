<template>
  <header>
    <dl v-bind="orderInf">
      <dt class="fl">
        <img class="jx" :src="orderInf.backgroundUrl">
        <img class="img" :src="orderInf.imgUrl">
        <span>{{orderInf.from}}</span>
      </dt>
      <dd class="fl">
        <ul>
          <li style="height:0.5333rem">{{orderInf.title}}</li>
          <li>
            <span>团号：</span>
            <i>{{orderInf.groupno}}</i>
          </li>
          <li>
            <span>出发：</span>
            <em>{{orderInf.date}}</em>
          </li>
          <li>
            <span>人数：</span>
            <em>{{orderInf.people}}</em>
          </li>
        </ul>
      </dd>
    </dl>
  </header>
</template>

<script>
export default {
  data() {
    return {
      id: "0", //默认
      orderInf: {}
    };
  },
  async created() {
    // query传来的id
    this.id = this.$route.query.id;
    //传来的日期为xx-xx没有年份，所以获取当前年份拼接
    let getdate = new Date();
    let godate = `${getdate.getFullYear()}-${this.$route.query.godate}`;
    let { data } = await this.$axios.get("http://10.3.133.2:4399/searchlist", {
      params: {
        query: { id: this.id }
      }
    });
    let datas = data[0];
    this.orderInf = {
      imgUrl: datas.img,
      backgroundUrl: require("../assets/cate_img/jx.png"),
      from: datas.go,
      title: datas.title,
      groupno: "CAI19-PEK0809-1502090",
      date: godate,
      people: "成人x1"
    };
    console.log(this.$route.query);
  }
};
</script>

<style lang="scss" scoped>
@import "../lib_base/base.css";
* {
  box-sizing: border-box;
}
header {
  width: 100%;
  height: 1.6667rem;
  padding: 0.1067rem 0.2rem;
  background-color: #fff;
  margin-bottom: 0.2667rem;
  border-bottom: 0.0133rem solid #bdbdbd;
  dl {
    width: 100%;
    height: 100%;
    // padding: ;
    dt {
      width: 1.7333rem;
      height: 100%;
      position: relative;
      .jx {
        width: 1.1rem;
        height: 0.36rem;
        position: absolute;
        left: -0.1067rem;
        top: 0.1667rem;
      }
      .img {
        display: block;
        width: 100%;
        height: 86px;
        border-radius: 0.1333rem;
      }
      span {
        width: 100%;
        height: 0.32rem;
        line-height: 0.32rem;
        font-size: 0.1867rem;
        background-color: #eee;
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 0 0 0.1333rem 0.1333rem / 0 0 0.1333rem 0.1333rem;
      }
    }
    dd {
      height: 100%;
      font-size: 0.1867rem;
      line-height: 0.2667rem;
      width: calc(100% - 1.7333rem);
      ul {
        width: 100%;
        padding-left: 0.0667rem;
        li {
          width: 100%;
          > span {
            margin-right: 0.1333rem;
          }
          > em {
            color: #ff6b01;
          }
        }
      }
    }
  }
}
</style>
