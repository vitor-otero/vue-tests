import { createRouter, createWebHistory } from 'vue-router';
import Page1 from '../components/Page1.vue';
import Page2 from '../components/Page2.vue';
import Page3 from '../components/Page3.vue';

const routes = [
    { path: '/Page1', component: Page1 },
    { path: '/Page2', component: Page2 },
    { path: '/Page3', component: Page3 }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
