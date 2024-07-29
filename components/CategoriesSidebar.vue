<script setup lang="ts">
import type {ICategory} from "~/types/ICategory";

defineProps<{
  categories: ICategory[]
}>()

const {selectCategory, searchProducts} = useProductsStore()
const {selectedCategory} = storeToRefs(useProductsStore())

async function getAllProducts() {
  selectedCategory.value.name = "Все категории"
  await searchProducts(`category=`)
}
</script>

<template>
  <div class="flex flex-col items-start gap-3 bg-white rounded-lg p-4">
    <button @click="getAllProducts" class="font-semibold">Все категории</button>
    <button
        class="font-semibold"
        @click="selectCategory(category)"
        v-for="category in categories"
        :key="category.id">
      {{ category.name }}
    </button>
  </div>
</template>