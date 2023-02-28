import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './routers/index'
import ElementPlus from 'element-plus'
import pinia from '@/stores/index'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router).use(ElementPlus).use(pinia).mount('#app')
