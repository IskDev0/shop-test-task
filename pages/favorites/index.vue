<script setup lang="ts">
import {useFavoritesStore} from "~/stores/favorites";
import FavoritesList from "~/components/FavoritesList.vue";

const favoritesStore = useFavoritesStore()
const {favorites} = storeToRefs(favoritesStore)
</script>

<template>
  <h1 class="text-3xl font-bold mb-10 pt-4">Избранное</h1>
  <FavoritesList
  v-if="favorites.length > 0"
  :favorites="favorites"
  />
  <p v-else class="text-3xl font-bold text-center pt-10">Список пуст</p>
</template>