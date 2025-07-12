<template>
  <label class="shop-label">Store</label>
  <nav class="contents">
    <ul class="header-links">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
      <li>
        <NuxtLink to="/cart"  class="relative flex items-center justify-center">
          Shoping Cart  
          <span v-if="cart.items.length > 0"
                class=" absolute -top-2 -right-3 bg-red-600 rounded-full text-xs px-2 text-white">
            {{ cart.items.length }}">

          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>
