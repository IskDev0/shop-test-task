import type {ICartItem} from "~/types/ICartItem";

export const useOrdersStore = defineStore("orders", () => {

    const cartStore = useCartStore()

    const orders = ref([])

    const addOrder = (order:ICartItem | ICartItem[], total: number, date: number) => {
        orders.value.push({
            items: order,
            total,
            date
        })
        cartStore.cart = []
    }

    return {
        orders,
        addOrder
    }
}, {persist: true})