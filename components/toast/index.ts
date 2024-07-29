import {useToastStore} from "~/stores/toast";


function toast(message: string) {
    const toastStore = useToastStore()

    toastStore.showToastMessage(message)
}