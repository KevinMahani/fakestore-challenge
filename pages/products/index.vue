<template>
  <div class="page-wrapper">
    <h1 class="prod-label">محصولات</h1>
    <div v-if="error" class="text-error">خطا در دریافت محصولات</div>
    <div v-else-if="!products">در حال بارگذاری...</div>
    <div v-else class="product-grid">
      <NuxtLink
        v-for="product in products"
        :key="product.id"
        :to="`/products/${product.id}`"
        class="product-card"
      >
        <div class="product-image-wrapper">
          <img :src="product.image" alt="" class="product-image" />
        </div>
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">${{ product.price }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: products, error } = await useProducts()
</script>
