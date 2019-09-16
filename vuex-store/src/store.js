// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })
import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './components/moduleA/store';
import moduleB from './components/moduleB/store';

Vue.use(Vuex);

var store  = new Vuex.Store({
  state: {
    count: 5,
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default store;

// var store = new Vuex.Store({
//   state: {
//     count: 1,
//     todos: [
//       {id: 1, done: true},
//       {id: 2, done: false}
//     ]
//   },

//   getters: {
//     todoArray: (state) => {
//       return state.todos.filter(todo => todo.done )
//     },
//     todoCount: (state, getters) => {
//       return getters.todoArray.length;
//     }
//   },

//   mutations: {
//     increase(state, payload) {
//       state.count += payload.n;
//     }
//   },

//   actions: {
//     increaseAsync({ commit }) {
//       setTimeout(() => {
//         commit('increase')
//       }, 1000)
//     },
//     increaseAsyncPromise({ commit }) {
//       return Promise((resolve, reject) => {
//         setTimeout(() => {
//           commit('increase')
//           resolve()
//         }, 1000)
//       })
//     }
//   }
// })

// export default store;
