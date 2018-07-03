<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <global-input @inputEmit="getInput" :val="msg"></global-input>
  </div>
  
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import axios from 'axios'

  export default {
    name: 'Home',  // 定义组件名字
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons
    },
    data() {
      return {
        msg : '22'
      }
    },
    mounted() {
      this.getHomeInfo()
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        console.log(res)
      },
      getInput(a){
        console.log(a)
      }
    }
  }
</script>

<style>

</style>

