<script setup lang="ts">
import {LucideShoppingCart, Heart} from "lucide-vue-next";

const {cart} = storeToRefs(useCartStore())
const {favorites} = useFavoritesStore()
</script>

<template>
  <header class="fixed top-0 left-0 right-0 shadow-lg z-10 bg-white">
    <div class="container mx-auto flex items-center justify-between py-4">
      <NuxtLink to="/">
        <img src="/logo.svg" alt="logo">
      </NuxtLink>
      <div class="flex items-center gap-4">
        <NuxtLink to="/favorites">
           <div class="flex items-center gap-2">
             <span class="font-bold h-8 w-8 bg-pink-400 rounded-full flex items-center justify-center text-white">{{favorites.length}}</span>
             <Heart/>
           </div>
        </NuxtLink>
        <NuxtLink to="/cart">
          <div class="flex items-center gap-2">
            <span class="font-bold h-8 w-8 bg-blue-400 rounded-full flex items-center justify-center text-white">{{cart.length}}</span>
            <LucideShoppingCart/>
          </div>
        </NuxtLink>
        <NuxtLink to="/orders">Заказы</NuxtLink>
      </div>
    </div>
  </header>
</template>