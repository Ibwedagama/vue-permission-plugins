import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import permission from './plugin/permission'

Vue.config.productionTip = false

Vue.use(permission)

new Vue({
  router,
  store,
  permission,
  render: h => h(App)
}).$mount('#app')
