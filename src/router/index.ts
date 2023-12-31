import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from "@/views/home/index.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
