import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: '用户登录', component: Login },
  { path: '/home', name: '主页面', component: Home }

]

const router = new VueRouter({
  routes
})

export default router
