    <template>
    <div>
        <el-row>
        <h3 style="float:left;margin-left:10px">行程订单信息表</h3>
        </el-row>

        <el-table
        ref="multipleTable"
        tooltip-effect="dark"
        :row-key="getRowKeys"
        :expand-row-keys="[10]"
        :data="tableData"
        style="width: 100%;padding-left:50px;margin-top:20px;"
        >
        <el-table-column label="客户姓名" width="150">
            <template slot-scope="scope">
            <i class="el-icon-user"></i>
            <span style="margin-left: 10px">{{scope.row.name}}</span>
            </template>
        </el-table-column>

        <el-table-column label="手机号" width="250">
            <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
                <el-tag
                v-if="inputshow1"
                size="medium"
                @blur.native="hopo"
                contenteditable="true"
                >{{ scope.row.phonenumber}}</el-tag>
                <el-input
                v-model="scope.row.phonenumber"
                style="width:200px !important;height:30px !important"
                @blur.native="hopo"
                v-else
                ></el-input>
            </div>
            </template>
        </el-table-column>

        <el-table-column label="用户邮箱" width="200">
            <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
                <el-tag
                v-if="inputshow"
                size="medium"
                ref="wordnode"
                @blur.native="popo"
                contenteditable="true"
                >{{ scope.row.email}}</el-tag>
                <el-input
                v-model="scope.row.email"
                style="width:200px !important;height:30px !important"
                @blur.native="popo"
                v-else
                ></el-input>
            </div>
            </template>
        </el-table-column>

        <el-table-column label="线下店铺" width="200">
            <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
                <el-tag
                v-if="inputshow3"
                size="medium"
                ref="wordnode"
                @blur.native="topo"
                contenteditable="true"
                >{{ scope.row.serveshop}}</el-tag>
                <el-input
                v-model="scope.row.serveshop"
                style="width:200px !important;height:30px !important"
                @blur.native="topo"
                v-else
                ></el-input>
            </div>
            </template>
        </el-table-column>

        <el-table-column label="行程费用" width="100">
            <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
                <el-tag
                v-if="inputshow3"
                size="medium"
                ref="wordnode"
                @blur.native="dopo"
                contenteditable="true"
                >{{ scope.row.price}}</el-tag>
                <el-input
                v-model="scope.row.price"
                style="width:200px !important;height:30px !important"
                @blur.native="popo"
                v-else
                ></el-input>
            </div>
            </template>
        </el-table-column>

        <el-table-column label="操作" width="350">
            <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.row._id,scope.row.name,scope.row.phonenumber,scope.row.email,scope.row.price,scope.row.serveshop)"
            >确认编辑</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row,scope.row._id,scope.row.username)"
            >删除</el-button>
            </template>
        </el-table-column>
        </el-table>
        <el-pagination
        style="margin-top:80px;float:right; margin-right:200px"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        @prev-click="preChange"
        @next-click="nextChange"
        background
        layout="prev, pager, next"
        :total="datalength"
        ></el-pagination>
    </div>
    </template>
    <script>
    export default {
    data() {
        return {
        tableData: [],
        arrdelete: [],
        multipleSelection: [],
        datalength: 0,
        inputshow: true,
        inputshow1: true,
        inputshow2: true,
        inputshow3: true,
        deleteAll: [],
        getRowKeys(row) {
            return row.id;
        },
        expands: [1, 2, 3, , 4, 5]
        };
    },
    methods: {
        async handleEdit(id, name, phonenumber, email, price, serveshop) {
        let { data } = await this.$instance.post(
            "/order/update",
            {
            id,
            updatedata: JSON.stringify({
                name,
                phonenumber,
                email,
                price,
                serveshop
            })
            }
        );

        if (data.code === 1) {
            alert("SUCCESS");
            this.$forceUpdate();
        } else {
            alert("修改失败!");
        }
        },
        hopo(scope) {
        this.inputshow1 = !this.inputshow1;
        },
        popo(scope) {
        this.inputshow = !this.inputshow;
        },
        dopo(scope) {
        this.inputshow2 = !this.inputshow2;
        },
        topo(scope) {
        this.inputshow3 = !this.inputshow3;
        },
        //删除功能
        async handleDelete(index, row, id, username) {
        this.tableData.splice(index, 1);
        let { data } = await this.$instance.get(
            "/order/delete",
            {
            params: {
                id: id
            }
            }
        );
        this.$forceUpdate(this.tableData);
        },
        //上一页
        async preChange(val) {
        let { data } = await this.$instance.get(
            "/order/orders",
            {
            params: {
                pagenum: val
            }
            }
        );
        //console.log("e",data.data)
        this.tableData = data.data;
        this.$forceUpdate();
        },

        //下一页
        async nextChange(val) {
        let { data } = await this.$instance.get(
            "/order/orders",
            {
            params: {
                pagenum: val
            }
            }
        );
        // console.log("e",data.data)
        this.tableData = data.data;
        this.$forceUpdate();
        },
        //pageSize变化事件
        handleSizeChange(val) {},

        //pageNum变化事件
        async handleCurrentChange(val) {
        let { data } = await this.$instance.get(
            "/order/orders",
            {
            params: {
                pagenum: val
            }
            }
        );
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
    async created() {
        let { data } = await this.$instance.get(
        "/order/orders",
        {
            params: { pages: true }
        }
        );
        this.tableData = data.data;
        this.tableData = this.tableData.slice(0, 10);
        this.datalength = data.data.length;
    }
    };
    </script>
    <style lang="scss" scoped>
    </style>