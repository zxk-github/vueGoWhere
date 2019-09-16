import Loading from '@/components/loading.vue';
import Vue from 'vue';


Loading.getInstance = props => {
    const instance = new Vue({
        render(h) {
          return h(Loading, props)
        }
    }).$mount();

    // document.body.appendChild(instance.$el);
    // const loading = instance.$children[0];
    // return loading;
    return instance.$el
}


let mesInstance = null;
function getInstance() {
    mesInstance = mesInstance || Loading.getInstance();
    return mesInstance;
}

export default {
    createLoading() {
        document.body.appendChild(getInstance());
    },
    removeLoading() {
        document.body.removeChild(getInstance());
    }
}



