import App from './App.vue'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import 'element-plus/dist/index.css'
//引入初始化样式文件
import '@/styles/common.scss'
import router from './router'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')

//定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        //el:指定绑定的哪个元素 img
        //binding：binding.value 指令等于号后面绑定的表达式的值  图片url
        console.log(el, binding.value)
        useIntersectionObserver(el, ([{ isIntersecting }]) => {
            console.log(isIntersecting)
            if (isIntersecting) {
                //进入视口区域
                el.src = binding.value
            }
        })
    }
})