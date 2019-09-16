import Vue from 'vue'
import App from './App.vue'
import filters from './common/filter';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

// console.log(filters);
Object.keys(filters).forEach((ele) => {
  Vue.filter(ele, filters[ele]);
})
Vue.component("child", {
  template: "<div>child</div>"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
