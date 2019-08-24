<template>
  <div id="gif-box">
    <!-- 选择数量页面 -->
    <van-dialog
      :showConfirmButton="true"
      :showCancelButton="true"
      v-model="numShow"
      :confirm="sendGifs"
      title="选择数量"
      show-cancel-button
    >
      <van-stepper v-model="gifNum" />
    </van-dialog>
    <img @click="show = !show" class="gif" src="../../assets/images/gif.png" alt />
    <transition name="slide-fade">
      <div v-show="show" ref="menuWrapper" class="git-roll">
        <div class="scroll-box">
          <div @click="beforeSendGifs(item.id)" class="item" v-for="item in gifs" :key="item.id">
            <img class="gifs-img" :alt="item.giftname" :src="item.gifticon" />
            <p class="price">¥ {{item.price}}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { giftlist, giftVoting, buying_gifts } from '@/api/api.js'
export default {
  name: 'gitBox',
  data () {
    return {
      numShow: false,
      giftNum: 1,
      giftId: '',
      menuScroll: Object,
      show: true,
      gifs: []
    }
  },
  props: ['player_id'],
  created () {
    this.giftlist()
  },
  methods: {
    beforeSendGifs (id) {
      this.giftId = id
      this.numShow = true
    },
    /* 送礼物 */
    async sendGifs () {
      try {
        let params = {
          giftlist_id: this.giftId,
          player_id: this.player_id,
          useUser: true
        }
        /* 先支付 */
        let payParams = {
          ...this.$store.getters.sceneInfo,
          gift_id: this.giftId,
          player_id: this.player_id,
          useUser: true,
          gift_num: this.giftNum,
          pay_type: 'wechat'
        }
        let payRes = await buying_gifts(payParams)
        window.location.href = payRes.data.url
        // let res = await giftVoting(params)

      } catch (error) {
        console.log(error);
      }
    },
    async giftlist () {
      try {
        let res = await giftlist()
        this.gifs = res.data
      } catch (error) { }
    },
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        startX: 10,
        scrollX: true,
        scrollY: false,
        click: true,
        tap: true
      })
    }
  },
  watch: {
    show (val) {
      if (val) this._initScroll()
    }
  },
  mounted () {
    this._initScroll()
  }
}
</script>
<style lang="less" scoped>
/* 数量框 */
/deep/.van-dialog__content {
  -webkit-transform: scale(2);
  padding: 40px;
}
/deep/.van-dialog__header {
  -webkit-transform: scale(1.2);
}
/deep/.van-dialog__footer {
  -webkit-transform: scale(1.2);
}
#gif-box {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: pink;
  position: relative;
  .gif {
    width: 65px;
    height: 65px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
/* 动画 */
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-1000px);
  opacity: 0;
}

.git-roll {
  position: absolute;
  right: calc(120px);
  width: 450px;
  height: 100px;
  background: rgba(0, 0, 0, 1);
  opacity: 0.6;
  color: #fff;
  border-radius: 10px;
  padding: 8px 30px;
  padding-left: 100px;
  text-align: left;
  overflow: hidden;

  .scroll-box {
    width: 1000px;
    padding-left: 20px;
  }
  .item {
    display: inline-block;
    text-align: center;
    height: 100%;
    width: 100px;
    .price {
      padding-top: 5px;
      font-size: 20px;
      font-weight: 400;
    }
    .gifs-img {
      width: 50px;
      height: 50px;
      vertical-align: top;
    }
  }
}
</style>
  