<script setup lang="ts">
import type {ICategory} from "~/types/ICategory";

const {selectCategory} = useProductsStore()

defineProps<{
  categories: ICategory[]
}>()
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <button
        class="font-semibold"
        @click="selectCategory(category)"
        v-for="category in categories"
        :key="category.id">
      {{ category.name }}
    </button>
  </div>
</template>