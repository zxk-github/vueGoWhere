<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont icon-back">&#xe624;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>  
      <span>搜索</span>
    </div>
    <router-link to="city">
      <div class="header-right">
        <span>{{currentCity}}</span>
        <i class="iconfont">&#xe64a;</i>
      </div>
    </router-link>
   
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'HomeHeader',
    // computed: {
    //   city () {
    //     return this.$store.state.city
    //   }
    // }
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    color: #fff
    background: $bgColor
    line-height: .86rem
    .header-left
      float:left
      width: .64rem
      .icon-back
        display: block
        text-align: center

    .header-input
      flex: 1
      background: #fff
      border-radius: .1rem
      color: #ccc
      margin-top: .12rem
      margin-left: .2rem
      height: .64rem
      line-height: .64rem
    .header-right
      width: 1.24rem
      float: right 
      font-size: 0
      text-align:center
      span 
        font-size: 14px

</style>
