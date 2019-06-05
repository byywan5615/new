// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import 'babel-polyfill'



//css
import '@/assets/css/reset.css'
import '@/assets/css/transition.css'



//js


//插件
import { Toast } from 'vant';
Vue.use(Toast)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

