import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// const v1 = new Vue({
//   render: h => h(App),
// }).$mount('#app');

// export default v1;

export default new Vue({
  render: h => h(App),
}).$mount('#app');