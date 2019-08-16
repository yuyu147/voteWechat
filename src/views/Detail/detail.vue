<template>
  <div id="detail">
    <!-- toast -->
    <toast :show="tShow" type="投票" @close="tShow = false"></toast>
    <section class="user-info">
      <van-image class="avatar" round :src="info.avatar" />
      <div class="right">
        <p class="title">
          <span class="number">{{info.ranking}}</span>
          <span class="name">{{info.player_name}}</span>
        </p>
        <div class="item-box">
          <div class="item">
            <span class="one">{{info.entries_votes}}</span>
            <span class="two">当前票数</span>
          </div>
          <div class="item">
            <span class="one">{{info.ranking}}</span>
            <span class="two">排名</span>
          </div>
          <div class="item">
            <span class="one">{{info.disparity}}</span>
            <span class="two">距上一名还差</span>
          </div>
        </div>
      </div>
    </section>
    <div class="line"></div>
    <!-- 中心富文本 -->
    <div class="center">
      <p class="title">{{info.entriesname}}</p>
      <p class="text">
        {{info.entriesdes}}
        <van-image v-for="(item,index) in info.entriesimgs" :key="index" width="100%" :src="item" />
      </p>
    </div>
    <div class="detail-bottom">
      <van-button @click="generalVote" icon="like" block type="primary">立即投票</van-button>
    </div>
    <!-- 礼物 -->
    <gif-box :player_id="this.$route.params.id" class="gif-box"></gif-box>
    <div ref="menuWrapper" class="hubble-box">
      <div class="scroll-box">
        <hubble v-for="item in 10" :key="item" class="hubble"></hubble>
      </div>
    </div>
  </div>
</template>
<script>
import gifBox from "@/compontents/Gif-box/Gif-box.vue";
import Hubble from "@/compontents/Hubble/hubble.vue";
import Toast from "@/compontents/Toast/toast.vue";
import { generalVote, entriesDetails } from "@/api/api.js";
import BScroll from 'better-scroll'
export default {
  name: 'detail',
  components: { gifBox, Hubble, Toast },
  data () {
    return {
      menuScroll: Object,
      tShow: false,
      info: {}
    }
  },
  created () {
    this.entriesDetails()
  },
  mounted () {
    this._initScroll()
    this.menuScroll.scrollTo(0, -1000, 500000)
    this.menuScroll.disable()
  },
  methods: {
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        scrollX: false,
        scrollY: true,
      })
      // this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {})
    },
    /* 获取详情信息 */
    async entriesDetails () {
      try {
        let params = {
          player_id: this.$route.params.id
        }
        let res = await entriesDetails(params)
        this.info = res.data
      } catch (error) { }
    },
    async generalVote () {
      let params = {
        player_id: this.$route.params.id,
        useUser: true
      }
      try {
        let res = await generalVote(params)
        this.tShow = true
      } catch{ }
    }
  }
}

</script>
<style lang="less" scoped>
.user-info {
  height: 200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 30px 20px;
  padding-left: 40px;
  .avatar {
    margin: 0 !important;
    width: 140px;
    height: 140px;
    vertical-align: middle;
    margin-left: 27px;
    margin-right: 45px;
  }
  .right {
    width: 70%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    .title {
      text-align: left;
      padding-left: 40px;
    }

    .item-box {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }
    .item {
      display: flex;
      flex-flow: column wrap;
      justify-content: space-between;
      .one {
        font-size: 28px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
      .two {
        font-size: 20px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
      }
    }
    .number {
      vertical-align: top;
      margin-right: 20px;
      display: inline-block;
      text-align: center;
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
}
.center {
  padding: 20px 40px 110px;
  .title {
    padding-bottom: 20px;
    font-size: 36px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
  .text {
    text-align: left;
    font-size: 30px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
}
.detail-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;

  /deep/.van-button {
    border: none;
    font-size: 33px;
    height: 88px;
    background: linear-gradient(
      266deg,
      rgba(253, 113, 90, 1) 0%,
      rgba(247, 71, 109, 1) 100%
    );
    border-radius: 10px;
  }
}
/* gif position */
.gif-box {
  position: fixed !important;
  right: 40px;
  bottom: 150px;
}
.hubble-box {
  .scroll-box {
    // height: 1000px;
    padding-left: 20px;
  }
  position: fixed !important;
  left: 40px;
  bottom: 300px;
  overflow: hidden;
  height: 200px;
  .hubble {
    margin-top: 20px;
  }
}
</style>