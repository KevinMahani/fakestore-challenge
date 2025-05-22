<template>
<h1 class="cart-title">سبد خرید</h1>
  <div class="cart-wrapper">
    <div v-if="cart.items.length === 0" class="cart-empty">سبد خرید خالی است.</div> 
    <ul v-else class="cart-list">
      <li v-for="item in cart.items" :key="item.id" class="cart-item">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-quantity">تعداد: {{ item.quantity }}</p>
          <p class="item-total">قیمت کل: ${{ item.quantity * item.price }}</p>
        </div>
        
        <button @click="cart.removeFromCart(item.id)" class="remove-btn">
          حذف
        </button>
        </li>
      
    </ul>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>