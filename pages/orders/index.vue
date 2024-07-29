<script setup lang="ts">
import {useOrdersStore} from "~/stores/orders";

const {orders} = storeToRefs(useOrdersStore())
</script>

<template>
  <h1 class="text-3xl font-bold mb-10 mt-4">Заказы</h1>
  <div class="flex flex-col gap-4" v-if="orders.length > 0" v-auto-animate>
    <div class="border-2 rounded-lg p-4 bg-white" v-for="order in orders">
      <div
          class="grid grid-cols-5 items-center gap-4"
          :class="index % 2 === 0 ? 'border-b' : ''"
          v-for="(item, index) in order.items"
          :key="item.id">
        <img class="w-16 -16" :src="item.image" :alt="item.name">
        <p>{{ item.name }}</p>
        <p>{{ item.price }} ₸</p>
        <p>{{ item.quantity }}</p>
        <p>{{ formatPrice(item.price * item.quantity) }} ₸</p>
      </div>
      <div class="flex items-center justify-between gap-8">
        <span class="text-gray-500">{{formatDate(order.date)}}</span>
        <p class="text-right font-semibold text-2xl mt-8">{{ formatPrice(order.total) }} ₸</p>
      </div>
    </div>
  </div>
  <p v-else class="text-3xl font-bold text-center pt-10">Заказов нет</p>
</template>