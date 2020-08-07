/**
 * Nuxt.js配置
 */
module.exports = {
  router: {
    extendRoutes (routes, resolve) {
      // 清楚 Nuxt.js 基于pages 目录默认生成的路由表规则
      routes.splice(0)
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '',
              name: 'home',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login/')
            }            
          ]
        }
      ])
    }
  }
}