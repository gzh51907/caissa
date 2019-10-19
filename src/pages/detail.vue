<template>
    <div class="wrap_main">
        <section>
            <div class="detail_main">
                <div class="fahui">
                    <div class="fahui_h3 clear">
                        <a class="fan_img" @click="goback">
                            <img src="../assets/fanhui.png">
                        </a>
                    </div>
                </div>
                <div class="detail_banner">
                    <img :src="data.img">
                </div>
                <div class="pro_info mar_bot10">
                    <ul>
                        <li>
                            <p class="big_title">
                                <span>{{data.title}}</span>
                            </p>
                        </li>
                        <li>
                            <span class="sma_title">
                                {{data.subtitle}}
                            </span>
                        </li>
                        <li>
                            <p class="price">
                                <i>￥</i>
                                <span class="pri">
                                    {{data.price}}
                                </span>
                                起
                            </p>
                        </li>
                        <li>
                            <label>产品亮点</label>
                            <p class="tab">
                                <strong v-for="item in data.tab" :key="item">{{item}}</strong>
                            </p>
                        </li>
                        <li class="show_coupon">
                            <label>优惠券</label>
                            <div>
                                <span>
                                    <i>30元代金券</i>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="dataBox mar_bot10">
                    <div class="dataTitleBox">出发日期</div>
                    <div class="dataListBox">
                        <ul>
                            <li v-for="(item,index) in date" @click="active(index)" ref="dates" :key="index">
                                <span>惠</span>
                                <div>{{item}}</div>
                                <div class="priceBox">
                                    ￥{{data.price}}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="part_info mar_bot10" style="margin-bottom:50px">
                    <ul>
                        <li>
                            <span class="cfd">出发地</span>
                            <p>
                                <em>{{data.go}}</em>
                            </p>
                        </li>
                        <li>
                            <span class="endDate">报名截止</span>
                            <p>
                                <em>{{date[datelength-1]}}</em>
                            </p>
                        </li>
                        <li>
                            <span class="tdgm">团队规模</span>
                            <p>
                                <em>团队总人数{{datelength}}</em>
                            </p>
                        </li>
                        <li>
                            <span class="cprq">产品人气</span>
                            <p>
                                <i class="num">{{data.id}}</i>
                                <em>人想去</em>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bot_nav">
                <ul>
                    <li @click="wantgo">
                        <strong class="want_go"></strong>
                        <span ref="wg">想去</span>
                    </li>
                    <li>
                        <strong class="phone"></strong>
                        <span>
                            <a>电话咨询</a>
                        </span>
                    </li>
                    <li class="lj_yd" @click="islogin">
                        <p>立即预订</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  data() {
    return {
      data: {},
      date: [],
      godate: "",
      datelength: 0
    };
  },
  async created() {
    let { data } = await this.$instance.get("/searchlist/", {
      params: {
        query: {
          id: this.$route.query.id
        },
        num: 0
      }
    });
    this.data = data[0];
    let arr = data[0].date.replace(/出发日期/, "").split("、");
    this.date = arr; //所有的出发日期
    this.datelength = arr.length;
    this.godate = arr[0]; //默认第一个日期为出发日期
  },
  methods: {
    active(index) {
      this.$refs.dates.forEach((ele, idx) => {
        ele.className = "";
        if (idx == index) {
          ele.className = "active";
          this.godate = this.date[idx]; //更改出发日期
        }
      });
    },
    goback() {
      this.$router.go(-1);
    },
    islogin() {
      //判断是否登录
      let username = localStorage.getItem("Authorization");
      if (username) {
        //有登陆
        this.$router.push({
          path: "/orderinf",
          query: { id: this.data.id }
        });
        this.$store.state.godate=this.godate
      } else {
        //没登录
        this.$router.push("/log");
      }
    },
    wantgo() {
      let username = localStorage.getItem("Authorization");
      if (username) {
        //有登陆
        this.$refs.wg.innerHTML =
          this.$refs.wg.innerHTML == "我想去" ? "想去" : "我想去";
      } else {
        this.$router.push("/log");
      }
    }
  },
  updated() {
    //进入页面时默认选择第一个日期
    this.$refs.dates[0].className = "active";
    // this.$nextTick(function(){console.log(this.$refs.dates)})
  }
};
</script>
<style lang="scss" scoped>
dfn,
i,
em {
  font-style: normal;
}
* {
  font-size: 12px;
}
.bot_nav {
  position: fixed;
  bottom: 0px;
  bottom: constant(safe-area-inset-bottom);
  height: 50px;
  border-top: #ededed solid 1px;
  background: #fff;
  left: 0px;
  right: 0px;
  li {
    width: 30%;
    float: left;
    display: inline-block;
    padding: 5px 0px;
    text-align: center;
    position: relative;
    strong.want_go {
      background: url(../assets/ico.png) 3px -388px no-repeat;
      background-size: 36px;
    }
    strong.phone {
      background: url(../assets/ico.png) 3px -338px no-repeat;
      background-size: 36px;
    }
    span {
      line-height: 16px;
      display: block;
      font-size: 14px;
      a {
        color: #333;
      }
    }
    strong {
      display: inline-block;
      width: 30px;
      height: 22px;
    }
  }
  li.lj_yd {
    width: 40%;
    background: #ff6b01;
    color: #fff;
    p {
      display: block;
      font-size: 20px;
      background: url(../assets/ico.png) 15px -621px no-repeat;
      padding-left: 36px;
      height: 40px;
      line-height: 40px;
      background-size: 48px;
    }
  }
  li:first-child:after {
    content: "";
    background: url(../assets/bot_line.jpg) 0 0 no-repeat;
    width: 1px;
    padding: 0px 1px;
    height: 45px;
    position: absolute;
    right: 0px;
    top: 0;
  }
}
.part_info {
  overflow: hidden;
  background: #fff;
  border-bottom: #e3e3e3 solid 1px;
  ul {
    overflow: hidden;
    li.last {
      border-bottom: none;
    }
    li {
      border-bottom: #e6e9ed solid 1px;
      padding: 10px 0px;
      line-height: 26px;
      p {
        display: inline-block;
        width: 60%;
        font-size: 14px;
        text-align: right;
        padding-right: 20px;
        position: relative;
        float: right;
        em {
          display: inline-block;
        }
        i.num {
          color: #006fba;
        }
      }
      span {
        display: inline-block;
        font-size: 14px;
        color: #666;
        padding-left: 20px;
      }
      span.cprq {
        background: url(../assets/ico.png) 0px -68px no-repeat;
        background-size: 26px;
      }
      span.endDate {
        background: url(../assets/ico.png) 0px -397px no-repeat;
        background-size: 26px;
      }
      span.tdgm {
        background: url(../assets/ico.png) 0px -33px no-repeat;
        background-size: 26px;
      }
      span.cfd {
        background: url(../assets/ico.png) 1px 4px no-repeat;
        background-size: 30px;
      }
      .part_info {
        overflow: hidden;
        background: #fff;
        border-bottom: #e3e3e3 solid 1px;
      }
    }
  }
}
.mar_bot10 {
  margin-bottom: 10px;
}
.dataBox {
  border-bottom: #bdbdbd solid 1px;
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
}
.dataTitleBox {
  line-height: 35px;
  padding-left: 20px;
  background: url(../assets/date.jpg) no-repeat left center;
  background-size: 16px;
  font-size: 14px;
  margin-bottom: 5px;
}
.dataListBox {
  overflow: hidden;
  height: 62px;
  ul {
    overflow: auto;
    margin-left: -2%;
    display: flex;
    flex-wrap: nowrap;
    li.active {
      background: #fffcf6;
      color: #ffaa01;
      border-color: #ffaa01;
    }
    li {
      .priceBox {
        color: #ff6b01;
      }
      flex-shrink: 0;
      float: left;
      width: 23%;
      margin-left: 2%;
      color: #666;
      text-align: center;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #cccccc;
      padding: 7px 0;
      box-sizing: border-box;
      cursor: pointer;
      position: relative;
      span {
        position: absolute;
        top: 0px;
        right: 0px;
        background: url(../assets/hui.png) no-repeat center;
        color: #fff;
        line-height: 12px;
        width: 20px;
        height: 20px;
        text-align: right;
        font-size: 12px;
      }
    }
  }
}
.pro_info {
  overflow: hidden;
  background: #fff;
  border-bottom: #e3e3e3 solid 1px;
  ul {
    padding: 10px;
    overflow: hidden;
    li {
      line-height: 20px;
      overflow: hidden;
      padding: 0px;
      display: flex;
      div {
        flex: 1;
        padding-right: 20px;
        background: url(../assets/jiantou_r.png) no-repeat right center;
        background-size: 8px;
        cursor: pointer;
        height: 20px;
        span {
          padding: 0 7px;
          position: relative;
          display: inline-block;
          line-height: 20px;
          margin: 0 5px 5px 0;
          i {
            display: inline-block;
            line-height: 20px;
            color: #fff;
            background-color: #e1402f;
          }
        }
        span::before {
          content: "";
          background-image: url(../assets/leftsmall.png);
          left: 0px;
          background-position: left center;
          position: absolute;
          width: 8px;
          background-size: auto 100%;
          background-repeat: no-repeat;
          top: 0px;
          bottom: 0px;
        }
        span::after {
          content: "";
          background-image: url(../assets/rightsmall.png);
          right: 0px;
          position: absolute;
          width: 8px;
          background-size: auto 100%;
          background-repeat: no-repeat;
          top: 0px;
          bottom: 0px;
        }
      }
      p.tab {
        display: block;
        flex: 1;
        strong {
          display: inline-block;
          color: #0099a9;
          border: #0099a9 solid 1px;
          border-radius: 3px;
          margin: 3px 2px;
          padding: 0px 3px;
          font-weight: normal;
        }
      }
      label {
        color: #999;
        width: 60px;
      }
      p.price {
        display: block;
        color: #ff6b01;
        float: left;
        span.pri {
          color: #ff6b01;
          font-size: 18px;
          font-family: arial;
        }
        i {
          font-size: 14px;
          color: #ff6b01;
        }
      }
      span.sma_title {
        display: block;
        color: #999;
        font-size: 12px;
      }
      p.big_title {
        display: block;
        font-size: 14px;
        color: #333;
        span {
          height: 20px;
          line-height: 20px;
          padding-left: 5px;
        }
      }
    }
  }
}
.detail_banner {
  width: 100%;
  height: 386.875px;
  img {
    width: 100%;
    height: 100%;
  }
}
.wrap_main {
  overflow: hidden;
}
.detail_main {
  overflow: hidden;
  background: #f5f5f5;
}
.fahui {
  position: absolute;
  z-index: 100;
  left: 0px;
  top: 0px;
  width: 100%;
}
.clear:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.fahui_h3 {
  display: block;
  padding: 10px;
}
.fan_img {
  width: 14px;
  height: 25px;
  float: left;
}
img {
  border: none;
  width: 100%;
  vertical-align: middle;
}
</style>