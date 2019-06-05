import Vue from 'vue'
import Router from 'vue-router'

const Register = () => import(/* webpackChunkName: "group-foo" */ '@/page/Register')
const SignIn = () => import(/* webpackChunkName: "group-foo" */ '@/page/SignIn')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
  ]
})
