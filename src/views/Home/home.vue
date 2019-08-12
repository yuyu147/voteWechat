<template>
  <div id="home">
    <van-swipe :autoplay="4000" :show-indicators="false">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.img" alt width="100%" />
      </van-swipe-item>
    </van-swipe>
    <div class="statistics">
      <div class="statiItem">
        <span class="number">2001</span>
        <span class="text">参与选手</span>
      </div>
      <div class="statiItem">
        <span class="number">2001</span>
        <span class="text">累计投票数</span>
      </div>
      <div class="statiItem">
        <span class="number">2001</span>
        <span class="text">访问量</span>
      </div>
    </div>
    <div class="line"></div>
    <!-- 搜索报名 -->
    <section class="searchAndapply">
      <van-search placeholder="请输入搜索关键词" v-model="searchValue" />
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  data () {
    return {
      banner: [
        { id: 1, img: "http://placehold.it/750x450" },
        { id: 2, img: "http://placehold.it/750x450/ff3333/ffffff" },
        { id: 3, img: "http://placehold.it/750x450/eeee00/000000" }
      ],
      searchValue: ''
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
body {
  background-color: #f9f9f9;
}
#home {
  /deep/ .van-swipe {
    height: 400px;
    .van-swipe-item {
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
  .statistics {
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .statiItem {
      width: 33.333%;
      height: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #eeeeee;
      .number {
        color: #f7476d;
        font-size: 35px;
      }
      .text {
        color: #666666;
        font-size: 28px;
        display: inline-block;
        margin-top: 5px;
      }
    }
  }
  .line {
    height: 15px;
    background-color: #f9f9f9;
  }
  .van-search {
  }
}
#home .statistics .statiItem:nth-last-child(1) {
  border-right: none;
}
</style>
