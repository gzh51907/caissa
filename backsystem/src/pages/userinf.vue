<template>
    <div>
        <el-row>
            <h3 style="float:left;margin-left:10px">用户信息</h3>
        </el-row>

        <el-table
        ref="multipleTable"
        tooltip-effect="dark"
        :data="tableData"
        @selection-change="handleSelectionChange"
        style="width: 100%;padding-left:50px;margin-top:20px;">

        <el-table-column
        type="selection"
        width="150">
        </el-table-column>

        <el-table-column
        label="日期"
        width="350">
        <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{scope.row.regtime}}</span>
        </template>
        </el-table-column>

        <el-table-column
        label="用户名"
        width="250">
        <template slot-scope="scope">
            <!-- <el-popover trigger="hover" placement="top"> -->
            <div slot="reference" class="name-wrapper" >
                <el-tag size="medium">{{ scope.row.username}}</el-tag>
            </div>
            <!-- </el-popover> -->
        </template>
        </el-table-column>

        <el-table-column
        label="密码"
        width="120" >
        <template slot-scope="scope">
            <!-- <el-popover trigger="hover" placement="top"> -->
            <div slot="reference" class="name-wrapper">
            <!-- <el-input    v-model='scope.row.password' style="width:200px !important;height:50px !important" v-show='!inputshow'> {{ scope.row.password}} </el-input>    -->
            <el-tag v-if='inputshow' size="medium" ref="wordnode" @blur.native="popo" contenteditable='true'>{{ scope.row.password}}</el-tag>
            <el-input    v-model='scope.row.password' style="width:200px !important;height:30px !important" @blur.native="popo" v-else>  </el-input>   
            </div>
            <!-- </el-popover> -->
        </template>
        </el-table-column>

        <el-table-column label="操作" width="350">
        <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index,scope.row._id,scope.row.username,scope.row.password)">确认编辑</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row,scope.row._id,scope.row.username)">删除</el-button>
        </template>
        </el-table-column>
    </el-table>
    <div style="margin-top: 20px;height:50px">
    <el-button type="primary"
    style="float:left;margin-left:20px"
    @click="deleteall">全选删除</el-button>
    </div>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" 
        @prev-click="preChange" 
        @next-click="nextChange" 
        background
        layout="prev, pager, next"
        :total="datalength">
    </el-pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData:[],
            arrdelete:[],
            multipleSelection: [],
            datalength:0,
            showEdit: [], //显示编辑框
            showBtn: [],
            showBtnOrdinary: true,
            inputshow:true
        }
        },
        methods: {
        async handleEdit(index, id ,name,password) {
            console.log(index, id ,name,password)
        let {data} =await this.$instance.post('/user/update',{
                    id,
                    updatedata:{
                        username:name,
                        password
                    }
                }
            ); 

            if(data.code ===1){
                alert("success");
                this.$forceUpdate()
            }else{
                alert("修改失败!")
            }
            // console.log(data)
        },
        popo(scope){
        this.inputshow = ! this.inputshow;
        },
        //删除功能
        async handleDelete(index, row,id,username) {
            this.tableData.splice(index,1);
            let {data} =await this.$instance.get('/user/delete',{
                params:{
                    username:`[${username}]`
                }}
            );
            this.$forceUpdate();
        },

        //全部删除
        async deleteall(){
            let arr =this.$refs.multipleTable.selection.map(item=>item.username) ;
            console.log(arr)
            this.tableData = this.tableData.filter(item=>arr.map(eve => eve==item));
                // console.log(this.tableData)
            let {data} =await this.$instance.get('/user/delete',{
                params:{
                    username:JSON.stringify(arr)
                }}
            );
            this.$forceUpdate();
            if(data.code ===1){
                history.go(0);
            }

        },
        //上一页
        async preChange(val){
        let {data} =await this.$instance.get('/user/users',{
                params:{
                    pagenum: val
                }}
            );
                //console.log("e",data.data)
                this.tableData = data.data;
                this.$forceUpdate();
        },

        //下一页
        async nextChange(val){
        let {data} =await this.$instance.get('/user/users',{
                params:{
                    pagenum:val
                }}
            );
                // console.log("e",data.data)
                this.tableData = data.data;
                this.$forceUpdate();
        },
         //pageSize变化事件
        handleSizeChange(val) {
            // console.log(val)
            // this.$emit("sizeChange", val);
        },

        //pageNum变化事件
        async handleCurrentChange(val) {
            // console.log(val)
            // this.$emit("pageNumCheng");
            let {data} =await this.$instance.get('/user/users',{
                params:{
                    pagenum: val
                }}
            );
            // console.log("e",data)
            this.tableData = data.data;
            this.$forceUpdate();
        },
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
            this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
        },
        async created(){
                let {data} =await this.$instance.get('/user/users',{
                    params:{ pages:true
                    }
                });
                // console.log("e",data.data)
                this.tableData = data.data; 
                this.tableData = this.tableData.slice(0,10)
                // console.log(this.tableData)
                this.datalength = data.data.length; 
                // console.log(this.datalength)
        },
        // computed:{
        //     async tableData(){
        //         let {data} =await this.$instance.get('/user/users');
        //         console.log("e",data.data)
        //         return data.data 
        //     }
        // }
    }

</script>
<style lang="scss" scoped>
    *{
        color:black
    }
</style>