import VueRouter from 'vue-router';

import Id from '../components/id';
import profile from '../components/profile'

var routes = [
    {
        path: '/user',
        component: Id,
        children: [
            {
                path: 'profile/:id',
                name: 'profile',
                component: profile
            }
        ]
    }
]

const router = new VueRouter({
    routes
})



export default router;