import request from '@/utils/request'

// 登录接口
export function login(data) {
  return request({
    url: '/v1/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getInfo(token) {
  return request({
    url: '/v1/info',
    method: 'get',
    params: { token }
  })
}

// 刷新token接口
export function getToken(token) {
  return request({
    url: '/adminUser/resetToken',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

