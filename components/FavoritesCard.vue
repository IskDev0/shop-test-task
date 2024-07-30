<script setup lang="ts">
import type {IProduct} from "~/types/IProduct";
import formatPrice from "~/utils/formatPrice";
import {LucideHeart, LucideHeartOff, LucideShoppingCart} from "lucide-vue-next";
import {useCartStore} from "~/stores/cart";

defineProps<{
  favorite: IProduct
}>()

const {addToCart} = useCartStore()
const {removeFromFavorites} = useFavoritesStore()

const isHovered = ref<boolean>(false)
</script>

<template>
  <article class="flex flex-col items-start gap-2 bg-white rounded-lg">
    <div
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        class="relative w-full">
      <img class="w-full" :src="favorite.image" :alt="favorite.name">
      <div :class="{'hidden' : !isHovered}"
           class="absolute top-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-30 h-full w-full">
        <div class="flex items-center gap-8">
          <LucideHeart fill="#dc2626" @click="removeFromFavorites(favorite)" class="cursor-pointer text-red-600 hover"/>
          <LucideShoppingCart @click="addToCart(favorite)" class="cursor-pointer hover"/>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start gap-4 px-3 pb-4 shadow-md">
      <h3 class="text-xl font-bold">{{ favorite.name }}</h3>
      <p class="bg-blue-400 rounded-full px-2 text-white">{{ favorite.category }}</p>
      <p class="text-gray-500">{{ favorite.description }}</p>
      <button @click="addToCart(favorite)" class="self-end py-2 px-4 mt-4 bg-blue-500 text-white rounded-lg">{{ formatPrice(favorite.price) }} ₸</button>
    </div>
  </article>
</template>