import { defineStore, createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const GlobalStore = defineStore({
    id: 'GlobalStore',
    state: () => ({
        token: '',
        userInfo: {},
        isLogin: false
        // isDark: false,
        // isLight: true
    }),
    getters: {},
    actions: {
        setToken(token: string) {
            this.token = token
        },
        setUserInfo(userInfo: object) {
            this.userInfo = userInfo
        }
    },
    persist: true
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia