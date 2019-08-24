<template>
  <div id="home">
    <van-swipe :autoplay="4000">
      <van-swipe-item v-for="(item,index) in rotaryplantingmap" :key="index">
        <img :src="item" alt width="100%" />
      </van-swipe-item>
    </van-swipe>
    <div class="statistics">
      <div class="statiItem">
        <span class="number">{{dataValue.count|| 0}}</span>
        <span class="text">参与选手</span>
      </div>
      <div class="statiItem">
        <span class="number">{{dataValue.cumulative_votes|| 0}}</span>
        <span class="text">累计投票数</span>
      </div>
      <div class="statiItem">
        <span class="number">{{dataValue.access || 0}}</span>
        <span class="text">访问量</span>
      </div>
    </div>
    <div class="line"></div>
    <!-- 搜索报名 -->
    <section class="searchAndapply">
      <van-search class="search-box" placeholder="请输入搜索关键词" v-model="searchValue" />
    </section>
    <!-- 倒计时 -->
    <section class="count-down">
      <div class="count-down-inner">
        <router-link to="rule" class="active">
          <img class="img-icon" src="../../assets/images/wenzhangliebiaoxiangqing.png" alt />
          <P class="intro">活动介绍</P>
        </router-link>
        <div class="center">
          <p class="top">
            <img class="img-icon-small" src="../../assets/images/shalou.png" alt />
            距离活动结束还有
          </p>
          <p class="bottom">
            <van-count-down format="DD 天 HH 时 mm 分 ss 秒" :time="dataValue.remaining_time">
              <template v-slot="timeData">
                <span class="time">{{ timeData.days }}</span>天
                <span class="time">{{ timeData.hours }}</span>时
                <span class="time">{{ timeData.minutes }}</span>分
                <span class="time">{{ timeData.seconds }}</span>秒
              </template>
            </van-count-down>
          </p>
        </div>
        <router-link to="ranking" class="rank">
          <img class="img-icon" src="../../assets/images/paihang-shouye.png" alt />
          <P class="intro">排行榜</P>
        </router-link>
      </div>

      <div class="appaly">
        <router-link to="apply" tag="van-button" type="primary">立即报名</router-link>
      </div>
    </section>
    <div class="line"></div>
    <!-- vote list -->
    <section class="vote-list">
      <vote-card
        :avatar="item.avatar"
        :player_name="item.player_name"
        :player_id="item.player_id"
        :total_votes="item.total_votes"
        :index="item.ranking"
        v-for="item in playerList"
        :key="item.player_id"
      ></vote-card>
    </section>
  </div>
</template>

<script>
import voteCard from '@/compontents/Vote-card/vote-card.vue'
import { index, rotaryplantingmap, playerList, thirdIndex } from "@/api/api.js";
export default {
  name: "home",
  data () {
    return {
      time: 30 * 60 * 60 * 1000,
      searchValue: '',
      /* 首页数据 */
      dataValue: {},
      rotaryplantingmap: [],
      playerList: []
    };
  },
  created () {
    this.getIndex()
    this.getRotaryplantingmap()
    this.getPlayerList()
    this.thirdIndex()
  },
  methods: {
    /* 获取用户信息 */
    thirdIndex () {
      let userInfo = {
        user_id: this.$cookies.get('uid'),
        avatar: this.$cookies.get('avatar')
      }
      let sceneInfo = {
        admin_id: this.$cookies.get('admin_id'),
        vote_id: this.$cookies.get('vote_id')
      }
      console.log(userInfo, sceneInfo);
      // this.$store.commit('setUserInfo')

    },
    /* 获取首页数据 */
    async getIndex () {
      let res = await index()
      this.dataValue = res.data
    },
    async getRotaryplantingmap () {
      let res = await rotaryplantingmap()
      this.rotaryplantingmap = res.data.images
    },
    async getPlayerList () {
      let res = await playerList()
      this.playerList = res.data
    },
  },
  components: { voteCard }
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

  // 搜索样式
  .searchAndapply {
    /deep/.van-cell,
    /deep/.van-search__content,
    /deep/.van-field__body {
      height: 64px;
      line-height: 64px;
      background-color: #fff;
    }
    /deep/.van-field__control {
      font-size: 23px;
    }
    /deep/ .van-icon-search {
      font-size: 32px;
      padding-right: 10px;
    }
  }
  /* 倒计时 */
  .count-down {
    .count-down-inner {
      display: flex;
      flex-flow: wrap row;
      justify-content: space-between;
      height: 150px;
    }
    .active,
    .rank {
      width: 180px;
      height: 100%;
      background: #f1f1f1;
      padding: 30px 0;
    }

    .center {
      flex: 1;
      height: 100%;
      background: rgba(249, 249, 249, 1);
      padding: 40px 0;
      p,
      /deep/.van-count-down {
        font-size: 24px;
        color: rgba(102, 102, 102, 1);
      }
      /deep/.van-count-down {
        padding-top: 15px;
        /deep/.time {
          color: rgba(51, 51, 51, 1);
          font-size: 28px;
        }
      }
      .img-icon-small {
        width: 25px;
        height: 27px;
        margin-right: 20px;
        vertical-align: middle;
      }
    }
    .img-icon {
      width: 45px;
      height: 52px;
      color: #fb7b65;
    }
    .intro {
      font-size: 24px;
      color: #fb7b65;
    }
    /* 按钮 */
    .appaly {
      padding: 22px 0 16px 0;
      text-align: center;
      /deep/.van-button {
        font-size: 28px;
        border: none;
        color: #fff;
        width: 300px;
        height: 70px;
        background: linear-gradient(
          266deg,
          rgba(253, 113, 90, 1) 0%,
          rgba(247, 71, 109, 1) 100%
        );
        border-radius: 10px;
      }
    }
  }
  .vote-list {
    padding: 20px 0px;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    /deep/#vote-card {
      margin-bottom: 20px;
    }
  }
  .vote-list:after {
    content: "";
    width: 284px;
  }
}
#home .statistics .statiItem:nth-last-child(1) {
  border-right: none;
}
</style>