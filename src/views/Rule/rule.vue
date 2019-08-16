<template>
  <div id="rule">
    <p v-html="text" class="rule-content">
      这就是鹿城的西街，一条沉淀着秦风楚韵的怀古街道，一条折射着现代时尚的商业街道，一条流淌着风情民俗的休闲街道。
      <br />这条有着秦岭一般的襟怀街道，豪迈着鹿城历史的万千往事，书写了诗一般的传奇故事，洗尽铅华之后，又被丹水谱成如歌般的倾城恋曲，翩跹着她的矜持、时尚、风情、休闲的时代旋律。许多人来到西街，便会赏心一段秦岭的山河壮美，悦目一段鹿城的现代芳华，倾城一段西街的无悔过往。
    </p>
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


