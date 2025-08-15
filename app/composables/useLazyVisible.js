export function useLazyVisible(callback, rootMargin = '100px') {
    const el = ref(null)
    const isVisible = ref(false)

    onMounted(() => {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, obs) => {
                if (entries[0].isIntersecting) {
                    isVisible.value = true
                    callback?.()
                    obs.disconnect()
                }
            }, { rootMargin })
            if (el.value) observer.observe(el.value)
        } else {
            isVisible.value = true
            callback?.()
        }
    })

    return { el, isVisible }
}