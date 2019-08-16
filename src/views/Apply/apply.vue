<template>
  <div id="apply">
    <!-- toast -->
    <toast :show="tShow" type="报名" @close="tShow = false"></toast>
    <div class="apply-form">
      <van-cell-group title="基本信息">
        <van-field
          v-model="form.player_name"
          clearable
          label="姓名"
          placeholder="请输入姓名"
          size="large"
          border
        />
        <van-field
          v-if="entries_type"
          v-model="form.entriesname"
          clearable
          size="large"
          placeholder="请输入作品名称"
          label="作品名称"
          border
        />
        <van-field
          type="number"
          v-model="form.player_phone"
          clearable
          size="large"
          placeholder="请输入手机号"
          label="手机号"
          :maxlength="11"
          border
        />
        <van-field
          v-if="entries_type"
          class="text-area"
          v-model="form.entriesdes"
          clearable
          type="textarea"
          size="large"
          placeholder="请输入内容"
          label="内容"
          border
        />
      </van-cell-group>
      <van-cell-group v-if="entries_type" title="上传图片">
        <van-uploader v-model="imgList" />
      </van-cell-group>
    </div>
    <div class="apply-bottom">
      <van-button @click.native="upup" block type="primary">立即报名</van-button>
    </div>
  </div>
</template>
<script>
import Toast from "@/compontents/Toast/toast.vue";
import { uploadImg, ctivityRegistrationType, ctivityRegistration } from "@/api/api.js";
export default {
  name: 'apply',
  components: { Toast },
  data () {
    return {
      tShow: false,
      entries_type: 1,
      imgList: [],
      form: {
        useUser: true,
        player_name: undefined,
        entriesname: undefined,
        player_phone: undefined,
        entriesdes: undefined,
        entriesimg: []
      }
    }
  },
  created () {
    this.ctivityRegistrationType()
  },
  methods: {
    /* 判断是否有活动 */
    async ctivityRegistrationType () {
      let res = await ctivityRegistrationType()
      this.entries_type = res.data.entries_type
    },
    async upup () {
      /* 统一上传 */
      let axiosArr = this.imgList.map(element => {
        let form = new FormData()
        form.append('image', element.file)
        let param = {
          'image': form.get('image')
        }
        return uploadImg(form)
      });
      try {
        let imgsRes = await this.$axios.all(axiosArr)
        imgsRes.forEach(item => {
          this.form.entriesimg.push(item.data.path)
        });
        this.form.entriesimg = this.form.entriesimg.toString()
        let res = await ctivityRegistration(this.form)
        this.tShow = true
      } catch{ }
    }
  }
};
</script>
<style lang="less" scoped>
#apply {
  height: 100vh;
  text-align: left;
  background-color: #f8f8f8;
}
.apply-bottom {
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

// 单元格设置
/deep/.van-cell-group__title {
  height: 100px;
  line-height: 100px;
  font-size: 30px;
}
/deep/.van-cell {
  height: 70px;
  font-size: 30px;
  color: rgba(51, 51, 51, 1);
  .van-cell__title {
    font-size: 30px;
    line-height: 45px;
    width: 200px;
  }
}
.text-area {
  height: 240px;
  /deep/.van-field__control {
    line-height: 20px;
    padding-top: 10px;
  }
}
/deep/.van-uploader__preview-image {
  width: 120px;
  height: 120px;
}
/deep/.van-uploader__preview,
/deep/.van-uploader__upload {
  margin: 20px;
}
/deep/.van-uploader__upload {
  width: 120px;
  height: 120px;
}
</style>

