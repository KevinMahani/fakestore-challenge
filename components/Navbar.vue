<template>
  <label class="shop-label">فروشگاه من</label>
  <nav class="contents">
    <ul class="header-links">
      <li><NuxtLink to="/">خانه</NuxtLink></li>
      <li><NuxtLink to="/products">محصولات</NuxtLink></li>
      <li>
        <NuxtLink to="/cart" class="relative">
          سبد خرید
          <span v-if="cart.items.length > 0"
                class="absolute -top-2 -right-3 bg-red-600 rounded-full text-xs px-2">
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
