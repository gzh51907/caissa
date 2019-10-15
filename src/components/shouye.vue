<template>
    <el-container>
  <el-header>
      <div class="cityBox">广州市</div>
      <div class="inputBox"><input type="text" placeholder="搜索目的地国家/城市/关键词"></div>
      <div class="serveBox"><i></i><p>在线客服</p></div>
      </el-header>
  <el-main></el-main>
 <navjump></navjump>
</el-container>
</template>
<script>
import navjump from "../pages/navjump.vue";
export default {
  components:{
      navjump
  }
}
</script>
<style lang="scss" scoped>

.el-header{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    padding: .25rem .2rem;
    z-index: 99;
    .cityBox {
    color: #fff;
    font-size: .26rem;
    cursor: pointer;
    line-height: .6rem;
}
    .inputBox{
        flex: 1;
        margin: 0 .2rem;
        input{
            display: block;
            width: 100%;
            border: none;
            border-radius: .05rem;
            box-sizing: border-box;
            padding-left: .8rem;
            color: #333;
            background: #fff url(../assets/search.png) no-repeat .2rem center;
            background-size: .28rem;
            font-size: .26rem;
            line-height: .6rem;
            height: .6rem;

        }
    }
    .serveBox{
            font-size: .2rem;
            color: #fff;
            cursor: pointer;
        i{
            content: '';
            display: block;
            width: .27rem;
            height: .3rem;
            background: url(../assets/server.png) no-repeat center;
            background-size: 100%;
            margin: 0 auto;
        }
    }
}

</style>