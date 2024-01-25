<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
</template>
<script setup >
import HomeBanner from '@/views/Home/HomeBanner.vue'
import HomeCategory from '@/views/Home/HomeCategory.vue'
import HomeHot from '@/views/Home/HomeHot.vue'
import HomeNew from '@/views/Home/HomeNew.vue'
import HomeProduct from '@/views/Home/HomeProduct.vue'
</script>