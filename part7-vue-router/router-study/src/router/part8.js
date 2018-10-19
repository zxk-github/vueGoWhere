import VueRouter from 'vue-router';
import Boo from '../components/boo.vue';
import Foo from '../components/foo.vue';

const routes = [
    {
        path: '/boo',
        component: Boo
    },
    {
        path: '/foo',
        component: Foo,
        beforeEnter: (to, from, next) => {
            console.log('beforeEnter')
            next()
        }
    }

]

const router = new VueRouter({
    routes
})

function guardRouter(to, from, next) {
    if (window.confirm(`Navigate to ${to.path}?`)) {
        next()
    } else if (window.confirm(`Redirect to /baz?`)) {
    next('/boo')
    } else {
    next(false)
    }
}

router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(from) 
    // guardRouter(to, from, next)
    console.log('beforeEach')
    next()
})

router.beforeResolve((to, from, next) => {
    console.log('beforeResolve')
    next()
})

router.afterEach((to, from) => {
    console.log('afterEach')
})

export default router;





