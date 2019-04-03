<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html{
  height: 100%;
}
body {
  height: 100%;
  background-color: #efefef;
}
#app {
  height: 100%;
}

body .el-dialog__header {

    padding: 20px 20px 10px;
    border-bottom: 1px solid #ccc !important;

}
</style>
