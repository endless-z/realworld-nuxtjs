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