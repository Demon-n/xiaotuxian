import { computed, ref, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
    let timer = null

    //响应式的数据
    const time = ref(0)
    //格式化时间为 XX分XX秒
    const formatTime = computed(() =>
        dayjs.unix(time.value).format('mm分ss秒'))
    const start = (currentTime) => {
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        }, 1000)
    }
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start
    }
}