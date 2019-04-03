<template>
  <div class="main">
    <el-container>
      <el-aside width="250px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>学员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">学员查询</el-menu-item>
              <el-menu-item index="2-2">添加学员</el-menu-item>
              <el-menu-item index="2-3">导出学员</el-menu-item>
              <el-menu-item index="2-4">学分管理</el-menu-item>
              <el-menu-item index="2-5">末班管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>财务管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">学员查询</el-menu-item>
              <el-menu-item index="3-2">欠费查询</el-menu-item>
              <el-menu-item index="3-3">学费统计</el-menu-item>
              <el-menu-item index="3-4">缴费</el-menu-item>
              <el-menu-item index="3-5">支出</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">关于</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container class="container">
        <el-header>
          <div>OA系统</div>
          <div class="info">
            <img class="head-image" src="../assets/logo.png" alt> zhansan | 消息 | 退出
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  methods: {
    handleSelect(key,keyPath){
      console.log(key,keyPath)

      var dict = {
        "2-1":"/main/student/list",
        "2-2":"/main/student/add",
        "2-3":"/main/student/export",
        "2-4":"/main/student/score",
        "2-5":"/main/student/down"
      }

      if(dict[key] != undefined){
        this.$router.push(dict[key])
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-aside {
  background-color: #545C64;
  height: 100%;
}
.container {
  width: 80%;
}

.el-header {
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.head-image {
  width: 22px;
  height: 22px;
}
.info {
  display: flex;
  align-items: center;
}
.info img {
  margin-right: 5px;
}
</style>
