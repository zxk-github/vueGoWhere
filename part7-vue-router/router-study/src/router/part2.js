 import VueRouter from 'vue-router';

//  import Id from '../components/id.vue';
 import User from '../components/user.vue';
 import Foo from '../components/foo.vue';
 import Boo from '../components/boo.vue';
const routes = [
    {
        path: '/user',
        component: User,
        children: [
            {
                path: 'foo',
                component: Foo
            },
            {
                path: 'boo',
                component: Boo
            }
        ]
    }
]

 const router = new VueRouter({
    routes
 });

 export default router;