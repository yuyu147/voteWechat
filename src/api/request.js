import axios from 'axios'
import { Notify } from 'vant';
import qs from "querystring";
import store from "../store";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
  // timeout: 5000
})

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
        ...store.getters.sceneInfo,
        ...config.data
      })

      // 判断是否需要用户信息
      let tempData = qs.parse(config.data)
      if (tempData.useUser) {
        delete tempData.useUser
        config.data = qs.stringify({
          ...tempData,
          ...store.getters.userInfo
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