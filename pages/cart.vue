<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">سبد خرید</h1>
    <div v-if="cart.items.length === 0">سبد خرید خالی است.</div>
    <ul v-else>
      <li v-for="item in cart.items" :key="item.id" class="mb-4 border-b pb-2">
        <p class="font-semibold">{{ item.title }}</p>
        <p>تعداد: {{ item.quantity }}</p>
        <p>قیمت کل: ${{ item.quantity * item.price }}</p>
        <button @click="cart.removeFromCart(item.id)" class="text-red-500 text-sm mt-1">حذف</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>
