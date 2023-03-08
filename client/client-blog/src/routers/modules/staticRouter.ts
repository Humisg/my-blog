import { RouteRecordRaw } from 'vue-router'
import { HOME_URL} from '@/config/config'

const staticRouter: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: HOME_URL
    },
    {
        path: '/layout',
        name: 'layout',
        component: () => import('@/layouts/index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/index.vue')
            },
            {
                path: '/blogs',
                name: 'blogs',
                component: () => import('@/views/blogs/index.vue')
            },
            {
                path: '/blogDetail/:id',
                name: 'blogDetail',
                component: () => import('@/views/blogDetail/index.vue')
            },
            {
                path: '/archive',
                name: 'archive',
                component: () => import('@/views/archive/index.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/about/index.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    }
]

export default staticRouter