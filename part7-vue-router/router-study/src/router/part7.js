import VueRouter from 'vue-router';
import User from '../components/user.vue';

function dynamicPropsFn (route) {
    const now = new Date()
    return {
        id: route.params.id,
        userName: (now.getFullYear() + parseInt(route.query.years)) + '!'
    }
  }
const routes = [
    {
        path: '/user/:id',
        component: User,
        // props: false
        // props: {
        //     userName: '这个会被传入到组件中'
        // }
        props: dynamicPropsFn
    }
]

const router = new VueRouter({
    routes
})

export default router;