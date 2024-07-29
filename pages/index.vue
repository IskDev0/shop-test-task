<script setup lang="ts">
const productsStore = useProductsStore()
const {getProducts} = productsStore
const {products} = storeToRefs(productsStore)

</script>

<template>
<ProductsList :products="products"/>
</template>