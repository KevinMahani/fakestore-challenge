<template>
  <div class="product-details-wrapper">
    <div v-if="error" class="error-message">Error retrieving new information</div>
    <div v-else-if="!product" class="loading-message">Loading ... </div>
    <div v-else class="product-details-card">
      <div class="product-image-container">
        <img :src="product.image" alt="product image" class="product-details-image" />
      </div>
      <div class="product-info">
        <h1 class="product-details-title">{{ product.title }}</h1>
        <p class="product-details-description">{{ product.description }}</p>
        <p class="product-details-price">${{ product.price }}</p>
        <button @click="addToCart(product)" class="add-to-cart-btn">
          <i class="fas fa-shopping-cart"></i>
          Add to cart
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
