### 一、创建项目
- mkdir realworld-nuxtjs
- npm init -y
- npm i nuxt
- 配置启动脚本
- 创建pages目录,配置初始化页面

### 二、导入页面模版
```html
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

### 三、项目初始化-导入样式资源

### 四、项目初始化-布局组件
- 导入样式资源
- 配置布局组件
- 配置页面组件

### 七、处理顶部导航链接
```html
<!-- yjx0301@qq.com
12345678 -->
// layout/index.vue
<a class="nav-link active" href="">Home</a>
// 替换
<nuxt-link class="nav-link active" to="/"></nuxt-link>                      
```

### 解析存储登录状态实现流程
```js
// https://www.nuxtjs.cn/examples/auth-external-jwt
// https://codesandbox.io/s/github/nuxt/nuxt.js/tree/dev/examples/auth-jwt?from-embed


// 为了防止数据冲突,需要把state 定义成一个函数,返回数据对象
export const state = () => {
  return {
    // 当前登录用户的登录状态
    user: null
  }
}

export const mutations = {
  setUser (state, data) {
    state.user = data
  }
}

export const actions = {}
```
```js
// index.vue
async onSubmit () {
  try {
    const { data } = this.isLogin ?  await login({
      user: this.user
    }) : await register({
      user: this.user
    })
    // 保存用户的登录状态
    this.$store.commit('setUser', data.user)
    // 跳转到首页
    this.$router.push('/')
  } catch (err) {
    this.errors = err.response.data.errors
  }
}
```
![image](https://img-blog.csdnimg.cn/202008081725076.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzM1MzQ5NDkz,size_16,color_FFFFFF,t_70)

### 17.登录状态持久化
```js
const cookieparser = process.server ? require('cookieparser') : undefined
// 为了防止数据冲突,需要把state 定义成一个函数,返回数据对象
export const state = () => {
  return {
    // 当前登录用户的登录状态
    user: null
  }
}

export const mutations = {
  setUser (state, data) {
    state.user = data
  }
}

export const actions = {
  // nuxtServerInit 是一个特殊的action方法
  // 这个action 会在服务端渲染期间自动调用
  // 作用: 初始化容器数据,传递数据给客户端使用
  nuxtServerInit ({ commit }, { req }) {
    let user = null
    // 如果请求头有cookie
    if (req.headers.cookie) {
      // 使用cookieparser 把cookie 字符串转换为JS对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No 
      }
    }
    // 提交mutation 修改state状态
    commit('setUser', user)
  }
}

// index.vue
async onSubmit () {
  try {
    const { data } = this.isLogin ?  await login({
      user: this.user
    }) : await register({
      user: this.user
    })
    // 保存用户的登录状态
    this.$store.commit('setUser', data.user)
    // 防止页面刷新,数据丢失,需要把数据持久化
    Cookie.set('user', data.user)
    // 跳转到首页
    this.$router.push('/')
  } catch (err) {
    this.errors = err.response.data.errors
  }
}
```

### 处理页面访问权限
[Nuxt中间件](https://www.nuxtjs.cn/examples/middleware)
我们只需在组件中配置一个参数就行, middelware 会自动去找到authenticated文件夹去匹配是否渲染
```js
// 创建 middleware/authenticated.js
export default function ({ store, redirect }) {
  if (store.state.user) {
    return redirect('/login')
  }
}
// 组件配置
export default {
  // 在路由匹配组件渲染之前先执行中间件处理
  middleware: ['authenticated']
}

// 创建 middleware/notAuthenticated.js
export default function ({ store, redirect }) {
  if (store.state.user) {
    return redirect('/')
  }
}

// 组件配置
export default {
  // 在路由匹配组件渲染之前先执行中间件处理
  middleware: ['notAuthenticated']
}
```

### 公共文章列表
https://github.com/gothinkster/realworld/tree/master/api
List Articles
```

```

### 优化并行任务
```js
async asyncData ({ query }) {
  const page = Number.parseInt(query.page || 1)
  const limit = 20
  const [ articleRes, tagRes ] = await Promise.all([
    getArticles({
      limit,
      offset: (page - 1) * limit
    }),
    getTags()
  ])
  const { articles, articlesCount } = articleRes.data
  const { tags } = tagRes.data
  return {
    articles,
    articlesCount,
    tags,
    limit,
    page
  }
}
```

### 统一设置token
```js
// plugins/request.js
/**
 * 基于 axios 封装的请求模块
 */
import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

export default ({ store }) => {
  // 请求拦截器
  // 统一设置token
  request.interceptors.request.use(function (config) {
    // Do something before request is sent
    const { user } = store.state

    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  });
}

// nuxt.config.js注册插件
plugins: [
  '~/plugins/request.js'
]
```

### 时间格式化处理
- day.js 仅2kb
- 封装成全局过滤器
- plugins/day.js

```js
timer | date('MMM DD, YYYY')
```

### markdown 处理
```js
npm install markdown-it -save

// 使用
import { getArticle } from '@/api/article'
import MarkdownIt from 'markdown-it'
export default {
  name: 'AritcelIndex',
  async asyncData ({ params }) {
    const { data } = await getArticle(params.slug)
    const { alticle } = data
    const md = new MarkdownIt()
    data.body = md.render(article.body)
    return {
      article
    }
  }
};
```

![image](https://img-blog.csdnimg.cn/20200810232536225.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzM1MzQ5NDkz,size_16,color_FFFFFF,t_70)

### 文章详情优化
[nuxtjs视图 HTML 头部](https://www.nuxtjs.cn/guide/views)
Nuxt.js 使用了 vue-meta 更新应用的 头部标签(Head) and html 属性
```
{
  keyName: 'head', // 设置 meta 信息的组件对象的字段，vue-meta 会根据这 key 值获取 meta 信息
  attribute: 'n-head', // vue-meta 在监听标签时所添加的属性名
  ssrAttribute: 'n-head-ssr', // 让 vue-meta 获知 meta 信息已完成服务端渲染的属性名
  tagIDKeyName: 'hid' // 让 vue-meta 用来决定是否覆盖还是追加 tag 的属性名
}
```

个性化特定页面的 Meta 标签
关于个性化特定页面的 Meta 标签，请参考 [页面头部配置 API](https://www.nuxtjs.cn/api/pages-head)。
```js
<template>
  <h1>{{ title }}</h1>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello World!'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
  }
</script>
```
注意：为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为 meta 标签配一个唯一的标识编号。请阅读关于 vue-meta 的更多信息。




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