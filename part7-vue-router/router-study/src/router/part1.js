import VueRouter from 'vue-router';

import Id from '../components/id';

var routes = [
    {
        path: '/user/:id',
        component: Id
    }
]

const router = new VueRouter({
    routes
})



export default router;