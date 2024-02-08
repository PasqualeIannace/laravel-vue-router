import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppSponsor from './pages/AppSponsor.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/sponsor',
            name: 'sponsor',
            component: AppSponsor
        },
    ]
});
export { router };