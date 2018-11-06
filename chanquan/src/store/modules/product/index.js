import productDetail from './detail';

export default {
    namespaced: true,
    state: {
        type: {
            type1: 1,
            type2: 2,
            type3: 3
        }
    },
    modules: {
        productDetail
    }
}