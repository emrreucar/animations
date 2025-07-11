import { createWebHistory, createRouter } from 'vue-router';

// views
import Home from '../views/Home.vue';
import About from '../views/About.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
    ]
});

export default router;