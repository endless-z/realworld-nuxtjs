import  { request } from '@/plugins/request'

export const newArticle = data => {
  return request({
    method: 'POST',
    url: `/api/articles`,
    data
  })
}

export const editArticle = data => {
  return request({
    method: 'POST',
    url: `/api/articles/` + data.article.slug,
    data
  })
}

export const deleteArticle = data => {
  return request({
    method: 'DELETE',
    url: `/api/articles/` + data.slug
  })
}