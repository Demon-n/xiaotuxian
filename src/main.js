import App from './App.vue'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import 'element-plus/dist/index.css'
//引入初始化样式文件
import '@/styles/common.scss'
import router from './router'
import { createPinia } from 'pinia'
//引入全局组插件
import { lazyPlugin } from '@/directives'
//引入懒加载指令插件并且注册
import { componentPlugin } from '@/components'


const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')



