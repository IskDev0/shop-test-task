<script setup lang="ts">
const productsStore = useProductsStore()
const {getProducts} = productsStore
const {products, categories} = storeToRefs(productsStore)

</script>

<template>
<div class="flex justify-between pt-10">
  <div class="w-1/3">
    <CategoriesSidebar :categories="categories"/>
  </div>
  <div class="w-2/3">
    <ProductsList :products="products"/>
  </div>
</div>
</template>