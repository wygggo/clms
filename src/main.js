// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { loadBSP } from './assets/js/ThreeBSP'
import { my } from './tweenjs'
import remap from '../static/js/api'
import {prototype} from '../static/js/prototype'
// window.Inflate = Inflate
loadBSP()
my.call(window)
Vue.config.productionTip = false
window.remap = remap
window.route = []
prototype()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
