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
    let auth = null
    // 如果请求头有cookie
    if (req.headers.cookie) {
      // 使用cookieparser 把cookie 字符串转换为JS对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No 
      }
    }
    // 提交mutation 修改state状态
    commit('setAuth', auth)
  }
}