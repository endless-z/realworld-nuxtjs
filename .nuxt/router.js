import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d878d6c6 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _02474f12 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _46dadb96 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _568dc2d4 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _53aac4d6 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _f0168a40 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _88f93c3a = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _d878d6c6,
    children: [{
      path: "",
      component: _02474f12,
      name: "home"
    }, {
      path: "/login",
      component: _46dadb96,
      name: "login"
    }, {
      path: "/register",
      component: _46dadb96,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _568dc2d4,
      name: "profile"
    }, {
      path: "/settings",
      component: _53aac4d6,
      name: "settings"
    }, {
      path: "/editor",
      component: _f0168a40,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _88f93c3a,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
