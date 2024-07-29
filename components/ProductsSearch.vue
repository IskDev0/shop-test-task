<script setup lang="ts">

const {searchProducts} = useProductsStore()

const searchQuery = ref<string>("")

async function searchProductsByName(): Promise<void> {
  await searchProducts(`name=${searchQuery.value}`)
  searchQuery.value = ""
}
</script>

<template>
  <form @submit.prevent="searchProductsByName" class="flex items-center pt-10">
    <input v-model="searchQuery" class="border py-2 px-4 rounded-l-full min-w-none w-full" type="text" placeholder="Поиск...">
    <input class="py-2 px-4 bg-blue-400 text-white rounded-r-full cursor-pointer" type="submit" value="Найти">
  </form>
</template>