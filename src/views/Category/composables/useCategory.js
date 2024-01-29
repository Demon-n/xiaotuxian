//封装分类数据相关业务代码
import { getCategoryAPI } from '@/apis/catagory';
import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router';
import { useRoute } from 'vue-router';

export function useCategory() {
    const route = useRoute()
    const categoryData = ref({})
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
        console.log(categoryData.value)
    }
    onMounted(() => {
        getCategory()
    })
    //目标：路由参数变化的时候 可以把分类数据的接口重新发送
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}