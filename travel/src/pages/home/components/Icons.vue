<template>
  <div class="icons"> 
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon-item" v-for="item of page" :key="item.id"
        @click="handleCityClick(item.title)"
        >
          <div class="icon-img">
            {{item.title}}
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="icon-item" @click="handleCityClick2('1')">
        <div class="icon-img" >
            景点2
          </div>
        </div>
      </swiper-slide>
  
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      swiperOption: {
        
      },
      iconList: [
        {
          id: 11,
          title: 11
        },
        {
          id: 22,
          title: 22
        },
        {
          id: 33,
          title: 33
        },
        {
          id: 44,
          title: 44
        },
        {
          id: 55,
          title: 55
        },
        {
          id: 66,
          title: 66
        },
        {
          id: 77,
          title: 77
        },
        {
          id: 88,
          title: 88
        },
        {
          id: 99,
          title: 99
        }

      ]
    }
  },
  methods: {
    handleCityClick(city) {
      // 派发一个名字叫做changeCity的action,这时候需要在store中声明一个名字为changeCity的action
      this.$store.dispatch('changeCityAction', city)

      
    },
    handleCityClick2 (city) {
      // 通过commit直接调用mutation
      console.log(city)
      this.$store.commit("changeCityMutation", city)
    }
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index/8);
        if(!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      }) 
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container{
    height: 0
    padding-bottom: 50%
    background: red
  } 
  .icon-item
    float: left 
    width: 25%
    height: 0
    padding-bottom: 25%
    background: blue
    color: $defaultTextColoe
    ellipsis()


</style>
