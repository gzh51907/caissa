<template>
    <div class="wrap-box">
        <el-row style="padding-top:150px">
            <el-col :span="24"><div class="grid-content bg-purple-dark">
                <h1  style="color:white;">凯撒旅游信息管理系统登录</h1>
            </div></el-col>
        </el-row>

        <el-row style="padding-top:50px;">
            <el-col  :offset='8' :span="8"><div class="grid-content bg-purple-dark" >
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="管理员账号:" prop="account" >
                    <el-input type="text" v-model="ruleForm.account" 
                    style="height:60px !important;line-height:60px"
                    placeholder="请输入账号"
                    autocomplete="on"></el-input>
                </el-form-item>

                <el-form-item label="密码:" prop="password" style="padding-bottom:20px">
                    <el-input type="password" v-model="ruleForm.password"
                    placeholder="密码"
                    autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100px" @click="submitForm('ruleForm')">登陆</el-button>
                </el-form-item>
                </el-form>
            </div></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
        callback(new Error('请输入账号'));
        } else {
        if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('password');
        }
        callback();
        }
    };
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
        callback(new Error('输入密码错误'));
        } else {
        callback();
        }
    };
    return {
        ruleForm: {
        account: '',
        password: '',
        age: ''
        },
        rules: {
        account: [
            { validator: validatePass, trigger: 'blur' }
        ],
        password: [
            { validator: validatePass2, trigger: 'blur' }
        ]
        }
    };
    },
    methods: {
    async submitForm(formName) {
        this.$refs[formName].validate( async(valid) => {
            let {account,password}= this.ruleForm;
            // console.log(username,password)
            // let {data} = await this.$axios.get({},{username,password})
        if (valid) {
            let {data} =await this.$axios.get('http://10.3.133.2:4399/ad/login',{
                params:{
                    adname:account,
                    password,
                }
                });
                console.log(data)
                if(data.code===1){
                    let {account} = this.ruleForm
                    localStorage.setItem('account',account);
                    this.$router.push('/system')
                }else{
                    alert("登陆失败")
                }
            
        } else {
            // console.log('error submit!!');
            return false;
        }
        });
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    }
    }
}
</script>
<style lang="scss" >
    *{
        margin: 0;
        padding: 0;
    }
    .el-form-item__label {
        color: aliceblue !important;
        font-size: 20px;
        padding-top: 10px
    }
    .el-input__inner{
            height:50px !important;line-height:50px
    }
    .wrap-box{
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        font: 30px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
        color: #4d4d4d;
        -webkit-font-smoothing: antialiased ;
        font-weight: 300;
        background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571200710414&di=616016cfd777734362b6f7d23531b78e&imgtype=0&src=http%3A%2F%2Fimg.yanj.cn%2Fstore%2Fgoods%2F8317%2F8317_f1bdca283269796247fc4cd620597fcf.jpg);
    }
</style>