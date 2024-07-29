<script setup lang="ts">

import Cart from "~/components/icons/Cart.vue";
</script>

<template>
  <header class="fixed top-0 left-0 right-0 shadow-lg">
    <div class="container mx-auto flex items-center justify-between py-4">
      <NuxtLink to="/">
        <img src="/logo.svg" alt="logo">
      </NuxtLink>
      <NuxtLink to="/cart">
        <div class="flex items-center gap-2">
          <span class="font-bold">10</span>
          <Cart/>
        </div>
      </NuxtLink>
    </div>
  </header>
</template>