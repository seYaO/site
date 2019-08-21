import Vue from 'vue'
import Router from 'vue-router'

let routes = [];

// 首页
routes.push({
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
})



Vue.use(Router)

export default new Router({
    routes
})