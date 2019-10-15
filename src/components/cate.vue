<template>
  <div class="cate">
    <div class="header">
      <!-- <span class="pic el-icon-search"></span> -->
      <input type="text" class="search" placeholder="搜索目的地国家/城市/关键词" v-model="input" @click="changeMain()" />
    </div>
    <div class="content">
      <!-- <div > -->
      <ul class="fl aside">
        <li :class="asideIdx===currentIdx?'active':''" v-for="(item,asideIdx) in addInf" :key="item.id" @click="changeIdx(asideIdx)">{{item.title}}</li>
      </ul>
      <div class="fr main" v-for="(mainItem,idx) in addInf" :key="mainItem.id" v-show="idx==currentIdx">
        <div class="mainOutside">
          <div v-if="currentIdx !=0">
            <div class="headImg">
              <img class="imgTop" :src="mainItem.imageUrl" alt="">
              <span class="titleMes">
                <i>{{mainItem.title}}</i>
                <i>{{mainItem.subTitle}}</i>
              </span>
              <span class="allPath">
                全部路线》
              </span>
            </div>
            <div class="hotArea">
              <p>热门目的地</p>
              <ul>
                <li v-for="hotitem in mainItem.hotdests" :key="hotitem.id">
                  <img :src="hotitem.imageUrl" alt="">
                  <span>
                    <i>{{hotitem.title}}</i>
                    <i>{{hotitem.subTitle}}</i>
                  </span>
                </li>
              </ul>
            </div>
            <div class="area">
              <p>全部地区</p>
              <ol>
                <li v-for="areaitem in mainItem.allRegions" :key="areaitem.country">{{areaitem.title}}</li>
              </ol>
            </div>
          </div>
          <div class="theme" v-else>
            <ul>
              <li v-for="themeItem in addInf[0].hotdests" :key="themeItem.imageUrl">
                <img :src="themeItem.imageUrl" alt="">
                <span>
                  <i>{{themeItem.title}}</i>
                  <i>{{themeItem.subTitle}}</i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "cate",
  data() {
    return {
      input: "",
      addInf: null,
      frist_title: null,
      currentIdx: 0,
      play: true, //搜索栏开关
      themeData: null
    };
  },
  async created() {
    let data = await this.$axios.get("http://10.3.133.2:4399/cate");
    let datas = data.data[0].data.modules;
    // 除了主题游外的信息
    // this.CutInf = datas.slice(1);
    this.addInf = datas;
    console.log(datas);
    // 主题游
    this.themeData = datas[0];
  },
  methods: {
    changeIdx(idx) {
      this.currentIdx = idx;
    },
    changeMain() {}
  }
};
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
.cate {
  width: 100%;
  background-color: #eee;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .header {
    // height: 0.7333rem;
    height: 8%;
    width: 100%;
    background-color: #00b0ec;
    position: relative;
    // top: 0;
    // left: 0;
    text-align: center;
    .search {
      width: 88%;
      height: 66%;
      position: absolute;
      top: 17%;
      left: 6%;
      font-size: 0.16rem;
      border-radius: 0.0667rem;
      text-indent: 0.5333rem;
    }
    // .pic {
    //   display: block;
    //   width: 0.2133rem;
    //   height: 0.2133rem;
    //   position: absolute;
    //   top: calc(50% - 0.1067rem);
    //   left: 10%;
    //   z-index: 5;
    // }
  }
  .content {
    width: 100%;
    // height: 8.1867rem;
    height: 80%;
    // margin-top: 11.5%;
    position: relative;
    .aside {
      width: 1.2667rem;
      height: 7.48rem;
      text-align: center;
      overflow: auto;
      border-right: 0.0133rem solid rgb(241, 237, 237);
      background-color: #fff;
      li {
        width: 100%;
        height: 0.6667rem;
        line-height: 0.6667rem;
        font-size: 0.1867rem;
        border-bottom: 0.0133rem solid #ccc;
      }
    }
    .main {
      width: calc(100% - 1.28rem);
      height: 100%;
      overflow: auto;
      .mainOutside {
        width: 100%;
        height: 100%;
        padding: 0 0.0667rem;
        box-sizing: border-box;
        p {
          color: #999;
          font-size: 0.1867rem;
          line-height: 0.3467rem;
          height: 0.3467rem;
        }
        .headImg {
          width: 100%;
          height: 1.0667rem;
          position: relative;
          margin-bottom: 0.2133rem;
          > img {
            display: block;
            width: 100%;
            height: 1.0667rem;
          }
          .titleMes {
            position: absolute;
            bottom: 5%;
            left: 2%;
            > i {
              font-size: 0.1867rem;
              display: block;
              color: #fff;
            }
          }
          .allPath {
            position: absolute;
            color: #fff;
            bottom: 8%;
            right: 2%;
            font-size: 0.1867rem;
          }
        }
        .hotArea {
          > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          li {
            width: 48%;
            height: 1.0933rem;
            position: relative;
            margin-bottom: 0.1067rem;
            > img {
              display: block;
              width: 100%;
              height: 100%;
            }
            > span {
              position: absolute;
              bottom: 8%;
              left: 2%;
              > i {
                font-size: 0.1867rem;
                display: block;
                color: #fff;
              }
            }
          }
        }
        .area {
          > ol {
            display: flex;
            flex-wrap: wrap;
            // border-top: 0.0133rem solid #ccc;
            border-left: 0.0133rem solid #ccc;
            > li {
              width: 33.33%;
              height: 0.4rem;
              font-size: 0.16rem;
              line-height: 0.4rem;
              text-align: center;
              background-color: #fff;
              border-right: 0.0133rem solid #ccc;
              border-bottom: 0.0133rem solid #ccc;
              box-sizing: border-box;
            }
          }
        }
        .theme {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          overflow: hidden;
          > ul {
            overflow: auto;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
              width: 48%;
              height: 1.1333rem;
              position: relative;
              margin-bottom: 0.1067rem;
              > img {
                width: 100%;
                height: 100%;
                display: block;
              }
              > span {
                position: absolute;
                bottom: 5%;
                left: 2%;
                > i {
                  font-size: 0.1867rem;
                  display: block;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
  .active {
    color: #ffaa01;
    border-left: 0.0267rem solid #ffaa01;
    background-color: #eee;
  }
}
</style>

