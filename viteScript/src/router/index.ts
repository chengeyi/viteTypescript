import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

// @ts-ignore
const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: (_) => {
            return { path: '/home' };
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/home.vue')
    },
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import(/* webpackChunkName: "About" */ '@/pages/About.vue')
    },
    {
        path: '/signIn',
        name: 'SignIn',
        component: () => import('@/pages/SignIn.vue'),
        meta: {
            title: '登入註冊頁面',
            requiresAuth: false
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/NoPage.vue'),
        meta: {
            title: '404頁面',
            requiresAuth: false
        }
    },
];
const router = createRouter({
    history: createWebHistory(''),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            el: '#app',
            top: 0,
            behavior: 'smooth'
        };
    }
});
export default router;