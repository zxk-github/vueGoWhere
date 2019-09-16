<template>
  <div id="app">
    <div>
      <!-- <router-link :to="{name: 'user'}">link</router-link> -->
      <!-- <router-link to="/foo">foo</router-link>
      <router-link to="/boo">boo</router-link> -->
      dasfsdaf
      <router-link to="/user">aaa</router-link>
    </div>
    <router-view></router-view>
    <!-- <router-view name="a"></router-view> -->
    <!-- <router-view name="b"></router-view> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
      link: {
        name: 'user'
      }
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
@import url('./index.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
