import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
    //1.定义管理用户数据的state
    const userInfo = ref({})
    //2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        let res = await loginAPI({ account, password })
        userInfo.value = res.result
    }
    //3.退出登录时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
    }
    //4.以对象的格式把state和action return
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
    {
        persist: true
    }
)