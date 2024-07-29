import products from "@/server/utils/products.json"

export default defineEventHandler(async (event) => {

    let {name, category} = getQuery(event)

    if (!name && !category) {
        return products
    }
    let productsList = [...products]

    if (name) {
        productsList = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
    }
    if (category) {
        productsList = products.filter(product => product.category === category)
    }

    return productsList
})