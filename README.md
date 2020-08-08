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