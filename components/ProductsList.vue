<script setup lang="ts">
import type {IProduct} from "~/types/IProduct";

defineProps<{
  products: IProduct[]
}>()
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
    />
  </div>
</template>