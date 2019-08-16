<template>
  <div id="vote-card">
    <!-- toast -->
    <toast :show="tShow" type="投票" @close="tShow = false"></toast>
    <van-image @click="toDetail" class="vote-img" lazy-load :src="avatar" />
    <div class="vote-footer">
      <p class="info">
        <span>{{index+1}} &nbsp;&nbsp; {{player_name}}</span>
        <span class="count">{{total_votes}} 票</span>
      </p>
      <van-button @click="generalVote" icon="like" block type="primary">立即投票</van-button>
    </div>
  </div>
</template>
<script>
import Toast from "@/compontents/Toast/toast.vue";
import { generalVote } from "@/api/api.js";
export default {
  name: 'vote-card',
  components: { Toast },
  props: ['avatar', 'player_name', 'player_id', 'total_votes', 'index'],
  data () {
    return {
      tShow: false,
      info: {}
    }
  },
  methods: {
    toDetail () {
      this.$router.push(`detail/${this.player_id}`)
    },
    async generalVote () {
      let params = {
        player_id: this.player_id,
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
#vote-card {
  height: 400px;
  width: 300px;
}

.vote-img {
  width: 100%;
  height: 284px;
  vertical-align: top;
}
.vote-footer {
  height: 116px;
  background-color: rgba(249, 249, 249, 1);
  padding: 12px;
  display: flex;
  justify-content: space-between;
  flex-flow: column wrap;
  .van-button {
    font-size: 24px;
    border: none;
    height: 50px;
    background: linear-gradient(
      266deg,
      rgba(253, 113, 90, 1) 0%,
      rgba(247, 71, 109, 1) 100%
    );
    border-radius: 10px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    font-size: 22px;
    color: rgba(102, 102, 102, 1);
    .count {
      color: rgba(253, 113, 90, 1);
    }
  }
}
</style>