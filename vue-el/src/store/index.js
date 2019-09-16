import Vue from 'vue';
import Vuex from 'vuex';

// import listA from './listA';

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        expertId: '11',
    },
    getters: {
        expertInfo2: (state) => {
            return state.expertId + '啊啊啊'
        },
        // expertInfo: (state) => {
        //     return (payload) => {
        //         return state.expertId + payload;
        //     }
        // }
        expertInfo: state => payload => {
            return state.expertId + payload;
        }
    },
    mutations: {
        changeExpertId(state, payload) {
            state.expertId = payload.expertId;
            
        },
    }
})


export default store;
