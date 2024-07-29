<script setup lang="ts">
import {Trash, Minus, Plus} from "lucide-vue-next";

const cartStore = useCartStore()
const {cart} = storeToRefs(cartStore)
const {incrementQuantity, decrementQuantity, removeFromCart} = cartStore

const total = computed(() => {
  return cart.value.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
})
</script>

<template>
  <h1 class="text-3xl font-bold mb-10 mt-4">Корзина</h1>
  <div v-if="cart.length > 0">
    <div class="grid grid-cols-6 items-center gap-4 text-gray-500 mb-2">
      <p>Фото</p>
      <p>Название</p>
      <p>Цена</p>
      <p>Количество</p>
      <p>Сумма</p>
      <p></p>
    </div>
    <div v-auto-animate>
      <div
          class="grid grid-cols-6 items-center gap-4"
          :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'"
          v-for="(item, index) in cart"
          :key="item.id">
        <img class="w-16 -16" :src="item.image" alt="">
        <p class="font-semibold">{{ item.name }}</p>
        <p>{{ formatPrice(item.price) }} ₸</p>
        <div class="flex items-center gap-3">
          <button @click="decrementQuantity(item)"
                  class="text-xl font-bold bg-blue-400 rounded-full text-white cursor-pointer">
            <Minus/>
          </button>
          <p>{{ item.quantity }}</p>
          <button @click="incrementQuantity(item)"
                  class="text-xl font-bold bg-blue-400 rounded-full text-white cursor-pointer">
            <Plus/>
          </button>
        </div>
        <p>{{ formatPrice(item.price * item.quantity) }} ₸</p>
        <button @click="removeFromCart(item)" class="flex justify-end mr-4">
          <Trash/>
        </button>
      </div>
    </div>
    <div class="flex items-center justify-end gap-8">
      <p class="text-right font-semibold text-2xl mt-8">К оплате {{ formatPrice(total) }} ₸</p>
      <button class="bg-blue-400 rounded-lg text-white py-2 px-4 mt-8">Оплатить</button>
    </div>
  </div>
  <p v-else class="text-3xl font-bold text-center pt-10">Корзина пуста</p>
</template>