import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './styles.scss'

import './components/scroll';
import loading from '@/components/loading';

import store from './store';
import router from './router';

Vue.use(ElementUI)

Vue.prototype.$loading = loading;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
