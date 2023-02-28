import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './modules/staticRouter'
import NProgress from 'nprogress'
import { GlobalStore } from '@/stores'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const globalStore = GlobalStore()
    NProgress.start()
    if (to.path === '/login') {
        return next()
    }
    if (!globalStore.token) {
        console.log('token不存在')
        return next({path: '/login', replace: true})
    }
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router