import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

// 导出通过vuex创建的仓库
export default new vuex.Store({

  // 存放全局共用数据
  state: {
    city: "北京",
    city2: 'text'
  },

  actions: {
    changeCityAction(ctx, city) {
      // action通过调用commit方法调用mutations改变store
      ctx.commit('changeCityMutation', city)
    }
  },

  mutations: {
    changeCityMutation(state, city) {
      console.log(city)
      state.city = city
    }
  }

})
