<template>
  <div id="ranking">
    <div class="img-box">
      <!-- <img class="ranking-img" src="../../assets/images/ranking.png" alt /> -->
      <img class="ranking-img" :src="topimage" alt />
    </div>
    <p class="title">
      <span class="title-text">排行榜</span>
    </p>
    <div class="item-box">
      <div v-for="(item,index) in rankingList" :key="index" class="item">
        <div class="left">
          <span class="number">{{index + 1}}</span>
          <van-image class="avatar" round :src="item.avatar" />
          <span class="name">{{item.player_name}}</span>
        </div>
        <div class="right">
          <span class="count">{{item.total_votes}}票</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { rankingList } from "@/api/api.js";
export default {
  name: 'ranking',
  data () {
    return {
      rankingList: [],
      topimage: ''
    }
  },
  created () {
    this.getRankingList()
  },
  methods: {
    async getRankingList () {
      let res = await rankingList()
      this.rankingList = res.data.ranking_list
      this.topimage = res.data.topimage
    }
  }
};
</script>
<style lang="less" scoped>
#ranking {
  padding: 18px;
}
.img-box {
  .ranking-img {
    width: 348px;
    height: 264px;
  }
}
.title {
  padding-top: 50px;
  .title-text {
    font-size: rgba(51, 51, 51, 1);
    font-size: 32px;
    border-bottom: 3px solid rgba(247, 71, 109, 1);
    display: inline-block;
    height: 64px;
    width: 130px;
  }
}
.item-box {
  padding: 30px 25px;
  .item {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 30px;
    width: 100%;
    height: 100px;
    line-height: 100px;
    background: rgba(249, 249, 249, 1);
    border-radius: 10px;
  }
  .left {
    .avatar {
      width: 80px;
      height: 80px;
      vertical-align: middle;
      margin-left: 27px;
      margin-right: 45px;
    }
    .number {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: rgba(247, 71, 109, 1);
      border: 1px solid rgba(255, 255, 255, 1);
      border-radius: 50%;
      line-height: 40px;
      font-size: 16px;
      color: #fff;
    }
    .name {
      font-size: 32px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }
  .right {
    .count {
      font-size: 32px;
      font-weight: 400;
      color: rgba(247, 71, 109, 1);
    }
  }
}
</style>

