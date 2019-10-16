<template>
    <div>
    <header>
        <div class='ban-top'>
            <div class='ban-cen'>
                <a href="javascript:history.go(-1);">
                    <i class="el-icon-arrow-left" style="color:#fff"></i>
                </a>
                <div class='gengduo'>
                    注册新用户
                </div>
            </div>
        </div>
    </header>
    <section>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="phoneNumber" >
                        <el-input type="text" v-model="ruleForm.phoneNumber" 
                            prefix-icon='el-icon-mobile-phone'
                            placeholder="请输入手机号"
                            style='color:yellow'
                            autocomplete="off"></el-input>
            </el-form-item>
        
            <el-form-item prop="imgword"  style="position:relative">
                            <el-input type="text" v-model="ruleForm.imgword" 
                                placeholder="请输入图片验证码"
                                prefix-icon='el-icon-picture'
                                autocomplete="off"
                                >
                            </el-input>
                                <el-button  style="position:absolute;top:0;right:0;color:#fff;letter-spacing:4px;font-size:18px;
                                background-image: url( https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571114113765&di=43f658c8ad9c19122160582dc057afe0&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F03%2F76%2F18%2F0557be763231fb2.jpg);
                                background-size: contain;
                                ;
                                " @click='showcode'>{{imgcode}}</el-button>
            </el-form-item>

            <el-form-item prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" 
                    placeholder="密码长度必须为 6 到 12 个字符"
                    prefix-icon='el-icon-lock'
                    autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" 
                    placeholder="请输入密码"
                    prefix-icon='el-icon-unlock'
                    autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item style="height:20px;margin-top:-15px">
                    <el-checkbox v-model="checked">
                        <el-link  @click="open">我同意凯撒旅游用户注册条款</el-link></el-checkbox>
                </el-form-item>

                <el-form-item>
                <el-button type="info" @click="submitForm('ruleForm')" style="width:100%;" 
                
                >注册</el-button>
                </el-form-item>
            </el-form>
    </section>
    </div>
</template>
<script>
export default {
    data() {
        var validatePass = (rule, value, callback) => {
        if (value === '') {
        callback(new Error('请输入密码'));
        } else {
        if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
        }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        var validatePass3 = (rule, value, callback) => {
            if (value == this.imgcode) {
                callback()
            } else {
                callback(new Error('输入错误'))
            }
        };
        const checkUsername = async (rule, value, callback) => {

        let {data} = await this.$axios.get('http://10.3.133.2:4399/user/check',{
            params:{
            username:this.ruleForm.phoneNumber
            }
        })
        // console.log(data)
        if(data.code === 0){
            callback(new Error("号码已存在"));
        }else{
            callback();
        }
        };
        return {
        checked:true,
        buttonstatus:true,
        imgcode:"fro8",
        ruleForm: {
        phoneNumber:'',
        pass: '',
        checkPass: '',
        },
        rules: {
            phoneNumber: [
                { required: true, message: "亲，手机必须填写哟", trigger: "blur" },
                { validator: checkUsername, trigger: "blur" }
                ],
            pass: [
                { validator: validatePass, trigger: 'blur' },
                {
                    min: 6,
                    max: 12,
                    message: "密码长度必须为 6 到 12 个字符",
                    trigger: "blur"
                }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ],
            imgword: [{ required: true, message: "请输入图片验证码", trigger: "blur" },
            { required: true, trigger: 'blur', validator: validatePass3 }]
        
        }
    };
        },
        methods: {
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
            },
            async submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                this.buttonstatus =!this.buttonstatus;
                let {phoneNumber,pass} = this.ruleForm;

                let {data} =  this.$axios.post('http://10.3.133.2:4399/user/reg');
                this.$router.push({name:'log',params:{phoneNumber}})
                if(data.code===1){

                }else{
                alert('注册失败');
                }
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
        open() {
        this.$alert(`<p>
                        一、 服务条款的确认和接纳凯撒旅游网会员服务的所有权和运作权、解释权归北京凯撒
                        国际旅行社有限责任公司所有。所提供的服务必须按照其发布的公司章程，服务条款和
                        操作规则严格执行。用户接受服务条款，完成会员注册，即表示用户与北京凯撒国际旅
                        行社有限责任公司达成协议并接受所有的服务条款。会员如需使用该项服务，须仔细阅
                        读并严格遵守本网站制定的《注册条款》，完成注册程序之后，才能成为本网站的会员。
                        二、服务简介基于凯撒旅游网所提供会员服务的重要性，用户同意：（1）提供及时、详
                        尽、准确的个人资料。（2）不断更新注册资料，符合及时、详尽、准确的要求。所有原
                        始键入的资料将引用为注册资料。另外，用户可授权北京凯撒国际旅行社有限责任公司
                        向第三方透露其基本资料，但北京凯撒国际旅行社有限责任公司不能公开用户的个人资
                        料。除非：（1）用户要求北京凯撒国际旅行社有限责任公司或授权他人通过电子邮件透
                        露这些信息。（2）相应的法律要求及程序要求北京凯撒国际旅行社有限责任公司提供用
                        户的个人资料。如果用户提供的资料不准确，北京凯撒国际旅行社有限责任公司保留结
                        束用户使用凯撒旅游网站会员服务的权利。用户在享用凯撒旅游网站会员服务的同时，
                        同意接受凯撒旅游网站会员服务提供的各类信息服务。三、服务条款的修改和服务修订
                        凯撒旅游网有权在必要时修改服务条款，凯撒旅游网服务条款一旦发生变动，将会在重
                        要页面上提示修改内容。如果不同意凯撒旅游网所修改的内容，用户可以主动取消获得
                        的网站服务。如果用户继续享用网站服务，则视为接受服务条款的变动。凯撒旅游网保
                        留随时修改或中断服务而不需知照用户的权利。凯撒旅游网行使修改或中断服务的权
                        利，不需对用户或第三方负责。四、用户隐私制度尊重用户个人隐私是凯撒旅游网的一
                        项基本政策。所以，作为对以上第二点个人注册资料分析的补充，凯撒旅游网一定不会
                        在未经用户合法授权时公开、编辑或透露其注册资料及保存在凯撒旅游网中的非公开内
                        容，除非有法律许可要求或凯撒旅游网在诚信的基础上认为透露这些信件在以下四种情
                        况是必要的：（1）遵守有关法律规定，遵从凯撒旅游网合法服务程序。（2）保持维护凯
                        撒旅游网的商标所有权。（3）在紧急情况下竭力维护用户个人和社会大众的隐私安全。
                        （4）符合其他相关的要求。五、用户的帐号，密码和安全性用户一旦注册成功，成为
                        凯撒旅游网的合法用户，将得到一个密码和用户名。用户将对用户名和密码安全负全部
                        责任。另外，每个用户都要对以其用户名进行的所有活动和事件负全责。您可随时根据
                        指示改变您的密码。用户若发现任何非法使用用户帐号或存在安全漏洞的情况，请立即
                        通告凯撒旅游网。用户不应将其帐号、密码转让或出借予他人使用。因黑客行为、不可
                        抗力或用户的保管疏忽导致帐号、密码及其他相关资料遭他人非法使用，凯撒旅游网不
                        承担任何责任。六、用户使用规则用户在使用凯撒旅游网的服务时，必须遵守中华人民
                        共和国相关法律法规的规定，用户应同意将不会利用本服务进行任何违法或不正当的活
                        动，包括但不限于下列行为∶（1）上载、展示、张贴、传播或以其它方式传送含有中
                        国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的违法内容；（2）
                        不得在凯撒旅游网中对本网其他用户及任何第三方进行谩骂污辱，遵守互联网络道德，
                        不得为任何非法目的而使用网络服务系统；（3）不利用凯撒旅游网服务从事以下活动：
                        A、未经允许，进入计算机信息网络或者使用计算机信息网络资源的 B、未经允许，对
                        计算机信息网络功能进行删除、修改或者增加的 C、未经允许，对进入计算机信息网络
                        中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的 D、故意制作、传
                        播计算机病毒等破坏性程序的；E、其他危害计算机信息网络安全的行为。（4）如用户
                        在使用网络服务时违反任何上述规定，凯撒旅游网或其授权的人有权要求用户改正或直
                        接采取一切必要的措施（包括但不限于更改或删除用户张贴的内容等、暂停或终止用户
                        使用网络服务的权利）以减轻和消除用户不当行为造成的影响。（5）用户不得对本服务
                        任何部分或本服务之使用或获得，进行复制、拷贝、出售、转售或用于任何其它商业目
                        的。（6）用户须对自己在使用服务过程中的行为承担法律责任。用户承担法律责任的形
                        式包括但不限于：对受到侵害者进行赔偿，以及凯撒旅游网根据生效法律判决首先承担
                        了因用户行为导致的行政处罚或侵权损害赔偿责任后，用户应给予凯撒旅游网等额的赔
                        偿。七、拒绝提供担保用户个人对网站服务的使用承担风险。凯撒旅游网对此不作任何
                        类型的担保，不论是明确的或隐含的，但是不对商业性的隐含担保、特定目的和不违反
                        规定的适当担保作限制。凯撒旅游网不担保服务一定能满足用户的要求，也不担保服务
                        不会受中断，对服务的及时性，安全性，出错发生都不作担保。凯撒旅游网对在凯撒旅
                        游网上得到的任何商品购物服务或交易进程，不作担保。八、有限责任凯撒旅游网对任
                        何直接、间接、偶然、特殊及继起的损害不负责任，这些损害可能来自：不正当使用网
                        站服务，在网上购买商品或进行同类型服务，在网上进行交易，非法使用网站服务或用
                        户传送的信息有所变动。这些行为都有可能会导致凯撒旅游网的形象受损，所以凯撒旅
                        游网事先提出这种损害的可能性。九、对用户信息的存储和限制凯撒旅游网不对用户所
                        发布信息的删除或储存失败负责。凯撒旅游网有判定用户的行为是否符合凯撒旅游网服
                        务条款的要求和精神的保留权利，如果用户违背了服务条款的规定，凯撒旅游网有中断
                        对其提供网络服务的权利。十、保障用户同意保障和维护凯撒旅游网全体成员的利益，
                        负责支付由用户使用超出服务范围引起的律师费用，违反服务条款的损害补偿费用等。
                        十一、结束服务用户或凯撒旅游网可随时根据实际情况中断一项或多项网站服务。凯撒
                        旅游网不需对任何个人或第三方负责而随时中断服务。用户对后来的条款修改有异议，
                        或对凯撒旅游网的服务不满，可以行使如下权利：(1)停止使用凯撒旅游网的网站服务。
                        (2)通告凯撒旅游网停止对该用户的服务。结束用户服务后，用户使用网站服务的权利马
                        上中止。从那时起，用户没有权利，凯撒旅游网也没有义务传送任何未处理的信息或未
                        完成的服务给用户或第三方。十二、通告所有发给用户的通告都可通过重要页面的公告
                        或电子邮件或常规的信件传送.服务条款的修改、服务变更、或其它重要事件的通告都会
                        以此形式进行。十三、网站服务内容的所有权凯撒旅游网定义的网站服务内容包括：文
                        字、图片、图表、广告中的全部内容；电子邮件的全部内容；凯撒旅游网为用户提供的
                        其他信息。所有这些内容受版权、商标、标签和其它财产所有权法律的保护。所以，用
                        户只能在凯撒旅游网和广告商授权下才能使用这些内容，而不能擅自复制、再造这些内
                        容、或创造与内容有关的派生产品。凯撒旅游网所有的文章版权归原文作者和凯撒旅游
                        网共同所有，任何人需要转载凯撒旅游网的文章，必须征得原文作者或凯撒旅游网授权。
                        十四、法律网站服务条款要与中华人民共和国的法律解释相一致。如发生凯撒旅游网服
                        务条款与中华人民共和国法律相抵触时，则这些条款将完全按法律规定重新解释，而其
                        它条款则依旧保持对用户产生法律效力和影响。由于不可抗力造成本网站无法继续提供
                        本网站，本网站不承担任何的责任。\"不可抗力\"是指本网站不能控制、不可预见且无
                        法避免的客观事件，该事件可能妨碍、影响或延误本网站为会员提供服务。该事件包括
                        但不限于政府行为、骨干通信线路故障、地震、台风、洪水、火灾及其它天灾、政变、
                        战争或任何其它类似事件。
                    </p>`, 'HTML 片段', {
            dangerouslyUseHTMLString: true
        });
        }
        },
        watch: {
            valid:function (){
                this.buttonstatus =!this.buttonstatus;}

        },
    }
</script>
<style lang="scss">
    .ban-top{
        padding: 10px 15px 0px 6px;
        background-color: #00b0ec;
        .ban-cen{
            width: 100%;
            display: inline-block;
            height: 40px;
            position: relative;
            overflow: hidden;
            a{
                border: 0 none;
                font-weight: 100;
                list-style: outside none none;
                margin: 0;
                padding: 0;
                outline: medium none;
                font-family: "Microsoft YaHei";

                i{
                    border-bottom: 2px solid #fff;
                    border-left: 2px solid #fff;
                    box-sizing: border-box;
                    content: "";
                    display: inline-block;
                    height: 13px;
                    transform: rotate(45deg);
                    -webkit-transform: rotate(45deg);
                    vertical-align: middle;
                    width: 13px;
                    margin-left: 15px;
                    cursor: pointer;
                    position: absolute;
                    left: 0px;
                    z-index: 200;
                    margin-top: 8px;
                }
            }
            .gengduo{
                color: #fff;
                font-size: 24px;
                height: 30px;
                line-height: 30px;
                position: absolute;
                text-align: center;
                top: 0;
                width: 100%;
                z-index: 80;
            }
        }
    }
    section{
        *{margin-left:0 !important; }

    }
</style>