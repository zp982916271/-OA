<template>
  <div class="login-box">
    <div class="login">
      <h3 class="title">教学AO系统</h3>
      <el-form
        :model="ruleForm2"
        status-icon
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm2.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm2.code"></el-input>
          <span>{{changeCode}}</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm2: {
        username: "",
        password: "",
        code: ""
      }
    };
  },
  computed: {
    changeCode() {
      return (
        Math.floor(Math.random() * 10) +
        "" +
        Math.floor(Math.random() * 10) +
        "" +
        Math.floor(Math.random() * 10) +
        "" +
        Math.floor(Math.random() * 10)
      );
    }
  },
  methods: {
    submitForm(formName) {
      // this.$refs[formName].validate();
      console.log(this.changeCode);
      if (this.ruleForm2.username == "") {
        this.$message({
          type: "warning",
          message: "用户名不能为空"
        });
        return;
      }
      if (this.ruleForm2.password == "") {
        this.$message({
          type: "warning",
          message: "密码不能为空"
        });
        return;
      }
      if (this.ruleForm2.code != this.changeCode) {
        this.$message({
          type: "warning",
          message: "验证码错误"
        });
        return;
      }

      //验证完毕发送请求
      var dict = {
        username: this.ruleForm2.username,
        password: this.ruleForm2.password
      };
      this.axios
        .post(loginUrl, dict)
        .then(res => {
          console.log(res.data);
          if (res.data.code == 1) {
            this.$message({
              type: "info",
              message: "登陆成功"
            });

            //保存登陆信息
            localStorage.isLogin = 1;
            localStorage.user = JSON.stringify(res.data.user);
            localStorage.token = res.data.token;

            
            this.$router.push("/main")
          }else{
             this.$message({
              type: "warning",
              message: "登陆失败," + res.data.msg
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 500px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 150px auto;
  box-shadow: 10 10 10 #000 0.3;
}
.title {
  text-align: center;
  font-size: 16px;
  line-height: 30px;
}
</style>
