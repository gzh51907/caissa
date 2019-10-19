<template>
    <div>
            <div class="ban_cen">
                <p>登录凯撒旅游</p>
            </div>
        <section>
            <div class='switchLogin'>
                <span @click='changetabs' :class="tabStatus===true?'normal':'active'">账号登陆</span>
                <span @click='changetabs' :class="tabStatus===true?'active':'normal'">免密码登陆</span>
            </div>
            
            <div class='form-login' v-if="tabStatus===true">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item prop="username" >
                        <el-input type="text" v-model="ruleForm.username" 
                            prefix-icon='el-icon-mobile-phone'
                            placeholder="用户名/手机/邮箱"
                            style='color:yellow'
                            autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input type="password" v-model="ruleForm.password" 
                            placeholder="密码"
                            prefix-icon='el-icon-lock'
                            autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')"
                        style="background-color: #00b0ec;
                        width:100%;color: #fff;"
                        >登陆</el-button>
                    </el-form-item>
                </el-form>

                <el-row :gutter='5'>
                    <el-col :span="12"><div class="grid-content bg-purple">
                        <el-link :underline="false" style='color:orange;float:right'
                            @click="gologin"
                        >立即注册</el-link>
                        </div></el-col>
                    <el-col :span="1"><div class="grid-content bg-purple-light">
                    <el-link :underline="false" style='float:left'>|</el-link></div></el-col>
                    <el-col :span=11><div class="grid-content bg-purple">
                        <el-link :underline="false" style='float:left'>忘记密码</el-link>
                    </div></el-col>
                </el-row>
            </div>
            
            <!-- 免密码登陆 -->
            <div class='free-login' v-else>
                <el-form :model="ruleFormFree" status-icon :rules="imgrules" ref="ruleFormFree" label-width="100px" class="demo-ruleForm">
                    <el-form-item prop="phoneNumber" >
                        <el-input type="text" v-model="ruleFormFree.phoneNumber" 
                            prefix-icon='el-icon-mobile-phone'
                            placeholder="请输入手机号"
                            style='color:yellow'
                            autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item prop="imgword"  style="position:relative">
                        <el-input type="password" v-model="ruleFormFree.imgword" 
                            placeholder="请输入图片验证码"
                            prefix-icon='el-icon-picture'
                            autocomplete="off"
                            >
                        </el-input>
                            <el-button  style="position:absolute;top:0;right:0;
                            color:#fff;letter-spacing:4px;font-size:18px;
                            background-image: url( https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571114113765&di=43f658c8ad9c19122160582dc057afe0&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F03%2F76%2F18%2F0557be763231fb2.jpg);
                            background-size: contain;
                            ;
                            " @click='showcode'>{{imgcode}}</el-button>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitFormplus('ruleFormFree')"
                        style="background-color: #00b0ec;
                        width:100%;color: #fff;"
                        >登陆</el-button>
                    </el-form-item>
                </el-form>

                <el-row style='display:flex;height:30px;justify-content:center'>
                        <el-link :underline="false" style="color:orange; text-align:center"
                        @click="gologin"
                        >立即注册</el-link>
                </el-row>
            </div>

        </section>
    </div>
</template>
<script>
export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value == this.imgcode) {
                callback()
            } else {
                callback(new Error('输入错误'))
            }
        };
        return {
            tabStatus:true,
            imgcode:"rey8",
            ruleForm: {
            password: '',
            username: ''
            },
            rules: {
            username: [
                { required: true, message: "亲，用户名必须填写哟", trigger: "blur" },
            ],
            password: [{ required: true, message: "请输入密码", trigger: "blur" }]
            },
            ruleFormFree:{
                phoneNumber:"",
                imgword:''
            },
            imgrules:{
            phoneNumber: [
                { required: true, message: "亲，用户名必须填写哟", trigger: "blur" },
            ],
            imgword: [{ required: true, message: "请输入图片验证码", trigger: "blur" },
                { required: true, trigger: 'blur', validator: validatePass }]
            }, 
            }

        },
        methods: {
        changetabs(){
            this.tabStatus = !this.tabStatus;
        },
        showcode(){
            var str = '0123456789abcdefghjklmnpqrstuvwxyz';
			var res = '';
			for(var i=0;i<4;i++){
				//随机产生字符串的下标
				var n=parseInt(Math.random()*str.length)
				res+=str[n]
			}
            this.imgcode = res;
            // console.log(this.imgcode)
        }
        ,
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
            if (valid) {
                let { username, password} = this.ruleForm;
                //发起请求
                let { data } = await this.$instance.get(
                    "/user/login",
                    {
                    params: {
                        username,
                        password
                    }
                    }
                );
                if (data.code === 1) {
                    let { targetUrl } = this.$route.query;
                    // 把token写入localstorage
                    localStorage.setItem("Authorization", username)
                    // this.$store.commit('login',{username,Authorization:data.data});
                    // this.$router.replace({path:'/mine',params:{username}})
                    setTimeout(()=>{
                        if(localStorage.getItem("Authorization")){
                            this.$router.go(-1);
                        }else{
                            this.$router.replace('/profiles');
                        }
                    },500)
                    } else {
                        alert("用户名或密码不正确");
                    }
            } else {
                // console.log('error submit!!');
                return false;
            }
        });
        },
        submitFormplus(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    alert('error submit!!');
                    return false;
                }
            }); 
        }
        ,
        gologin(){
            this.$router.push("/login")
        }

        }
        ,
        mounted() {
        this.showcode();
        console.log( document.getElementsByClassName("el-form-item__content"))
        let arr = document.getElementsByClassName("el-form-item__content");
        for(let i = 0;i<arr.length;i++){
            arr[i].style="margin-left:0;"
        }
        },

    }
</script>
<style lang="scss" scoped>
            .ban_cen {
                width: 100%;
                display: block;
                height: 60px;
                line-height:60px;
                position: relative;
                overflow: hidden;  
                background-color: #00b0ec;
                p{
                    color: #fff;
                    font-size: 18px;
                    height: 60px;
                    line-height: 60px;
                    position: absolute;
                    text-align: center;
                    top: 0;
                    width: 100%;
                    z-index: 80;
                    font-family: "Microsoft YaHei";
                }
            }
    
    section{
        padding: 20px 15px 10px;
        display:flex;
        flex-direction:column;

        .switchLogin{
            width:100%;
            display:flex;
            // margin-top: 15px;
            border: 1px solid #00b0ec;
            border-radius: 5px;
            height: 40px;
            margin-bottom:10px;

            span,.normal{
                flex:1;
                background-color: #00b0ec;
                color: #fff;
                line-height: 40px;
                height: 40px;
                font-size: 16px;
                text-align: center;
            
            }
            .active{
                background-color:#fff;
                color:#00b0ec;
                
            }
        }
        .form-login,.free-login{
            *{
                margin-left:0 !important;
            }
            el-form-item{
                display:flex;
            }
            el-form-item >>> .el-form-item__content{
            margin-left:0 !important;
        }
        }
    }

</style>