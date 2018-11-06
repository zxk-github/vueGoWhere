// import axios from 'axios';

const getProductDetail = () => {
    // return axios.get('')
    return new Promise(function(resolve) {
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
