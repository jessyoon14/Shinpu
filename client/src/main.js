import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import PortalVue from 'portal-vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(PortalVue)
Vue.config.productionTip = false

// const v1 = new Vue({
//   render: h => h(App),
// }).$mount('#app');

// export default v1;

export default new Vue({
  router,
  render: h => h(App),
}).$mount('#app');