import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import SponsorList from './pages/SponsorList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/sponsor',
            name: 'sponsor',
            component: SponsorList
        },
    ]
});
export { router };