import  { request } from '@/plugins/request'

export const newArticle = data => {
  return request({
    method: 'POST',
    url: `/api/articles`,
    data
  })
}