<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

//触发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 路由缓存解决方案一:$route.fullPath -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>