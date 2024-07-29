<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
<div class="fixed bottom-4 right-4 w-vw h-vh">
  <div class="shadow-lg rounded-lg bg-white max-w-sm py-4 px-6">
    <p class="font-semibold">{{message}}</p>
  </div>
</div>
</template>