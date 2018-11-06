import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user';
import product from './modules/product';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        user,
        product
    }
})

export default store;
