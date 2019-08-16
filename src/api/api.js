import request from '@/api/request'

// 首页数据
export function index (data) {
  return request({
    url: '/api/Vote/index',
    method: 'post',
    data
  })
}
export function rotaryplantingmap (data) {
  return request({
    url: '/api/Other/rotaryplantingmap',
    method: 'post',
    data
  })
}
export function playerList (data) {
  return request({
    url: '/api/Vote/playerList',
    method: 'post',
    data
  })
}

/* 规则 */
export function activityIntroduction (data) {
  return request({
    url: '/api/Vote/activityIntroduction',
    method: 'post',
    data
  })
}

/* 投票 */
export function generalVote (data) {
  return request({
    url: '/api/Vote/generalVote',
    method: 'post',
    data
  })
}

/* 排行榜 */
export function rankingList (data) {
  return request({
    url: '/api/Vote/rankingList',
    method: 'post',
    data
  })
}

/* 图片img */
export function uploadImg (data) {
  return request({
    url: '/api/Vote/uploadImg',
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
    url: '/api/Vote/ctivityRegistrationType',
    method: 'post',
    data
  })
}
/* 上传 */
export function ctivityRegistration (data) {
  return request({
    url: '/api/Vote/ctivityRegistration',
    method: 'post',
    data
  })
}
/* 详情 */
export function entriesDetails (data) {
  return request({
    url: '/api/Vote/entriesDetails',
    method: 'post',
    data
  })
}
export function giftVoting (data) {
  return request({
    url: '/api/Vote/giftVoting',
    method: 'post',
    data
  })
}
/* 礼物列表 */
export function giftlist (data) {
  return request({
    url: '/api/Gifts/giftlist',
    method: 'post',
    data
  })
}

/* 公众号相关 */
export function thirdIndex (data) {
  return request({
    url: '/addons/third/index/connect',
    method: 'post',
    data
  })
}