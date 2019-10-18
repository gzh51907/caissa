<template>
    <div class="wrap_main">
        <header>
            <div class="hear_all">
                <i class="hear_cs" @click="goto"></i>
                <div class="search_input">
                    <input type="search" v-model="iput" placeholder="搜索目的地国家/城市/关键词">
                    <img src="../assets/search.png" @click="request(iput)">
                </div>
            </div>
        </header>
        <section ref="bd">
            <div class="con_main">
                <el-menu class="el-menu-demo" mode="horizontal">
                    <el-submenu v-for="(item,key1) in menus" :key="key1" :index="key1">
                        <template slot="title">{{key1}}</template>
                        <el-menu-item v-for="(item2,index) in item" :key="index" @click="request(item2)" style="height:40px;line-height: 40px;" :index="item2">{{item2}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
            <div class="infinite-list-wrapper" style="overflow:auto">
                <ul @scroll="dataload">
                    <li v-for="(item,index) in count" :key="index" @click="godetail(item.id)">
                        <dt>
                            <div class="imgBox">
                                <img :src="item.img">
                                <span>{{item.go}}</span>
                                <var class="mada_span_01">{{item.tab[0]}}</var>
                            </div>
                        </dt>
                        <dd>
                            <ul>
                                <li>
                                    <strong class="title">{{item.title}}</strong>
                                </li>
                                <li>
                                    <strong class="subtitle">{{item.subtitle}}</strong>
                                </li>
                                <li>
                                    <p class="tab">
                                        <span v-for="item2 in item.tab" :key="item2">{{item2}}</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>{{item.date}}</span>
                                    </p>
                                </li>
                                <li>
                                    <div class="price">
                                        <p>
                                            <i>￥</i>
                                            <strong>{{item.price}}</strong>起</p>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </li>
                </ul>
                <p v-if="noMore">没有更多了</p>
                <p v-else>加载中...</p>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  data() {
    return {
      menus: {
        目的地: [
          "伦敦",
          "爱尔兰",
          "爱丁堡",
          "剑桥",
          "曼彻斯特",
          "哈利波特",
          "英国"
        ],
        综合排序: ["默认综合排序", "价格从低到高", "价格从高到低"],
        类型: ["夏令营", "走遍", "观光", "亲子", "文化遗产"]
      },
      count: "", //请求回的数据
      datalong: 115,
      iput: ""
    };
  },
  computed: {
    noMore() {
      //停止加载的条件，数据没有更多了
      return this.count.length >= this.datalong;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.dataload);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.dataload);
  },
  methods: {
    godetail(id) {
      this.$router.push({ path: "/detail", query: { id } });
    },
    goto() {
      this.$router.push("/");
    },
    dataload() {
      //懒加载请求数据
      if (this.count.length <= this.datalong) {
        var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        let bd = this.$refs.bd;
        if (
          scrollTop + document.documentElement.clientHeight >=
          bd.offsetHeight
        ) {
          setTimeout(
            async function() {
              //再次请求数据
              let { data } = await this.$axios.get(
                "http://10.3.133.2:4399/searchlist/",
                {
                  params: { num: this.count.length }
                }
              );
              data.forEach(ele => {
                //获取数据(一个数组)
                this.count.push(ele); //新获取的数据推进count里面
              });
            }.bind(this),
            2000
          );
        }
      }
    },
    async request(item) {
      //根据条件请求数据,query是个对象，里面是条件

      if (item == "价格从低到高") {
        this.count.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (item == "价格从高到低") {
        this.count.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (item == "默认综合排序") {
        this.count = []; //清空
        let { data } = await this.$axios.get(
          "http://10.3.133.2:4399/searchlist/",
          {
            params: { num: 0 }
          }
        );
        this.count = data;
        this.datalong = 115;
      } else {
        //条件查询
        let { data } = await this.$axios.get(
          "http://10.3.133.2:4399/searchlist/",
          {
            params: {
              num: 0,
              item
            }
          }
        );
        this.count = data;
        this.datalong = data.length;
      }
    }
  },
  async created() {
    //第一次请求30个数据跳过0ge
    let { data } = await this.$axios.get("http://10.3.133.2:4399/searchlist/", {
      params: { num: 0 }
    });
    this.count = data; //获取数据(一个数组)
    this.datalong = 115;
    document.documentElement.style = "font-size:100%";
  }
};
</script>
<style lang="scss" scoped>
html {
  font-size: 100%;
}
body {
  margin: 0;
  font-size: 12px;
  font-family: "宋体";
  line-height: 1.5;
  color: #333;
}
* {
  border: none;
  padding: 0;
  margin: 0;
  list-style: none;
}
.mada_span_01 {
  padding: 0px 5px;
  color: #fff;
  background-color: #00b0ec;
  border-radius: 3px;
  background-size: auto 27px;
  width: auto;
  font-style: normal;
  height: 27px;
  line-height: 23px;
  text-align: center;
  font-size: 14px;
  position: absolute;
  top: 5px;
  left: -4px;
  word-spacing: 8px;
  letter-spacing: 3px;
}
.infinite-list-wrapper {
  margin: 0px 5px 0px 8px;
  padding-top: 120px;
  li {
    padding: 15px 0px 10px;
    position: relative;
    border-bottom: #e6e9ed solid 1px;
    dt {
      float: left;
      position: relative;
      span {
        display: block;
        width: 125px;
        height: 24px;
        line-height: 24px;
        color: #333;
        font-size: 14px;
        text-align: center;
        background: #f0efe8;
        position: absolute;
        bottom: 0px;
        border-radius: 0px 0px 5px 5px;
      }
      img {
        border-radius: 5px 5px 0 0;
        width: 100%;
        min-height: 78px;
      }
      .imgBox {
        width: 125px;
        height: 101px;
        display: block;
        overflow: hidden;
        border-radius: 5px;
      }
    }
    dd {
      position: relative;
      margin-left: 135px;
      ul {
        overflow: hidden;
        li {
          padding: 0;
          overflow: hidden;
          border: none;
          .price {
            width: 45%;
            float: right;
            p {
              display: block;
              font-size: 12px;
              text-align: right;
              color: #333;
              i {
                color: #ff6b01;
              }
              strong {
                font-weight: normal;
                color: #ff6b01;
                font-family: arial;
                font-size: 18px;
                display: inline-block;
              }
            }
          }
          span {
            color: #666;
            font-size: 12px;
            display: block;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          strong.title {
            color: #333;
            height: 36px;
            overflow: hidden;
            font-size: 14px;
            line-height: 18px;
          }
          strong.subtitle {
            color: #999;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          p.tab {
            height: 20px;
            overflow: hidden;
            display: inline-block;
            margin: 4px 0px 0px;
            span {
              display: inline-block;
              color: #0099a9;
              border: #0099a9 solid 1px;
              border-radius: 3px;
              padding: 0px 3px;
              margin: 0px 2px 2px;
            }
          }
        }
      }
    }
  }
}

.nav_bar {
  position: fixed;
  z-index: 2;
  width: 100%;
}
.con_main {
  overflow: hidden;
  padding-top: 55px;
  background: #fff;
  position: fixed;
  z-index: 2;
  width: 100%;
}
.wrap_main {
  overflow: hidden;
  .hear_all {
    width: 100%;
    height: 55px;
    line-height: 55px;
    background-color: #00b0ec;
    position: fixed;
    z-index: 1001;
    img {
      cursor: pointer;
      position: absolute;
      left: 5px;
      top: 15px;
      width: 20px;
      background-color: #fff;
    }
    input {
      width: 100%;
      height: 35px;
      line-height: 35px;
      border-radius: 3px;
      background-size: 20px;
      padding-left: 35px;
      box-sizing: border-box;
    }
    .search_input {
      position: absolute;
      left: 36px;
      right: 20px;
    }
    i {
      width: 36px;
      display: block;
      float: left;
      position: absolute;
      left: 0px;
      top: 0px;
    }
  }
  .hear_cs::before {
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    box-sizing: border-box;
    content: "";
    display: inline-block;
    height: 14px;
    transform: rotate(45deg);
    vertical-align: middle;
    width: 14px;
    z-index: 10;
    margin-left: 15px;
    margin-top: -4px;
  }
}
</style>