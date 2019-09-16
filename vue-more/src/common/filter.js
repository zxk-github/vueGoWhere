// Vue.filter('my-filter',  function(value) {
//     return value + 'aaa';
// })

var filter1 = (value) => {
    return value + '111'
}

var filter2 = (value) => {
    return value + '222'
}

var filter3 = (value) => {
    return value + '333'
}


export default {
    filter1,
    filter2,
    filter3
}
