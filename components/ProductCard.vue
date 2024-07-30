<script setup lang="ts">
import type {IProduct} from "~/types/IProduct";
import formatPrice from "../utils/formatPrice";
import {LucideHeart, LucideShoppingCart} from "lucide-vue-next";
import {useCartStore} from "~/stores/cart";

defineProps<{
  product: IProduct,
}>()

const {addToCart} = useCartStore()
const {addToFavorites, removeFromFavorites, isProductInFavorites} = useFavoritesStore()

const isHovered = ref<boolean>(false)
</script>

<template>
  <article class="flex flex-col items-start gap-2 bg-white rounded-lg">
    <div
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        class="relative w-full">
      <img class="w-full" :src="product.image" :alt="product.name">
      <div :class="{'hidden' : !isHovered}"
           class="absolute top-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-30 h-full w-full">
        <div v-if="!isProductInFavorites(product)" class="flex items-center gap-8">
          <LucideHeart @click="addToFavorites(product)" class="cursor-pointer hover"/>
          <LucideShoppingCart @click="addToCart(product)" class="cursor-pointer hover"/>
        </div>
        <div v-else class="flex items-center gap-8">
          <LucideHeart
              :fill="isProductInFavorites(product) ? '#dc2626' : ''"
              @click="removeFromFavorites(product)"
              :class="isProductInFavorites(product) ? 'text-red-600' : ''"
              class="cursor-pointer hover"/>
          <LucideShoppingCart @click="addToCart(product)" class="cursor-pointer hover"/>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start gap-4 px-3 pb-4 shadow-md">
      <h3 class="text-xl font-bold">{{ product.name }}</h3>
      <p class="bg-blue-400 rounded-full px-2 text-white">{{ product.category }}</p>
      <p class="text-gray-500">{{ product.description }}</p>
      <button @click="addToCart(product)" class="self-end py-2 px-4 mt-4 bg-blue-500 text-white rounded-lg">{{ formatPrice(product.price) }} ₸</button>
    </div>
  </article>
</template>