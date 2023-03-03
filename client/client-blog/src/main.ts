import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './routers/index'
import ElementPlus from 'element-plus'
import pinia from '@/stores/index'
import 'element-plus/dist/index.css'
import '@/styles/common.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 注册element所有的图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(router).use(ElementPlus).use(pinia).mount('#app')
