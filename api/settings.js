import { request } from '@/plugins/request'

export const getUserInfo = (data) => {
  return request({
    method: 'GET',
    url: '/api/user',
    data
  })
}

export const uploadUser = (data) => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data
  })
}