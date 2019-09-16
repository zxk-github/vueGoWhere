const storeB = {
    namespaced: true,
    state: {
        count: 10
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    },
    actions: {
        
    },
    mutations: {
        increaseCount(state) {
            state.count++
        }
    }
}

export default storeB;
// 比如说 有个moduleA 组件 你们使用state直接就是 this.$store.state.moduleA.a 这样去拿的值？ 