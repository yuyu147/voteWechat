<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: auto;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
}
.van-popup {
  height: 60px;
  font-size: 30px !important;
  line-height: 38px !important;
}

/* 小型初始化 */
p {
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
.line {
  height: 15px;
  background-color: #f9f9f9;
}
</style>
