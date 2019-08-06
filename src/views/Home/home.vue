<template>
  <div id="home">
    <van-swipe :autoplay="3000" indicator-color="black">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.img" alt width="100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      banner: [
        {
          id: 1,
          img: "http://placehold.it/750x450"
        },
        {
          id: 2,
          img: "http://placehold.it/750x450/ff3333/ffffff"
        },
        {
          id: 3,
          img: "http://placehold.it/750x450/eeee00/000000"
        }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
</style>
