<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{isLogin ? 'Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register">Have an account?</nuxt-link>
            <nuxt-link v-else to="login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, filed) in errors">
              <li v-for="(message, index) in messages" :key="index">{{filed}} {{message}}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input class="form-control form-control-lg" type="text" v-model="user.username" placeholder="Your Name" required/>
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="email" v-model="user.email" placeholder="Email" required/>
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" v-model="user.password" placeholder="Password" required/>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">{{isLogin ? 'Sign in' : 'Sign up' }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/user'
// 仅在客户端加载js-cookie包
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: ''
    }
  },
  computed: {
    isLogin () {
      return this.$route.name === 'login'
    }
  },
  methods: {
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
  }
};
</script>

<style>
</style>