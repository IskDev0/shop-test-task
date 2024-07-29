import type {ICartItem} from "~/types/ICartItem";
import {useToastStore} from "~/stores/toast";

export const useCartStore = defineStore('cart', () => {

    const toastStore = useToastStore()

    const cart = ref<ICartItem[]>([])

    const addToCart = (product: ICartItem): void => {

        const productIndex = cart.value.findIndex(item => item.id === product.id)

        if (cart.value.find(item => item.id === product.id)){
            cart.value[productIndex].quantity++
        }else {
            cart.value.push({
                ...product,
                quantity: 1
            })
        }
        toastStore.showToastMessage("Товар добавлен")
    }

    const removeFromCart = (product: ICartItem): void => {
        cart.value = cart.value.filter(item => item.id !== product.id)
    }

    const incrementQuantity = (product: ICartItem): void => {
        const productIndex = cart.value.findIndex(item => item.id === product.id)
        cart.value[productIndex].quantity++
    }

    const decrementQuantity = (product: ICartItem): void => {
        if (product.quantity > 1) {
            const productIndex = cart.value.findIndex(item => item.id === product.id)
            cart.value[productIndex].quantity--
        }else {
            removeFromCart(product)
        }
    }

    return {
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity
    }

})