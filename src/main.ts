import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import Mint from 'mint-ui'
import config from './config'
import init from '@ivy/fts'
import store from './store/store'
import { closeAll } from "@ivy/fts/showDiv"
init({ Vue, router, axios, config, Mint })
Vue.prototype.$store = store
Vue.config.productionTip = false
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
  closeAll()
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
