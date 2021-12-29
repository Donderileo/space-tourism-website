import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home'
import Crew from './views/Crew'
import Destination from './views/Destination'
import Technology from './views/Technology'

import '@/styles/main.css'

const routes = [
    {
        path: '/',
        name:'Home',
        component: Home
    },
    {
        path: '/destination',
        name:'Destination',
        component: Destination
    },
    {
        path: '/crew',
        name:'Crew',
        component: Crew
    },
    {
        path: '/technology',
        name:'Technology',
        component: Technology
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


createApp(App).use(router).mount('#app')
