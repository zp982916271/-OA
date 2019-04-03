import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '@/components/Login'
import Main from '@/components/Main'

import StudentList from '@/components/StudentList'
import StudentAdd from '@/components/StudentAdd'
import StudentExport from '@/components/StudentExport'
import StudentScore from '@/components/StudentScore'
import StudentDown from '@/components/StudentDown'

Vue.use(Router)

var r = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component:Main,
      redirect:"/main/student/list",
      children: [
        {
          path: '/main/student/list',
          name: 'main-student-list',
          component: StudentList
        },
        {
          path: '/main/student/add',
          name: 'main-student-add',
          component: StudentAdd
        },
        {
          path: '/main/student/export',
          name: 'main-student-export',
          component: StudentExport
        },
        {
          path: '/main/student/score',
          name: 'main-student-score',
          component: StudentScore
        },
        {
          path: '/main/student/down',
          name: 'main-student-down',
          component: StudentDown
        }
      ]
    }
  ]
})

//router定义的下面, 每个路由跳转之前, 执行回调函数
r.beforeEach((to, from, next) => {
  // console.log("beforeEach");
  // console.log("\tfrom.path=" + from.path);
  // console.log("\tto.path=" + to.path);

  console.log("beforeEach")

  //如果不是登陆界面
  var isShowLogin = false
  if (to.path != "/login") {
    //检测是否登陆
    if (localStorage.isLogin == undefined || localStorage.isLogin != 1) {
      
      isShowLogin = true
    }
  }

  if (isShowLogin == true) {
    r.push("/login")
  } else {
    next()
  }
})

export default r;