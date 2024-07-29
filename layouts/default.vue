<template>
  <TheHeader/>
  <main class="bg-gray-100 h-full min-h-screen">
    <div class="container mx-auto mt-20">
      <slot/>
    </div>
  </main>
  <Toast v-if="showToast" :message="toastMessage"/>
</template>
<script setup lang="ts">
import Toast from "~/components/toast/Toast.vue";
import {useToastStore} from "~/stores/toast";

const {showToast, toastMessage} = storeToRefs(useToastStore())
</script>