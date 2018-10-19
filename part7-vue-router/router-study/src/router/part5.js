import VueRouter from 'vue-router';

import User from '../components/user.vue';
import A from '../components/HelloWorld.vue';
import B from '../components/boo.vue';

const routes = [
    {
        path: '/user',
        name: 'user',
        components: {
            default: User,
            a: A,
            b: B
        }
    }
]


const router = new VueRouter({
    routes
})

export default router;



