### 修改用户信息
```js
// Update User

// PUT /api/user
```
example
```js
{
  "user":{
    "email": "jake@jake.jake",
    "bio": "I like to skateboard",
    "image": "https://i.stack.imgur.com/xHWG8.jpg"
  }
}
```

### 发布Article
```js
import  { request } from '@/plugins/request'

export const newArticle = data => {
  return request({
    method: 'POST',
    url: `/api/articles`,
    data
  })
}
```

### 编辑文章
```js
export const editArticle = data => {
  return request({
    method: 'POST',
    url: `/api/articles/` + data.article.slug,
    data
  })
}
```

### 删除我的文章
```js
export const deleteArticle = data => {
  return request({
    method: 'DELETE',
    url: `/api/articles/` + data.slug
  })
}
```

### 添加点赞
```js
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}
```

### 关注
```js
export const followUser = username => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}
```

### 取消关注
```js
export const unfollowUser = username => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}
```