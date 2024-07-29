<script setup lang="ts">

const {searchProducts} = useProductsStore()

const searchQuery = ref<string>("")
</script>

<template>
  <form @submit.prevent="searchProducts(searchQuery)" class="flex items-center pt-10">
    <input class="border py-2 px-4 rounded-l-full min-w-none w-full" type="text" placeholder="Поиск...">
    <input class="py-2 px-4 bg-blue-400 text-white rounded-r-full cursor-pointer" type="submit" value="Найти">
  </form>
</template>