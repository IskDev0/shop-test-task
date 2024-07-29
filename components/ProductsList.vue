<script setup lang="ts">
import type {IProduct} from "~/types/IProduct";

interface Props {
  products: IProduct[],
  isFavorites?: boolean
}

withDefaults(defineProps<Props>(), {
  isFavorites: false
})
</script>

<template>
  <div v-auto-animate class="grid grid-cols-3 gap-8">
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :is-favorites="isFavorites"
    />
  </div>
</template>