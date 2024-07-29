import type {IProduct} from "~/types/IProduct";

export const useFavoritesStore = defineStore('favorites', () => {
    const favorites = ref<IProduct[]>([])

    const addToFavorites = (product: IProduct): void => {
        if (!favorites.value.find(item => item.id === product.id)) {
            favorites.value.push(product)
        }
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