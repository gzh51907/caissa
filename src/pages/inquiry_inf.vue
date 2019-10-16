    <template>
    <div>
        <el-row :gutter="20"  >
            <el-col :span="6"  style="width:25%" v-for='item in fakedata' :key="item.id">
            <div class="grid-content bg-purple" v-if='item.id===1' style="color:orange" @click='gohome'>{{item.text}}</div>
            <div class="grid-content bg-purple" v-else @click='gohome'>{{item.text}}</div>
            </el-col>
        </el-row>
    </div>
    </template>
    <script>
    export default {
    data() {
        return {
        fakedata: [
            {
            id: 1,
            text: "0张"
            },
            {
            id: 2,
            text: "认证查询"
            },
            {
            id: 3,
            text: "认证查询"
            },
            {
            id: 4,
            text: "查询"
            },
            
            {
            id: 5,
            text: "优惠券"
            },
            {
            id:6,
            text: "会员积分"
            },
            {
            id: 7,
            text: "出行记录"
            },
            {
            id: 8,
            text: "旅游卡"
            }
        ]
        };
    } ,
    methods: {
        gohome(){
                if(localStorage.getItem("Authorization")){
                    this.$router.push("/loading")
                }else{
                    this.$router.push("/log")
                }
            }
        },
    };
    </script>
    <style lang="scss" scoped>
    div {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: .26rem !important;
    text-align: center;
    color: #666;
    font-family: "Microsoft YaHei";
    font-weight: 100;
    margin-bottom: 10px;
    margin-top: 10px;

    el-row {
        height: 30px;
        line-height: 30px;
        div{
        width: 25%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: flex;  
        }

    }
    }
    </style>
