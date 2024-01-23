import App from './App.vue'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import 'element-plus/dist/index.css'
//引入初始化样式文件
import '@/styles/common.scss'
import router from './router'

const app = createApp(App)
//测试接口函数
import { getCategory } from './apis/testAPI'
getCategory().then(res => {
    console.log(res)
})
app.use(router)
app.use(ElementPlus)
app.mount('#app')