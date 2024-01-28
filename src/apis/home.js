import httpInstance from "@/utils/http";

export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}

//新鲜好物
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}

//人气推荐
export const getHotAPI = () => {
    return httpInstance({
        url: '/home/hot'
    })
}

//人气推荐
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}