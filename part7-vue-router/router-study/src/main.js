import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

// import part1 from './router/part1';
// import part2 from './router/part2';
// import part5 from './router/part5';

// import part7 from './router/part7';
import part8 from './router/part8'


// Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router: part8
}).$mount('#app')
