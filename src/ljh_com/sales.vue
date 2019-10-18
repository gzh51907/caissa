<template>
  <div class="sales">
    <header class="top" v-if="isok">
      <img class="fl logo" src="../assets/cate_img/logo.png">
      <p class="fl">
        <em>
          凯撒旅游APP
        </em>
        <span>您全方位的旅行服务专家</span>
      </p>
      <img class="fr close" src="../assets/cate_img/close_btn.png" @click="isok = false">
    </header>

    <div class="imglist">
      <img style="width:100%;height:2.2133rem" src="../assets/cate_img/201704141610119015946_thumbnail.jpg">
      <img style="width:100%;height:1.7333rem;padding:0.0533rem" src="../assets/cate_img/201708091452237417063_thumbnail.jpg">
      <img style="width:100%;height:1.64rem;padding:0.1333rem;border-radius:0.1333rem;" src="../assets/cate_img/201708081208551147203_thumbnail.jpg">
      <ul>
        <li v-for="item in imglist" :key="item.imgurl">
          <img :src="item.imgurl">
        </li>
      </ul>
      <img style="width:100%;height:1.7333rem;padding:0.0533rem" src="../assets/cate_img/201704141610116827735_thumbnail.jpg">
    </div>
    <div class="couponlist">
      <dl v-for="item in couponlist" :key="item.imgTitle">
        <dt class="fl">
          <img :src="item.cponImgUrl" alt="">
          <h6>{{item.imgTitle}}</h6>
        </dt>
        <dd class="fr">
          <b>{{item.con}}</b>
          <span>个别商品除外</span>
          <p>
            <span v-for="cardItem in item.cards" :key="cardItem.key">{{cardItem.cardslist}}</span>
          </p>
          <i>仅临柜使用</i>
          <em>{{item.discount}}</em>
        </dd>
      </dl>
    </div>

    <div class="backTop" @click="backToTop()">
      <img src="../assets/cate_img/top.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isok: true,
      scrollTop: 0,
      timer: null,
      imglist: [
        {
          imgurl: require("../assets/cate_img/201704141652020109705_thumbnail.jpg")
        },
        {
          imgurl: require("../assets/cate_img/201708081732526137706_thumbnail.jpg")
        },
        {
          imgurl: require("../assets/cate_img/201708231719257272863_thumbnail.jpg")
        },
        {
          imgurl: require("../assets/cate_img/201708231719258835097_thumbnail.jpg")
        }
      ],
      couponlist: [
        {
          cponImgUrl: require("../assets/cate_img/201712011016233611461_thumbnail.jpg"),
          imgTitle: "西盟购物",
          con: "优惠登机牌",
          cards: [
            {
              cardslist: "电子优惠券",
              key: 1
            },
            {
              cardslist: "全店通用",
              key: 2
            }
          ],
          discount: "低至3.5折"
        },
        {
          cponImgUrl: require("../assets/cate_img/timg.jpg"),
          imgTitle: "博洛茗",
          con: "博洛茗9折优惠券",
          cards: [
            {
              cardslist: "电子优惠券",
              key: 1
            },
            {
              cardslist: "全店通用",
              key: 2
            }
          ],
          discount: "9折"
        },
        {
          cponImgUrl: require("../assets/cate_img/201708081151251613168_thumbnail.jpg"),
          imgTitle: "王权免税",
          con: "王权免税优惠券",
          cards: [
            {
              cardslist: "电子优惠券",
              key: 1
            },
            {
              cardslist: "全店通用",
              key: 2
            }
          ],
          discount: "8-9折"
        },
        {
          cponImgUrl: require("../assets/cate_img/201704131719584150300_thumbnail.jpg"),
          imgTitle: "近铁百货",
          con: "5%优惠+8%退税+1000日元劵",
          cards: [
            {
              cardslist: "电子优惠券",
              key: 1
            },
            {
              cardslist: "全店通用",
              key: 2
            }
          ],
          discount: "5%优惠+8%退税+1000日元劵"
        },
        {
          cponImgUrl: require("../assets/cate_img/201704131719589150170_thumbnail.jpg"),
          imgTitle: "松本清",
          con: "3%（5）%优惠+8%退税",
          cards: [
            {
              cardslist: "电子优惠券",
              key: 1
            },
            {
              cardslist: "全店通用",
              key: 2
            }
          ],
          discount: "3%（5）%优惠+8%退税"
        },
        {
          cponImgUrl: require("../assets/cate_img/p18jun2pfo82apspgic1ngl1sip1.jpg"),
          imgTitle: "唐吉诃德",
          con: "8%优惠电子券",
          cards: [
            {
              cardslist: "电子优惠券",
              key: 1
            },
            {
              cardslist: "全店通用",
              key: 2
            }
          ],
          discount: "8%优惠+最高减2000日元"
        }
      ]
    };
  },
  methods: {
    // 1.创建一个回到顶部的方法（事件），设定时器使运动平滑
    backToTop() {
      let that = this;
      let timer = setInterval(() => {
        let speed = Math.floor(-that.scrollTop / 10);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + speed;
        // 4.到了顶部清除定时器
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 20);
    },
    // 2.设置scrollTop滚动距离
    scrollToTop() {
      // 做兼容
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
    }
  },
  // 3.挂靠的时候监听回到顶部的方法（事件）
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  // 5.最后的时候要清除方法，否则会报错
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>

<style lang="scss" scoped>
@import "../lib_base/base.css";
.sales {
  width: 100%;
  background-color: #ccc;

  .top {
    height: 0.7067rem;
    padding: 0 0.0533rem;
    background-color: #333;
    .logo {
      width: 0.4667rem;
      height: 0.4667rem;
      padding-top: 0.12rem;
      margin-right: 0.0533rem;
    }
    p {
      height: auto;
      color: #fff;
      padding-top: 0.0867rem;
      em {
        display: block;
        height: 0.2667rem;
        line-height: 0.2667rem;
        font-size: 0.2133rem;
      }
      span {
        display: block;
        height: 0.2667rem;
        line-height: 0.2667rem;
        font-size: 0.1867rem;
      }
    }
    .close {
      width: 0.2667rem;
      height: 0.2667rem;
      padding-top: 0.2467rem;
      box-sizing: content-box;
    }
  }

  .imglist {
    width: 100%;
    height: auto;
    > img {
      box-sizing: border-box;
    }
    > ul {
      width: 100%;
      padding: 0 0.1333rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      box-sizing: border-box;
      li {
        width: 2.7rem;
        height: 1.6267rem;
        border-radius: 0.1333rem;
        margin-bottom: 0.1333rem;
        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .couponlist {
    width: 100%;
    padding: 0 0.0533rem;
    box-sizing: border-box;
    > dl {
      width: 100%;
      height: 1.9467rem;
      margin: 0.1333rem 0;
      padding: 0.0667rem;
      background-color: #fff;
      box-sizing: border-box;
      dt {
        width: 1.96rem;
        height: 1.6rem;
        > img {
          width: 100%;
          height: 1.2267rem;
          display: block;
          border-radius: 0.0667rem 0.0667rem 0 0 / 0.0667rem 0.0667rem 0 0;
        }
        h6 {
          width: 100%;
          font-size: 0.16rem;
          height: 0.3733rem;
          line-height: 0.3733rem;
          background-color: #ccc;
          text-align: center;
          border-radius: 0 0 0.0667rem 0.0667rem / 0 0 0.0667rem 0.0667rem;
        }
      }
      dd {
        width: calc(100% - 1.96rem);
        height: auto;
        display: flex;
        flex-direction: column;
        padding-left: 0.1333rem;
        box-sizing: border-box;
        b {
          height: 0.2133rem;
          line-height: 0.2133rem;
          font-size: 0.1867rem;
        }
        > span {
          height: 0.2667rem;
          line-height: 0.2667rem;
          font-size: 0.16rem;
        }
        p {
          font-size: 0.16rem;
          margin: 0.16rem 0;
          span {
            height: 0.2133rem;
            line-height: 0.2133rem;
            border: 0.0133rem solid #0099a9;
            color: #0099a9;
            border-radius: 0.0667rem;
            padding: 0.0267rem 0.0667rem;
            margin-right: 0.1333rem;
            text-align: center;
          }
        }
        > i {
          height: 0.2667rem;
          line-height: 0.2667rem;
          font-size: 0.16rem;
        }
        em {
          margin-top: 0.0667rem;
          height: 0.2133rem;
          line-height: 0.2133rem;
          font-size: 0.2133rem;
          color: #ff6b01;
        }
      }
    }
  }

  .backTop {
    width: 0.8267rem;
    height: 0.8267rem;
    position: fixed;
    bottom: 0.4rem;
    right: 0.2667rem;
    > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
