export const useToastStore = defineStore("toast", () => {
    const showToast = ref<boolean>(false)

    const toastMessage = ref<string>("")

    const showToastMessage = (message: string) => {
        toastMessage.value = message
        showToast.value = true
        setTimeout(() => {
            showToast.value = false
        }, 3000)
    }

    return {showToast, toastMessage, showToastMessage}
})