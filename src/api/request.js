import axios from 'axios'
import { Notify } from 'vant';
import router from "@/router";
import qs from "querystring";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

const tempParams = {
  admin_id: 2,
  vote_id: 3
}

/* 请求拦截器 */
service.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      /* 判断是否为文件上传 */
      let isFile = config.headers['Content-Type'] == 'multipart/form-data'
      if (isFile) {
        return config
      }

      config.data = qs.stringify({
        ...tempParams,
        ...config.data
      })

      // 判断是否需要用户信息
      let tempData = qs.parse(config.data)
      if (tempData.useUser) {
        delete tempData.useUser
        config.data = qs.stringify({
          ...tempData,
          user_id: 6657,
          mobile: '15269408888',
          avatar: 'https://vote.gouwanmei.wang/uploads/20190731/385d32fe0310083e70e45f2c78fa5fa1.jpg'
        })
      }

    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/* 响应拦截器 */
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 0) {
      Notify({
        message: res.msg,
        duration: 5 * 1000
      })
      return Promise.reject(res.msg)
    }
    return res
  },
  error => {
    Notify({
      message: error.message,
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service