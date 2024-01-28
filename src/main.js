import App from './App.vue'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import 'element-plus/dist/index.css'
//引入初始化样式文件
import '@/styles/common.scss'
import router from './router'
import { createPinia } from 'pinia'
import { lazyPlugin } from '@/directives'


const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
app.use(lazyPlugin)


