import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _d878d6c6 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _02474f12 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _46dadb96 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _568dc2d4 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _53aac4d6 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _f0168a40 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _88f93c3a = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
=======
const _75349286 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _e6fe998a = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _03cdfc8d = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _2167ddcd = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _c6582702 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _6965b8c9 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _0832211a = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))
>>>>>>> 671078a67f05c99dd2eca51495f3b0c0ad1759ed

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
<<<<<<< HEAD
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
=======
    component: _75349286,
    children: [{
      path: "",
      component: _e6fe998a,
      name: "home"
    }, {
      path: "/login",
      component: _03cdfc8d,
      name: "login"
    }, {
      path: "/register",
      component: _03cdfc8d,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _2167ddcd,
      name: "profile"
    }, {
      path: "/settings",
      component: _c6582702,
      name: "settings"
    }, {
      path: "/editor",
      component: _6965b8c9,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _0832211a,
>>>>>>> 671078a67f05c99dd2eca51495f3b0c0ad1759ed
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
