import httpInstance from "@/utils/http";

//面包屑导航
export const getCategoryAPI = (id) => {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}