// import axios from 'axios';

const getProductDetail = ({commit, getters, state}) => {
    // return axios.get('')
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({
                id: 1,
                number: 100
            })
        }, 2000)
    })
}

export default {
    getProductDetail
}
