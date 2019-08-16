import request from '@/api/request'

// 首页数据
export function index (data) {
  return request({
    url: '/Vote/index',
    method: 'post',
    data
  })
}
export function rotaryplantingmap (data) {
  return request({
    url: '/Other/rotaryplantingmap',
    method: 'post',
    data
  })
}
export function playerList (data) {
  return request({
    url: '/Vote/playerList',
    method: 'post',
    data
  })
}

/* 规则 */
export function activityIntroduction (data) {
  return request({
    url: '/Vote/activityIntroduction',
    method: 'post',
    data
  })
}

/* 投票 */
export function generalVote (data) {
  return request({
    url: '/Vote/generalVote',
    method: 'post',
    data
  })
}

/* 排行榜 */
export function rankingList (data) {
  return request({
    url: '/Vote/rankingList',
    method: 'post',
    data
  })
}

/* 图片img */
export function uploadImg (data) {
  return request({
    url: '/Vote/uploadImg',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}
/* 上传判断 */
export function ctivityRegistrationType (data) {
  return request({
    url: '/Vote/ctivityRegistrationType',
    method: 'post',
    data
  })
}
/* 上传 */
export function ctivityRegistration (data) {
  return request({
    url: '/Vote/ctivityRegistration',
    method: 'post',
    data
  })
}