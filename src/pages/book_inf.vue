<template>
        <el-card class="box-card">
            <el-row>
                    <div class="grid-content bg-purple-dark" @click="quit">
                        <el-button class=" el-icon-switch-button"   round  style="font-size:15px; float:right;color:#ddd;background:lightblue"></el-button>
                        <!-- <i class=" el-icon-switch-button" style="font-size:30px; float:right;color:#ddd"></i> -->
                    </div>
            </el-row>

            <el-row type='flex' justify='start' align='top'>
                <el-col :span="6" @click.native="gohome">
                    <div class="block"><el-avatar shape="circle" size="large" style="width:84px;height:84px"
                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
                    </el-avatar></div>
                </el-col>

                <el-col :span="18"  type='flex' align='top' style="position:relative">
                        <el-button type="text" style="color:#ccc;
                        font-size:20px;height:30px; line-height:30px;
                        position:absolute;
                        top:0;"
                        v-if="!token"
                        @click.native="gohome"
                        >登陆注册</el-button>
                        <el-link type=text 
                        style="color:white;
                        font-size:20px;height:20px; line-height:20px;
                        position:absolute;
                        top:20px;"
                        v-else>{{token}}</el-link>
                        
                        <div style="height:30px;position:absolute;
                        top:10px;">
                        <el-button type="info" icon="el-icon-location-outline" 
                        @click.native="gohome"
                        style=" background-color:#3f73cc;border-radius:10%" size='mini'>北京</el-button>
                        <el-button type="info" icon="el-icon-s-custom" 
                        style=" background-color:#3f73cc;border-radius:10%" size='mini'
                        @click.native='goto'
                        >待认证></el-button>
                        </div>    

                </el-col>
            </el-row>

            <div class="alertive"></div>
        </el-card>
</template>
<script>

export default {
    data() {
        return {
            token:'',  
        }
    },

    methods: {
        goto(){
            this.$router.push("/log")
        },
        gohome(){
            if(localStorage.getItem("Authorization")){
                this.$router.push("/loading")
            }else{
                this.$router.push("/log")
            }
        },
            quit() {
                if(localStorage.getItem("Authorization")){
                    let res =  confirm('确认退出吗')
                    if(res){
                        localStorage.removeItem("Authorization");
                        console.log(this)
                        this.$forceUpdate() 
                    }
                }else{
                    this.$router.push("/log")
                }
                // this.$confirm('你狠心丢下人家吗, 是否继续?', '提示', {
                //     confirmButtonText: '确定',
                //     cancelButtonText: '取消',
                //     type: 'warning'
                // }).then(() => {
                // }).catch(() => {
                //     this.$message({
                //     type: 'info',
                //     message: '已取消删除'
                //     });          
                // });
                
        },
    },
    created() {
        this.token= localStorage.getItem("Authorization")
        // console.log(this.token)
    },
}
</script>
<style lang="scss" scoped>
    .box-card{
    // height: 133px;
    background-image: url(http://m.caissa.com.cn/static/images/percentre/header_bg.png);

}
</style>
