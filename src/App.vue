<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  font-size: 14px;
  color: #333;
}
a{
  color: #666;
  text-decoration: none;
}
ul,li{
  list-style: none;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.clear{
  clear:both
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
