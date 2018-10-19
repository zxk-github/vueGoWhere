import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 2
  }
})


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
