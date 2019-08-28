<template>
  <div id="toast">
    <van-dialog @close="toHome" v-model="show" :title="'恭喜'+type+'成功'">
      <img class="dianzan" src="../../assets/images/dianzhan.png" alt />
    </van-dialog>
  </div>
</template>
<script>
export default {
  name: 'toast',
  props: ['show', 'type', 'url'],
  methods: {
    toHome () {
      if (this.type == '报名') {
        this.$router.push('/')
      }
      this.$emit('close')
    }
  }
}

</script>
<style lang="less" scoped>
.dianzan {
  width: 349px;
  height: 248px;
  margin: 0 auto;
}
#toast {
  text-align: center;
}
/deep/.van-dialog__header {
  font-size: 36px;
  padding: 40px 0;
}
/deep/.van-button {
  width: 383px;
  height: 78px;
  background: rgba(253, 113, 90, 1);
  border-radius: 39px;
  margin: 20px 0;
  font-size: 36px;
  color: rgba(255, 255, 255, 1);
}
</style>