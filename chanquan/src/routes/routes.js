import HelloWord from '../components/HelloWorld.vue';
import User from '../views/user/user.vue';
import Product from '../views/product/product.vue';
import ProductDetail from '../views/product/productDetail/productDetail.vue';

export default [
    {
        path: '/',
        name: 'home',
        component: HelloWord
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
        path: '/product',
        component: Product,
        children: [
            {
                path: "product/:id",
                name: "productDetail",
                component: ProductDetail
            }
        ]
    }
]