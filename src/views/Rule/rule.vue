<template>
  <div id="rule">
    <p v-html="text" class="rule-content"></p>
  </div>
</template>
<script>
import { activityIntroduction } from "@/api/api.js";
export default {
  name: 'rule',
  created () {
    this.getActivityIntroduction()
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    async getActivityIntroduction () {
      let res = await activityIntroduction()
      this.text = res.data
    }
  }
};
</script>
<style lang="less" scoped>
#rule {
  padding: 50px;
}
.rule-content {
  text-align: left;
  font-size: 30px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
</style>


