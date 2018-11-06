import VuexPersistence from 'vuex-persist';

let _persistedState = {};

const VuexStorage = new VuexPersistence({
    key: 'zhangxk.vuex.state',
    modules: ['user'],
    
})

