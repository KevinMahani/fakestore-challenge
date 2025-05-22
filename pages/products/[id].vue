<template>
  <div class="product-details-wrapper">
    <div v-if="error" class="error-message">خطا در دریافت اطلاعات محصول</div>
    <div v-else-if="!product" class="loading-message">در حال بارگذاری...</div>
    <div v-else class="product-details-card">
      <div class="product-image-container">
        <img :src="product.image" alt="product image" class="product-details-image" />
      </div>
      <div class="product-info">
        <h1 class="product-details-title">{{ product.title }}</h1>
        <p class="product-details-description">{{ product.description }}</p>
        <p class="product-details-price">${{ product.price }}</p>
        <button @click="addToCart(product)" class="add-to-cart-btn">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
const addToCart = (product) => {
  cart.addToCart(product)
}

const route = useRoute()
const id = route.params.id
const { data: product, error } = await useFetch(`https://fakestoreapi.com/products/${id}`)
</script>
