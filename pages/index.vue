<script setup lang="ts">
const productsStore = useProductsStore()
const {getProducts, getCategories} = productsStore
const {products, filteredProducts, categories, selectedCategory} = storeToRefs(productsStore)

const sortType = ref<string>("all")

function sortProducts(): void {
  if (sortType.value === "price-asc") {
    filteredProducts.value.sort((a, b) => a.price - b.price)
  } else if (sortType.value === "price-desc") {
    filteredProducts.value.sort((a, b) => b.price - a.price)
  } else if (sortType.value === "orders-asc") {
    filteredProducts.value.sort((a, b) => a.orders - b.orders)
  } else if (sortType.value === "orders-desc") {
    filteredProducts.value.sort((a, b) => b.orders - a.orders)
  } else {
    filteredProducts.value = products.value
  }
}

onMounted(() => {
  getProducts()
  getCategories()
})
</script>

<template>
  <ProductsSearch/>
  <div class="flex items-center justify-between mt-6">
    <span>
      <span class="font-semibold">Всего:</span> {{ products.length }} товаров
    </span>
    <p class="text-xl font-bold">{{ selectedCategory.name }}</p>
    <div class="flex items-center gap-4">
      <p>Сортировать по:</p>
      <select @change="sortProducts" class="border py-2 px-4 rounded-lg" v-model="sortType">
        <option value="all">Все</option>
        <option value="price-desc">Цена (от большего к меньшему)</option>
        <option value="price-asc">Цена (от меньшего к большему)</option>
        <option value="orders-desc">Заказы (от большего к меньшему)</option>
        <option value="orders-asc">Заказы (от меньшего к большему)</option>
      </select>
    </div>
  </div>
  <div class="flex justify-between pt-10 gap-10">
    <div class="w-1/4">
      <CategoriesSidebar :categories="categories"/>
    </div>
    <div class="w-3/4">
      <ProductsList v-if="products.length > 0" :products="filteredProducts"/>
      <div v-else>
        <p class="font-bold text-2xl">Товары не найдены</p>
      </div>
    </div>
  </div>
</template>