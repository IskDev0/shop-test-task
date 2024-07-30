<script setup lang="ts">
import type {IProduct} from "~/types/IProduct";
import FavoritesCard from "~/components/FavoritesCard.vue";

defineProps<{
  favorites: IProduct[]
}>()
</script>

<template>
  <div v-auto-animate class="grid grid-cols-3 gap-8">
    <FavoritesCard
    v-for="favorite in favorites"
    :key="favorite.id"
    :favorite="favorite"/>
  </div>
</template>