<template>
    <div>
        <el-card class="box-card">
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark">
                    <i class="el-icon-setting" style="float:right;font-size:30px;color:#ddd;height:30px"></i>
                    </div></el-col>
            </el-row>

            <el-row>
                <el-col :span="8">
                    <div class="block"><el-avatar shape="circle" :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar></div>
                </el-col>
                <el-col :span="16"><div class="grid-content bg-purple">
                    <el-button type="text">文字按钮</el-button>
                    </div></el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .box-card{
    height: 133px;
    background-image: url(http://m.caissa.com.cn/static/images/percentre/header_bg.png);
}
</style>
