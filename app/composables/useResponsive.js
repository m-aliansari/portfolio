export function useResponsive() {
    const windowWidth = ref(0)
    const windowHeight = ref(0)

    const isMobile = computed(() => {
        return windowWidth.value < 768
    })

    const isTablet = computed(() => {
        return windowWidth.value >= 768 && windowWidth.value < 1024
    }
    )

    const isDesktop = computed(() => {
        return windowWidth.value >= 1024
    })

    const isLargeScreen = computed(() => {
        return windowWidth.value >= 1280
    })

    function updateDimensions() {
        windowWidth.value = window.innerWidth
        windowHeight.value = window.innerHeight
    }

    onMounted(() => {
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', updateDimensions)
    })

    return { windowHeight, windowWidth, isDesktop, isMobile, isTablet, isLargeScreen }
}
