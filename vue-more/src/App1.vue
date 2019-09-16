<template>

  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>{{test | filter1}}</div>
    <div>{{test | order}}</div>
    <child></child>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue';

Vue.filter('my-filter',  function(value) {
  return value + 'aaa';
})

var myFilter = Vue.filter('my-filter');
console.log(myFilter);



var child = Vue.component('child');

console.log(child)
export default {
  name: 'app',
  data() {
    return {
      test: 'aaa'
    }
  },
  // components: {
  //   // HelloWorld
  //   child
  // },
  // filters: {
  //   filter1
  // }
  filters: {
    order(value) {
      return value + 'order'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
