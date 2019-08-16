<template>
  <div id="detail">
    <!-- toast -->
    <toast :show="tShow" type="投票" @close="tShow = false"></toast>
    <section class="user-info">
      <van-image class="avatar" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="right">
        <p class="title">
          <span class="number">1</span>
          <span class="name">chenxu</span>
        </p>
        <div class="item-box">
          <div class="item">
            <span class="one">2933</span>
            <span class="two">当前票数</span>
          </div>
          <div class="item">
            <span class="one">20</span>
            <span class="two">排名</span>
          </div>
          <div class="item">
            <span class="one">63</span>
            <span class="two">距上一名还差</span>
          </div>
        </div>
      </div>
    </section>
    <div class="line"></div>
    <!-- 中心富文本 -->
    <div class="center">
      <p class="title">作品名称</p>
      <p class="text">
        这就是鹿城的西街，一条沉淀着秦风楚韵的怀古街道，一条折射着现代时尚的商业街道，一条流淌着风情民俗的休闲街道。
        这条有着秦岭一般的襟怀街道，豪迈着鹿城历史的万千往事，书写了诗一般的传奇故事，洗尽铅华之后，又被丹水谱成如歌般的倾城恋曲，翩跹着她的矜持、时尚、风情、休闲的时代旋律。许多人来到西街，便会赏心一段秦岭的山河壮美，悦目一段鹿城的现代芳华，倾城一段西街的无悔过往。
      </p>
    </div>
    <div class="detail-bottom">
      <van-button @click="tShow = true" icon="like" block type="primary">立即投票</van-button>
    </div>
    <!-- 礼物 -->
    <gif-box class="gif-box"></gif-box>
    <hubble class="hubble"></hubble>
  </div>
</template>
<script>
import gifBox from "@/compontents/Gif-box/Gif-box.vue";
import Hubble from "@/compontents/Hubble/hubble.vue";
import Toast from "@/compontents/Toast/toast.vue";
export default {
  name: 'detail',
  components: { gifBox, Hubble, Toast },
  data () {
    return {
      tShow: false
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
.hubble {
  position: fixed !important;
  left: 40px;
  bottom: 300px;
}
</style>