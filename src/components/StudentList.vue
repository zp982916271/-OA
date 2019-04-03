<template>
  <div class="studentList">
    <div class="student">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/main/student/list'}">学员管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/main/student/list'}">学员查询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list-top">
      <div class="top-main">
        <div>
          <span>姓名:</span>
          <el-input placeholder="请输入姓名" v-model="username"></el-input>
        </div>
        <div>
          <span>学号:</span>
          <el-input placeholder="请输入学号" v-model="id"></el-input>
        </div>
        <div>
          <span>证件号:</span>
          <el-input placeholder="请输入证件号" v-model="idcard"></el-input>
        </div>
        <div>
          <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </div>
      </div>
      <div class="top-main">
        <div>
          <span>班级:</span>
          <el-input placeholder="请输入班级" v-model="classId"></el-input>
        </div>
        <div>
          <span>缴费状态:</span>
          <el-input placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>状态:</span>
          <el-input placeholder="请输入状态"></el-input>
        </div>
        <div>
          <el-button type="primary" icon="el-icon-plus" @click="add">添加</el-button>
        </div>
      </div>
    </div>
    <div class="list-content">
      <el-table :data="showData" border style="width: 100%">
        <el-table-column prop="name" label="姓名" width="80"></el-table-column>
        <el-table-column prop="class" label="班级" width="80"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
        <el-table-column prop="ctime" label="入学时间" width="105"></el-table-column>
        <el-table-column prop="term" label="学制" width="80"></el-table-column>
        <el-table-column prop="motherPhone" label="家长电话" width="120"></el-table-column>
        <el-table-column prop="teacher" label="招生老师" width="80"></el-table-column>
        <el-table-column prop="tuition" label="学费" width="105"></el-table-column>
        <el-table-column prop="tuitionPaid" label="已缴学费" width="105"></el-table-column>
        <el-table-column prop="fee" label="杂费" width="80"></el-table-column>
        <el-table-column prop="feePaid" label="已缴杂费" width="90"></el-table-column>
        <el-table-column prop="paystate" label="缴费状态" width="80"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="primary" @click="open(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
    <div>
      <el-dialog title="查询学生信息" :visible.sync="dialogFormVisible">
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="学生信息" name="first">
              <div>
                <el-form :model="student">
                  <el-form-item label="* 姓名:">
                    <el-input v-model="student.name"></el-input>
                  </el-form-item>
                  <el-form-item label="* 手机号:">
                    <el-input v-model="student.phone"></el-input>
                  </el-form-item>
                  <el-form-item label="* 身份证:">
                    <el-input v-model="student.idcard"></el-input>
                  </el-form-item>
                  <el-form-item label="* 户籍地址:">
                    <el-input v-model="student.address"></el-input>
                  </el-form-item>
                  <el-form-item label="* 学历:">
                    <el-input v-model="student.edu_level"></el-input>
                  </el-form-item>
                  <el-form-item label="毕业院校:">
                    <el-input v-model="student.edu_school"></el-input>
                  </el-form-item>
                  <el-form-item label="入学时间:">
                    <el-date-picker :default-value="student.utime" v-model="student.utime"></el-date-picker>
                    <!-- <el-input v-model="student.edu_graduate"></el-input> -->
                  </el-form-item>
                  <el-form-item label="毕业时间:">
                    <el-date-picker
                      :default-value="student.edu_graduate"
                      v-model="student.edu_graduate"
                    ></el-date-picker>
                    <!-- <el-input v-model="student.edu_graduate"></el-input> -->
                  </el-form-item>
                  <el-form-item label="专业或职业:">
                    <el-input v-model="student.edu_profession"></el-input>
                  </el-form-item>
                  <el-form-item label="入学班级:">
                    <el-input :value="student.clazz"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="update()" type="primary">确认修改</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="费用信息" name="second" :model="cost">
              <el-form>
                <el-form-item label="* 姓名:">
                  <el-input v-model="student.name"></el-input>
                </el-form-item>
                <el-form-item label="* 被褥:">
                  <el-input v-model="cost.blanket"></el-input>
                </el-form-item>
                <el-form-item label="* 是否购买被褥:">
                  <el-input v-model="cost.blkflag"></el-input>
                </el-form-item>
                <el-form-item label="* 学费缴费方式:">
                  <el-input v-model="cost.tuiway"></el-input>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="缴费计划" name="third" :model="payment">
              <el-form>
                <el-form-item label="* 学费是否已缴清:">
                  <el-input v-model="payment.ispay"></el-input>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </template>
      <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible=false" type="primary">关闭</el-button>
        </div>
        
      </el-dialog>
    </div>
  </div>
</template>
  


<script>
export default {
  name: "StudentList",
  data() {
    return {
      tableData: [],
      showData: [],
      page: 1,
      couent: 5,
      username: "",
      id: "",
      classId: "",
      idcard: "",
      dialogFormVisible: false,

      
      student: {},
      payment: {},
      cost: {},
      from: {
        username: "",
        phone: "",
        idCard: "",
        address: "",
        region: "",
        college: "",
        time: "",
        major: "",
        classId: "",
        radio1: "1",
        dad: "",
        dadPhone: "",
        mom: "",
        momPhone: "",
        info: "",
        radio2: "1",
        recommend: "",
        consult: "",
        remark: ""
      },
      formLabelWidth: "120px",
      activeName: "first"
    };
  },
  created() {
    this.downLoad();
    
 
  },
  methods: {
    //点击页面显示弹框
    open(row) {
      this.dialogFormVisible = true;
      console.log(row);
      //弹框 学生信息

      if (row.edu_level == "1") {
        this.student.edu_level = "初中";
      } else if (row.edu_level == "2") {
        this.student.edu_level = "中专";
      } else if (row.edu_level == "3") {
        this.student.edu_level = "高中";
      } else if (row.edu_level == "4") {
        this.student.edu_level = "高中未毕业";
      } else if (row.edu_level == "5") {
        this.student.edu_level = "专科";
      } else if (row.edu_level == "6") {
        this.student.edu_level = "本科";
      } else if (row.edu_level == "7") {
        this.student.edu_level = "研究生";
      }

      this.student = row;
      this.student.uid = row._id;

      //弹框费用信息

      var feeurl =
        "http://api.netallin.com/apis/student/fee?uid=" + this.student.uid;
      // console.log(this.student.uid)
      this.axios
        .get(feeurl)
        .then(res => {
          // this.cost = res.data
        console.log(res.data.fee)

          this.cost = res.data.fee;
          if (this.cost.blanketflag == "1") {
            this.cost.blkflag = "是";
          } else {
            this.cost.blkflag = "否";
          }

          if (this.cost.tuition_way == "1") {
            this.cost.tuiway = "全款";
          } else {
            this.cost.tuiway = "贷款";
          }
        })
        .catch(error => {
          console.log(error);
        });

      // 弹框 费用计划
      var paymenturl =
        "http://api.netallin.com/apis/student/payment/history?uid=" +
        this.student.uid;
      this.axios
        .get(paymenturl)
        .then(res => {
          // console.log("1111111111111")
          console.log(res.data);

          if (res.data.msg) {
            this.payment.ispay = "已付清";
          } else {
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //弹框修改学生信息
    update() {
      this.dialogFormVisible = false;

      console.log(this.student);
      var url = "http://api.netallin.com/apis/student";
      this.axios
        .post(url, this.student)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },

    //跳转页码
    dealChange(page) {
      console.log(page);
      this.page = page;

      //然后调用现在要显示的数据
      this.showLoad();
    },

    //数据的下载 使用classListUrl
    downLoad() {
      this.axios
        .get(userListUrl)
        .then(res => {
          console.log(res.data);
          res.data.list.forEach((item,index)=> {
            item.ctime = new Date(item.ctime).format("yyyy-MM-dd hh:mm:ss");
          });
         
          this.tableData = res.data.list;

          //数据请求完毕之后才可能拿到自己想要的数据
          this.tableData

          this.showLoad();
        })
        .catch(error => {
          console.log(error);
        });
    },

    //要显示的数据
    showLoad() {
      //显示的数据与页码还有条数有关
      //故此用数组中的slice 来截取
      /**
       * 当页码为1时，显示的是0-4
       * 当为2时 显示 5-9
       * 当为3时 显示10-14
       * 故此应该是 开始位置是(page-1)*couent 结束的位置是后一位 则为 开始位置的加 couent
       */

      //开始位置
      var start = (this.page - 1) * this.couent;
      //结束位置
      var end = start + this.couent;

      this.showData = this.tableData.slice(start, end);


    },

    //页面跳转
    add() {
      this.$router.push("/main/student/add");
    },

    //搜索页面
    search() {
      var dict = {
        page: 1,
        condition: {
          name: this.username,
          id: this.id,
          classId: this.classId,
          paystate: -1,
          status: "",
          idcard: this.idcard
        },
        token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
          .eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0=
          .bCWpCikQafJMCqMl6UaYoNXDH/+p84+ofoHqm98HC9c=`
      };

      this.axios
        .post(serachUrl, dict)
        .then(res => {
          // console.log(res.data)
          this.showData = res.data.list;
        })
        .catch(error => {
          console.log(error);
        });
    },

    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.student {
  padding: 10px;
}
.list-top {
  background-color: #fff;
  padding: 10px;
}
.top-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.top-main div {
  display: flex;
  align-items: center;
}
.top-main div span {
  display: inline-block;
  text-align: right;
  width: 100px;
  margin-right: 10px;
}
.list-content {
  margin-top: 10px;
}
.page {
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
}
</style>
