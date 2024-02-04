import App from './App.vue'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import 'element-plus/dist/index.css'
//引入初始化样式文件
import '@/styles/common.scss'
import router from './router'
//引入pinia
import { createPinia } from 'pinia'
//引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'
//引入全局组插件
import { componentPlugin } from '@/components'
import piniapluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniapluginPersistedstate)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')



