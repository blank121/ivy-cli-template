import Vue from 'vue'
import Router from 'vue-router'
import config from './config'
import Component from 'vue-class-component'
// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteUpdate',
  'beforeRouteLeave'
])
Vue.use(Router)
export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  base: config.app_name,
  routes: [
    {
      path: '/',
      component: () => import("./pages/hello.vue"),
    },
  ],
})
