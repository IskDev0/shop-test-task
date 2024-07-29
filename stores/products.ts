import type {IProduct} from "~/types/IProduct";
import type {ICategory} from "~/types/ICategory";

export const useProductsStore = defineStore('products', () => {

    const products = ref<IProduct[]>([])
    const filteredProducts = ref<IProduct[]>(products.value)
    const categories = ref<ICategory[]>([])
    const selectedCategory = ref<ICategory>({ id: 0, name: "Все катеории"})

    const getProducts = async (): Promise<void> => {
        try {
            products.value = await $fetch("/api/products")
            filteredProducts.value = products.value
        } catch (error) {
            console.error(error)
        }
    }

    const searchProducts = async (query: string): Promise<void> => {
        try {
            products.value = await $fetch(`/api/products?${query}`)
            filteredProducts.value = products.value
        } catch (error) {
            console.error(error)
        }
    }

    const getCategories = async (): Promise<void> => {
        try {
            categories.value = await $fetch("/api/categories")
        } catch (error) {
            console.error(error)
        }
    }

    const selectCategory = async (category: ICategory): void => {
        selectedCategory.value = category
        await searchProducts(`category=${selectedCategory.value.name}`)
    }

    return {
        products,
        filteredProducts,
        categories,
        selectedCategory,
        getProducts,
        searchProducts,
        getCategories,
        selectCategory
    }
})