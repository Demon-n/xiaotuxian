//axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const request = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

//请求拦截器
request.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

//响应拦截器
request.interceptors.response.use(res => res.data, e => {
    ElMessage({
        type: 'warning',
        message: e.response.data.msg
    })
    return Promise.reject(e)
})

export default request 