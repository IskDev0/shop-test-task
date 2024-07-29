import type {IProduct} from "~/types/IProduct";
import {useToastStore} from "~/stores/toast";

export const useFavoritesStore = defineStore('favorites', () => {

    const toastStore = useToastStore()

    const favorites = ref<IProduct[]>([])

    const addToFavorites = (product: IProduct): void => {
        if (!favorites.value.find(item => item.id === product.id)) {
            favorites.value.push(product)
        }
        toastStore.showToastMessage("Товар добавлен в избранное")
    }

    const removeFromFavorites = (product: IProduct): void => {
        favorites.value = favorites.value.filter(item => item.id !== product.id)
    }

    return {
        favorites,
        addToFavorites,
        removeFromFavorites
    }

})