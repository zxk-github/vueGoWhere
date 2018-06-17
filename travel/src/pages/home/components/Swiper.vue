<template>
  <div class="swiperCon">
    <swiper :options="swiperOption">

      <swiper-slide>
        轮波图1
      </swiper-slide>
      <swiper-slide>
        轮波图2
      </swiper-slide>
  
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption:{
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiperCon
    padding-bottom: 32.25%
    background: #ccc
    text-align: center
</style>


