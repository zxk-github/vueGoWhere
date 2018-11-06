import VueRouter from 'vue-router';
import Vue from 'vue';

import routes from './routes';

Vue.use(VueRouter);

// const router = new VueRouter({
//     routes
// });

const router = new VueRouter();

router.addRoutes(routes);


export default router;

