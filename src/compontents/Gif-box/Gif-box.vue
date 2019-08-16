<template>
  <div id="gif-box">
    <img @click="show = !show" class="gif" src="../../assets/images/gif.png" alt />
    <transition name="slide-fade">
      <div v-show="show" ref="menuWrapper" class="git-roll">
        <div class="scroll-box">
          <div class="item" v-for="item in 9" :key="item">
            <img class="gifs-img" src="../../assets/images/kouhong.png" />
            <p class="price">¥ 10</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'gitBox',
  data () {
    return {
      menuScroll: Object,
      show: true
    }
  },
  methods: {
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        startX: 10,
        scrollX: true,
        scrollY: false,
      })
      // this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {})
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

    height: 100%;
    width: 80px;
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
  