import { defineStore } from "pinia"
import { getCategoryAPI } from '@/apis/layout'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {
    //导航列表的数据管理
    const categoryList = ref([])
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }
    return { categoryList, getCategory }
})