<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
  
</template>

<script>
  import HomeHeader from './components/header'
  import HomeSwiper from './components/swiper'

  export default {
    name: 'Home',  // 定义组件名字
    components: {
      HomeHeader,
      HomeSwiper
    },
  }
</script>

<style>

</style>

