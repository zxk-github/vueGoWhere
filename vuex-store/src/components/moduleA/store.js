const storeA = {
    state: {
        count: 1
    },
    getters: {
        doubleCountA(state) {
            return state.countA * 2;
        }
    },
    actions: {
        increaseAction({ commit , state, rootState}) {
            
        }
    },
    mutations: {
        increaseCount(state) {
            state.countA++
        }
    }
}

export default storeA;