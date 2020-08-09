import request from '@/utils/request'

// 用户登录
export const login = data => {
  console.log(data, 's')
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

// 用户注册
export const register = data => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}