import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import SponsorList from './pages/SponsorList.vue';
import EventDetail from './pages/EventDetail.vue';

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
        {
            path: '/evento-:id',
            name: 'evento',
            component: EventDetail,
            props: true
        },
    ]
});
export { router };