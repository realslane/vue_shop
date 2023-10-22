import { createRouter, createWebHistory } from 'vue-router';
import PageAddProduct from '../components/PageAddProduct.vue';
import PageCart from '../components/PageCart.vue';
import PageHome from '../components/PageHome.vue';
import PageLogin from '../components/PageLogin.vue';
import PageOrder from '../components/PageOrder.vue';
import PageProduct from '../components/PageProduct.vue';
import PageProductList from '../components/PageProductList.vue';

const routes = [
    {
        path:      '/',
        name:      'PageHome',
        title:     'Home',
        component: PageHome
    },
    {
        path:      '/order',
        name:      'PageOrder',
        title:     '',
        component:  PageOrder
    },
    {
        path:      '/product/:id',
        name:      'PageProduct',
        title:     '',
        component: PageProduct
    },
    {
        path:      '/catalog',
        name:      'PageProductList',
        title:     'Catalog',
        component: PageProductList
    },
    {
        path:      '/cart',
        name:      'PageCart',
        title:     'Cart',
        component:  PageCart
    },
    {
        path:      '/add_product',
        name:      'PageAddProduct',
        title:     'Add Product',
        component: PageAddProduct
    },
    {
        path:      '/login',
        name:      'PageLogin',
        title:     'Login',
        component:  PageLogin
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async(to) => {
    const needAuthPages = [
        'PageOrder',
        'PageCart',
        'PageAddProduct'
    ];

    if (needAuthPages.includes(to.name) && !localStorage.login) {
        return '/login';
    }
});

export default router;
