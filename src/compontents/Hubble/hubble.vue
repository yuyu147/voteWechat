<template>
  <div id="hubble">
    <van-image class="avatar" round :src="avatar" />
    <span>{{username}}送出</span>
    <img class="gifs-img" :src="gifticon" />
    <span>X{{numbers}}</span>
  </div>
</template>
<script>
export default {
  name: 'hubble',
  props: ['avatar', 'gifticon', 'numbers', 'username']
}
</script>
<style lang="less" scoped>
#hubble {
  // width: 220px;
  height: 40px;
  background: rgba(0, 0, 0, 0.4);
  // opacity: 0.4;
  border-radius: 10px;
  text-align: left;

  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  padding-right: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  vertical-align: top;
  margin-left: 0px;
  margin-right: 10px;
}
.gifs-img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  position: relative;
  bottom: 10px;
  margin: 0 10px;
}
</style>