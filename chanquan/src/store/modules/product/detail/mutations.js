const mutations = {
    CHANGE_PRICE(state, price) {
        state.price = price;
    },  

    CHANGE_CHILDREN(state, children) { 
        state.children = children;
    }
}

export default mutations;