import categories from "@/server/utils/categories.json"

export default defineEventHandler(async (event) => {

    return categories
})