<template>
  <div class="about">
    <div>
      <h4 style="border-bottom:1px solid #ccc">我们是谁？</h4>
      <p>我们源自欧洲，我们热爱旅游，我们专注研发，我们用心服务！我们希望陪伴在您旅程的左右，成为不同文化间的桥梁。我们是凯撒旅游，是您旅途中 的好助手、好朋友!
      </p>
    </div>
    <div>
      <h4>我们在哪？</h4>
      <img src="../assets/cate_img/guanyu_09.jpg" alt="">
      <p>北京，上海，广州，汉堡，伦敦，巴黎…我们的足迹遍布世界各地！20多年来，我们相继在伦敦、巴黎、汉堡、洛杉矶等全球核心城市设有分支机构，在中国北京、广州、上海、成都以及沈阳等30余个口岸及核心商业城市设有分子公司。我们离您越来越近，只为陪您走得更远！
      </p>
    </div>
    <div>
      <h4>我们有哪些产品？</h4>
      <img src="../assets/cate_img/guanyu_12.jpg" alt="">
      <p>浮生若梦-法国豪华之旅，环球艺术之旅，爱琴海新娘-希腊浓情海岛之旅，勃朗峰大环线高山徒步之旅，德国丹麦亲子童话之旅，梦圆西甲-西班牙激情观赛之旅，环游太平洋-46日绝美海岛之旅…特色各异的线路，精彩纷呈的产品，我们希望总有一款适合您。
      </p>
    </div>
    <div style="padding:30px 20px;">
      <el-timeline>
        <el-timeline-item v-for="item in activities" :key="item.timestamp" :timestamp="item.timestamp" placement="top">
          {{item.content}}
        </el-timeline-item>
      </el-timeline>
    </div>
    <img style="width:100%" src="../assets/cate_img/guanyu_20.jpg" alt="">
    <img src="../assets/cate_img/cai.png" alt="" style="margin-top:20px;width:100%">
    <ul class="content">
      <li>中国领先的出境旅游服务商</li>
      <li>5A级旅行社</li>
      <li>全国百强旅行社</li>
    </ul>
  </div>

</template>
<script>
export default {
  name: "about",
  data() {
    return {
      activities: [
        {
          content: "凯撒旅游创始于德国汉堡，主要从事中国公民赴欧洲旅游接待服务",
          timestamp: "1993年"
        },
        {
          content: "凯撒旅游设立北京代表处",
          timestamp: "1996年"
        },
        {
          content:
            "凯撒旅游对保利国旅实施重组，更名为北京凯撒国际旅行社有限责任公司",
          timestamp: "2003年"
        },
        {
          content:
            "《旅行社管理条例》颁布实施，允许旅行社跨省市经营，凯撒旅游开启全国布局，相继在天津/上海/巴黎等地设立分公司",
          timestamp: "2010年"
        },
        {
          content: "凯撒旅游进行资本布局，引入海航集团作为战略投资者",
          timestamp: "2012年"
        },
        {
          content:
            "凯撒旅游深圳主板上市成功，成为资本市场中的一员。股票代码：000796",
          timestamp: "2015年"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../lib_base/base.css";
* {
  box-sizing: border-box;
}
.about {
  width: 100%;
  padding: 10px;
  position: absolute;
  // height: auto;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // background-color: rgb(243, 243, 243);
  > div {
    background-color: #fff;
    padding: 0 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0px 4px 0px #d1cfd1;
    h4 {
      padding: 12px 0;
      color: #ff6b01;
      font-size: 16px;
    }
    > img {
      width: 100%;
    }
    > p {
      font-size: 14px;
      padding: 10px 0;
    }
  }
  .content {
    padding: 10px 0 30px;
    text-align: center;
    font-size: 16px;
    li {
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
    }
  }
}
</style>