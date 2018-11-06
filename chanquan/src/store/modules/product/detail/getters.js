const getter = {
    totalPrice(state) {
        console.log(state)
        return state.numbers * state.price;
    }
}

export default getter;
