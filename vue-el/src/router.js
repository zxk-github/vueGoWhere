import VueRouter from 'vue-router';

import Foo from './foo';
import Bar from './bar';

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes
})

export default router;

