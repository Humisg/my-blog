import { RouteRecordRaw } from 'vue-router'
import { HOME_URL} from '@/config/config'

const staticRouter: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: HOME_URL
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    }   
]

export default staticRouter