<template>
    <div class="mapshop">
        <p>
            <i class="el-icon-arrow-left" @click="goto('/more')"></i>
            凯撒门店
            <span class="el-icon-map-location"></span>
        </p>
        <div>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
  name: "mapshop",
  methods: {
    goto(key) {
      return this.$router.push(key);
    }
  }
};
</script>
<style lang="scss">
@import "../lib/base.css";
.mapshop {
  > p {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    color: #fff;
    background-color: #00b0ec;
    position: relative;
    i {
      position: absolute;
      left: 5px;
      height: 100%;
      font-size: 30px;
      line-height: 50px;
    }
    span {
      position: absolute;
      right: 10px;
      height: 100%;
      font-size: 30px;
      line-height: 50px;
    }
  }
}
</style>

