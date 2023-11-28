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
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/noPage.vue'),
        meta: {
            title: '',
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